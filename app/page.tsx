'use client';

import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

import { useAuth } from '@/lib/contexts/AuthContext';

import { Login } from '@/components/Login';
import { Register } from '@/components/Register';
import { Layout } from '@/components/Layout';

import { Dashboard } from '@/components/Dashboard';
import { Events } from '@/components/Events';
import { Products } from '@/components/Products';
import { Services } from '@/components/Services';
import { Admissions } from '@/components/Admissions';
import { Settings } from '@/components/Settings';
import { Branches } from '@/components/Branches';

import { CreateSyndicate } from '@/components/onboarding/CreateSyndicate';
import { PendingSyndicate } from '@/components/onboarding/PendingSyndicate';

export default function Home() {
    const {
        isAuthenticated,
        isLoading,
        isSyndicateLoading,
        user,
        syndicateStatus,
    } = useAuth();

    const [authView, setAuthView] = useState<'login' | 'register'>('login');
    const [currentView, setCurrentView] = useState('dashboard');

    /* -------------------------------------------------------------- */
    /* Loading                                                        */
    /* -------------------------------------------------------------- */

    if (isLoading || isSyndicateLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
                <Loader2 className="w-10 h-10 animate-spin text-[#172554]" />
            </div>
        );
    }

    /* -------------------------------------------------------------- */
    /* Auth                                                          */
    /* -------------------------------------------------------------- */

    if (!isAuthenticated) {
        return authView === 'login' ? (
            <Login onSwitchToRegister={() => setAuthView('register')} />
        ) : (
            <Register onSwitchToLogin={() => setAuthView('login')} />
        );
    }

    /* -------------------------------------------------------------- */
    /* ✅ SYNDICATE GATING (BACKEND‑ALIGNED)                           */
    /* -------------------------------------------------------------- */

    // ❌ Aucun syndicat → création
    if (!syndicateStatus?.exists) {
        return <CreateSyndicate />;
    }

    // ❌ Syndicat créé mais NON approuvé
    if (syndicateStatus.isApproved !== true) {
        return <PendingSyndicate />;
    }

    /* -------------------------------------------------------------- */
    /* ✅ APP PRINCIPALE (APPROUVÉ UNIQUEMENT)                         */
    /* -------------------------------------------------------------- */

    const renderContent = () => {
        switch (currentView) {
            case 'dashboard':
                return <Dashboard />;
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
                return <Dashboard />;
        }
    };

    return (
        <Layout
            currentView={currentView}
            onChangeView={setCurrentView}
            userEmail={user?.email ?? ''}
        >
            {renderContent()}
        </Layout>
    );
}