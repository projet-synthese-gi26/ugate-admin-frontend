'use client';

import React from 'react';
import { SyndicateSelector } from '@/components/SyndicateSelector';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { SyndicateResponse } from '@/lib/types/syndicate';

export default function SyndicateSelectorPage() {
  const { selectSyndicate } = useAuth();
  const router = useRouter();

  const handleSelectSyndicate = (syndicate: SyndicateResponse) => {
    selectSyndicate(syndicate);
    router.push('/dashboard');
  };

  return <SyndicateSelector onSelectSyndicate={handleSelectSyndicate} />;
}
