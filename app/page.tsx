'use client';

import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Dashboard } from '@/components/Dashboard';
import { Login } from '@/components/Login';
import { Register } from '@/components/Register';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();
  
  const [authView, setAuthView] = useState<'login' | 'register'>('login');
  const [currentView, setCurrentView] = useState('dashboard');

  const handleChangeView = (view: string) => {
    setCurrentView(view);
  };

  const handleTriggerAction = (action: string) => {
    // Rediriger vers la page appropriée avec l'action
    if (action === 'create-event') {
      router.push('/events');
    } else if (action === 'create-product') {
      router.push('/products');
    } else if (action === 'create-admission') {
      router.push('/admissions');
    }
  };

  const handleSwitchToRegister = () => {
    setAuthView('register');
  };

  const handleSwitchToLogin = () => {
    setAuthView('login');
  };

  // Afficher un loader pendant la vérification de l'authentification
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#1877F2] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  // Si non authentifié, afficher le formulaire de login ou register
  if (!isAuthenticated) {
    if (authView === 'login') {
      return <Login onSwitchToRegister={handleSwitchToRegister} />;
    }
    return <Register onSwitchToLogin={handleSwitchToLogin} />;
  }

  // Sinon, afficher le dashboard
  return (
    <Layout currentView={currentView} onChangeView={handleChangeView} userEmail={user?.email || ''}>
      <Dashboard onChangeView={handleChangeView} onTriggerAction={handleTriggerAction} />
    </Layout>
  );
}
