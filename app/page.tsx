'use client';

import React, { useState } from 'react';
import { useAuth } from '@/lib/contexts/AuthContext';
import { Login } from '@/components/Login';
import { Register } from '@/components/Register';
import { Dashboard } from '@/components/Dashboard';
import { Events } from '@/components/Events';
import { Products } from '@/components/Products';
import { Services } from '@/components/Services';
import { Admissions } from '@/components/Admissions';
import { Settings } from '@/components/Settings';
import { Layout } from '@/components/Layout';
import { CreateSyndicate } from '@/components/onboarding/CreateSyndicate';
import { PendingSyndicate } from '@/components/onboarding/PendingSyndicate';
import { Loader2 } from 'lucide-react';
import { Branches } from '@/components/Branches';


export default function Home() {
    const { isAuthenticated, isLoading, isSyndicateLoading, user, syndicateStatus } = useAuth();
    const [authView, setAuthView] = useState<'login' | 'register'>('login');
    const [currentView, setCurrentView] = useState('dashboard');

    // --- Gestionnaires d'état ---
    const handleTriggerAction = (action: string) => {
        if (action === 'create-event') setCurrentView('events');
        else if (action === 'create-product') setCurrentView('products');
        else if (action === 'create-admission') setCurrentView('admissions');
    };

    // --- Rendu du contenu principal en fonction de la navigation ---
    const renderContent = () => {
        switch (currentView) {
            case 'dashboard':
                return <Dashboard onChangeView={setCurrentView} onTriggerAction={handleTriggerAction} />;
            case 'events':
                return <Events />;
            case 'products':
                return <Products />;
            case 'services':
                return <Services />;
            case 'admissions':
                return <Admissions />;
            case 'settings':
                return <Settings />;
            case 'branches':
                return <Branches />;
            default:
                return <Dashboard onChangeView={setCurrentView} />;
        }
    };

    // 1. Chargement
    if (isLoading || isSyndicateLoading) {
        return (
            <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-10 h-10 text-[#172554] animate-spin mx-auto mb-4" />
                    <p className="text-[#64748B] font-medium">Chargement de votre espace...</p>
                </div>
            </div>
        );
    }

    // 2. Auth
    if (!isAuthenticated) {
        return authView === 'login'
            ? <Login onSwitchToRegister={() => setAuthView('register')} />
            : <Register onSwitchToLogin={() => setAuthView('login')} />;
    }

    // 3. Onboarding Syndicat
    if (!syndicateStatus?.hasSyndicate) return <CreateSyndicate />;
    if (syndicateStatus.status === 'PENDING') return <PendingSyndicate />;
    if (syndicateStatus.status === 'REJECTED') return <div>Accès refusé. Contactez le support.</div>;

    // 4. App Principale
    return (
        <Layout
            currentView={currentView}
            onChangeView={setCurrentView}
            userEmail={user?.email || ''}
        >
            {/* On rend le contenu dynamique ici */}
            <div className="animate-in fade-in duration-300">
                {renderContent()}
            </div>
        </Layout>
    );
}