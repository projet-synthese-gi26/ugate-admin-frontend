'use client';

import React, { useState, useEffect } from 'react';
import { Building2, CheckCircle, AlertCircle, Loader2, Clock } from 'lucide-react';
import { Button } from './ui/Button';
import { Card, CardContent } from './ui/Card';
import { SyndicateResponse } from '@/lib/types/syndicate';
import { getMySyndicates } from '@/lib/services/syndicates.service';
import { CreateSyndicateForm } from './CreateSyndicateForm';
import Image from 'next/image';

interface SyndicateSelectorProps {
  onSelectSyndicate: (syndicate: SyndicateResponse) => void;
}

export const SyndicateSelector: React.FC<SyndicateSelectorProps> = ({ onSelectSyndicate }) => {
  const [syndicates, setSyndicates] = useState<SyndicateResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadSyndicates();
  }, []);

  const loadSyndicates = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const fetchedSyndicates = await getMySyndicates();
      setSyndicates(fetchedSyndicates);
      
      console.log(`✅ ${fetchedSyndicates.length} syndicat(s) chargé(s)`);
    } catch (err) {
      console.error('❌ Erreur lors du chargement des syndicats:', err);
      setError('Impossible de charger vos syndicats. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Chargement de vos syndicats...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full border-red-200 bg-red-50">
          <CardContent className="p-8 text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-900 mb-2">Erreur</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <Button onClick={loadSyndicates} className="w-full">
              Réessayer
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleSyndicateCreated = (syndicate: SyndicateResponse) => {
    console.log('✅ Syndicat créé, ajout à la liste');
    setSyndicates([syndicate]);
  };

  // Si aucun syndicat, afficher le formulaire de création
  if (syndicates.length === 0) {
    return <CreateSyndicateForm onSyndicateCreated={handleSyndicateCreated} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sélectionnez votre Syndicat
          </h1>
          <p className="text-lg text-gray-600">
            Choisissez le syndicat que vous souhaitez administrer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {syndicates.map((syndicate) => {
            const canAccess = syndicate.isApproved && syndicate.isActive;
            return (
            <Card 
              key={syndicate.id}
              className={`border-0 shadow-xl transition-all duration-300 group ${
                canAccess 
                  ? 'hover:shadow-2xl cursor-pointer hover:-translate-y-2' 
                  : 'opacity-75 cursor-not-allowed'
              }`}
              onClick={() => canAccess && onSelectSyndicate(syndicate)}
            >
              <CardContent className="p-0">
                {/* Logo du syndicat */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-xl overflow-hidden">
                  {syndicate.logoUrl ? (
                    <Image 
                      src={syndicate.logoUrl} 
                      alt={syndicate.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Building2 className="w-20 h-20 text-white opacity-50" />
                    </div>
                  )}
                  
                  {/* Badge de statut */}
                  <div className="absolute top-4 right-4">
                    {syndicate.isApproved && syndicate.isActive ? (
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                        <CheckCircle className="w-3 h-3" />
                        Actif
                      </div>
                    ) : syndicate.isApproved && !syndicate.isActive ? (
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                        <Clock className="w-3 h-3" />
                        Approuvé
                      </div>
                    ) : (
                      <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                        <AlertCircle className="w-3 h-3" />
                        En attente
                      </div>
                    )}
                  </div>
                </div>

                {/* Informations du syndicat */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {syndicate.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {syndicate.description}
                  </p>

                  {/* Message de statut */}
                  {!syndicate.isApproved && (
                    <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-xs text-yellow-800">
                        <AlertCircle className="w-3 h-3 inline mr-1" />
                        Votre syndicat est en attente d&apos;approbation par un administrateur.
                      </p>
                    </div>
                  )}
                  {syndicate.isApproved && !syndicate.isActive && (
                    <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                      <p className="text-xs text-orange-800">
                        <Clock className="w-3 h-3 inline mr-1" />
                        Votre syndicat est approuvé mais doit être activé pour accéder au dashboard.
                      </p>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500 uppercase font-semibold">
                      {syndicate.domain}
                    </span>
                    {syndicate.isApproved && syndicate.isActive ? (
                      <Button 
                        size="sm" 
                        className="group-hover:bg-blue-600 transition-colors flex-shrink-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectSyndicate(syndicate);
                        }}
                      >
                        Administrer
                      </Button>
                    ) : (
                      <Button 
                        size="sm" 
                        variant="secondary"
                        disabled
                        className="cursor-not-allowed flex-shrink-0"
                      >
                        {!syndicate.isApproved ? 'En attente' : 'Non activé'}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
