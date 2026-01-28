'use client';

import React, { useState, useEffect } from 'react';
import { Login } from '@/components/Login';
import { Register } from '@/components/Register';
import { SyndicateSelector } from '@/components/SyndicateSelector';
import { SyndicateResponse } from '@/lib/types/syndicate';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { isAuthenticated, isLoading, selectedSyndicate, selectSyndicate } = useAuth();
  const router = useRouter();
  
  const [authView, setAuthView] = useState<'login' | 'register'>('login');

  // Rediriger vers le dashboard UNIQUEMENT si authentifié, syndicat sélectionné, approuvé ET activé
  useEffect(() => {
    if (isAuthenticated && selectedSyndicate && !isLoading) {
      // Vérifier que le syndicat est approuvé ET activé
      if (selectedSyndicate.isApproved && selectedSyndicate.isActive) {
        router.push('/dashboard');
      } else {
        // Si le syndicat n'est pas approuvé ou pas activé, désélectionner et rester sur le sélecteur
        console.log('⚠️ Accès au dashboard refusé: syndicat non approuvé ou non activé');
        selectSyndicate(null);
      }
    }
  }, [isAuthenticated, selectedSyndicate, isLoading, router, selectSyndicate]);

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

  // Si authentifié mais aucun syndicat sélectionné, afficher le sélecteur
  if (!selectedSyndicate) {
    const handleSelectSyndicateAndRedirect = (syndicate: SyndicateResponse) => {
      selectSyndicate(syndicate);
    };
    return <SyndicateSelector onSelectSyndicate={handleSelectSyndicateAndRedirect} />;
  }

  // Si authentifié et syndicat sélectionné, afficher un loader pendant la redirection
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#1877F2] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Redirection vers le dashboard...</p>
      </div>
    </div>
  );
}
