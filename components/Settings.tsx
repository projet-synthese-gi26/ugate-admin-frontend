'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  User, Building2, Save, Camera, Loader2, Upload,
  FileText, Eye, CheckCircle2, AlertCircle, X,
  Calendar, Users, Share2, Globe, Mail, Phone, MapPin
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Input, TextArea } from './ui/Input';
import { Badge } from './ui/Badge';
import { useAuth } from '@/lib/contexts/AuthContext';
import { updateUserProfile } from '@/lib/services/auth.service';
import { getSyndicateDetails, updateSyndicate, SyndicateDetailsResponse } from '@/lib/services/admin.service';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// --- COMPOSANT : VISIONNEUSE PDF MODALE ---
const PDFViewerModal = ({ url, title, onClose }: { url: string, title: string, onClose: () => void }) => {
  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/80 backdrop-blur-md animate-in fade-in duration-200">
        <div className="bg-white w-full h-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-slate-100 bg-slate-50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{title}</h3>
                <p className="text-xs text-slate-500">Mode lecture</p>
              </div>
            </div>
            <button
                onClick={onClose}
                className="p-2 hover:bg-slate-200 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-slate-500" />
            </button>
          </div>

          {/* Content - Iframe pour le PDF */}
          <div className="flex-1 bg-slate-200 relative">
            <iframe
                src={`${url}#toolbar=0`}
                className="w-full h-full"
                title={title}
            />
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-100 bg-white flex justify-end gap-3">
            <Button variant="outline" onClick={onClose}>Fermer</Button>
            <Button onClick={() => window.open(url, '_blank')}>Ouvrir dans un nouvel onglet</Button>
          </div>
        </div>
      </div>
  );
};

// --- COMPOSANT : CARTE DOCUMENT ---
const DocumentCard = ({
                        title,
                        description,
                        fileUrl,
                        onUpload,
                        onView,
                        accept = ".pdf",
                        isLoading = false
                      }: {
  title: string,
  description: string,
  fileUrl?: string,
  onUpload: (file: File) => void,
  onView: (url: string, title: string) => void,
  accept?: string,
  isLoading?: boolean
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
      onUpload(e.target.files[0]);
    }
  };

  return (
      <div className="group border border-slate-200 rounded-xl p-5 hover:border-[#1877F2] hover:shadow-md transition-all bg-white relative overflow-hidden">
        {/* Indicateur de statut */}
        <div className={`absolute top-0 right-0 w-16 h-16 -mr-8 -mt-8 rotate-45 ${fileUrl ? 'bg-emerald-500' : 'bg-slate-200'} transition-colors`} />

        <div className="flex items-start gap-4 relative z-10">
          <div className={`p-3 rounded-xl flex-shrink-0 shadow-sm ${fileUrl || fileName ? 'bg-gradient-to-br from-red-50 to-red-100 text-red-600' : 'bg-slate-100 text-slate-400'}`}>
            {isLoading ? <Loader2 className="w-8 h-8 animate-spin" /> : <FileText className="w-8 h-8" />}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-slate-900 text-lg">{title}</h4>
            <p className="text-sm text-slate-500 mt-1 mb-4 line-clamp-2">
              {fileName ? <span className="text-emerald-600 font-medium">Fichier prêt : {fileName}</span> : description}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {fileUrl && !fileName && (
                  <Button
                      type="button"
                      onClick={() => onView(fileUrl, title)}
                      className="bg-[#172554] text-white hover:bg-blue-900 h-9 text-xs"
                      leftIcon={Eye}
                  >
                    Lire le document
                  </Button>
              )}

              <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="h-9 text-xs border-slate-200"
                  onClick={() => inputRef.current?.click()}
                  disabled={isLoading}
                  leftIcon={Upload}
              >
                {fileUrl ? 'Mettre à jour' : 'Importer'}
              </Button>
            </div>
          </div>
        </div>
        <input type="file" ref={inputRef} className="hidden" accept={accept} onChange={handleChange} />
      </div>
  );
};

export const Settings: React.FC = () => {
  const { user, checkAuthentication, syndicateStatus } = useAuth();
  const [activeTab, setActiveTab] = useState<'profile' | 'organization'>('profile');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  // --- PROFIL STATES ---
  const [profileForm, setProfileForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
  });
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);

  // --- ORGANISATION STATES ---
  const [syndicateData, setSyndicateData] = useState<SyndicateDetailsResponse | null>(null);
  const [orgForm, setOrgForm] = useState({ name: '', description: '', domain: '' });
  const [orgFiles, setOrgFiles] = useState<{ charte?: File; statusDoc?: File }>({});
  const [isOrgLoading, setIsOrgLoading] = useState(false);

  // --- PDF VIEWER STATE ---
  const [viewerState, setViewerState] = useState<{ isOpen: boolean, url: string, title: string }>({
    isOpen: false, url: '', title: ''
  });

  // --- INITIALISATION ---
  useEffect(() => {
    if (user) {
      setProfileForm({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phone: user.phone || '',
        nationality: '',
      });
      setProfilePreview(user.photoUri || null);
    }
  }, [user]);

  useEffect(() => {
    const fetchOrg = async () => {
      if (activeTab === 'organization' && syndicateStatus?.syndicateId) {
        setIsOrgLoading(true);
        try {
          const data = await getSyndicateDetails(syndicateStatus.syndicateId);
          setSyndicateData(data);
          setOrgForm({
            name: data.name,
            description: data.description,
            domain: data.domain
          });
        } catch (e) {
          console.error("Erreur chargement syndicat", e);
        } finally {
          setIsOrgLoading(false);
        }
      }
    };
    fetchOrg();
  }, [activeTab, syndicateStatus?.syndicateId]);

  // --- HANDLERS ---
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  const handleSaveProfile = async () => {
    setSaveStatus('saving');
    try {
      await updateUserProfile({
        firstName: profileForm.firstName,
        lastName: profileForm.lastName,
        phoneNumber: profileForm.phone,
        nationality: profileForm.nationality
      }, profileImage || undefined);

      await checkAuthentication();
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (error) {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }
  };

  const handleSaveOrg = async () => {
    if (!syndicateStatus?.syndicateId) return;
    setSaveStatus('saving');
    try {
      await updateSyndicate(syndicateStatus.syndicateId, orgForm, orgFiles);
      // Recharger les données pour avoir les nouvelles URLs
      const data = await getSyndicateDetails(syndicateStatus.syndicateId);
      setSyndicateData(data);
      // Reset des fichiers locaux
      setOrgFiles({});

      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (e) {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }
  };

  const openPdfViewer = (url: string, title: string) => {
    setViewerState({ isOpen: true, url, title });
  };

  // --- NAVIGATION SIDEBAR ---
  const tabs = [
    { id: 'profile', label: 'Mon Profil', icon: User },
    { id: 'organization', label: 'Mon Syndicat', icon: Building2 },
  ];

  return (
      <div className="space-y-6 animate-in fade-in duration-500">

        {/* Header Global */}
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl font-bold text-[#172554]">Paramètres</h1>
          <p className="text-slate-500 mt-1">Gérez votre compte personnel et les informations légales de votre syndicat.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Sidebar Navigation (Col 3/12) */}
          <div className="lg:col-span-3">
            <nav className="space-y-2 sticky top-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium group ${
                            isActive
                                ? 'bg-[#172554] text-white shadow-lg shadow-blue-900/20'
                                : 'text-slate-600 hover:bg-white hover:shadow-sm hover:text-[#172554] bg-slate-50/50'
                        }`}
                    >
                      <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-[#172554]'}`} />
                      {tab.label}
                      {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                    </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content (Col 9/12) */}
          <div className="lg:col-span-9 space-y-6">

            {/* --- ONGLET : PROFIL --- */}
            {activeTab === 'profile' && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">

                  {/* Carte Identité Visuelle */}
                  <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-[#172554] to-[#2563EB] opacity-10" />

                    <div className="relative flex flex-col md:flex-row items-center md:items-end gap-6 -mt-4">
                      <div className="relative group">
                        <div className="w-32 h-32 rounded-full border-4 border-white bg-white shadow-xl overflow-hidden flex items-center justify-center text-4xl font-bold text-[#172554] uppercase relative z-10">
                          {profilePreview ? (
                              <Image src={profilePreview} alt="Profile" fill className="object-cover" />
                          ) : (
                              `${profileForm.firstName?.[0] || ''}${profileForm.lastName?.[0] || ''}`
                          )}
                        </div>
                        <label className="absolute bottom-1 right-1 z-20 p-2 bg-[#172554] text-white rounded-full cursor-pointer hover:scale-110 transition-transform shadow-lg border-2 border-white">
                          <Camera className="w-4 h-4" />
                          <input type="file" className="hidden" accept="image/*" onChange={handleAvatarChange} />
                        </label>
                      </div>

                      <div className="flex-1 text-center md:text-left mb-2">
                        <h2 className="text-2xl font-bold text-slate-900">{profileForm.firstName} {profileForm.lastName}</h2>
                        <p className="text-slate-500">{user?.roles?.[0] || 'Membre Utilisateur'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Formulaire Profil */}
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>Informations Personnelles</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="Prénom"
                            value={profileForm.firstName}
                            onChange={(e) => setProfileForm({ ...profileForm, firstName: e.target.value })}
                        />
                        <Input
                            label="Nom"
                            value={profileForm.lastName}
                            onChange={(e) => setProfileForm({ ...profileForm, lastName: e.target.value })}
                        />
                        <Input
                            label="Email professionnel"
                            type="email"
                            icon={Mail}
                            value={profileForm.email}
                            disabled
                            className="bg-slate-50 text-slate-500 border-slate-200"
                        />
                        <Input
                            label="Numéro de téléphone"
                            icon={Phone}
                            value={profileForm.phone}
                            onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                        />
                        <Input
                            label="Nationalité"
                            icon={Globe}
                            value={profileForm.nationality}
                            onChange={(e) => setProfileForm({ ...profileForm, nationality: e.target.value })}
                            placeholder="Ex: Camerounaise"
                        />
                      </div>

                      <div className="flex justify-end pt-4 border-t border-slate-100">
                        <Button
                            variant="primary"
                            leftIcon={Save}
                            onClick={handleSaveProfile}
                            isLoading={saveStatus === 'saving'}
                            className="bg-[#172554] w-full sm:w-auto min-w-[200px]"
                        >
                          {saveStatus === 'saved' ? 'Modifications enregistrées' : saveStatus === 'error' ? 'Erreur de sauvegarde' : 'Enregistrer les modifications'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
            )}

            {/* --- ONGLET : ORGANISATION --- */}
            {activeTab === 'organization' && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">

                  {isOrgLoading ? (
                      <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
                        <Loader2 className="w-10 h-10 text-[#172554] animate-spin mb-4" />
                        <p className="text-slate-500 font-medium">Chargement des données du syndicat...</p>
                      </div>
                  ) : (
                      <>
                        {/* Banner Info Read-Only */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="col-span-1 flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                            {syndicateData?.documents?.logoUrl ? (
                                <div className="w-24 h-24 rounded-full overflow-hidden shadow-md mb-3">
                                  <Image src={syndicateData.documents.logoUrl} alt="Logo" width={96} height={96} className="w-full h-full object-cover" />
                                </div>
                            ) : (
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-2 border-dashed border-slate-300 mb-3">
                                  <Building2 className="w-8 h-8 text-slate-300" />
                                </div>
                            )}
                            <Badge className={syndicateData?.isApproved ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}>
                              {syndicateData?.isApproved ? 'Approuvé' : 'En attente'}
                            </Badge>
                          </div>

                          <div className="col-span-2 space-y-4">
                            <h3 className="text-lg font-bold text-[#172554] mb-2 border-b border-slate-100 pb-2">Informations Générales</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-slate-400 uppercase text-[10px] font-bold tracking-wider">Créé le</p>
                                <p className="font-medium text-slate-700">{syndicateData?.createdAt ? new Date(syndicateData.createdAt).toLocaleDateString() : '-'}</p>
                              </div>
                              <div>
                                <p className="text-slate-400 uppercase text-[10px] font-bold tracking-wider">Créateur</p>
                                <p className="font-medium text-slate-700">{syndicateData?.creator?.fullName || '-'}</p>
                              </div>
                              <div>
                                <p className="text-slate-400 uppercase text-[10px] font-bold tracking-wider">Membres</p>
                                <p className="font-medium text-slate-700 flex items-center gap-1"><Users className="w-3 h-3 text-[#1877F2]" /> {syndicateData?.stats?.totalMembers || 0}</p>
                              </div>
                              <div>
                                <p className="text-slate-400 uppercase text-[10px] font-bold tracking-wider">Antennes</p>
                                <p className="font-medium text-slate-700 flex items-center gap-1"><Share2 className="w-3 h-3 text-[#1877F2]" /> {syndicateData?.stats?.totalBranches || 0}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Formulaire Edition */}
                        <Card className="border-0 shadow-lg">
                          <CardHeader className="bg-slate-50/50 border-b border-slate-100">
                            <CardTitle className="text-[#172554] flex items-center gap-2">
                              <Building2 className="w-5 h-5" /> Détails Modifiables
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-6 space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <Input
                                  label="Nom Officiel"
                                  value={orgForm.name}
                                  onChange={e => setOrgForm({...orgForm, name: e.target.value})}
                                  placeholder="Ex: UGATE Centre"
                              />
                              <Input
                                  label="Domaine d'activité"
                                  value={orgForm.domain}
                                  onChange={e => setOrgForm({...orgForm, domain: e.target.value})}
                                  placeholder="Ex: Transport Routier"
                              />
                            </div>

                            <TextArea
                                label="Description & Objet Social"
                                value={orgForm.description}
                                onChange={e => setOrgForm({...orgForm, description: e.target.value})}
                                className="min-h-[120px]"
                                placeholder="Décrivez la mission et les objectifs de votre syndicat..."
                            />

                            {/* Section Documents PDF */}
                            <div className="pt-6 border-t border-slate-100">
                              <h4 className="text-sm font-bold text-[#172554] mb-4 uppercase tracking-wider flex items-center gap-2">
                                <FileText className="w-4 h-4" /> Documents Légaux (PDF)
                              </h4>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <DocumentCard
                                    title="Statuts Officiels"
                                    description="Le document juridique fondateur."
                                    fileUrl={syndicateData?.documents?.statusUrl}
                                    onUpload={(file) => setOrgFiles({...orgFiles, statusDoc: file})}
                                    onView={openPdfViewer}
                                />
                                <DocumentCard
                                    title="Charte / Règlement"
                                    description="Règlement intérieur à destination des membres."
                                    fileUrl={syndicateData?.documents?.charteUrl}
                                    onUpload={(file) => setOrgFiles({...orgFiles, charte: file})}
                                    onView={openPdfViewer}
                                />
                              </div>
                            </div>

                            <div className="flex justify-end pt-6">
                              <Button
                                  variant="primary"
                                  leftIcon={Save}
                                  onClick={handleSaveOrg}
                                  isLoading={saveStatus === 'saving'}
                                  className="bg-[#172554] min-w-[200px]"
                              >
                                {saveStatus === 'saved' ? 'Mise à jour réussie' : saveStatus === 'error' ? 'Erreur lors de la mise à jour' : 'Enregistrer les modifications'}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </>
                  )}
                </motion.div>
            )}

          </div>
        </div>

        {/* MODALE PDF VIEWER */}
        <AnimatePresence>
          {viewerState.isOpen && (
              <PDFViewerModal
                  url={viewerState.url}
                  title={viewerState.title}
                  onClose={() => setViewerState({ ...viewerState, isOpen: false })}
              />
          )}
        </AnimatePresence>

      </div>
  );
};