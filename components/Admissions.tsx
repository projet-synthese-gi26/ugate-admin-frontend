'use client';

import React, { useState, useEffect } from 'react';
import {
  CheckCircle, XCircle, FileText, Search, Loader2, UserPlus, Mail,
  ChevronDown, X, Send, Building2, Users, MoreVertical, ShieldCheck
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
import { motion, AnimatePresence } from 'framer-motion';

export const Admissions: React.FC = () => {
  const { syndicateStatus } = useAuth();

  // --- États Données ---
  const [activeTab, setActiveTab] = useState<'requests' | 'members'>('requests');
  const [requests, setRequests] = useState<MembershipRequest[]>([]);
  const [members, setMembers] = useState<MemberResponse[]>([]);
  const [branches, setBranches] = useState<SyndicateBranch[]>([]);

  // --- États Filtres & UI ---
  const [selectedBranchId, setSelectedBranchId] = useState<string>(''); // Vide = Chargement, puis ID de la 1ère branche
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState<string | null>(null); // Stocke l'ID de l'item en cours de traitement

  // --- États Modale Invitation ---
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteData, setInviteData] = useState({ firstName: '', lastName: '', email: '' });

  // --- États Menu Rôles (Dropdown) ---
  const [openRoleMenuId, setOpenRoleMenuId] = useState<string | null>(null);

  // 1. Initialisation : Charger Branches (et sélectionner la première par défaut)
  useEffect(() => {
    const initBranches = async () => {
      if (!syndicateStatus?.syndicateId) return;
      try {
        const branchesData = await getSyndicateBranches(syndicateStatus.syndicateId);
        setBranches(branchesData);
        // Sélectionner la première branche par défaut si dispo
        if (branchesData.length > 0) {
          setSelectedBranchId(branchesData[0].id);
        }
      } catch (e) {
        console.error("Erreur branches", e);
      }
    };
    initBranches();
  }, [syndicateStatus?.syndicateId]);

  // 2. Charger les données selon l'onglet actif et la branche sélectionnée
  useEffect(() => {
    if (!syndicateStatus?.syndicateId || !selectedBranchId) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (activeTab === 'requests') {
          // Utilisation de l'endpoint spécifique branche pour les requêtes
          const reqs = await getBranchRequests(syndicateStatus.syndicateId!, selectedBranchId);
          setRequests(reqs || []);
        } else {
          // Pour les membres, l'API renvoie tout, on filtrera côté client ou backend si l'endpoint change
          const allMembers = await getSyndicateMembers(syndicateStatus.syndicateId!);
          // Filtrage côté client pour les membres (si l'API ne filtre pas par branche)
          const filteredMembers = allMembers.filter(m => m.branchId === selectedBranchId);
          setMembers(filteredMembers);
        }
      } catch (error) {
        console.error("Erreur chargement données:", error);
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
      // Retirer de la liste locale
      setRequests(prev => prev.filter(r => r.id !== reqId));
    } catch (e) {
      alert("Erreur lors du traitement de la demande.");
    } finally {
      setIsActionLoading(null);
    }
  };

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!syndicateStatus?.syndicateId || !selectedBranchId) return;

    setIsActionLoading('invite');
    try {
      await addMemberManually(syndicateStatus.syndicateId, selectedBranchId, inviteData);
      setIsInviteModalOpen(false);
      setInviteData({ firstName: '', lastName: '', email: '' });
      alert("Membre ajouté avec succès !");
      // On recharge la liste si on est sur l'onglet membres
      if (activeTab === 'members') {
        const allMembers = await getSyndicateMembers(syndicateStatus.syndicateId);
        setMembers(allMembers.filter(m => m.branchId === selectedBranchId));
      }
    } catch (e) {
      alert("Erreur lors de l'ajout du membre.");
    } finally {
      setIsActionLoading(null);
    }
  };

  const handleChangeRole = async (userId: string, newRole: MemberRole) => {
    if (!syndicateStatus?.syndicateId) return;
    setOpenRoleMenuId(null); // Fermer le menu

    // UI Optimiste
    const oldMembers = [...members];
    setMembers(prev => prev.map(m => m.userId === userId ? { ...m, role: newRole } : m));

    try {
      await updateMemberRole(syndicateStatus.syndicateId, userId, newRole);
    } catch (e) {
      alert("Impossible de changer le rôle.");
      setMembers(oldMembers); // Rollback
    }
  };

  // --- Filtrage Recherche ---
  const filteredData = activeTab === 'requests'
      ? requests.filter(r => r.user?.lastName.toLowerCase().includes(searchTerm.toLowerCase()) || r.user?.email.toLowerCase().includes(searchTerm.toLowerCase()))
      : members.filter(m => m.lastName.toLowerCase().includes(searchTerm.toLowerCase()) || m.email.toLowerCase().includes(searchTerm.toLowerCase()));

  // --- Helpers UI ---
  const getRoleColor = (role: string) => {
    switch (role) {
      case 'PRESIDENT': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'ADMIN': return 'bg-indigo-100 text-indigo-700 border-indigo-200';
      case 'MODERATOR': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'DRIVER': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const availableRoles: MemberRole[] = ['DRIVER', 'MODERATOR', 'ADMIN', 'FLEET_MANAGER'];

  return (
      <div className="space-y-6 animate-in fade-in duration-500">

        {/* --- En-tête --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-6 border-b border-slate-200">
          <div>
            <h1 className="text-3xl font-bold text-[#172554]">Membres & Adhésions</h1>
            <p className="text-slate-500 mt-2">Gérez les accès et les rôles pour chaque antenne.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            {/* Sélecteur d'Antenne */}
            <div className="relative min-w-[240px]">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">Antenne active</label>
              <div className="relative">
                <select
                    value={selectedBranchId}
                    onChange={(e) => setSelectedBranchId(e.target.value)}
                    className="w-full appearance-none bg-white border border-slate-300 text-slate-700 py-2.5 pl-10 pr-10 rounded-xl focus:ring-2 focus:ring-[#172554]/20 focus:border-[#172554] font-medium shadow-sm transition-all"
                    disabled={branches.length === 0}
                >
                  {branches.length === 0 && <option>Chargement des antennes...</option>}
                  {branches.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                </select>
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div className="self-end">
              <Button onClick={() => setIsInviteModalOpen(true)} leftIcon={UserPlus} className="bg-[#172554] text-white shadow-lg shadow-blue-900/20 h-[42px]">
                Ajouter un membre
              </Button>
            </div>
          </div>
        </div>

        {/* --- Onglets & Recherche --- */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex bg-slate-100 rounded-xl p-1">
            <button
                onClick={() => setActiveTab('requests')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'requests' ? 'bg-white text-[#172554] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Demandes <Badge className="bg-amber-100 text-amber-700 border-0">{activeTab === 'requests' ? filteredData.length : requests.length}</Badge>
            </button>
            <button
                onClick={() => setActiveTab('members')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'members' ? 'bg-white text-[#172554] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Membres <Badge className="bg-blue-100 text-blue-700 border-0">{activeTab === 'members' ? filteredData.length : members.length}</Badge>
            </button>
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
                type="text"
                placeholder="Rechercher un nom, email..."
                className="w-full pl-9 pr-4 py-2 bg-transparent text-sm focus:outline-none placeholder:text-slate-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* --- Contenu Principal --- */}
        {isLoading ? (
            <div className="flex justify-center py-20"><Loader2 className="w-10 h-10 text-[#172554] animate-spin" /></div>
        ) : (
            <div className="space-y-4">

              {/* Vue LISTE DES DEMANDES */}
              {activeTab === 'requests' && (
                  <div className="grid gap-4">
                    {filteredData.length === 0 ? (
                        <EmptyState message="Aucune demande en attente pour cette antenne." />
                    ) : (
                        (filteredData as MembershipRequest[]).map((req) => (
                            <motion.div key={req.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="premium-card p-5 flex flex-col md:flex-row items-center gap-5 group">
                              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg border border-amber-100 uppercase">
                                {req.user?.firstName?.[0] || 'U'}
                              </div>
                              <div className="flex-1 text-center md:text-left">
                                <h3 className="font-bold text-[#172554] text-lg">{req.user?.firstName} {req.user?.lastName}</h3>
                                <div className="text-sm text-slate-500 flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start mt-1">
                                  <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {req.user?.email}</span>
                                  <span className="flex items-center gap-1"><FileText className="w-3.5 h-3.5" /> {new Date(req.createdAt).toLocaleDateString()}</span>
                                </div>
                                {req.motivation && (
                                    <div className="mt-3 text-sm text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100 inline-block text-left">
                                      <span className="font-semibold text-slate-700">Motivation:</span> {req.motivation}
                                    </div>
                                )}
                              </div>
                              <div className="flex gap-2">
                                <Button
                                    onClick={() => handleProcessRequest(req.id, true)}
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
                                    isLoading={isActionLoading === req.id}
                                    disabled={!!isActionLoading}
                                >
                                  <CheckCircle className="w-4 h-4 mr-2" /> Accepter
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => handleProcessRequest(req.id, false)}
                                    className="text-red-600 border-red-200 hover:bg-red-50"
                                    disabled={!!isActionLoading}
                                >
                                  Refuser
                                </Button>
                              </div>
                            </motion.div>
                        ))
                    )}
                  </div>
              )}

              {/* Vue LISTE DES MEMBRES */}
              {activeTab === 'members' && (
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    {filteredData.length === 0 ? (
                        <div className="p-10"><EmptyState message="Aucun membre trouvé dans cette antenne." /></div>
                    ) : (
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                            <tr>
                              <th className="px-6 py-4">Utilisateur</th>
                              <th className="px-6 py-4">Rôle</th>
                              <th className="px-6 py-4">Date d&apos;arrivée</th>
                              <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                            {(filteredData as MemberResponse[]).map((member) => (
                                <tr key={member.userId} className="hover:bg-slate-50/50 transition-colors">
                                  <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                      <div className="w-9 h-9 rounded-full bg-[#172554] text-white flex items-center justify-center font-bold uppercase text-xs">
                                        {member.firstName?.[0]}{member.lastName?.[0]}
                                      </div>
                                      <div>
                                        <p className="font-semibold text-[#172554]">{member.firstName} {member.lastName}</p>
                                        <p className="text-xs text-slate-500">{member.email}</p>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4">
                                    <Badge className={`${getRoleColor(member.role)} border px-3 py-1`}>
                                      {member.role.replace('_', ' ')}
                                    </Badge>
                                  </td>
                                  <td className="px-6 py-4 text-slate-500">
                                    {new Date(member.joinedAt).toLocaleDateString()}
                                  </td>
                                  <td className="px-6 py-4 text-right relative">
                                    <button
                                        onClick={() => setOpenRoleMenuId(openRoleMenuId === member.userId ? null : member.userId)}
                                        className="p-2 text-slate-400 hover:text-[#172554] hover:bg-slate-100 rounded-lg transition-colors"
                                    >
                                      <MoreVertical className="w-4 h-4" />
                                    </button>

                                    {/* Dropdown Menu Rôle */}
                                    {openRoleMenuId === member.userId && (
                                        <div className="absolute right-8 top-8 w-48 bg-white rounded-xl shadow-xl border border-slate-100 z-10 p-1 animate-in fade-in zoom-in-95 duration-200">
                                          <div className="text-xs font-semibold text-slate-400 px-3 py-2 uppercase tracking-wider">Changer le rôle</div>
                                          {availableRoles.map(role => (
                                              <button
                                                  key={role}
                                                  onClick={() => handleChangeRole(member.userId, role)}
                                                  className={`w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-slate-50 flex items-center justify-between ${member.role === role ? 'text-[#2563EB] bg-blue-50 font-medium' : 'text-slate-700'}`}
                                              >
                                                {role.replace('_', ' ')}
                                                {member.role === role && <ShieldCheck className="w-3.5 h-3.5" />}
                                              </button>
                                          ))}
                                        </div>
                                    )}
                                  </td>
                                </tr>
                            ))}
                            </tbody>
                          </table>
                        </div>
                    )}
                  </div>
              )}
            </div>
        )}

        {/* --- Modale d'Invitation --- */}
        <AnimatePresence>
          {isInviteModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/40 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                >
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <h3 className="text-xl font-bold text-[#172554]">Inviter un membre</h3>
                    <button onClick={() => setIsInviteModalOpen(false)}><X className="w-5 h-5 text-slate-400 hover:text-slate-600" /></button>
                  </div>
                  <form onSubmit={handleInvite} className="p-6 space-y-5">
                    <div className="p-3 bg-blue-50 rounded-lg text-sm text-blue-700 border border-blue-100 flex gap-2">
                      <Building2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      Invitation pour : <b>{branches.find(b => b.id === selectedBranchId)?.name}</b>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                          label="Prénom"
                          value={inviteData.firstName}
                          onChange={(e) => setInviteData({...inviteData, firstName: e.target.value})}
                          required
                      />
                      <Input
                          label="Nom"
                          value={inviteData.lastName}
                          onChange={(e) => setInviteData({...inviteData, lastName: e.target.value})}
                          required
                      />
                    </div>
                    <Input
                        label="Email professionnel"
                        type="email"
                        icon={Mail}
                        value={inviteData.email}
                        onChange={(e) => setInviteData({...inviteData, email: e.target.value})}
                        required
                    />
                    <Button
                        type="submit"
                        className="w-full bg-[#172554] h-12 text-lg"
                        isLoading={isActionLoading === 'invite'}
                        leftIcon={Send}
                    >
                      Envoyer l&apos;invitation
                    </Button>
                  </form>
                </motion.div>
              </div>
          )}
        </AnimatePresence>
      </div>
  );
};

const EmptyState = ({ message }: { message: string }) => (
    <div className="text-center py-20">
      <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
        <Users className="w-8 h-8 text-slate-300" />
      </div>
      <p className="text-slate-500 font-medium">{message}</p>
    </div>
);