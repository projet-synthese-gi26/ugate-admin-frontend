'use client';

import React, { useState } from 'react';
import { Building2, MapPin, Phone, Loader2, CheckCircle, AlertCircle, Image as ImageIcon } from 'lucide-react';
import { Button } from './ui/Button';
import { Card, CardContent } from './ui/Card';
import { createBranch, updateBranch } from '@/lib/services/syndicates.service';
import { BranchResponse } from '@/lib/types/syndicate';

interface CreateBranchFormProps {
  syndicatId: string;
  branchToEdit?: BranchResponse;
  onBranchCreated: (branch: BranchResponse) => void;
  onCancel: () => void;
}

export const CreateBranchForm: React.FC<CreateBranchFormProps> = ({ 
  syndicatId,
  branchToEdit,
  onBranchCreated, 
  onCancel 
}) => {
  const [formData, setFormData] = useState({
    name: branchToEdit?.name || '',
    location: branchToEdit?.location || '',
    contact: branchToEdit?.contact || '',
  });
  const [banner, setBanner] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('La bannière doit être une image (PNG, JPG, etc.)');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError('La bannière ne doit pas dépasser 5MB');
        return;
      }
      setBanner(file);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      setError('Le nom de la branche est obligatoire');
      return;
    }
    if (!formData.location.trim()) {
      setError('La localisation est obligatoire');
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      let updatedBranch: BranchResponse;

      if (branchToEdit) {
        // Mode édition : utiliser updateBranch (PATCH)
        const updateData: {
          name?: string;
          location?: string;
          contact?: string;
        } = {};

        if (formData.name !== branchToEdit.name) {
          updateData.name = formData.name;
        }
        if (formData.location !== branchToEdit.location) {
          updateData.location = formData.location;
        }
        if (formData.contact !== branchToEdit.contact) {
          updateData.contact = formData.contact;
        }

        updatedBranch = await updateBranch(branchToEdit.id, updateData);
      } else {
        // Mode création : utiliser createBranch (POST)
        const branchData: {
          name: string;
          location: string;
          contact?: string;
          banner?: File;
        } = {
          name: formData.name,
          location: formData.location,
        };

        if (formData.contact) {
          branchData.contact = formData.contact;
        }

        if (banner) {
          branchData.banner = banner;
        }

        updatedBranch = await createBranch(syndicatId, branchData);
      }

      const newBranch = updatedBranch;

      console.log('✅ Branche créée:', newBranch);
      onBranchCreated(newBranch);
    } catch (err) {
      console.error('❌ Erreur lors de la création:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue lors de la création de la branche');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      <Card className="max-w-3xl mx-auto border-0 shadow-2xl">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {branchToEdit ? 'Modifier la Branche' : 'Créer une Branche'}
            </h2>
            <p className="text-gray-600">
              {branchToEdit 
                ? 'Modifiez les informations de la branche.' 
                : 'Ajoutez une nouvelle branche pour organiser vos événements par localisation.'}
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nom de la branche <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Ex: Agence de Yaoundé"
                required
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Localisation <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Ex: Yaoundé, Quartier Bastos"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                Contact (optionnel)
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Email ou téléphone"
                />
              </div>
            </div>

            <div>
              <label htmlFor="banner" className="block text-sm font-medium text-gray-700 mb-2">
                Bannière (optionnel)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
                <input
                  type="file"
                  id="banner"
                  accept="image/*"
                  onChange={handleBannerChange}
                  className="hidden"
                />
                <label htmlFor="banner" className="cursor-pointer">
                  <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  {banner ? (
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">{banner.name}</span>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm text-gray-600 mb-1">
                        Cliquez pour sélectionner une image
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG (max 5MB) - Taille recommandée: 1200x400px
                      </p>
                    </>
                  )}
                </label>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={onCancel}
                disabled={isSubmitting}
              >
                Annuler
              </Button>
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {branchToEdit ? 'Modification en cours...' : 'Création en cours...'}
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {branchToEdit ? 'Modifier la branche' : 'Créer la branche'}
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
