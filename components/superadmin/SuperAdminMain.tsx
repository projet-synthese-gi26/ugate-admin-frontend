'use client';

import React, { useState } from 'react';
import { SuperAdminLayout } from './SuperAdminLayout';
import { SuperAdminDashboard } from './SuperAdminDashboard';
import { SyndicatsManagement } from './SyndicatsManagement';
import { MembersManagement } from './MembersManagement';
import { FlaggedContent } from './FlaggedContent';
import { SubscriptionPlans } from './SubscriptionPlans';
import { PaymentsManagement } from './PaymentsManagement';
import { ActivityLogs } from './ActivityLogs';
import { BailConfiguration } from './BailConfiguration';

interface SuperAdminMainProps {
  userEmail?: string;
  onLogout: () => void;
}

export const SuperAdminMain: React.FC<SuperAdminMainProps> = ({ userEmail, onLogout }) => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [viewData, setViewData] = useState<unknown>(null);

  const handleNavigate = (view: string, data?: unknown) => {
    setCurrentView(view);
    setViewData(data);
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <SuperAdminDashboard onNavigate={handleNavigate} />;
      case 'syndicats':
        return <SyndicatsManagement onNavigate={handleNavigate} />;
      case 'members':
        return <MembersManagement syndicatId={(viewData as { syndicatId?: string })?.syndicatId} />;
      case 'flagged-content':
        return <FlaggedContent />;
      case 'payments':
        return <PaymentsManagement />;
      case 'activity-logs':
        return <ActivityLogs />;
      case 'subscription-plans':
        return <SubscriptionPlans />;
      case 'settings':
        return <BailConfiguration />;
      default:
        return <SuperAdminDashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <SuperAdminLayout 
      currentView={currentView} 
      onChangeView={setCurrentView}
      userEmail={userEmail}
      onLogout={onLogout}
    >
      {renderView()}
    </SuperAdminLayout>
  );
};
