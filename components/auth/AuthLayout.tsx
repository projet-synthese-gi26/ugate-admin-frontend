'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// --- Composant Effet Machine à Écrire ---
const Typewriter = ({ words }: { words: string[] }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Curseur clignotant
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    // Logique de frappe
    useEffect(() => {
        if (index >= words.length) {
            setIndex(0); // Boucler au début
            return;
        }

        if (subIndex === words[index].length + 1 && !reverse) {
            // Mot terminé, attendre avant d'effacer
            const timeout = setTimeout(() => {
                setReverse(true);
            }, 2000); // Temps d'attente lecture
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            // Mot effacé, passer au suivant
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 50 : 100); // Vitesse : plus rapide pour effacer

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    return (
        <div className="h-20 flex items-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {`${words[index].substring(0, subIndex)}`}
                <span className={`${blink ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 text-blue-400`}>|</span>
            </h2>
        </div>
    );
};

// --- Layout Principal ---
interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
    const services = [
        "Gestion Syndicale Simplifiée",
        "Suivi des Membres en Temps Réel",
        "Marketplace de Services & Produits",
        "Organisation d'Événements",
        "Paiements Sécurisés"
    ];

    return (
        <div className="min-h-screen w-full flex bg-white">
            {/* Côté Gauche - Branding (Visible uniquement sur Desktop/Large screens) */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-[#0F172A] flex-col justify-between p-12 overflow-hidden">

                {/* Background Image/Pattern */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#1877F2]/30 opacity-90 mix-blend-multiply" />
                    <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                        alt="Office background"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                </div>

                {/* Logo & Brand */}
                <div className="relative z-10 flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                        <span className="text-white font-bold text-2xl">U</span>
                    </div>
                    <span className="text-2xl font-bold text-white tracking-wider">UGATE</span>
                </div>

                {/* Animated Text Content */}
                <div className="relative z-10 mb-20">
                    <div className="w-20 h-1 bg-blue-500 mb-8 rounded-full"></div>
                    <p className="text-blue-200 font-medium mb-2 uppercase tracking-widest text-sm">La plateforme tout-en-un</p>
                    <Typewriter words={services} />
                    <p className="text-slate-400 mt-6 max-w-md text-lg leading-relaxed">
                        Centralisez la gestion de votre syndicat, engagez vos membres et développez votre communauté avec une suite d'outils professionnels.
                    </p>
                </div>

                {/* Footer info */}
                <div className="relative z-10 text-sm text-slate-500 flex justify-between">
                    <span>© 2024 UGate Inc.</span>
                    <div className="flex gap-4">
                        <span>Confidentialité</span>
                        <span>Conditions</span>
                    </div>
                </div>
            </div>

            {/* Côté Droit - Formulaire */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-gray-50/50">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md space-y-8 bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100"
                >
                    <div className="text-center lg:text-left">
                        {/* Logo Mobile seulement */}
                        <div className="lg:hidden flex justify-center mb-6">
                            <div className="w-12 h-12 bg-[#1877F2] rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-2xl">U</span>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
                        <p className="mt-2 text-gray-500">{subtitle}</p>
                    </div>

                    {children}
                </motion.div>
            </div>
        </div>
    );
};