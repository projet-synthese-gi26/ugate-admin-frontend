'use client';

import React, { useState } from 'react';
import { Plus, CheckCircle, ArrowRight, Edit3, Trash2, Star, Users, Clock, DollarSign, TrendingUp, X, Save, Zap, Award, Target, Shield } from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Input } from './ui/Input';
import { MOCK_SERVICES } from '@/lib/constants';
import { Service } from '@/lib/types';
import Image from 'next/image';

export const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>(MOCK_SERVICES);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    features: ['', '', ''],
  });

  const handleSave = () => {
    const newService: Service = {
      id: String(services.length + 1),
      title: formData.title,
      description: formData.description,
      price: formData.price,
      images: ['https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop'],
      features: formData.features.filter(f => f.trim() !== ''),
    };
    setServices([...services, newService]);
    setIsCreating(false);
    setFormData({ title: '', description: '', price: '', features: ['', '', ''] });
  };

  const handleDelete = (id: string) => {
    setServices(services.filter(s => s.id !== id));
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
            <Button onClick={handleSave} leftIcon={Save}>Publier le Service</Button>
          </div>

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
            <Button variant="ghost" size="sm" onClick={() => setSelectedService(null)}>
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

              <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white">
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
        <Button onClick={() => setIsCreating(true)} leftIcon={Plus} className="shadow-lg shadow-purple-500/20 bg-gradient-to-r from-purple-500 to-purple-600">
          Créer un Service
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <Zap className="w-8 h-8 mb-3 opacity-80" />
            <p className="text-blue-100 text-sm mb-1">Services Actifs</p>
            <p className="text-3xl font-bold">{services.length}</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <CardContent className="p-6">
            <Users className="w-8 h-8 mb-3 opacity-80" />
            <p className="text-emerald-100 text-sm mb-1">Clients Servis</p>
            <p className="text-3xl font-bold">234</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <DollarSign className="w-8 h-8 mb-3 opacity-80" />
            <p className="text-purple-100 text-sm mb-1">Revenus</p>
            <p className="text-3xl font-bold">28,500 €</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6">
            <Star className="w-8 h-8 mb-3 opacity-80" />
            <p className="text-orange-100 text-sm mb-1">Satisfaction</p>
            <p className="text-3xl font-bold">4.8/5</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => {
          const gradients = [
            'from-blue-500 to-blue-600',
            'from-purple-500 to-purple-600',
            'from-emerald-500 to-emerald-600',
          ];
          const icons = [Shield, Award, Target];
          const Icon = icons[idx % icons.length];
          
          return (
            <Card 
              key={service.id} 
              className="border-0 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className={`relative h-48 bg-gradient-to-br ${gradients[idx % gradients.length]} p-8 text-white`}>
                <div className="absolute top-6 right-6 opacity-20">
                  <Icon className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                  <Badge className="bg-white/20 backdrop-blur text-white border-0 mb-4">
                    Service Premium
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-3xl font-bold">{service.price}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 pt-4 border-t border-gray-100">
                  <Button 
                    variant="primary" 
                    className="flex-1 group-hover:shadow-lg transition-shadow"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                    }}
                  >
                    Voir Détails
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="md"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(service.id);
                    }}
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}

        <button
          onClick={() => setIsCreating(true)}
          className="group border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center p-8 hover:border-purple-500 hover:bg-purple-50/30 transition-all duration-300 min-h-[400px]"
        >
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
            <Plus className="w-8 h-8 text-white" />
          </div>
          <span className="font-bold text-gray-900 text-lg">Créer un Service</span>
          <span className="text-sm text-gray-500 mt-1">Ajoutez une nouvelle offre</span>
        </button>
      </div>
    </div>
  );
};
