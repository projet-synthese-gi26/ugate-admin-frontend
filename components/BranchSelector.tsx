'use client';

import React from 'react';
import { Building2, MapPin, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/Card';
import { Branch } from '@/lib/types/events';
import { BRANCHES } from '@/lib/constants/branches';

interface BranchSelectorProps {
  onSelectBranch: (branch: Branch) => void;
}

export const BranchSelector: React.FC<BranchSelectorProps> = ({ onSelectBranch }) => {
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
        {BRANCHES.map((branch) => (
          <Card
            key={branch.id}
            className="group cursor-pointer border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            onClick={() => onSelectBranch(branch)}
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
              
              {branch.description && (
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {branch.description}
                </p>
              )}
              
              <div className="space-y-2 pt-3 border-t border-gray-100">
                {branch.location && (
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {branch.location}
                  </div>
                )}
                <div className="text-sm text-gray-700">
                  <span className="font-medium">Directeur:</span> {branch.director.name}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
        <CardContent className="p-6">
          <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-600" />
            À propos des agences
          </h3>
          <p className="text-sm text-gray-700">
            Le syndicat UGATE dispose de plusieurs agences régionales à travers le pays. 
            Toutes les agences défendent les mêmes intérêts et suivent le même fonctionnement. 
            Sélectionnez une agence pour voir ses événements locaux, créer de nouveaux événements, 
            et gérer les inscriptions des membres de cette région.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
