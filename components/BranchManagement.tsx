'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Building2, MapPin, Phone, Plus, Edit3, Loader2, AlertCircle, ChevronLeft } from 'lucide-react';
import { Button } from './ui/Button';
import { Card, CardContent } from './ui/Card';
import { BranchResponse } from '@/lib/types/syndicate';
import { getSyndicatBranches } from '@/lib/services/syndicates.service';
import { useAuth } from '@/lib/contexts/AuthContext';
import { CreateBranchForm } from './CreateBranchForm';
import Image from 'next/image';

export const BranchManagement: React.FC = () => {
  const { selectedSyndicate } = useAuth();
  const [branches, setBranches] = useState<BranchResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [editingBranch, setEditingBranch] = useState<BranchResponse | null>(null);

  const loadBranches = useCallback(async () => {
    if (!selectedSyndicate) {
      setError('Aucun syndicat sélectionné');
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      const fetchedBranches = await getSyndicatBranches(selectedSyndicate.id);
      setBranches(fetchedBranches);
      
      console.log(`✅ ${fetchedBranches.length} branche(s) chargée(s)`);
    } catch (err) {
      console.error('❌ Erreur lors du chargement des branches:', err);
      setError('Impossible de charger les branches');
    } finally {
      setIsLoading(false);
    }
  }, [selectedSyndicate]);

  useEffect(() => {
    if (selectedSyndicate) {
      loadBranches();
    }
  }, [selectedSyndicate, loadBranches]);

  const handleBranchCreated = (branch: BranchResponse) => {
    setBranches([...branches, branch]);
    setIsCreating(false);
  };

  const handleBranchUpdated = (updatedBranch: BranchResponse) => {
    setBranches(branches.map(b => b.id === updatedBranch.id ? updatedBranch : b));
    setEditingBranch(null);
  };

  const handleEdit = (branch: BranchResponse) => {
    setEditingBranch(branch);
  };

  if (!selectedSyndicate) {
    return (
      <div className="flex items-center justify-center py-20">
        <Card className="max-w-md border-yellow-200 bg-yellow-50">
          <CardContent className="p-8 text-center">
            <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-900 mb-2">Aucun syndicat sélectionné</h2>
            <p className="text-gray-600">Veuillez sélectionner un syndicat pour gérer ses branches.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isCreating) {
    return (
      <div className="space-y-6">
        <Button variant="ghost" size="sm" onClick={() => setIsCreating(false)}>
          <ChevronLeft className="w-4 h-4 mr-1" /> Retour
        </Button>
        <CreateBranchForm
          syndicatId={selectedSyndicate.id}
          onBranchCreated={handleBranchCreated}
          onCancel={() => setIsCreating(false)}
        />
      </div>
    );
  }

  if (editingBranch) {
    return (
      <div className="space-y-6">
        <Button variant="ghost" size="sm" onClick={() => setEditingBranch(null)}>
          <ChevronLeft className="w-4 h-4 mr-1" /> Retour
        </Button>
        <CreateBranchForm
          syndicatId={selectedSyndicate.id}
          branchToEdit={editingBranch}
          onBranchCreated={handleBranchUpdated}
          onCancel={() => setEditingBranch(null)}
        />
      </div>
    );
  }

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

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Gestion des Branches
          </h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            {branches.length} branche{branches.length > 1 ? 's' : ''} • {selectedSyndicate.name}
          </p>
        </div>
        <Button onClick={() => setIsCreating(true)} leftIcon={Plus}>
          Créer une branche
        </Button>
      </div>

      {branches.length === 0 ? (
        <Card className="border-0 shadow-lg">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Aucune branche
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Créez votre première branche pour organiser vos événements et activités par localisation géographique.
            </p>
            <Button onClick={() => setIsCreating(true)} leftIcon={Plus}>
              Créer ma première branche
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch) => (
            <Card key={branch.id} className="group hover:shadow-xl transition-all border-0 overflow-hidden">
              {branch.bannerUrl && (
                <div className="relative h-32 bg-gradient-to-br from-blue-500 to-purple-600">
                  <Image
                    src={branch.bannerUrl}
                    alt={branch.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {!branch.bannerUrl && (
                <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Building2 className="w-12 h-12 text-white opacity-50" />
                </div>
              )}
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {branch.name}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{branch.location}</span>
                  </div>
                  {branch.contact && (
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{branch.contact}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 pt-4 border-t border-gray-100">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    leftIcon={Edit3}
                    onClick={() => handleEdit(branch)}
                  >
                    Modifier
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {branches.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <Building2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-semibold mb-1">À propos des branches</p>
              <p>
                Les branches vous permettent d&apos;organiser vos événements et activités par localisation géographique. 
                Chaque branche peut avoir ses propres événements, produits et services.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
