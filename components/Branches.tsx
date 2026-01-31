'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Building2, MapPin, Phone, Plus, Edit3, Image as ImageIcon,
    Upload, Loader2, Search, X, CheckCircle2
} from 'lucide-react';
import { Button } from './ui/Button';
import { Card, CardContent } from './ui/Card';
import { Input } from './ui/Input';
import { useAuth } from '@/lib/contexts/AuthContext';
import { getBranches, createBranch, updateBranch, Branch } from '@/lib/services/branches.service';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const Branches: React.FC = () => {
    const { syndicateStatus } = useAuth();

    const [branches, setBranches] = useState<Branch[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isActionLoading, setIsActionLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingBranch, setEditingBranch] = useState<Branch | null>(null);

    // Form State
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [bannerFile, setBannerFile] = useState<File | null>(null);
    const [bannerPreview, setBannerPreview] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        contact: ''
    });

    const fetchBranches = async () => {
        if (!syndicateStatus?.syndicateId) return;
        setIsLoading(true);
        try {
            const data = await getBranches(syndicateStatus.syndicateId);
            setBranches(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBranches();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [syndicateStatus?.syndicateId]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setBannerFile(file);
            const reader = new FileReader();
            reader.onloadend = () => setBannerPreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!syndicateStatus?.syndicateId) return;

        setIsActionLoading(true);
        try {
            if (editingBranch) {
                // Update (Note: l'API actuelle dans le prompt ne semble pas gérer l'update de l'image via PATCH simple, à vérifier)
                await updateBranch(editingBranch.id, formData);
            } else {
                // Create
                await createBranch(syndicateStatus.syndicateId, formData, bannerFile || undefined);
            }

            await fetchBranches();
            closeModal();
        } catch (error) {
            console.error(error);
            alert("Une erreur est survenue.");
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
                contact: branch.contact
            });
            setBannerPreview(branch.bannerUrl || null);
        } else {
            setEditingBranch(null);
            setFormData({ name: '', location: '', contact: '' });
            setBannerPreview(null);
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingBranch(null);
        setBannerFile(null);
        setBannerPreview(null);
    };

    const filteredBranches = branches.filter(b =>
        b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200/60 pb-6">
                <div>
                    <h1 className="text-3xl font-bold text-[#172554] tracking-tight">Mes Antennes</h1>
                    <p className="text-slate-500 mt-2 text-lg">
                        Créez et gérez les antennes locales de votre syndicat.
                    </p>
                </div>
                <Button onClick={() => openModal()} leftIcon={Plus} className="bg-[#172554] text-white shadow-lg shadow-blue-900/20">
                    Nouvelle Antenne
                </Button>
            </div>

            {/* Stats Rapides */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="premium-card p-6 bg-gradient-to-br from-[#172554] to-[#1e3a8a] text-white">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/10 rounded-xl">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-blue-100 text-sm font-medium">Total Antennes</p>
                            <h3 className="text-3xl font-bold">{branches.length}</h3>
                        </div>
                    </div>
                </div>
                {/* Placeholder stats */}
                <div className="premium-card p-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-slate-500 text-sm font-medium">Actives</p>
                            <h3 className="text-3xl font-bold text-slate-900">{branches.length}</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                    type="text"
                    placeholder="Rechercher une antenne..."
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#172554]/10 focus:border-[#172554] outline-none transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Grid */}
            {isLoading ? (
                <div className="flex justify-center py-20"><Loader2 className="w-10 h-10 text-[#172554] animate-spin" /></div>
            ) : filteredBranches.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Building2 className="w-8 h-8 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-bold text-[#172554]">Aucune antenne configurée</h3>
                    <p className="text-slate-500 mb-6">Vous devez créer au moins une antenne pour gérer vos membres.</p>
                    <Button onClick={() => openModal()}>Créer ma première antenne</Button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBranches.map((branch) => (
                        <motion.div
                            key={branch.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="premium-card group overflow-hidden flex flex-col h-full"
                        >
                            <div className="relative h-40 bg-slate-100">
                                {branch.bannerUrl ? (
                                    <Image src={branch.bannerUrl} alt={branch.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                ) : (
                                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-slate-100 to-slate-200">
                                        <Building2 className="w-12 h-12 text-slate-300" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Button variant="secondary" size="sm" onClick={() => openModal(branch)} leftIcon={Edit3}>
                                        Modifier
                                    </Button>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-[#172554] mb-2">{branch.name}</h3>
                                <div className="space-y-2 mb-4 flex-1">
                                    <div className="flex items-center text-slate-500 text-sm">
                                        <MapPin className="w-4 h-4 mr-2 text-[#2563EB]" />
                                        {branch.location}
                                    </div>
                                    <div className="flex items-center text-slate-500 text-sm">
                                        <Phone className="w-4 h-4 mr-2 text-[#2563EB]" />
                                        {branch.contact}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/40 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
                        >
                            <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
                                <h3 className="text-xl font-bold text-[#172554]">
                                    {editingBranch ? 'Modifier l\'antenne' : 'Nouvelle Antenne'}
                                </h3>
                                <button onClick={closeModal}><X className="w-5 h-5 text-slate-400 hover:text-slate-600" /></button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                                {/* Banner Upload */}
                                <div
                                    onClick={() => !editingBranch && fileInputRef.current?.click()} // Disable upload on edit if API doesn't support it yet
                                    className={`relative w-full h-40 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden transition-all ${!editingBranch ? 'cursor-pointer hover:border-[#172554] hover:bg-slate-50' : ''}`}
                                >
                                    {bannerPreview ? (
                                        <Image src={bannerPreview} alt="Preview" fill className="object-cover" />
                                    ) : (
                                        <div className="text-center text-slate-400">
                                            <ImageIcon className="w-8 h-8 mx-auto mb-2" />
                                            <span className="text-sm">Ajouter une bannière</span>
                                        </div>
                                    )}
                                    {!editingBranch && (
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                        />
                                    )}
                                </div>

                                <Input
                                    label="Nom de l'antenne"
                                    placeholder="Ex: Antenne Régionale du Littoral"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        label="Ville / Localisation"
                                        placeholder="Douala"
                                        icon={MapPin}
                                        value={formData.location}
                                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                                        required
                                    />
                                    <Input
                                        label="Contact (Tél/Email)"
                                        placeholder="+237..."
                                        icon={Phone}
                                        value={formData.contact}
                                        onChange={(e) => setFormData({...formData, contact: e.target.value})}
                                        required
                                    />
                                </div>

                                <div className="pt-2">
                                    <Button type="submit" className="w-full bg-[#172554]" isLoading={isActionLoading}>
                                        {editingBranch ? 'Enregistrer les modifications' : 'Créer l\'antenne'}
                                    </Button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};