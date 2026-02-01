'use client';

import React, { useState, useEffect } from 'react';
import {
  CheckCircle, XCircle, FileText, Search, Loader2,
  UserPlus, Mail, ChevronDown, X, Send, Building2,
  Users, Shield, Calendar, MapPin, Briefcase, Phone,
  MoreHorizontal, Edit3, ShieldAlert, Quote
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Input } from './ui/Input';
import { useAuth } from '@/lib/contexts/AuthContext';
import {
  getBranchRequests,
  getSyndicateMembers,
  processMembershipRequest,
  getSyndicateBranches,
  addMemberManually,
  updateMemberRole,
  MembershipRequest,
  SyndicateBranch,
  MemberResponse,
  MemberRole
} from '@/lib/services/admin.service';
import { getUserById } from '@/lib/services/auth.service';
import { UserInfo } from '@/lib/types/auth';
import { motion, AnimatePresence } from 'framer-motion';

// --- TYPES & CONSTANTES ---

// Type unifié pour l'affichage dans la modale
interface ProfileModalData {
  type: 'REQUEST' | 'MEMBER';
  user: UserInfo;            // Données Auth (Nom, Photo, Tel...)
  role: MemberRole | 'CANDIDATE';
  branchId: string;
  joinedAt: string;         // ou createdAt
  motivation?: string;      // Raison d'adhésion
  entityId: string;         // ID de la demande ou ID du membre (userId)
}

// Données étendues pour la liste (Hydratation)
interface HydratedRequest extends MembershipRequest {
  userDetails?: UserInfo | null;
}

interface HydratedMember extends MemberResponse {
  userDetails?: UserInfo | null;
}

const ROLE_DEFINITIONS: Record<string, { label: string, description: string, color: string }> = {
  PRESIDENT: { label: 'Président', description: 'Accès complet et représentation légale.', color: 'bg-purple-100 text-purple-700 border-purple-200' },
  ADMIN: { label: 'Administrateur', description: 'Gestion globale du syndicat.', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
  MODERATOR: { label: 'Modérateur', description: 'Gestion des contenus et membres.', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  FLEET_MANAGER: { label: 'Gestionnaire Flotte', description: 'Supervision des véhicules.', color: 'bg-orange-100 text-orange-700 border-orange-200' },
  DRIVER: { label: 'Chauffeur', description: 'Membre standard.', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  CANDIDATE: { label: 'Candidat', description: 'En attente de validation.', color: 'bg-amber-100 text-amber-700 border-amber-200' },
};

export const Admissions: React.FC = () => {
  const { syndicateStatus } = useAuth();

  // --- Données ---
  const [activeTab, setActiveTab] = useState<'requests' | 'members'>('requests');
  const [requests, setRequests] = useState<HydratedRequest[]>([]);
  const [members, setMembers] = useState<HydratedMember[]>([]);
  const [branches, setBranches] = useState<SyndicateBranch[]>([]);

  // --- Filtres & UI ---
  const [selectedBranchId, setSelectedBranchId] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState<string | null>(null);

  // --- Modales ---
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteData, setInviteData] = useState({ firstName: '', lastName: '', email: '' });

  // État Modale Profil Détaillé
  const [selectedProfile, setSelectedProfile] = useState<ProfileModalData | null>(null);
  const [isRoleEditing, setIsRoleEditing] = useState(false);
  const [tempRole, setTempRole] = useState<MemberRole | null>(null);

  // 1. Initialisation Branches
  useEffect(() => {
    const initBranches = async () => {
      if (!syndicateStatus?.syndicateId) return;
      try {
        const branchesData = await getSyndicateBranches(syndicateStatus.syndicateId);
        setBranches(branchesData);
        if (branchesData.length > 0) setSelectedBranchId(branchesData[0].id);
      } catch (e) {
        console.error("Erreur branches", e);
      }
    };
    initBranches();
  }, [syndicateStatus?.syndicateId]);

  // 2. Chargement Données + Hydratation
  useEffect(() => {
    if (!syndicateStatus?.syndicateId) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [rawRequests, rawMembers] = await Promise.all([
          selectedBranchId && selectedBranchId !== 'all'
              ? getBranchRequests(syndicateStatus.syndicateId!, selectedBranchId)
              : Promise.resolve([]), // (Si API globale dispo, mettre ici)
          getSyndicateMembers(syndicateStatus.syndicateId!)
        ]);

        // Hydratation Requêtes
        if (rawRequests?.length) {
          const hydratedReqs = await Promise.all(rawRequests.map(async (req) => ({
            ...req, userDetails: await getUserById(req.userId)
          })));
          setRequests(hydratedReqs);
        } else setRequests([]);

        // Hydratation Membres (Optimisation: on pourrait le faire au clic ou pagination)
        if (rawMembers?.length) {
          // On hydrate seulement les visibles ou une partie pour perf, ici on fait tout pour l'exemple
          const hydratedMembers = await Promise.all(rawMembers.map(async (m) => ({
            ...m, userDetails: await getUserById(m.userId)
          })));
          setMembers(hydratedMembers);
        } else setMembers([]);

      } catch (error) {
        console.error("Erreur données:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [syndicateStatus?.syndicateId, selectedBranchId, activeTab]);

  // --- Handlers Actions ---

  const handleProcessRequest = async (reqId: string, approve: boolean) => {
    setIsActionLoading(reqId);
    try {
      await processMembershipRequest(reqId, approve);
      setRequests(prev => prev.filter(r => r.id !== reqId));
      setSelectedProfile(null); // Fermer modale si ouverte
      if (approve) {
        // Recharger simple pour mettre à jour la liste membres
        const rawMembers = await getSyndicateMembers(syndicateStatus!.syndicateId!);
        const hydratedMembers = await Promise.all(rawMembers.map(async (m) => ({
          ...m, userDetails: await getUserById(m.userId)
        })));
        setMembers(hydratedMembers);
      }
    } catch (e) {
      alert("Erreur lors du traitement.");
    } finally {
      setIsActionLoading(null);
    }
  };

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    let targetBranchId = selectedBranchId === 'all' && branches.length > 0 ? branches[0].id : selectedBranchId;
    if (targetBranchId === 'all') return alert("Créez une antenne d'abord.");

    setIsActionLoading('invite');
    try {
      await addMemberManually(syndicateStatus!.syndicateId!, targetBranchId, inviteData);
      setIsInviteModalOpen(false);
      setInviteData({ firstName: '', lastName: '', email: '' });
      alert("Invitation envoyée !");
    } catch (e) {
      alert("Erreur invitation.");
    } finally {
      setIsActionLoading(null);
    }
  };

  const handleSaveRole = async () => {
    if (!selectedProfile || !tempRole || !syndicateStatus?.syndicateId) return;

    setIsActionLoading('role-update');
    try {
      // selectedProfile.entityId pour un membre = userId
      await updateMemberRole(syndicateStatus.syndicateId, selectedProfile.entityId, tempRole);

      // Update local
      setMembers(prev => prev.map(m => m.userId === selectedProfile.entityId ? { ...m, role: tempRole } : m));
      setSelectedProfile({ ...selectedProfile, role: tempRole });
      setIsRoleEditing(false);
    } catch (e) {
      alert("Erreur role.");
    } finally {
      setIsActionLoading(null);
    }
  };

  // --- Ouverture Modale Profil ---

  const openRequestProfile = (req: HydratedRequest) => {
    if (!req.userDetails) return;
    setSelectedProfile({
      type: 'REQUEST',
      user: req.userDetails,
      role: 'CANDIDATE',
      branchId: req.branchId,
      joinedAt: req.createdAt,
      motivation: req.motivation,
      entityId: req.id // Ici c'est l'ID de la request
    });
  };

  const openMemberProfile = (member: HydratedMember) => {
    if (!member.userDetails) return;
    setSelectedProfile({
      type: 'MEMBER',
      user: member.userDetails,
      role: member.role,
      branchId: member.branchId,
      joinedAt: member.joinedAt,
      entityId: member.userId,
      motivation: undefined // Les membres n'ont souvent plus la motivation stockée à ce niveau
    });
    setTempRole(member.role);
    setIsRoleEditing(false);
  };

  // --- Filtrage ---
  const filteredRequests = requests.filter(r =>
      (selectedBranchId === 'all' || r.branchId === selectedBranchId) &&
      ((r.userDetails?.lastName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
          (r.userDetails?.email || '').toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredMembers = members.filter(m =>
      (selectedBranchId === 'all' || m.branchId === selectedBranchId) &&
      ((m.userDetails?.lastName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
          (m.userDetails?.email || '').toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const currentBranchName = branches.find(b => b.id === selectedBranchId)?.name || 'Toutes les antennes';

  return (
      <div className="space-y-6 animate-in fade-in duration-500">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-6 border-b border-slate-200">
          <div>
            <h1 className="text-3xl font-bold text-[#172554]">Membres & Adhésions</h1>
            <p className="text-slate-500 mt-2">Gestion des accès pour <span className="font-semibold text-[#2563EB]">{currentBranchName}</span></p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <div className="relative min-w-[240px]">
              <select
                  value={selectedBranchId}
                  onChange={(e) => setSelectedBranchId(e.target.value)}
                  className="w-full appearance-none bg-white border border-slate-300 text-slate-700 py-2.5 pl-4 pr-10 rounded-xl focus:ring-2 focus:ring-[#172554]/20 focus:border-[#172554] font-medium shadow-sm transition-all cursor-pointer"
              >
                <option value="all">Toutes les antennes</option>
                {branches.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
            <Button onClick={() => setIsInviteModalOpen(true)} leftIcon={UserPlus} className="bg-[#172554] text-white shadow-lg shadow-blue-900/20">
              Ajouter un membre
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex bg-slate-100 rounded-xl p-1">
            {['requests', 'members'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                        activeTab === tab ? 'bg-white text-[#172554] shadow-sm' : 'text-slate-500 hover:text-slate-700'
                    }`}
                >
                  {tab === 'requests' ? 'Demandes' : 'Membres'}
                  <Badge className={activeTab === tab ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-600'}>
                    {tab === 'requests' ? filteredRequests.length : filteredMembers.length}
                  </Badge>
                </button>
            ))}
          </div>
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
                type="text"
                placeholder="Rechercher..."
                className="w-full pl-9 pr-4 py-2 bg-transparent text-sm focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Loading */}
        {isLoading ? (
            <div className="flex justify-center py-24"><Loader2 className="w-10 h-10 text-[#172554] animate-spin" /></div>
        ) : (
            <div className="space-y-4">

              {/* TAB: DEMANDES */}
              {activeTab === 'requests' && (
                  <div className="grid gap-4">
                    {filteredRequests.length === 0 ? <EmptyState message="Aucune demande." /> :
                        filteredRequests.map((req) => {
                          const user = req.userDetails;
                          return (
                              <motion.div
                                  key={req.id}
                                  onClick={() => openRequestProfile(req)}
                                  whileHover={{ scale: 1.005 }}
                                  className="premium-card p-5 flex flex-col md:flex-row items-center gap-5 cursor-pointer hover:shadow-md transition-all group"
                              >
                                <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg border border-amber-100 overflow-hidden relative">
                                  {user?.photoUri ? <img src={user.photoUri} alt="Avatar" className="object-cover w-full h-full"/> : (user?.firstName?.[0] || '?')}
                                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs text-white bg-black/50">Voir</div>
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                  <h3 className="font-bold text-[#172554] group-hover:text-[#2563EB] transition-colors">
                                    {user ? `${user.firstName} ${user.lastName}` : 'Utilisateur Inconnu'}
                                  </h3>
                                  <div className="text-sm text-slate-500 flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start mt-1">
                                    <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {user?.email || "Masqué"}</span>
                                    <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> {new Date(req.createdAt).toLocaleDateString()}</span>
                                  </div>
                                  {req.motivation && <p className="text-xs text-slate-500 mt-2 bg-slate-50 p-2 rounded border border-slate-100 italic line-clamp-1">"{req.motivation}"</p>}
                                </div>
                                <div className="flex gap-2" onClick={e => e.stopPropagation()}>
                                  <Button onClick={() => handleProcessRequest(req.id, true)} className="bg-emerald-600 hover:bg-emerald-700 text-white" size="sm" isLoading={isActionLoading === req.id}>Accepter</Button>
                                </div>
                              </motion.div>
                          );
                        })
                    }
                  </div>
              )}

              {/* TAB: MEMBRES */}
              {activeTab === 'members' && (
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-4">Utilisateur</th>
                        <th className="px-6 py-4">Rôle</th>
                        <th className="px-6 py-4 hidden sm:table-cell">Antenne</th>
                        <th className="px-6 py-4 text-right"></th>
                      </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                      {filteredMembers.length === 0 ? (
                          <tr><td colSpan={4}><EmptyState message="Aucun membre." /></td></tr>
                      ) : filteredMembers.map((member) => (
                          <tr
                              key={member.userId}
                              onClick={() => openMemberProfile(member)}
                              className="hover:bg-slate-50/80 transition-colors cursor-pointer group"
                          >
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-[#172554] text-white flex items-center justify-center font-bold uppercase text-xs overflow-hidden">
                                  {member.userDetails?.photoUri ? <img src={member.userDetails.photoUri} alt="Pic" className="w-full h-full object-cover"/> : member.firstName?.[0]}
                                </div>
                                <div>
                                  <p className="font-semibold text-[#172554] group-hover:text-[#2563EB]">{member.firstName} {member.lastName}</p>
                                  <p className="text-xs text-slate-500">{member.email}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <Badge className={`${ROLE_DEFINITIONS[member.role]?.color || 'bg-gray-100'} border px-2.5 py-1`}>
                                {ROLE_DEFINITIONS[member.role]?.label || member.role}
                              </Badge>
                            </td>
                            <td className="px-6 py-4 text-slate-500 hidden sm:table-cell">
                              {branches.find(b => b.id === member.branchId)?.name || '...'}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <MoreHorizontal className="w-5 h-5 text-slate-300 group-hover:text-[#2563EB]" />
                            </td>
                          </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
              )}
            </div>
        )}

        {/* --- MODALE UNIFIÉE (PROFIL DÉTAILLÉ) --- */}
        <AnimatePresence>
          {selectedProfile && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden flex flex-col max-h-[90vh]"
                >
                  {/* 1. Header Visuel */}
                  <div className="h-32 bg-gradient-to-r from-[#172554] to-[#2563EB] relative">
                    <button
                        onClick={() => setSelectedProfile(null)}
                        className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors backdrop-blur-md z-10"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* 2. Infos Principales (Avatar Flottant) */}
                  <div className="px-8 pb-6 -mt-16 flex flex-col items-center border-b border-slate-100">
                    <div className="w-32 h-32 rounded-full bg-white p-1.5 shadow-xl mb-4">
                      <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center text-4xl font-bold text-[#172554] uppercase overflow-hidden">
                        {selectedProfile.user.photoUri ? (
                            <img src={selectedProfile.user.photoUri} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            `${selectedProfile.user.firstName?.[0]}${selectedProfile.user.lastName?.[0]}`
                        )}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-[#172554] text-center">
                      {selectedProfile.user.firstName} {selectedProfile.user.lastName}
                    </h2>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className={`${ROLE_DEFINITIONS[selectedProfile.role]?.color} px-3 py-1 text-sm`}>
                        {ROLE_DEFINITIONS[selectedProfile.role]?.label || selectedProfile.role}
                      </Badge>
                      {selectedProfile.type === 'MEMBER' && <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">Actif</span>}
                    </div>
                  </div>

                  {/* 3. Contenu Scrollable */}
                  <div className="p-8 overflow-y-auto custom-scrollbar space-y-8 bg-slate-50/50">

                    {/* Métadonnées (Grid) */}
                    <div className="grid grid-cols-2 gap-6">
                      <InfoItem icon={Mail} label="Email" value={selectedProfile.user.email} />
                      <InfoItem icon={Phone} label="Téléphone" value={selectedProfile.user.phone || 'Non renseigné'} />
                      <InfoItem icon={Building2} label="Antenne" value={branches.find(b => b.id === selectedProfile.branchId)?.name || 'Inconnue'} />
                      <InfoItem icon={Calendar} label={selectedProfile.type === 'MEMBER' ? "Membre depuis" : "Demande du"} value={new Date(selectedProfile.joinedAt).toLocaleDateString()} />
                    </div>

                    {/* 4. Section Motivation / Dossier */}
                    {selectedProfile.motivation && (
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                          <Quote className="absolute top-4 right-4 w-10 h-10 text-slate-100 -z-0" />
                          <h4 className="text-xs font-bold text-[#172554] uppercase tracking-wider mb-3 flex items-center gap-2 z-10 relative">
                            <FileText className="w-4 h-4 text-[#2563EB]" /> Motivation / Raison d'adhésion
                          </h4>
                          <p className="text-slate-600 text-sm leading-relaxed italic z-10 relative">
                            "{selectedProfile.motivation}"
                          </p>
                        </div>
                    )}

                    {/* 5. Gestion des Rôles (Seulement pour les membres actifs) */}
                    {selectedProfile.type === 'MEMBER' && (
                        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-[#172554] flex items-center gap-2">
                              <Briefcase className="w-5 h-5 text-[#2563EB]" /> Rôle & Permissions
                            </h3>
                            {!isRoleEditing && (
                                <Button variant="ghost" size="sm" onClick={() => setIsRoleEditing(true)} className="text-[#2563EB] hover:bg-blue-50">
                                  <Edit3 className="w-4 h-4 mr-1" /> Modifier
                                </Button>
                            )}
                          </div>

                          {isRoleEditing ? (
                              <div className="space-y-3 animate-in fade-in">
                                <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
                                  {(['DRIVER', 'MODERATOR', 'ADMIN', 'FLEET_MANAGER'] as MemberRole[]).map((role) => (
                                      <button
                                          key={role}
                                          onClick={() => setTempRole(role)}
                                          className={`flex items-center p-3 rounded-xl border text-left transition-all ${
                                              tempRole === role ? 'border-[#2563EB] bg-blue-50 ring-1 ring-[#2563EB]' : 'border-slate-200 hover:bg-slate-50'
                                          }`}
                                      >
                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center mr-3 ${tempRole === role ? 'border-[#2563EB] bg-[#2563EB]' : 'border-slate-300'}`}>
                                          {tempRole === role && <Check className="w-3 h-3 text-white" />}
                                        </div>
                                        <div>
                                          <p className={`font-semibold text-sm ${tempRole === role ? 'text-[#172554]' : 'text-slate-600'}`}>{ROLE_DEFINITIONS[role].label}</p>
                                          <p className="text-xs text-slate-400">{ROLE_DEFINITIONS[role].description}</p>
                                        </div>
                                      </button>
                                  ))}
                                </div>
                                <div className="flex gap-2 pt-2">
                                  <Button onClick={handleSaveRole} isLoading={isActionLoading === 'role-update'} className="flex-1 bg-[#172554] text-white" size="sm">Enregistrer</Button>
                                  <Button variant="ghost" onClick={() => { setIsRoleEditing(false); setTempRole(selectedProfile.role as MemberRole); }} className="flex-1" size="sm">Annuler</Button>
                                </div>
                              </div>
                          ) : (
                              <p className="text-sm text-slate-600">
                                Rôle actuel : <span className="font-bold">{ROLE_DEFINITIONS[selectedProfile.role]?.label}</span>.
                                <br/>{ROLE_DEFINITIONS[selectedProfile.role]?.description}
                              </p>
                          )}
                        </div>
                    )}
                  </div>

                  {/* 6. Footer Actions */}
                  <div className="p-6 border-t border-slate-200 bg-white flex justify-between items-center gap-4">
                    {selectedProfile.type === 'REQUEST' ? (
                        <>
                          <Button
                              variant="outline"
                              onClick={() => handleProcessRequest(selectedProfile.entityId, false)}
                              className="flex-1 text-red-600 border-red-200 hover:bg-red-50"
                              disabled={!!isActionLoading}
                          >
                            <XCircle className="w-4 h-4 mr-2" /> Refuser
                          </Button>
                          <Button
                              onClick={() => handleProcessRequest(selectedProfile.entityId, true)}
                              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                              isLoading={isActionLoading === selectedProfile.entityId}
                          >
                            <CheckCircle className="w-4 h-4 mr-2" /> Accepter la demande
                          </Button>
                        </>
                    ) : (
                        <>
                          <Button
                              variant="outline"
                              className="text-red-600 border-red-200 hover:bg-red-50"
                              onClick={() => alert("Fonctionnalité de suspension à venir")}
                          >
                            <ShieldAlert className="w-4 h-4 mr-2" /> Suspendre
                          </Button>
                          <Button onClick={() => setSelectedProfile(null)} className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                            Fermer
                          </Button>
                        </>
                    )}
                  </div>
                </motion.div>
              </div>
          )}
        </AnimatePresence>

        {/* --- Modale d'Invitation (inchangée) --- */}
        <AnimatePresence>
          {isInviteModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/40 backdrop-blur-sm">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <h3 className="text-xl font-bold text-[#172554]">Inviter un membre</h3>
                    <button onClick={() => setIsInviteModalOpen(false)}><X className="w-5 h-5 text-slate-400" /></button>
                  </div>
                  <form onSubmit={handleInvite} className="p-6 space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <Input label="Prénom" value={inviteData.firstName} onChange={(e) => setInviteData({...inviteData, firstName: e.target.value})} required />
                      <Input label="Nom" value={inviteData.lastName} onChange={(e) => setInviteData({...inviteData, lastName: e.target.value})} required />
                    </div>
                    <Input label="Email professionnel" type="email" icon={Mail} value={inviteData.email} onChange={(e) => setInviteData({...inviteData, email: e.target.value})} required />
                    <Button type="submit" className="w-full bg-[#172554] h-12 text-lg" isLoading={isActionLoading === 'invite'} leftIcon={Send}>Envoyer l&apos;invitation</Button>
                  </form>
                </motion.div>
              </div>
          )}
        </AnimatePresence>
      </div>
  );
};

// Sub-component pour les items d'info
const InfoItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
    <div className="space-y-1.5">
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{label}</p>
      <div className="flex items-center gap-2 text-slate-700 font-medium">
        <Icon className="w-4 h-4 text-[#2563EB]" />
        <span className="truncate text-sm">{value}</span>
      </div>
    </div>
);

const EmptyState = ({ message }: { message: string }) => (
    <div className="text-center py-20">
      <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
        <Users className="w-8 h-8 text-slate-300" />
      </div>
      <p className="text-slate-500 font-medium">{message}</p>
    </div>
);