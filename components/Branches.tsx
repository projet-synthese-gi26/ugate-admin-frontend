'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Building2, MapPin, Phone, Plus, Edit3, Image as ImageIcon,
    Loader2, Search, X, Save
} from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Badge } from './ui/Badge';
import { useAuth } from '@/lib/contexts/AuthContext';
import {
    getBranches,
    createBranch,
    updateBranch,
    Branch,
} from '@/lib/services/branches.service';
import { motion, AnimatePresence } from 'framer-motion';
import MapPicker, { BranchCoordinates } from '@/components/maps/MapPicker';

/* =========================
   Types & constants
   ========================= */

type BranchFormData = {
    name: string;
    location: string;
    contact: string;
    latitude: number | null;
    longitude: number | null;
};

const INITIAL_FORM_DATA: BranchFormData = {
    name: '',
    location: '',
    contact: '',
    latitude: null,
    longitude: null,
};

/* =========================
   Helpers
   ========================= */

function hasCoordinates(branch?: Partial<Branch> | null): boolean {
    return (
        typeof branch?.latitude === 'number' &&
        typeof branch?.longitude === 'number'
    );
}

/* =========================
   Component
   ========================= */

export const Branches: React.FC = () => {
    const { syndicateStatus } = useAuth();

    const [branches, setBranches] = useState<Branch[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const[isActionLoading, setIsActionLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingBranch, setEditingBranch] = useState<Branch | null>(null);

    // Form
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [bannerFile, setBannerFile] = useState<File | null>(null);
    const [bannerPreview, setBannerPreview] = useState<string | null>(null);
    const [formData, setFormData] = useState<BranchFormData>(INITIAL_FORM_DATA);

    /* =========================
       Data loading
       ========================= */

    const fetchBranches = async () => {
        if (!syndicateStatus?.syndicateId) return;

        setIsLoading(true);
        try {
            const data = await getBranches(syndicateStatus.syndicateId);
            setBranches(data);
        } catch (e) {
            console.error(e);
            alert('Impossible de charger les antennes.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBranches();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [syndicateStatus?.syndicateId]);

    /* =========================
       Handlers
       ========================= */

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setBannerFile(file);
        const reader = new FileReader();
        reader.onloadend = () => setBannerPreview(reader.result as string);
        reader.readAsDataURL(file);
    };

    const handlePositionChange = (coords: BranchCoordinates) => {
        setFormData((prev) => ({
            ...prev,
            latitude: coords.latitude,
            longitude: coords.longitude,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!syndicateStatus?.syndicateId) return;

        setIsActionLoading(true);
        try {
            if (editingBranch) {
                await updateBranch(editingBranch.id, {
                    name: formData.name,
                    location: formData.location,
                    contact: formData.contact,
                    latitude: formData.latitude,
                    longitude: formData.longitude,
                });
            } else {
                await createBranch(
                    syndicateStatus.syndicateId,
                    {
                        name: formData.name,
                        location: formData.location,
                        contact: formData.contact,
                        latitude: formData.latitude,
                        longitude: formData.longitude,
                    },
                    bannerFile ?? undefined
                );
            }

            await fetchBranches();
            closeModal();
        } catch (e) {
            console.error(e);
            alert('Une erreur est survenue lors de la sauvegarde.');
        } finally {
            setIsActionLoading(false);
        }
    };

    const openModal = (branch?: Branch) => {
        if (branch) {
            setEditingBranch(branch);
            setFormData({
                name: branch.name,
                location: branch.location,
                contact: branch.contact,
                latitude: typeof branch.latitude === 'number' ? branch.latitude : null,
                longitude: typeof branch.longitude === 'number' ? branch.longitude : null,
            });
            setBannerPreview(branch.bannerUrl ?? null);
        } else {
            setEditingBranch(null);
            setFormData(INITIAL_FORM_DATA);
            setBannerPreview(null);
        }

        setBannerFile(null);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingBranch(null);
        setBannerFile(null);
        setBannerPreview(null);
        setFormData(INITIAL_FORM_DATA);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const filteredBranches = branches.filter(
        (b) =>
            b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            b.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            b.contact.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const geolocatedCount = branches.filter((b) => hasCoordinates(b)).length;

    /* =========================
       Render
       ========================= */

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* --- HEADER --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-[#172554] tracking-tight">Mes Antennes</h1>
                    <p className="text-slate-500 mt-1 flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        Gérez les représentations locales de votre syndicat
                    </p>
                </div>
                <Button
                    onClick={() => openModal()}
                    leftIcon={Plus}
                    className="bg-[#172554] text-white shadow-lg shadow-blue-900/20"
                >
                    Nouvelle Antenne
                </Button>
            </div>

            {/* --- STATS & RECHERCHE --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 grid grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-blue-50 text-[#2563EB] rounded-xl"><Building2 className="w-6 h-6" /></div>
                        <div>
                            <p className="text-sm text-slate-500 font-medium">Total Antennes</p>
                            <h3 className="text-2xl font-bold text-[#172554]">{branches.length}</h3>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><MapPin className="w-6 h-6" /></div>
                        <div>
                            <p className="text-sm text-slate-500 font-medium">Géolocalisées</p>
                            <h3 className="text-2xl font-bold text-[#172554]">{geolocatedCount}</h3>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Rechercher une antenne..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#172554]/10 outline-none transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* --- GRILLE DES CARTES --- */}
            {isLoading ? (
                <div className="flex justify-center py-24"><Loader2 className="w-10 h-10 text-[#172554] animate-spin" /></div>
            ) : filteredBranches.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                        <Building2 className="w-8 h-8 text-slate-300" />
                    </div>
                    <h3 className="text-lg font-bold text-[#172554]">Aucune antenne trouvée</h3>
                    <p className="text-slate-500 mb-6">Commencez par ajouter votre première représentation locale.</p>
                    <Button onClick={() => openModal()}>Ajouter une antenne</Button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredBranches.map((branch) => (
                            <motion.div
                                key={branch.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col relative"
                            >
                                {/* Image / Bannière */}
                                <div className="h-32 bg-slate-100 relative overflow-hidden">
                                    {branch.bannerUrl ? (
                                        <img src={branch.bannerUrl} alt={branch.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#172554] to-[#2563EB] opacity-10" />
                                    )}
                                    {!branch.bannerUrl && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Building2 className="w-12 h-12 text-[#172554]/20" />
                                        </div>
                                    )}

                                    <div className="absolute top-3 left-3">
                                        {hasCoordinates(branch) ? (
                                            <Badge className="bg-emerald-500/90 text-white backdrop-blur-sm border-0">
                                                Géolocalisée
                                            </Badge>
                                        ) : (
                                            <Badge className="bg-slate-800/80 text-white backdrop-blur-sm border-0">
                                                Position manquante
                                            </Badge>
                                        )}
                                    </div>

                                    {/* Action Hover Éditer */}
                                    <button
                                        onClick={() => openModal(branch)}
                                        className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm text-[#172554] rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                                        title="Modifier"
                                    >
                                        <Edit3 className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Contenu */}
                                <div className="p-5 flex-1 flex flex-col">
                                    <h3 className="font-bold text-lg text-slate-900 mb-4 line-clamp-1 group-hover:text-[#2563EB] transition-colors">{branch.name}</h3>

                                    <div className="space-y-3 mb-6 flex-1">
                                        <div className="flex items-start gap-3 text-sm text-slate-600">
                                            <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                                            <span className="line-clamp-2 font-medium">{branch.location || "Non renseigné"}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-slate-600">
                                            <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
                                            <span className="font-medium">{branch.contact || "Non renseigné"}</span>
                                        </div>
                                    </div>

                                    {/* Footer Carte */}
                                    <div className="pt-4 border-t border-slate-100">
                                        <Button
                                            variant="secondary"
                                            className="w-full text-sm border-slate-200"
                                            onClick={() => openModal(branch)}
                                        >
                                            Gérer l'antenne
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}

            {/* --- MODALE --- */}
            <AnimatePresence>
                {isModalOpen && (
                    // ✅ AJOUT IMPORTANT : z-50 pour que la modale couvre toute la page !
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Header Modale Collant */}
                            <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50 sticky top-0 z-10">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-100 text-[#2563EB] rounded-xl">
                                        <Building2 className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#172554]">
                                        {editingBranch ? 'Modifier l\'antenne' : 'Créer une antenne'}
                                    </h3>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Contenu de la Modale Scrollable */}
                            <div className="p-6 overflow-y-auto custom-scrollbar">
                                <form id="branchForm" onSubmit={handleSubmit} className="space-y-8">

                                    {/* Upload Bannière */}
                                    <div>
                                        <label className="text-sm font-bold text-[#172554] block mb-3">Photo / Bannière de l'antenne</label>
                                        <div
                                            onClick={() => fileInputRef.current?.click()}
                                            className={`w-full h-40 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center relative overflow-hidden transition-all group cursor-pointer ${
                                                bannerPreview ? 'border-transparent' : 'border-slate-300 hover:border-[#2563EB] bg-slate-50 hover:bg-blue-50/50'
                                            }`}
                                        >
                                            {bannerPreview ? (
                                                <>
                                                    <img src={bannerPreview} alt="Preview" className="w-full h-full object-cover" />
                                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <span className="text-white font-medium flex items-center gap-2 px-4 py-2 bg-black/50 rounded-lg backdrop-blur-sm">
                                                            <Edit3 className="w-4 h-4"/> Changer d'image
                                                        </span>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="text-center text-slate-500 group-hover:text-[#2563EB]">
                                                    <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                                                    <p className="text-sm font-medium">Cliquez pour uploader une image</p>
                                                    <p className="text-xs opacity-70 mt-1">JPG, PNG (max. 5MB)</p>
                                                </div>
                                            )}
                                            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />
                                        </div>
                                    </div>

                                    {/* Grille Formulaire */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        <div className="space-y-6">
                                            <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-2">Informations Générales</h4>
                                            <Input
                                                label="Nom de l'antenne *"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Ex: Agence de Douala"
                                                required
                                            />
                                            <Input
                                                label="Ville / Quartier *"
                                                icon={MapPin}
                                                value={formData.location}
                                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                                placeholder="Ex: Douala, Akwa"
                                                required
                                            />
                                            <Input
                                                label="Contact (Téléphone / Email) *"
                                                icon={Phone}
                                                value={formData.contact}
                                                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                                placeholder="Ex: +237 600 000 000"
                                                required
                                            />
                                        </div>

                                        {/* Géolocalisation */}
                                        <div className="space-y-6">
                                            <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                                                <h4 className="font-bold text-slate-900">Position GPS</h4>
                                                <Badge className={hasCoordinates(formData) ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}>
                                                    {hasCoordinates(formData) ? "Position définie" : "Non définie"}
                                                </Badge>
                                            </div>
                                            <div className="relative rounded-2xl overflow-hidden border border-slate-200">
                                                <MapPicker
                                                    value={
                                                        formData.latitude !== null && formData.longitude !== null
                                                            ? { latitude: formData.latitude, longitude: formData.longitude }
                                                            : null
                                                    }
                                                    onChange={handlePositionChange}
                                                    heightClassName="h-[280px]"
                                                />
                                            </div>
                                            <p className="text-xs text-slate-500 mt-2">Cliquez sur la carte pour définir ou modifier l'emplacement précis de l'antenne.</p>
                                        </div>
                                    </div>

                                </form>
                            </div>

                            {/* Footer Modale Collant */}
                            <div className="px-6 py-4 border-t border-slate-100 bg-white flex justify-end gap-3 sticky bottom-0 z-10 rounded-b-3xl">
                                <Button variant="secondary" onClick={closeModal} disabled={isActionLoading}>
                                    Annuler
                                </Button>
                                {/* On utilise form="branchForm" pour déclencher la soumission HTML depuis l'extérieur de la balise <form> */}
                                <Button
                                    type="submit"
                                    form="branchForm"
                                    className="bg-[#172554] text-white min-w-[140px] shadow-lg shadow-blue-900/20"
                                    isLoading={isActionLoading}
                                    leftIcon={Save}
                                >
                                    {editingBranch ? 'Enregistrer' : 'Créer l\'antenne'}
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};