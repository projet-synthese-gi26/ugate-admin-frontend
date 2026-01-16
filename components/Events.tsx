'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Calendar, MapPin, Users, Edit3, Trash2, Plus, Image as ImageIcon, Save, X, ChevronLeft, Search, Filter, Grid, List, Clock, Tag, Share2, Download, Eye, Copy, TrendingUp, Upload, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Input } from './ui/Input';
import { Card, CardContent } from './ui/Card';
import { BranchSelector } from './BranchSelector';
import { Branch, EventItem } from '@/lib/types/events';
import { getEventsByBranch, createEvent } from '@/lib/services/events.service';
import { useAuth } from '@/lib/contexts/AuthContext';
import { getMockEventsByBranch } from '@/lib/constants/mockEvents';
import { BRANCHES } from '@/lib/constants/branches';
import Image from 'next/image';

interface EventsProps {
  autoOpenCreate?: boolean;
}

export const Events: React.FC<EventsProps> = ({ autoOpenCreate = false }) => {
  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [isCreating, setIsCreating] = useState(autoOpenCreate);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    startTime: '',
    endTime: '',
  });

  // Restaurer la branche depuis l'URL au chargement
  useEffect(() => {
    const branchId = searchParams.get('branch');
    if (branchId && !selectedBranch) {
      const branch = BRANCHES.find(b => b.id === branchId);
      if (branch) {
        setSelectedBranch(branch);
      }
    }
  }, [searchParams, selectedBranch]);

  // Charger les événements quand une branche est sélectionnée
  useEffect(() => {
    if (selectedBranch) {
      loadEvents(selectedBranch.id);
    }
  }, [selectedBranch]);

  // Restaurer l'événement sélectionné depuis l'URL après le chargement des événements
  useEffect(() => {
    const eventId = searchParams.get('event');
    if (eventId && events.length > 0 && !selectedEvent) {
      const event = events.find(e => e.id === eventId);
      if (event) {
        setSelectedEvent(event);
      }
    }
  }, [searchParams, events, selectedEvent]);

  const loadEvents = async (branchId: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedEvents = await getEventsByBranch(branchId);
      
      // Si l'API retourne des événements, les utiliser
      if (fetchedEvents && fetchedEvents.length > 0) {
        setEvents(fetchedEvents);
      } else {
        // Sinon, charger les événements fictifs pour tester l'interface
        console.log('📝 Aucun événement réel trouvé, chargement des événements fictifs...');
        const mockEvents = getMockEventsByBranch(branchId);
        setEvents(mockEvents);
      }
    } catch (err) {
      console.error('Erreur lors du chargement des événements:', err);
      
      // En cas d'erreur, charger les événements fictifs
      console.log('📝 Chargement des événements fictifs suite à l\'erreur...');
      const mockEvents = getMockEventsByBranch(branchId);
      setEvents(mockEvents);
      
      setError('Événements fictifs affichés. Les vrais événements seront disponibles une fois l\'API configurée.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToBranches = () => {
    router.push('/events');
    setSelectedBranch(null);
    setEvents([]);
    setSelectedEvent(null);
    setIsCreating(false);
    setError(null);
  };

  const handleSelectEvent = (event: EventItem) => {
    if (selectedBranch) {
      router.push(`/events?branch=${selectedBranch.id}&event=${event.id}`);
    }
    setSelectedEvent(event);
  };

  const handleBackToEventList = () => {
    if (selectedBranch) {
      router.push(`/events?branch=${selectedBranch.id}`);
    }
    setSelectedEvent(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (!selectedBranch || !user) return;

    // Validation côté client
    if (!formData.title || formData.title.trim() === '') {
      setError('Le titre est obligatoire');
      return;
    }
    if (!formData.description || formData.description.trim() === '') {
      setError('La description est obligatoire');
      return;
    }
    if (!formData.date) {
      setError('La date est obligatoire');
      return;
    }
    if (!formData.location || formData.location.trim() === '') {
      setError('Le lieu est obligatoire');
      return;
    }
    if (!formData.startTime) {
      setError('L\'heure de début est obligatoire');
      return;
    }
    if (!formData.endTime) {
      setError('L\'heure de fin est obligatoire');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      const dataToSend = {
        creatorId: user.id,
        branchId: selectedBranch.id,
        title: formData.title,
        description: formData.description,
        eventDate: formData.date,
        location: formData.location,
        startTime: formData.startTime,
        endTime: formData.endTime
      };
      console.log('📝 Envoi des données:', JSON.stringify(dataToSend, null, 2));
      console.table(dataToSend);
      
      await createEvent({
        creatorId: user.id,
        branchId: selectedBranch.id,
        title: formData.title,
        description: formData.description,
        eventDate: formData.date,
        location: formData.location,
        startTime: formData.startTime,
        endTime: formData.endTime
        // Note: images/videos/files seront ajoutés plus tard avec un vrai upload de fichiers
      });
      
      // Recharger les événements
      await loadEvents(selectedBranch.id);
      
      setIsCreating(false);
      setUploadedImage(null);
      setFormData({ title: '', description: '', date: '', location: '', startTime: '', endTime: '' });
    } catch (err) {
      console.error('Erreur lors de la création:', err);
      setError('Impossible de créer l\'événement. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = (id: string) => {
    // TODO: Implémenter la suppression via API
    setEvents(events.filter(e => e.id !== id));
  };

  const handleDuplicate = (event: EventItem) => {
    // TODO: Implémenter la duplication via API
    console.log('Duplication de:', event.title);
  };

  const applyFormatting = (command: string) => {
    document.execCommand(command, false);
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  // Si aucune branche n'est sélectionnée, afficher le sélecteur
  if (!selectedBranch) {
    return <BranchSelector onSelectBranch={setSelectedBranch} />;
  }

  if (isCreating) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8 sticky top-0 bg-gray-50/95 backdrop-blur-xl z-20 py-4 border-b border-gray-200/50 -mx-4 px-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => setIsCreating(false)}>
                <ChevronLeft className="w-4 h-4 mr-1" /> Retour
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Créer un Événement</h1>
                <p className="text-sm text-gray-500">Remplissez tous les détails de votre événement</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button variant="secondary" onClick={() => setIsCreating(false)}>Annuler</Button>
              <Button onClick={handleSave} leftIcon={Save}>Publier l&apos;événement</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5 text-blue-600" />
                      Informations Générales
                    </h3>
                    <div className="space-y-4">
                      <Input 
                        label="Titre de l'événement *" 
                        placeholder="Ex: Assemblée Générale Annuelle 2024"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        className="text-lg font-semibold"
                      />
                      
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-emerald-600" />
                      Date et Lieu
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        type="date" 
                        label="Date *"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                      <Input 
                        type="time" 
                        label="Heure de début *"
                        value={formData.startTime}
                        onChange={(e) => setFormData({...formData, startTime: e.target.value})}
                      />
                      <Input 
                        type="time" 
                        label="Heure de fin *"
                        value={formData.endTime}
                        onChange={(e) => setFormData({...formData, endTime: e.target.value})}
                      />
                      <div className="md:col-span-2">
                        <Input 
                          type="text" 
                          label="Lieu *" 
                          placeholder="Ex: Centre de Conférences, Salle A"
                          value={formData.location}
                          onChange={(e) => setFormData({...formData, location: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description complète *</label>
                    <div className="border border-gray-300 rounded-xl overflow-hidden focus-within:ring-4 focus-within:ring-blue-500/10 focus-within:border-blue-500 transition-all">
                      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                        <button 
                          type="button"
                          onClick={() => applyFormatting('bold')}
                          className="p-2 hover:bg-gray-200 rounded text-gray-600 transition-colors font-bold"
                          title="Gras (Ctrl+B)"
                        >
                          B
                        </button>
                        <button 
                          type="button"
                          onClick={() => applyFormatting('italic')}
                          className="p-2 hover:bg-gray-200 rounded text-gray-600 transition-colors italic"
                          title="Italique (Ctrl+I)"
                        >
                          I
                        </button>
                        <button 
                          type="button"
                          onClick={() => applyFormatting('underline')}
                          className="p-2 hover:bg-gray-200 rounded text-gray-600 transition-colors underline"
                          title="Souligné (Ctrl+U)"
                        >
                          U
                        </button>
                        <div className="w-px h-6 bg-gray-300 mx-1"></div>
                        <button 
                          type="button"
                          onClick={() => applyFormatting('insertUnorderedList')}
                          className="p-2 hover:bg-gray-200 rounded text-gray-600 transition-colors"
                          title="Liste à puces"
                        >
                          ≡
                        </button>
                        <button 
                          type="button"
                          onClick={() => applyFormatting('insertOrderedList')}
                          className="p-2 hover:bg-gray-200 rounded text-gray-600 transition-colors"
                          title="Liste numérotée"
                        >
                          1.
                        </button>
                      </div>
                      <div
                        contentEditable
                        suppressContentEditableWarning
                        className="w-full p-4 focus:outline-none min-h-[200px] text-sm text-gray-800 resize-y"
                        onInput={(e) => setFormData({...formData, description: e.currentTarget.textContent || ''})}
                        data-placeholder="Décrivez votre événement en détail : objectifs, programme, intervenants..."
                        style={{
                          whiteSpace: 'pre-wrap',
                        }}
                      />
                    </div>
                    <style jsx>{`
                      [contentEditable][data-placeholder]:empty:before {
                        content: attr(data-placeholder);
                        color: #9CA3AF;
                        pointer-events: none;
                        position: absolute;
                      }
                    `}</style>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-purple-600" />
                    Image de Couverture
                  </h3>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  
                  {uploadedImage ? (
                    <div className="relative rounded-2xl overflow-hidden group">
                      <Image 
                        src={uploadedImage} 
                        alt="Preview"
                        width={800}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                        <Button 
                          variant="secondary"
                          size="sm"
                          onClick={() => fileInputRef.current?.click()}
                          className="bg-white/90 hover:bg-white"
                        >
                          <Upload className="w-4 h-4 mr-2" />
                          Changer
                        </Button>
                        <Button 
                          variant="secondary"
                          size="sm"
                          onClick={() => setUploadedImage(null)}
                          className="bg-red-500/90 hover:bg-red-600 text-white border-0"
                        >
                          <X className="w-4 h-4 mr-2" />
                          Supprimer
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-blue-500 hover:bg-blue-50/30 transition-all cursor-pointer group"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <Upload className="w-8 h-8" />
                      </div>
                      <p className="text-base font-semibold text-gray-900 mb-1">Cliquez pour uploader ou glissez-déposez</p>
                      <p className="text-sm text-gray-500">PNG, JPG, GIF jusqu&apos;à 10MB - Recommandé: 1920x1080px</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Aperçu en Direct
                  </h3>
                  <Badge variant="info">Brouillon</Badge>
                </div>
                
                <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-2xl overflow-hidden transform scale-95 origin-top transition-all hover:scale-100">
                  <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                    {uploadedImage ? (
                      <Image 
                        src={uploadedImage} 
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-400">
                        <ImageIcon className="w-16 h-16" />
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/95 backdrop-blur shadow-lg border-0">
                        {formData.date ? new Date(formData.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' }) : 'Date à définir'}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="success" className="text-xs">Nouveau</Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {formData.title || "Titre de l'événement"}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {formData.description || "La description de votre événement apparaîtra ici..."}
                    </p>
                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        {formData.location || "Lieu à définir"}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-gray-400" />
                        {formData.capacity ? `${formData.capacity} places` : "Capacité illimitée"}
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="mt-6 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      Conseils Pro
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>Utilisez un titre accrocheur et descriptif</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>Ajoutez une image de haute qualité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>Précisez le programme et les intervenants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>Indiquez clairement la date limite d&apos;inscription</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedEvent) {
    return (
      <div className="animate-in fade-in duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Button variant="ghost" size="sm" onClick={handleBackToEventList}>
              <ChevronLeft className="w-4 h-4 mr-1" /> Retour à la liste
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" leftIcon={Share2}>Partager</Button>
              <Button variant="outline" size="sm" leftIcon={Download}>Exporter</Button>
              <Button variant="secondary" size="sm" leftIcon={Edit3}>Modifier</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="relative h-96">
                  <Image 
                    src={selectedEvent.images?.[0] || '/placeholder-event.jpg'} 
                    alt={selectedEvent.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-white/90 backdrop-blur">
                        {selectedEvent.status === 'active' ? 'Actif' : 'Brouillon'}
                      </Badge>
                      <Badge variant="success" className="bg-white/90 backdrop-blur border-0">
                        {selectedEvent.participantCount} inscrits
                      </Badge>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">{selectedEvent.title}</h1>
                    <div className="flex items-center gap-4 text-white/90">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(selectedEvent.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {selectedEvent.location}
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedEvent.description}</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Statistiques</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Participants</span>
                      <span className="font-bold text-gray-900">{selectedEvent.participantCount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Vues</span>
                      <span className="font-bold text-gray-900">1,234</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Taux de conversion</span>
                      <span className="font-bold text-emerald-600">12.5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Actions Rapides</h3>
                  <div className="space-y-2">
                    <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30 text-white border-0">
                      Envoyer une notification
                    </Button>
                    <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30 text-white border-0">
                      Gérer les inscriptions
                    </Button>
                    <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30 text-white border-0">
                      Voir les participants
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
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={handleBackToBranches}>
            <ChevronLeft className="w-4 h-4 mr-1" /> Changer de branche
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Événements - {selectedBranch.name}
            </h1>
            <p className="text-gray-500 mt-1 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {filteredEvents.length} événement{filteredEvents.length > 1 ? 's' : ''}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="flex gap-2 bg-white rounded-xl p-1 border border-gray-200 shadow-sm">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
          <Button variant="outline" size="md" leftIcon={Filter}>
            Filtres
          </Button>
          <Button onClick={() => setIsCreating(true)} leftIcon={Plus} className="shadow-lg shadow-blue-500/20">
            Créer un Événement
          </Button>
        </div>
      </div>

      <Card className="border-0 shadow-xl">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher un événement..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-red-700">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          </CardContent>
        </Card>
      )}

      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Chargement des événements...</p>
          </div>
        </div>
      ) : filteredEvents.length === 0 ? (
        <Card className="border-0 shadow-xl">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Aucun événement</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery ? 'Aucun événement ne correspond à votre recherche.' : 'Cette branche n\'a pas encore d\'événements.'}
            </p>
            <Button leftIcon={Plus} onClick={() => setIsCreating(true)}>
              Créer le premier événement
            </Button>
          </CardContent>
        </Card>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div 
              key={event.id} 
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer"
              onClick={() => handleSelectEvent(event)}
            >
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <Calendar className="w-12 h-12 opacity-50" />
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className="bg-white/95 backdrop-blur shadow-lg border-0">
                    {new Date(event.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed flex-1">
                  {event.description}
                </p>
                
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {event.location}
                    </span>
                    <span className="flex items-center text-gray-600 font-semibold">
                      <Users className="w-4 h-4 mr-2 text-gray-400" />
                      {event.participantCount}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.startTime} - {event.endTime}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="flex-1" 
                    leftIcon={Edit3}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectEvent(event);
                    }}
                  >
                    Éditer
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="px-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDuplicate(event);
                    }}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="px-3 text-red-600 border-red-200 hover:bg-red-50"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(event.id);
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Card className="border-0 shadow-xl">
          <div className="divide-y divide-gray-100">
            {filteredEvents.map((event) => (
              <div 
                key={event.id}
                className="p-6 hover:bg-blue-50/30 transition-all cursor-pointer group"
                onClick={() => handleSelectEvent(event)}
              >
                <div className="flex items-center gap-6">
                  <div className="relative w-32 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <Image 
                      src={event.images?.[0] || '/placeholder-event.jpg'} 
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {event.title}
                      </h3>
                      <Badge variant={event.status === 'active' ? 'success' : 'default'}>
                        {event.status === 'active' ? 'Actif' : 'Brouillon'}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-1">{event.description}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString('fr-FR')}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {event.participantCount} participants
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); handleDuplicate(event); }}>
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); handleDelete(event.id); }}>
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};
