'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Clock,
    CheckCircle2,
    FileText,
    RefreshCw,
    ShieldCheck,
    MessageCircle,
    ArrowRight,
    SearchCheck
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/lib/contexts/AuthContext';

export const PendingSyndicate = () => {
    const { refreshSyndicateStatus, user } = useAuth();
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleRefresh = async () => {
        setIsRefreshing(true);
        await refreshSyndicateStatus();
        // Simulation d'un petit délai pour l'effet visuel
        setTimeout(() => setIsRefreshing(false), 1000);
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center p-4 sm:p-8 bg-slate-50 overflow-hidden">
            {/* Background Split Premium */}
            <div className="absolute top-0 left-0 w-full h-[40vh] bg-[#0F172A] z-0 rounded-b-[3rem]" />
            <div className="absolute top-0 left-0 w-full h-[40vh] z-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-[#0F172A]" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-xl relative z-10"
            >
                {/* Status Badge */}
                <div className="flex justify-center mb-6">
                    <div className="bg-amber-500/10 backdrop-blur-md border border-amber-500/20 px-4 py-1.5 rounded-full flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        <span className="text-amber-200 text-xs font-bold uppercase tracking-widest">Examen en cours</span>
                    </div>
                </div>

                <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-900/20 border border-slate-100 overflow-hidden">
                    {/* Header Section */}
                    <div className="p-8 sm:p-12 text-center border-b border-slate-50">
                        <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                            <Clock className="w-10 h-10 text-[#172554] animate-[spin_10s_linear_infinite]" />
                        </div>

                        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172554] mb-3">
                            Analyse de votre dossier
                        </h1>
                        <p className="text-slate-500 leading-relaxed">
                            Bonjour <span className="text-[#172554] font-bold">{user?.firstName}</span>, votre demande est entre les mains de nos experts. Voici l'état d'avancement :
                        </p>
                    </div>

                    {/* Timeline Section */}
                    <div className="px-8 sm:px-12 py-8 bg-slate-50/50 space-y-6">
                        {/* Step 1: Completed */}
                        <div className="flex gap-4 relative">
                            <div className="absolute left-[19px] top-10 w-0.5 h-10 bg-emerald-500" />
                            <div className="z-10 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-200 shrink-0">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1 pt-1">
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-tight">Réception des documents</h3>
                                <p className="text-xs text-slate-500">Statuts officiels et logo bien reçus.</p>
                            </div>
                        </div>

                        {/* Step 2: In Progress */}
                        <div className="flex gap-4 relative">
                            <div className="absolute left-[19px] top-10 w-0.5 h-10 bg-slate-200" />
                            <div className="z-10 w-10 h-10 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center shadow-lg shrink-0 overflow-hidden">
                                <div className="absolute inset-0 bg-blue-500/10 animate-pulse" />
                                <SearchCheck className="w-5 h-5 text-blue-600 relative z-10" />
                            </div>
                            <div className="flex-1 pt-1">
                                <h3 className="text-sm font-bold text-blue-600 uppercase tracking-tight">Vérification de conformité</h3>
                                <p className="text-xs text-slate-500">Examen manuel des pièces juridiques par nos modérateurs.</p>
                                <div className="mt-3 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ x: '-100%' }}
                                        animate={{ x: '100%' }}
                                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                        className="w-1/2 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Step 3: Upcoming */}
                        <div className="flex gap-4">
                            <div className="z-10 w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-5 h-5 text-slate-300" />
                            </div>
                            <div className="flex-1 pt-1">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-tight">Activation finale</h3>
                                <p className="text-xs text-slate-400 italic">Signature numérique et ouverture de l'espace.</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-8 sm:p-12 space-y-4">
                        <Button
                            variant="primary"
                            onClick={handleRefresh}
                            className="w-full h-14 bg-[#172554] hover:bg-blue-900 shadow-xl shadow-blue-900/20 text-lg"
                            isLoading={isRefreshing}
                            leftIcon={RefreshCw}
                        >
                            Actualiser mon statut
                        </Button>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 p-3 text-xs font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
                                <MessageCircle className="w-4 h-4 text-blue-500" />
                                Contacter le support
                            </button>
                            <button className="flex items-center justify-center gap-2 p-3 text-xs font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
                                <FileText className="w-4 h-4 text-blue-500" />
                                Voir mon dossier
                            </button>
                        </div>
                    </div>
                </div>

                <p className="text-center text-sm text-slate-400 mt-8">
                    Le délai moyen de validation est de <span className="text-[#172554] font-bold">24 heures ouvrées</span>.
                    <br />Vous recevrez une notification par email dès l'approbation.
                </p>
            </motion.div>
        </div>
    );
};