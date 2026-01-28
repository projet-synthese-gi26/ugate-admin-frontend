'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Plus, CheckCircle, Edit3, Trash2, Star, Users, Clock, DollarSign, X, Save, Eye, Zap } from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Input } from './ui/Input';
import { MOCK_SERVICES } from '@/lib/constants';
import { Service } from '@/lib/types';
import { ServiceItem } from '@/lib/types/services';
import { getAllActiveServices, createService, updateService, deleteService } from '@/lib/services/services.service';
import Image from 'next/image';

export const Services: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [services, setServices] = useState<Service[]>(MOCK_SERVICES);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    features: ['', '', ''],
  });

  // Charger les services réels depuis l'API au montage du composant
  useEffect(() => {
    loadServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadServices = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const apiServices = await getAllActiveServices();
      
      // Combiner les services fictifs avec les services réels de l'API
      const mockServicesWithFlag = MOCK_SERVICES.map(s => ({
        ...s,
        isMock: true
      }));
      
      const combinedServices = [...mockServicesWithFlag, ...apiServices];
      setServices(combinedServices as Service[]);
      
      console.log(`✅ ${apiServices.length} service(s) réel(s) + ${MOCK_SERVICES.length} service(s) fictif(s)`);
    } catch (err) {
      console.error('❌ Erreur lors du chargement des services:', err);
      setError('Impossible de charger les services depuis l\'API. Affichage des services fictifs uniquement.');
      // Garder les services fictifs en cas d'erreur
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    // Validation des champs obligatoires
    if (!formData.title || !formData.description || !formData.price) {
      setError('Veuillez remplir tous les champs obligatoires (Titre, Description, Prix)');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      const serviceData = {
        title: formData.title,
        description: formData.description,
        price: parseFloat(formData.price.replace(/[^0-9.]/g, '')), // Extraire le nombre du prix
        features: formData.features.filter(f => f.trim() !== ''),
        isActive: true
      };
      
      console.log('📦 Création du service:', serviceData);
      
      const createdService = await createService(serviceData);
      
      // Ajouter le nouveau service à la liste
      const newService: Service = {
        id: createdService.id,
        title: createdService.title,
        description: createdService.description,
        price: `${createdService.price} €`,
        images: ['https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop'],
        features: createdService.features,
      };
      
      setServices([...services, newService]);
      setIsCreating(false);
      setFormData({ title: '', description: '', price: '', features: ['', '', ''] });
      
      console.log('✅ Service créé et ajouté à la liste');
    } catch (err) {
      console.error('❌ Erreur lors de la création:', err);
      setError('Impossible de créer le service. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const serviceId = searchParams.get('service');
    if (serviceId) {
      const service = services.find(s => s.id === serviceId);
      if (service && (!selectedService || selectedService.id !== serviceId)) {
        setSelectedService(service);
      }
    } else if (selectedService) {
      setSelectedService(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, services]);

  const handleSelectService = (service: Service) => {
    router.push(`/services?service=${service.id}`);
    setSelectedService(service);
  };

  const handleBackToList = () => {
    router.push('/services');
    setSelectedService(null);
  };

  const handleDelete = async (id: string) => {
    const service = services.find(s => s.id === id);
    
    // Si c'est un service fictif, suppression locale uniquement
    if (service && (service as any).isMock) {
      setServices(services.filter(s => s.id !== id));
      return;
    }
    
    // Si c'est un service réel, appeler l'API
    try {
      setIsLoading(true);
      await deleteService(id);
      setServices(services.filter(s => s.id !== id));
      console.log('✅ Service supprimé avec succès');
    } catch (err) {
      console.error('❌ Erreur lors de la suppression:', err);
      setError('Impossible de supprimer le service. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ''] });
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const removeFeature = (index: number) => {
    setFormData({ ...formData, features: formData.features.filter((_, i) => i !== index) });
  };

  if (isCreating) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => setIsCreating(false)}>
                <X className="w-4 h-4 mr-1" /> Annuler
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Créer un Service</h1>
                <p className="text-sm text-gray-500">Définissez votre offre de service</p>
              </div>
            </div>
            <Button onClick={handleSave} leftIcon={Save} disabled={isLoading}>
              {isLoading ? 'Enregistrement...' : 'Publier le Service'}
            </Button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <div>
                <p className="text-sm font-medium text-red-800">Erreur</p>
                <p className="text-sm text-red-600">{error}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 space-y-6">
                <Input 
                  label="Nom du service *"
                  placeholder="Ex: Consultation Juridique"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
                
                <Input 
                  label="Tarif *"
                  placeholder="Ex: 120 € / heure"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                  <textarea
                    className="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all min-h-[120px]"
                    placeholder="Décrivez le service en détail..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-sm font-medium text-gray-700">Caractéristiques</label>
                    <Button variant="ghost" size="sm" onClick={addFeature}>
                      <Plus className="w-4 h-4 mr-1" /> Ajouter
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {formData.features.map((feature, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          placeholder="Ex: Confidentiel"
                          value={feature}
                          onChange={(e) => updateFeature(index, e.target.value)}
                        />
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => removeFeature(index)}
                          className="text-red-600"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl sticky top-24">
              <CardContent className="p-8">
                <h3 className="font-bold text-gray-900 mb-4">Aperçu</h3>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                  <h4 className="text-2xl font-bold mb-2">{formData.title || 'Nom du service'}</h4>
                  <p className="text-blue-100 mb-6">{formData.description || 'Description du service'}</p>
                  <div className="text-3xl font-bold mb-6">{formData.price || 'Prix à définir'}</div>
                  <div className="space-y-2">
                    {formData.features.filter(f => f.trim() !== '').map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (selectedService) {
    return (
      <div className="animate-in fade-in duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Button variant="ghost" size="sm" onClick={handleBackToList}>
              <X className="w-4 h-4 mr-1" /> Fermer
            </Button>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" leftIcon={Edit3}>Modifier</Button>
              <Button variant="outline" size="sm" className="text-red-600 border-red-200" leftIcon={Trash2}>
                Supprimer
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <div className="relative h-64">
                  <Image 
                    src={selectedService.images[0]} 
                    alt={selectedService.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl"></div>
                  <div className="absolute bottom-6 left-6">
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                    <p className="text-2xl font-bold text-blue-300">{selectedService.price}</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{selectedService.description}</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Caractéristiques</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-3 bg-blue-50 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span className="font-medium text-gray-900">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-xl">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle>Statistiques</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Réservations</span>
                      <span className="font-bold text-gray-900">45</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Revenus</span>
                      <span className="font-bold text-emerald-600">5,400 €</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Satisfaction</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold">4.9</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Actions</h3>
                  <div className="space-y-2">
                    <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30 text-white border-0">
                      Gérer les réservations
                    </Button>
                    <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30 text-white border-0">
                      Voir les avis
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Services Professionnels
          </h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            <Zap className="w-4 h-4" />
            {services.length} service{services.length > 1 ? 's' : ''} disponible{services.length > 1 ? 's' : ''}
          </p>
        </div>
        <Button onClick={() => setIsCreating(true)} leftIcon={Plus} className="shadow-lg shadow-blue-500/20 bg-gradient-to-r from-blue-500 to-blue-600">
          Créer un Service
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-sky-400 to-sky-500 text-white">
          <CardContent className="p-6">
            <Users className="w-8 h-8 mb-3 opacity-80" />
            <p className="text-sky-100 text-sm mb-1">Services Actifs</p>
            <p className="text-3xl font-bold">{services.length}</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-sky-400 to-sky-500 text-white">
          <CardContent className="p-6">
            <Clock className="w-8 h-8 mb-3 opacity-80" />
            <p className="text-sky-100 text-sm mb-1">Réservations</p>
            <p className="text-3xl font-bold">142</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-sky-400 to-sky-500 text-white">
          <CardContent className="p-6">
            <DollarSign className="w-8 h-8 mb-3 opacity-80" />
            <p className="text-sky-100 text-sm mb-1">Revenus</p>
            <p className="text-3xl font-bold">28,500 €</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-sky-400 to-sky-500 text-white">
          <CardContent className="p-6">
            <Star className="w-8 h-8 mb-3 opacity-80" />
            <p className="text-sky-100 text-sm mb-1">Satisfaction</p>
            <p className="text-3xl font-bold">4.8/5</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((service) => (
            <Card 
              key={service.id} 
              className="border-0 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => handleSelectService(service)}
            >
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <Image 
                  src={service.images[0]} 
                  alt={service.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                
                <div className="absolute top-3 left-3">
                  <Badge className="bg-sky-500 text-white border-0">
                    Service Premium
                  </Badge>
                </div>

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                  <button 
                    className="p-3 bg-white text-gray-700 rounded-xl hover:text-sky-600 hover:scale-110 transition-all shadow-xl"
                    onClick={(e) => { e.stopPropagation(); handleSelectService(service); }}
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button 
                    className="p-3 bg-white text-gray-700 rounded-xl hover:text-red-600 hover:scale-110 transition-all shadow-xl"
                    onClick={(e) => { e.stopPropagation(); handleDelete(service.id); }}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">{service.title}</h3>
                <p className="text-2xl font-bold text-sky-600 mb-4">{service.price}</p>
                <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-sky-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
};
