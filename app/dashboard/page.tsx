'use client';

import React from 'react';
import { Layout } from '@/components/Layout';
import { Dashboard } from '@/components/Dashboard';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  const handleChangeView = (view: string) => {
    router.push(`/${view}`);
  };

  const handleTriggerAction = (action: string) => {
    if (action === 'create-event') {
      router.push('/events?action=create');
    } else if (action === 'create-product') {
      router.push('/products?action=create');
    } else if (action === 'create-admission') {
      router.push('/admissions?action=create');
    }
  };

  return (
    <Layout currentView="dashboard" onChangeView={handleChangeView} userEmail={user?.email || ''}>
      <Dashboard onChangeView={handleChangeView} onTriggerAction={handleTriggerAction} />
    </Layout>
  );
}
