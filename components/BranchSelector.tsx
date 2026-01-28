'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Building2, MapPin, ChevronRight, Loader2, AlertCircle, Plus } from 'lucide-react';
import { Card, CardContent } from './ui/Card';
import { Branch } from '@/lib/types/events';
import { BranchResponse } from '@/lib/types/syndicate';
import { getSyndicatBranches } from '@/lib/services/syndicates.service';
import { useAuth } from '@/lib/contexts/AuthContext';
import { Button } from './ui/Button';
import { BRANCHES } from '@/lib/constants/branches';

interface BranchSelectorProps {
  onSelectBranch: (branch: Branch) => void;
}

export const BranchSelector: React.FC<BranchSelectorProps> = ({ onSelectBranch }) => {
  const router = useRouter();
  const { selectedSyndicate } = useAuth();
  const [branches, setBranches] = useState<BranchResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadBranches();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSyndicate]);

  const loadBranches = async () => {
    // Si aucun syndicat n'est sélectionné, utiliser les branches fictives
    if (!selectedSyndicate) {
      console.log('📦 Aucun syndicat sélectionné, utilisation des branches fictives');
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      const fetchedBranches = await getSyndicatBranches(selectedSyndicate.id);
      setBranches(fetchedBranches);
      
      console.log(`✅ ${fetchedBranches.length} branche(s) chargée(s) depuis l'API`);
    } catch (err) {
      console.error('❌ Erreur lors du chargement des branches:', err);
      setError('Impossible de charger les branches. Utilisation des branches fictives.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Chargement des branches...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-20">
        <Card className="max-w-md border-red-200 bg-red-50">
          <CardContent className="p-8 text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-900 mb-2">Erreur</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <Button onClick={loadBranches}>Réessayer</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Si aucune branche API et aucun syndicat, utiliser les branches fictives
  const displayBranches = branches.length > 0 ? branches : BRANCHES.map(b => ({
    id: b.id,
    syndicatId: 'mock',
    name: b.name,
    location: b.location || '',
    contact: b.director?.email,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }));

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg mb-4">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Sélectionnez une Agence
        </h1>
        <p className="text-gray-600">
          Choisissez l&apos;agence régionale pour voir et gérer ses événements
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayBranches.map((branch) => (
          <Card
            key={branch.id}
            className="group cursor-pointer border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            onClick={() => {
              router.push(`/events?branch=${branch.id}`);
              // Convertir BranchResponse en Branch pour compatibilité
              const branchForEvents: Branch = {
                id: branch.id,
                name: branch.name,
                location: branch.location,
                director: {
                  name: 'Directeur', // Valeur par défaut car BranchResponse n'a pas de director
                  email: branch.contact || undefined,
                }
              };
              onSelectBranch(branchForEvents);
            }}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {branch.name}
              </h3>
              
              <div className="space-y-2 pt-3 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  {branch.location}
                </div>
                {branch.contact && (
                  <div className="text-sm text-gray-700">
                    <span className="font-medium">Contact:</span> {branch.contact}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
        <CardContent className="p-6">
          <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-600" />
            À propos des branches
          </h3>
          <p className="text-sm text-gray-700">
            {selectedSyndicate ? (
              <>
                Votre syndicat <strong>{selectedSyndicate.name}</strong> dispose de {displayBranches.length} branche{displayBranches.length > 1 ? 's' : ''}. 
              </>
            ) : (
              <>
                Vous utilisez actuellement les branches de démonstration. 
              </>
            )}
            Sélectionnez une branche pour voir ses événements locaux, créer de nouveaux événements, 
            et gérer les inscriptions des membres de cette région.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
