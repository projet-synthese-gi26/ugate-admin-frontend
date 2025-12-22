'use client';

import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Dashboard } from '@/components/Dashboard';
import { Events } from '@/components/Events';
import { Products } from '@/components/Products';
import { Services } from '@/components/Services';
import { Admissions } from '@/components/Admissions';
import { Login } from '@/components/Login';
import { Register } from '@/components/Register';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [authView, setAuthView] = useState<'login' | 'register'>('login');
  const [currentView, setCurrentView] = useState('dashboard');
  const [triggerAction, setTriggerAction] = useState<string | null>(null);

  const handleChangeView = (view: string) => {
    setCurrentView(view);
    setTriggerAction(null);
  };

  const handleTriggerAction = (action: string) => {
    setTriggerAction(action);
  };

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setIsAuthenticated(true);
  };

  const handleRegister = () => {
    setAuthView('login');
  };

  const handleSwitchToRegister = () => {
    setAuthView('register');
  };

  const handleSwitchToLogin = () => {
    setAuthView('login');
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onChangeView={handleChangeView} onTriggerAction={handleTriggerAction} />;
      case 'events':
        return <Events autoOpenCreate={triggerAction === 'create-event'} />;
      case 'products':
        return <Products autoOpenCreate={triggerAction === 'create-product'} />;
      case 'services':
        return <Services />;
      case 'admissions':
        return <Admissions autoOpenCreate={triggerAction === 'create-admission'} />;
      case 'settings':
        return (
          <div className="flex flex-col items-center justify-center h-[50vh] text-center">
             <div className="bg-gray-100 p-6 rounded-full mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
             </div>
             <h2 className="text-xl font-bold text-gray-900">Paramètres Indisponibles</h2>
             <p className="text-gray-500 mt-2 max-w-sm">Les options de configuration globale sont actuellement réservées aux super-administrateurs.</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  if (!isAuthenticated) {
    if (authView === 'login') {
      return <Login onLogin={handleLogin} onSwitchToRegister={handleSwitchToRegister} />;
    }
    return <Register onRegister={handleRegister} onSwitchToLogin={handleSwitchToLogin} />;
  }

  return (
    <Layout currentView={currentView} onChangeView={setCurrentView} userEmail={userEmail}>
      {renderView()}
    </Layout>
  );
}
