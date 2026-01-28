'use client';

import React, { useState } from 'react';
import { Building2, Upload, FileText, Image as ImageIcon, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { Card, CardContent } from './ui/Card';
import { createSyndicate } from '@/lib/services/syndicates.service';
import { SyndicateResponse } from '@/lib/types/syndicate';

interface CreateSyndicateFormProps {
  onSyndicateCreated: (syndicate: SyndicateResponse) => void;
}

const DOMAINS = [
  { value: 'EDUCATION', label: 'Éducation' },
  { value: 'SANTE', label: 'Santé' },
  { value: 'TRANSPORT', label: 'Transport' },
  { value: 'COMMERCE', label: 'Commerce' },
  { value: 'INDUSTRIE', label: 'Industrie' },
  { value: 'SERVICES', label: 'Services' },
  { value: 'AGRICULTURE', label: 'Agriculture' },
  { value: 'AUTRE', label: 'Autre' },
];

export const CreateSyndicateForm: React.FC<CreateSyndicateFormProps> = ({ onSyndicateCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    domain: 'EDUCATION',
  });
  const [logo, setLogo] = useState<File | null>(null);
  const [document, setDocument] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Vérifier le type de fichier
      if (!file.type.startsWith('image/')) {
        setError('Le logo doit être une image (PNG, JPG, etc.)');
        return;
      }
      // Vérifier la taille (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Le logo ne doit pas dépasser 5MB');
        return;
      }
      setLogo(file);
      setError(null);
    }
  };

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Vérifier le type de fichier
      if (file.type !== 'application/pdf') {
        setError('Le document doit être un fichier PDF');
        return;
      }
      // Vérifier la taille (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setError('Le document ne doit pas dépasser 10MB');
        return;
      }
      setDocument(file);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      setError('Le nom du syndicat est obligatoire');
      return;
    }
    if (!formData.description.trim()) {
      setError('La description est obligatoire');
      return;
    }
    if (!logo) {
      setError('Le logo est obligatoire');
      return;
    }
    if (!document) {
      setError('Le document des statuts est obligatoire');
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      const syndicate = await createSyndicate({
        name: formData.name,
        description: formData.description,
        domain: formData.domain,
        logo,
        document,
      });

      console.log('✅ Syndicat créé:', syndicate);
      onSyndicateCreated(syndicate);
    } catch (err) {
      console.error('❌ Erreur lors de la création:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue lors de la création du syndicat');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <Card className="max-w-3xl w-full border-0 shadow-2xl">
        <CardContent className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Créer votre Syndicat
            </h1>
            <p className="text-gray-600">
              Remplissez les informations ci-dessous pour créer votre syndicat
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">Important :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Vous ne pouvez créer qu&apos;un seul syndicat</li>
                  <li>Votre syndicat devra être approuvé et activé par un administrateur</li>
                  <li>Une fois activé, vous pourrez accéder au dashboard d&apos;administration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom du syndicat */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nom du syndicat <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Ex: Syndicat des Enseignants du Cameroun"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Décrivez les objectifs et missions de votre syndicat..."
                required
              />
            </div>

            {/* Domaine */}
            <div>
              <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-2">
                Domaine d&apos;activité <span className="text-red-500">*</span>
              </label>
              <select
                id="domain"
                name="domain"
                value={formData.domain}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              >
                {DOMAINS.map(domain => (
                  <option key={domain.value} value={domain.value}>
                    {domain.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Logo */}
            <div>
              <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-2">
                Logo du syndicat <span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
                <input
                  type="file"
                  id="logo"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="hidden"
                />
                <label htmlFor="logo" className="cursor-pointer">
                  <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  {logo ? (
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">{logo.name}</span>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm text-gray-600 mb-1">
                        Cliquez pour sélectionner une image
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG (max 5MB)
                      </p>
                    </>
                  )}
                </label>
              </div>
            </div>

            {/* Document */}
            <div>
              <label htmlFor="document" className="block text-sm font-medium text-gray-700 mb-2">
                Document des statuts <span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
                <input
                  type="file"
                  id="document"
                  accept=".pdf"
                  onChange={handleDocumentChange}
                  className="hidden"
                />
                <label htmlFor="document" className="cursor-pointer">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  {document ? (
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">{document.name}</span>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm text-gray-600 mb-1">
                        Cliquez pour sélectionner un document PDF
                      </p>
                      <p className="text-xs text-gray-500">
                        PDF uniquement (max 10MB)
                      </p>
                    </>
                  )}
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full py-4 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Création en cours...
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5 mr-2" />
                  Créer le syndicat
                </>
              )}
            </Button>
          </form>

          {/* Footer Note */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              Une fois créé, votre syndicat sera en attente d&apos;approbation par un administrateur.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
