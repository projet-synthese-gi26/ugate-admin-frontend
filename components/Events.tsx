'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar, MapPin, Users, Plus, Image as ImageIcon,
  ChevronLeft, Search, Clock, Video, Building2,
  ChevronDown, Loader2, AlertCircle
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card } from './ui/Card';
import { Input, TextArea } from './ui/Input';
import { useAuth } from '@/lib/contexts/AuthContext';
import {
  getEventsByBranch,
  createEvent,
  getEventParticipants,
  formatLocalTime,
  formatDateFr,
  EventItem,
  CreateEventDTO,
  EventParticipant
} from '@/lib/services/events.service';
import { getSyndicateBranches, SyndicateBranch } from '@/lib/services/admin.service';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Composant Vidéo robuste
const VideoPlayer: React.FC<{
  src: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
  onError?: () => void;
  onSuccess?: () => void;
}> = ({ src, autoPlay = false, muted = true, loop = false, controls = true, className = "", onError, onSuccess }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleError = () => {
    console.error('❌ Erreur chargement vidéo:', src);
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  const handleLoadedData = () => {
    console.log('✅ Vidéo chargée:', src);
    setIsLoading(false);
    setHasError(false);
    onSuccess?.();
  };

  useEffect(() => {
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  if (hasError) {
    return null;
  }

  return (
      <video
          ref={videoRef}
          className={className}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
          playsInline
          preload="metadata"
          onError={handleError}
          onLoadedData={handleLoadedData}
          onLoadedMetadata={handleLoadedData}
          style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}
      >
        <source src={src} type="video/mp4" />
        <source src={src} type="video/webm" />
      </video>
  );
};

// Composant Média Universel avec skeleton au lieu de spinner
const UniversalMedia: React.FC<{
  src: string;
  alt: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
  showVideoIcon?: boolean;
  isCard?: boolean;
}> = ({ src, alt, autoPlay = false, muted = true, loop = false, controls = true, className = "", showVideoIcon = false, isCard = false }) => {
  const [mediaType, setMediaType] = useState<'video' | 'image'>('video');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleVideoError = () => {
    console.log('⚠️ Pas une vidéo, essai en tant qu\'image:', src);
    setMediaType('image');
  };

  const handleVideoSuccess = () => {
    console.log('✅ Confirmé: Vidéo:', src);
    setIsLoading(false);
  };

  const handleImageError = () => {
    console.error('❌ Média complètement non chargeable:', src);
    setHasError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    console.log('✅ Confirmé: Image:', src);
    setIsLoading(false);
  };

  if (hasError) {
    return (
        <div className={`bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center ${className}`}>
          <div className="text-center">
            <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-2" />
            <p className="text-xs text-slate-400">Média indisponible</p>
          </div>
        </div>
    );
  }

  return (
      <div className={`relative ${className}`}>
        {/* Skeleton subtil - seulement pour les cards */}
        {isLoading && isCard && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
        )}

        {/* Spinner pour la vue détails */}
        {isLoading && !isCard && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
        )}

        {mediaType === 'video' ? (
            <>
              <VideoPlayer
                  src={src}
                  autoPlay={autoPlay}
                  muted={muted}
                  loop={loop}
                  controls={controls}
                  className="w-full h-full object-cover"
                  onError={handleVideoError}
                  onSuccess={handleVideoSuccess}
              />
              {showVideoIcon && !isLoading && (
                  <div className="absolute top-2 right-2 bg-black/50 p-1.5 rounded-full backdrop-blur-sm z-20">
                    <Video className="w-3 h-3 text-white" />
                  </div>
              )}
            </>
        ) : (
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                onError={handleImageError}
                onLoad={handleImageLoad}
                style={{ opacity: isLoading ? 0 : 1 }}
            />
        )}
      </div>
  );
};

export const Events: React.FC = () => {
  const { syndicateStatus, user } = useAuth();

  // Données
  const [branches, setBranches] = useState<SyndicateBranch[]>([]);
  const [selectedBranchId, setSelectedBranchId] = useState<string>('');
  const [events, setEvents] = useState<EventItem[]>([]);
  const [participants, setParticipants] = useState<EventParticipant[]>([]);

  // États UI
  const [view, setView] = useState<'list' | 'create' | 'details'>('list');
  const [isLoading, setIsLoading] = useState(true);
  const [isEventsLoading, setIsEventsLoading] = useState(false);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // États Médias (Création)
  const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const mediaInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    location: ''
  });

  // 1. Charger les branches au montage
  useEffect(() => {
    let isMounted = true;
    const init = async () => {
      if (!syndicateStatus?.syndicateId) return;
      try {
        const branchesData = await getSyndicateBranches(syndicateStatus.syndicateId);
        if (isMounted) {
          setBranches(branchesData || []);
          if (branchesData && branchesData.length > 0) {
            setSelectedBranchId(branchesData[0].id);
          }
        }
      } catch (error) {
        console.error("Erreur chargement branches:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    init();
    return () => { isMounted = false; };
  }, [syndicateStatus?.syndicateId]);

  // 2. Charger les événements quand la branche change
  useEffect(() => {
    if (!selectedBranchId) return;
    let isMounted = true;

    const fetchEvents = async () => {
      setIsEventsLoading(true);
      try {
        const data = await getEventsByBranch(selectedBranchId);
        if (isMounted) setEvents(data || []);
      } catch (error) {
        console.error("Erreur chargement événements:", error);
        if (isMounted) setEvents([]);
      } finally {
        if (isMounted) setIsEventsLoading(false);
      }
    };
    fetchEvents();
    return () => { isMounted = false; };
  }, [selectedBranchId]);

  // --- Handlers ---

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type.startsWith('video/')) {
      setMediaType('video');
      setVideoFile(file);
      setImageFile(null);
    } else {
      setMediaType('image');
      setImageFile(file);
      setVideoFile(null);
    }
    setMediaPreview(URL.createObjectURL(file));
  };

  const handleCreateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBranchId || !user) return;

    setIsActionLoading(true);
    try {
      const payload: CreateEventDTO = {
        creatorId: user.id,
        branchId: selectedBranchId,
        title: formData.title,
        description: formData.description,
        eventDate: formData.date,
        location: formData.location,
        startTime: formData.startTime,
        endTime: formData.endTime
      };

      await createEvent(payload, imageFile || undefined, videoFile || undefined);

      // Rafraichir la liste
      const updatedEvents = await getEventsByBranch(selectedBranchId);
      setEvents(updatedEvents || []);

      setView('list');
      resetForm();
    } catch (error) {
      alert("Erreur lors de la création.");
    } finally {
      setIsActionLoading(false);
    }
  };

  const handleViewDetails = async (event: EventItem) => {
    setSelectedEvent(event);
    setView('details');
    try {
      const parts = await getEventParticipants(event.id);
      setParticipants(parts || []);
    } catch (error) {
      setParticipants([]);
    }
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', date: '', startTime: '', endTime: '', location: '' });
    setImageFile(null);
    setVideoFile(null);
    setMediaPreview(null);
    setMediaType(null);
  };

  const currentBranchName = branches.find(b => b.id === selectedBranchId)?.name || '...';
  const filteredEvents = events.filter(e => e.title.toLowerCase().includes(searchQuery.toLowerCase()));

  if (isLoading) {
    return <div className="flex justify-center py-20"><Loader2 className="w-10 h-10 text-[#172554] animate-spin" /></div>;
  }

  // --- VUE CRÉATION ---
  if (view === 'create') {
    return (
        <div className="max-w-4xl mx-auto animate-in fade-in">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" onClick={() => setView('list')}>
              <ChevronLeft className="w-4 h-4 mr-1" /> Retour
            </Button>
            <h1 className="text-2xl font-bold text-[#172554]">Nouvel Événement</h1>
          </div>

          <Card className="border-0 shadow-xl overflow-hidden bg-white">
            <form onSubmit={handleCreateSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Upload Zone */}
                <div className="bg-slate-50 p-8 flex flex-col items-center justify-center border-r border-slate-100 min-h-[350px]">
                  <div
                      onClick={() => mediaInputRef.current?.click()}
                      className="relative w-full aspect-[3/4] rounded-2xl border-2 border-dashed border-slate-300 hover:border-[#2563EB] cursor-pointer flex items-center justify-center overflow-hidden"
                  >
                    {mediaPreview ? (
                        mediaType === 'video' ? (
                            <video src={mediaPreview} className="w-full h-full object-cover" autoPlay muted loop />
                        ) : (
                            <Image src={mediaPreview} alt="Preview" fill className="object-cover" />
                        )
                    ) : (
                        <div className="text-center text-slate-400">
                          <div className="flex justify-center gap-2 mb-2">
                            <ImageIcon className="w-6 h-6" /><Video className="w-6 h-6" />
                          </div>
                          <span className="text-sm">Ajouter média</span>
                        </div>
                    )}
                  </div>
                  <input type="file" ref={mediaInputRef} className="hidden" accept="image/*,video/*" onChange={handleMediaChange} />
                  {mediaPreview && (
                      <button type="button" onClick={resetForm} className="mt-4 text-xs text-red-500 font-bold hover:underline">
                        Supprimer
                      </button>
                  )}
                </div>

                {/* Fields */}
                <div className="lg:col-span-2 p-8 space-y-5">
                  <div className="p-3 bg-blue-50 rounded-xl text-sm text-blue-800 border border-blue-100 flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> Agence : <b>{currentBranchName}</b>
                  </div>
                  <Input label="Titre *" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="date" label="Date *" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} required />
                    <Input label="Lieu *" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="time" label="Début *" value={formData.startTime} onChange={(e) => setFormData({...formData, startTime: e.target.value})} required />
                    <Input type="time" label="Fin *" value={formData.endTime} onChange={(e) => setFormData({...formData, endTime: e.target.value})} required />
                  </div>
                  <TextArea label="Description *" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required className="min-h-[100px]" />
                  <div className="pt-4 flex justify-end gap-3">
                    <Button type="button" variant="ghost" onClick={() => setView('list')}>Annuler</Button>
                    <Button type="submit" isLoading={isActionLoading} className="bg-[#172554] text-white">Publier</Button>
                  </div>
                </div>
              </div>
            </form>
          </Card>
        </div>
    );
  }

  // --- VUE DÉTAILS (Split View : Média Gauche / Info Droite) ---
  if (view === 'details' && selectedEvent) {
    const mediaUrl = selectedEvent.imageUrls?.[0];

    return (
        <div className="max-w-6xl mx-auto animate-in fade-in h-[calc(100vh-140px)] flex flex-col">
          <div className="mb-4">
            <Button variant="ghost" onClick={() => setView('list')}>
              <ChevronLeft className="w-4 h-4 mr-1" /> Retour
            </Button>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex-1 flex flex-col lg:flex-row">

            {/* GAUCHE : Média (50%) */}
            <div className="lg:w-1/2 bg-black relative flex items-center justify-center h-64 lg:h-auto">
              {mediaUrl ? (
                  <UniversalMedia
                      src={mediaUrl}
                      alt={selectedEvent.title}
                      controls={true}
                      autoPlay={false}
                      className="w-full h-full absolute inset-0"
                      showVideoIcon={false}
                      isCard={false}
                  />
              ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <ImageIcon className="w-16 h-16 text-slate-600" />
                  </div>
              )}
            </div>

            {/* DROITE : Infos (50%) */}
            <div className="lg:w-1/2 flex flex-col h-full overflow-y-auto custom-scrollbar p-8">
              <div className="mb-6">
                <Badge variant="success" className="mb-3">Actif</Badge>
                <h1 className="text-3xl font-bold text-[#172554] mb-4">{selectedEvent.title}</h1>

                <div className="flex flex-col gap-3 text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#2563EB]" />
                    {formatDateFr(selectedEvent.date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#2563EB]" />
                    {formatLocalTime(selectedEvent.startTime)} - {formatLocalTime(selectedEvent.endTime)}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#2563EB]" />
                    {selectedEvent.location}
                  </div>
                </div>
              </div>

              <div className="prose prose-slate max-w-none flex-1">
                <h3 className="text-lg font-bold text-[#172554] mb-2">Description</h3>
                <p className="text-slate-600 whitespace-pre-wrap">{selectedEvent.description}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#172554] flex items-center gap-2">
                    <Users className="w-5 h-5" /> Participants
                  </h3>
                  <Badge variant="info">{selectedEvent.participantCount} inscrits</Badge>
                </div>

                <div className="flex gap-2 justify-end">
                  <Button
                      variant="outline"
                      className="text-red-600 border-red-200 hover:bg-red-50 w-full"
                      onClick={() => alert("Annulation non disponible via API")}
                  >
                    Annuler l&apos;événement
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }

  // --- VUE LISTE (Défaut) ---
  return (
      <div className="space-y-8 animate-in fade-in">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 pb-2 border-b border-slate-200/60">
          <div>
            <h1 className="text-3xl font-bold text-[#172554]">Événements</h1>
            <p className="text-slate-500 mt-1">Gérez les activités du réseau.</p>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <select
                  value={selectedBranchId}
                  onChange={(e) => setSelectedBranchId(e.target.value)}
                  className="appearance-none bg-white border border-slate-200 py-2.5 pl-4 pr-10 rounded-xl shadow-sm min-w-[200px] cursor-pointer"
              >
                {branches.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
            <Button onClick={() => setView('create')} leftIcon={Plus} className="bg-[#172554] text-white">Créer</Button>
          </div>
        </div>

        <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 max-w-md flex items-center">
          <Search className="w-5 h-5 text-slate-400 ml-2" />
          <input
              type="text"
              placeholder="Rechercher..."
              className="w-full bg-transparent border-none focus:ring-0 text-sm h-10 ml-2 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {isEventsLoading ? (
            <div className="flex justify-center py-20"><Loader2 className="w-10 h-10 text-[#172554] animate-spin" /></div>
        ) : filteredEvents.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#172554]">Aucun événement</h3>
              <p className="text-slate-500">Aucune activité pour cette antenne.</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredEvents.map(event => {
                const mediaUrl = event.imageUrls?.[0];

                return (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -5 }}
                        className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col h-full cursor-pointer"
                        onClick={() => handleViewDetails(event)}
                    >
                      {/* Partie Média (Haut) avec Autoplay */}
                      <div className="h-48 relative bg-slate-100 overflow-hidden">
                        {mediaUrl ? (
                            <UniversalMedia
                                src={mediaUrl}
                                alt={event.title}
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                controls={false}
                                className="h-full w-full"
                                showVideoIcon={true}
                                isCard={true}
                            />
                        ) : (
                            <div className="flex items-center justify-center w-full h-full">
                              <ImageIcon className="w-12 h-12 text-slate-300" />
                            </div>
                        )}
                      </div>

                      {/* Partie Info (Bas) */}
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-blue-50 text-blue-700 border-0 text-[10px] uppercase font-bold px-2">
                            {formatDateFr(event.date).split(' ')[1]}
                          </Badge>
                          <h3 className="font-bold text-lg text-[#172554] line-clamp-1 group-hover:text-[#2563EB] transition-colors">
                            {event.title}
                          </h3>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {formatLocalTime(event.startTime)}</span>
                          <span className="flex items-center gap-1 truncate"><MapPin className="w-3 h-3"/> {event.location}</span>
                        </div>

                        <p className="text-sm text-slate-600 line-clamp-2 mb-4 flex-1">
                          {event.description}
                        </p>

                        <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-sm">
                    <span className="font-medium text-slate-700 flex items-center gap-1">
                      <Users className="w-4 h-4 text-[#2563EB]" /> {event.participantCount}
                    </span>
                          <span className="text-[#2563EB] font-medium group-hover:underline">Détails</span>
                        </div>
                      </div>
                    </motion.div>
                );
              })}
            </div>
        )}
      </div>
  );
};