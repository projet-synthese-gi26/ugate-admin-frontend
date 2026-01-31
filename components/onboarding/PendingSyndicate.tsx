'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/lib/contexts/AuthContext';

export const PendingSyndicate = () => {
    const { refreshSyndicateStatus, user } = useAuth();

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-lg bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-200/50 p-8 text-center"
            >
                <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-10 h-10 text-amber-500 animate-pulse" />
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-2">Demande en cours d'examen</h1>
                <p className="text-gray-500 mb-8">
                    Merci {user?.firstName}. Votre demande de création de syndicat a bien été reçue et est actuellement examinée par nos super-administrateurs.
                </p>

                <div className="space-y-4 mb-8 text-left">
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">Documents soumis</h3>
                            <p className="text-xs text-gray-500">Vos statuts et logo ont été reçus.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <FileText className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">Validation manuelle</h3>
                            <p className="text-xs text-gray-500">Notre équipe vérifie la conformité légale (délai moyen: 24h).</p>
                        </div>
                    </div>
                </div>

                <Button
                    variant="outline"
                    onClick={() => refreshSyndicateStatus()}
                    className="w-full"
                    leftIcon={ArrowRight}
                >
                    Actualiser le statut
                </Button>

                <p className="text-xs text-gray-400 mt-4">
                    Vous recevrez également un email de notification.
                </p>
            </motion.div>
        </div>
    );
};