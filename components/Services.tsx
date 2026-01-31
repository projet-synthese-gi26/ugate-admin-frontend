'use client';

import React, { useState, useEffect } from 'react';
import {
  Plus, CheckCircle, Edit3, Trash2, Zap,
  Search, X, Save, Loader2, Briefcase,
  MoreVertical, Check, AlertCircle
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Input, TextArea } from './ui/Input';
import {
  getActiveServices,
  createService,
  deleteService,
  updateService,
  ServiceResponse
} from '@/lib/services/services.service';
import { motion, AnimatePresence } from 'framer-motion';

export const Services: React.FC = () => {
  // Data States
  const [services, setServices] = useState<ServiceResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState(false);

  // UI States
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<ServiceResponse | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    features: [''], // Commence avec une feature vide
    isActive: true
  });

  // --- Fetch Data ---
  const fetchServices = async () => {
    setIsLoading(true);
    try {
      const data = await getActiveServices();
      setServices(data);
    } catch (error) {
      console.error("Erreur chargement services:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // --- Handlers ---

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const addFeatureField = () => {
    setFormData({ ...formData, features: [...formData.features, ''] });
  };

  const removeFeatureField = (index: number) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: newFeatures });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsActionLoading(true);

    // Nettoyer les features vides
    const cleanFeatures = formData.features.filter(f => f.trim() !== '');

    try {
      const payload = {
        title: formData.title,
        description: formData.description,
        price: parseFloat(formData.price),
        features: cleanFeatures,
        isActive: formData.isActive
      };

      if (editingService) {
        await updateService(editingService.id, payload);
      } else {
        await createService(payload);
      }

      await fetchServices();
      closeModal();
    } catch (error) {
      console.error("Erreur sauvegarde:", error);
      alert("Une erreur est survenue lors de la sauvegarde.");
    } finally {
      setIsActionLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Voulez-vous vraiment supprimer ce service ?")) return;

    // UI Optimiste
    setServices(current => current.filter(s => s.id !== id));

    try {
      await deleteService(id);
    } catch (error) {
      console.error("Erreur suppression:", error);
      fetchServices(); // Revert
    }
  };

  const openEditModal = (service: ServiceResponse) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description,
      price: service.price.toString(),
      features: service.features.length > 0 ? service.features : [''],
      isActive: service.isActive
    });
    setIsCreateModalOpen(true);
  };

  const closeModal = () => {
    setIsCreateModalOpen(false);
    setEditingService(null);
    setFormData({
      title: '',
      description: '',
      price: '',
      features: [''],
      isActive: true
    });
  };

  const filteredServices = services.filter(s =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Offres de Services</h1>
            <p className="text-gray-500 mt-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              {services.length} service{services.length > 1 ? 's' : ''} disponible{services.length > 1 ? 's' : ''}
            </p>
          </div>
          <Button onClick={() => setIsCreateModalOpen(true)} leftIcon={Plus} className="bg-[#1877F2] text-white shadow-lg shadow-blue-500/20">
            Créer un Service
          </Button>
        </div>

        {/* Search */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                  type="text"
                  placeholder="Rechercher un service..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#1877F2]/20 outline-none transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Grid */}
        {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 text-[#1877F2] animate-spin" />
            </div>
        ) : filteredServices.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Aucun service</h3>
              <p className="text-gray-500 mb-6">Créez votre première offre de service pour vos membres.</p>
              <Button onClick={() => setIsCreateModalOpen(true)}>Créer un service</Button>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredServices.map((service) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        layout
                    >
                      <Card className="h-full border-0 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col">
                        {/* Decorative Header */}
                        <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>

                        <CardContent className="p-6 flex-1 flex flex-col">
                          <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-50 rounded-xl text-[#1877F2]">
                              <Zap className="w-6 h-6" />
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                  onClick={() => openEditModal(service)}
                                  className="p-2 text-gray-400 hover:text-[#1877F2] hover:bg-blue-50 rounded-lg transition-colors"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button
                                  onClick={() => handleDelete(service.id)}
                                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                          <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-1">
                            {service.description}
                          </p>

                          <div className="space-y-3 mb-6">
                            {service.features.slice(0, 3).map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                            ))}
                            {service.features.length > 3 && (
                                <p className="text-xs text-gray-400 pl-6">
                                  +{service.features.length - 3} autres avantages
                                </p>
                            )}
                          </div>

                          <div className="pt-6 mt-auto border-t border-gray-100 flex items-center justify-between">
                            <div>
                              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Tarif</p>
                              <p className="text-2xl font-bold text-[#1877F2]">
                                {service.price.toLocaleString()} <span className="text-sm font-normal text-gray-500">FCFA</span>
                              </p>
                            </div>
                            <Badge variant={service.isActive ? 'success' : 'default'}>
                              {service.isActive ? 'Actif' : 'Inactif'}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                ))}
              </AnimatePresence>
            </div>
        )}

        {/* MODALE CRÉATION / ÉDITION */}
        <AnimatePresence>
          {isCreateModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden max-h-[90vh] overflow-y-auto"
                >
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                    <h3 className="text-xl font-bold text-gray-900">
                      {editingService ? 'Modifier le service' : 'Nouveau Service'}
                    </h3>
                    <button onClick={closeModal}><X className="w-5 h-5 text-gray-500" /></button>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <Input
                        label="Nom du service *"
                        placeholder="Ex: Assistance Juridique"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        required
                    />

                    <Input
                        label="Prix (FCFA) *"
                        type="number"
                        placeholder="Ex: 15000"
                        value={formData.price}
                        onChange={(e) => setFormData({...formData, price: e.target.value})}
                        required
                    />

                    <TextArea
                        label="Description complète *"
                        placeholder="Détaillez ce que comprend ce service..."
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        required
                        className="min-h-[120px]"
                    />

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-medium text-gray-700">Caractéristiques clés</label>
                        <button
                            type="button"
                            onClick={addFeatureField}
                            className="text-xs text-[#1877F2] font-semibold hover:underline"
                        >
                          + Ajouter
                        </button>
                      </div>
                      <div className="space-y-2">
                        {formData.features.map((feature, idx) => (
                            <div key={idx} className="flex gap-2">
                              <Input
                                  placeholder={`Avantage ${idx + 1}`}
                                  value={feature}
                                  onChange={(e) => handleFeatureChange(idx, e.target.value)}
                              />
                              {formData.features.length > 1 && (
                                  <button
                                      type="button"
                                      onClick={() => removeFeatureField(idx)}
                                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                              )}
                            </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end gap-3 border-t border-gray-100 mt-6">
                      <Button type="button" variant="ghost" onClick={closeModal}>
                        Annuler
                      </Button>
                      <Button type="submit" isLoading={isActionLoading}>
                        {editingService ? 'Mettre à jour' : 'Publier le service'}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              </div>
          )}
        </AnimatePresence>
      </div>
  );
};