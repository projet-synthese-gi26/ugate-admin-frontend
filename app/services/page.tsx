'use client';

import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Services } from '@/components/Services';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function ServicesPage() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();
  const [currentView, setCurrentView] = useState('services');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, isLoading, router]);

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

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout currentView={currentView} onChangeView={setCurrentView} userEmail={user?.email || ''}>
      <Services />
    </Layout>
  );
}
