'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Building2, FileText, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
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

        // Validation basique
        if (!logoFile || !docFile) {
            setError("Le logo et le document de statuts sont obligatoires.");
            setIsLoading(false);
            return;
        }

        // Ajout explicite des fichiers (bien que le formulaire les contienne déjà si les inputs ont des 'name')
        // On s'assure qu'ils sont bien attachés
        formData.set('logo', logoFile);
        formData.set('document', docFile);

        try {
            await createSyndicate(formData);
            // Rafraichir le contexte pour passer automatiquement à l'écran "En attente"
            await refreshSyndicateStatus();
        } catch (err) {
            setError("Une erreur est survenue lors de la création. Vérifiez les champs.");
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
        <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-2xl"
            >
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white border border-gray-200 rounded-2xl shadow-sm mb-6">
                        <Building2 className="w-8 h-8 text-[#1877F2]" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Créez votre Syndicat</h1>
                    <p className="text-gray-500 mt-2 text-lg">Initialisez votre structure sur UGate pour commencer.</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-200/50 p-8 space-y-8">

                    {/* Section Logo */}
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div
                            onClick={() => logoInputRef.current?.click()}
                            className="relative w-32 h-32 rounded-full border-2 border-dashed border-gray-300 hover:border-[#1877F2] hover:bg-blue-50 transition-all cursor-pointer flex items-center justify-center overflow-hidden group"
                        >
                            {logoPreview ? (
                                <Image src={logoPreview} alt="Logo" fill className="object-cover" />
                            ) : (
                                <div className="text-center text-gray-400 group-hover:text-[#1877F2]">
                                    <Upload className="w-8 h-8 mx-auto mb-1" />
                                    <span className="text-xs font-medium">Logo</span>
                                </div>
                            )}
                            <input
                                type="file"
                                name="logo" // Important pour le FormData
                                accept="image/*"
                                ref={logoInputRef}
                                className="hidden"
                                onChange={handleLogoChange}
                            />
                        </div>
                        <p className="text-sm text-gray-500">Cliquez pour ajouter le logo officiel</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="Nom du Syndicat"
                            name="name"
                            placeholder="ex: UGATE Centre"
                            required
                        />
                        <Input
                            label="Domaine d'activité"
                            name="domain"
                            placeholder="ex: Transport"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Description</label>
                        <textarea
                            name="description"
                            required
                            className="w-full min-h-[100px] rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:border-[#1877F2] focus:ring-4 focus:ring-[#1877F2]/5 focus:outline-none transition-all resize-none"
                            placeholder="Décrivez brièvement la mission de votre syndicat..."
                        />
                    </div>

                    {/* Upload Document */}
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg border border-gray-200">
                                    <FileText className="w-6 h-6 text-gray-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Statuts / Document officiel</p>
                                    <p className="text-xs text-gray-500">PDF uniquement (Max 5MB)</p>
                                </div>
                            </div>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => docInputRef.current?.click()}
                            >
                                {docFile ? <span className="text-green-600 flex items-center"><Check className="w-4 h-4 mr-1"/> Attaché</span> : 'Parcourir'}
                            </Button>
                            <input
                                type="file"
                                name="document" // Important pour le FormData
                                accept=".pdf"
                                ref={docInputRef}
                                className="hidden"
                                onChange={(e) => setDocFile(e.target.files?.[0] || null)}
                            />
                        </div>
                        {docFile && <p className="mt-2 text-xs text-center text-green-600 font-medium">{docFile.name}</p>}
                    </div>

                    {error && (
                        <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" />
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        isLoading={isLoading}
                    >
                        Soumettre la demande
                    </Button>
                </form>
            </motion.div>
        </div>
    );
};