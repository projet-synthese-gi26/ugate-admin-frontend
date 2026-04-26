'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Building2, FileText, Check, AlertCircle, ShieldCheck, Camera } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input, TextArea } from '@/components/ui/Input';
import { createSyndicate } from '@/lib/services/syndicates.service';
import { useAuth } from '@/lib/contexts/AuthContext';
import Image from 'next/image';

export const CreateSyndicate = () => {
    const { refreshSyndicateStatus } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // États pour les fichiers
    const [logoPreview, setLogoPreview] = useState<string | null>(null);
    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [docFile, setDocFile] = useState<File | null>(null);

    const logoInputRef = useRef<HTMLInputElement>(null);
    const docInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);

        if (!logoFile || !docFile) {
            setError("Le logo et le document de statuts sont obligatoires pour valider votre dossier.");
            setIsLoading(false);
            return;
        }

        formData.set('logo', logoFile);
        formData.set('document', docFile);

        try {
            await createSyndicate(formData);
            await refreshSyndicateStatus();
        } catch (err) {
            setError("Une erreur est survenue lors de la création. Veuillez vérifier vos informations.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setLogoFile(file);
            const reader = new FileReader();
            reader.onloadend = () => setLogoPreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center p-4 sm:p-8 bg-slate-50 selection:bg-blue-100">
            {/* Design de fond "Split" Premium */}
            <div className="absolute top-0 left-0 w-full h-[40vh] bg-[#0F172A] z-0 rounded-b-[3rem] shadow-inner" />

            {/* Motif décoratif en arrière-plan */}
            <div className="absolute top-0 left-0 w-full h-[40vh] z-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-[#0F172A] to-[#0F172A]" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-3xl relative z-10"
            >
                {/* Header au-dessus de la carte */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl mb-4">
                        <ShieldCheck className="w-6 h-6 text-blue-400" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                        Création de l'Espace Syndical
                    </h1>
                    <p className="text-blue-100/80 text-lg">
                        Initialisez votre entité légale sur la plateforme UGate.
                    </p>
                </div>

                {/* Formulaire Principal (Carte Blanche) */}
                <form onSubmit={handleSubmit} className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 p-8 sm:p-12 border border-slate-100 space-y-10">

                    {/* Section 1 : Identité & Logo */}
                    <div className="flex flex-col sm:flex-row gap-8 items-start pb-10 border-b border-slate-100">
                        {/* Upload Logo Modernisé */}
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <div
                                onClick={() => logoInputRef.current?.click()}
                                className={`relative w-32 h-32 rounded-[2rem] border-2 flex items-center justify-center overflow-hidden group cursor-pointer transition-all duration-300 ${
                                    logoPreview
                                        ? 'border-transparent shadow-lg'
                                        : 'border-dashed border-slate-300 bg-slate-50 hover:bg-blue-50 hover:border-[#1877F2]'
                                }`}
                            >
                                {logoPreview ? (
                                    <>
                                        <Image src={logoPreview} alt="Logo" fill className="object-cover" />
                                        <div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                            <Camera className="w-8 h-8 text-white" />
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center text-slate-400 group-hover:text-[#1877F2] transition-colors">
                                        <Building2 className="w-10 h-10 mx-auto mb-2 opacity-50 group-hover:opacity-100" />
                                        <span className="text-xs font-bold uppercase tracking-wider">Logo</span>
                                    </div>
                                )}
                            </div>
                            <input
                                type="file"
                                name="logo"
                                accept="image/*"
                                ref={logoInputRef}
                                className="hidden"
                                onChange={handleLogoChange}
                            />
                        </div>

                        {/* Champs Identité */}
                        <div className="flex-1 w-full space-y-5">
                            <div>
                                <h3 className="text-sm font-bold text-[#172554] uppercase tracking-wider mb-4">
                                    Identité de l'organisation
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <Input
                                        label="Nom officiel du Syndicat"
                                        name="name"
                                        placeholder="Ex: UGATE Littoral"
                                        className="bg-slate-50 border-slate-200"
                                        required
                                    />
                                    <Input
                                        label="Secteur / Domaine"
                                        name="domain"
                                        placeholder="Ex: Transport Routier"
                                        className="bg-slate-50 border-slate-200"
                                        required
                                    />
                                </div>
                            </div>

                            <TextArea
                                label="Description et Objet Social"
                                name="description"
                                required
                                className="min-h-[110px] bg-slate-50 border-slate-200"
                                placeholder="Décrivez brièvement la mission, la vision et le rôle de votre syndicat..."
                            />
                        </div>
                    </div>

                    {/* Section 2 : Documents Légaux */}
                    <div>
                        <h3 className="text-sm font-bold text-[#172554] uppercase tracking-wider mb-4 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-[#1877F2]" />
                            Justificatifs Légaux
                        </h3>

                        {/* Dropzone Document Modernisée */}
                        <div
                            onClick={() => docInputRef.current?.click()}
                            className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                                docFile
                                    ? 'border-emerald-500 bg-emerald-50/30'
                                    : 'border-dashed border-slate-300 bg-slate-50 hover:bg-blue-50 hover:border-[#1877F2]'
                            }`}
                        >
                            {/* Décoration en coin */}
                            {docFile && <div className="absolute -top-6 -right-6 w-12 h-12 bg-emerald-500 rotate-45" />}

                            <div className="p-6 flex items-center gap-5">
                                <div className={`p-4 rounded-xl flex-shrink-0 ${docFile ? 'bg-emerald-100 text-emerald-600' : 'bg-white shadow-sm text-slate-400'}`}>
                                    {docFile ? <Check className="w-8 h-8" /> : <Upload className="w-8 h-8" />}
                                </div>
                                <div className="flex-1">
                                    <h4 className={`text-lg font-bold ${docFile ? 'text-emerald-800' : 'text-slate-700'}`}>
                                        Statuts officiels du syndicat <span className="text-red-500">*</span>
                                    </h4>
                                    <p className="text-sm text-slate-500 mt-1">
                                        {docFile
                                            ? <span className="font-medium text-emerald-600">{docFile.name}</span>
                                            : "Importez le document PDF contenant les statuts (Max 5MB)."
                                        }
                                    </p>
                                </div>
                                <Button
                                    type="button"
                                    variant={docFile ? "outline" : "secondary"}
                                    className={docFile ? "border-emerald-200 text-emerald-700 pointer-events-none" : "pointer-events-none"}
                                >
                                    {docFile ? 'Modifer' : 'Parcourir'}
                                </Button>
                            </div>
                            <input
                                type="file"
                                name="document"
                                accept=".pdf"
                                ref={docInputRef}
                                className="hidden"
                                onChange={(e) => setDocFile(e.target.files?.[0] || null)}
                            />
                        </div>
                    </div>

                    {/* Messages d'erreur */}
                    {error && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                            <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm flex items-center gap-3">
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                <span className="font-medium">{error}</span>
                            </div>
                        </motion.div>
                    )}

                    {/* Bouton de Soumission */}
                    <div className="pt-4">
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full h-14 text-lg bg-[#172554] hover:bg-blue-900 shadow-xl shadow-blue-900/20 transition-all active:scale-[0.98]"
                            isLoading={isLoading}
                        >
                            Soumettre le dossier d'immatriculation
                        </Button>
                        <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
                            <ShieldCheck className="w-3 h-3" />
                            Vos données sont cryptées et stockées de manière sécurisée.
                        </p>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};