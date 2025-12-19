'use client';

import React, { useState } from 'react';
import { Check, X, Phone, Mail, FileText, Calendar, Building, ChevronRight, XCircle, CheckCircle, MessageSquare, Download, Filter, Search, Clock, User, TrendingUp, AlertCircle, Eye } from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { MOCK_ADMISSIONS } from '@/lib/constants';
import { Admission } from '@/lib/types';
import Image from 'next/image';

export const Admissions: React.FC = () => {
  const [admissions, setAdmissions] = useState<Admission[]>(MOCK_ADMISSIONS);
  const [selectedAdmission, setSelectedAdmission] = useState<Admission | null>(null);
  const [activeTab, setActiveTab] = useState<'pending' | 'accepted' | 'rejected'>('pending');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotes, setShowNotes] = useState(false);
  const [note, setNote] = useState('');

  const handleStatusUpdate = (id: string, status: 'accepted' | 'rejected') => {
    setAdmissions(admissions.map(a => a.id === id ? { ...a, status } : a));
    setSelectedAdmission(null);
  };

  const filteredAdmissions = admissions.filter(a => {
    const matchesTab = a.status === activeTab;
    const matchesSearch = a.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         a.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         a.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const pendingCount = admissions.filter(a => a.status === 'pending').length;
  const acceptedCount = admissions.filter(a => a.status === 'accepted').length;
  const rejectedCount = admissions.filter(a => a.status === 'rejected').length;

  const stats = [
    { label: 'Total Demandes', value: admissions.length, icon: FileText, color: 'from-blue-500 to-blue-600', trend: '+12%' },
    { label: 'En Attente', value: pendingCount, icon: Clock, color: 'from-orange-500 to-orange-600', trend: `${pendingCount}` },
    { label: 'Acceptées', value: acceptedCount, icon: CheckCircle, color: 'from-emerald-500 to-emerald-600', trend: '+8%' },
    { label: 'Refusées', value: rejectedCount, icon: XCircle, color: 'from-red-500 to-red-600', trend: '-3%' },
  ];

  if (selectedAdmission) {
    return (
      <div className="animate-in fade-in duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Button variant="ghost" size="sm" onClick={() => setSelectedAdmission(null)}>
              <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Retour à la liste
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" leftIcon={Download}>Télécharger le dossier</Button>
              <Button variant="outline" size="sm" leftIcon={MessageSquare}>Contacter</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="relative">
                      <Image 
                        src={selectedAdmission.avatar} 
                        alt={selectedAdmission.fullName}
                        width={96}
                        height={96}
                        className="rounded-2xl object-cover border-4 border-gray-100 shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedAdmission.fullName}</h2>
                      <p className="text-lg text-gray-600 mb-4">
                        {selectedAdmission.position} chez <span className="font-semibold text-gray-900">{selectedAdmission.company}</span>
                      </p>
                      <div className="flex items-center gap-3">
                        <Badge variant={
                          selectedAdmission.status === 'accepted' ? 'success' :
                          selectedAdmission.status === 'rejected' ? 'error' : 'warning'
                        } className="text-sm px-4 py-1">
                          {selectedAdmission.status === 'pending' ? 'En Attente' :
                           selectedAdmission.status === 'accepted' ? 'Validée' : 'Refusée'}
                        </Badge>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Soumis le {new Date(selectedAdmission.submittedAt).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
                      <CardContent className="p-6">
                        <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Contact
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-gray-900">
                            <Mail className="w-4 h-4 mr-3 text-blue-600" />
                            <a href={`mailto:${selectedAdmission.email}`} className="hover:text-blue-600 transition-colors">
                              {selectedAdmission.email}
                            </a>
                          </div>
                          <div className="flex items-center text-sm text-gray-900">
                            <Phone className="w-4 h-4 mr-3 text-blue-600" />
                            <a href={`tel:${selectedAdmission.phone}`} className="hover:text-blue-600 transition-colors">
                              {selectedAdmission.phone}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200">
                      <CardContent className="p-6">
                        <h4 className="text-xs font-bold text-purple-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          Professionnel
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-gray-900">
                            <Building className="w-4 h-4 mr-3 text-purple-600" />
                            {selectedAdmission.company}
                          </div>
                          <div className="flex items-center text-sm text-gray-900">
                            <User className="w-4 h-4 mr-3 text-purple-600" />
                            {selectedAdmission.position}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-600" />
                      Lettre de Motivation
                    </h4>
                    <div className="bg-gradient-to-br from-gray-50 to-white p-6 border-2 border-gray-200 rounded-2xl">
                      <p className="text-gray-700 leading-relaxed italic">
                        &quot;{selectedAdmission.motivation}&quot;
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Documents Joints</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {['CV_2024.pdf', 'Lettre_Motivation.pdf'].map((doc, idx) => (
                        <div key={idx} className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-all group">
                          <div className="bg-red-50 p-3 rounded-xl text-red-600 mr-4 group-hover:scale-110 transition-transform">
                            <FileText className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-gray-900">{doc}</p>
                            <p className="text-xs text-gray-500">1.2 MB</p>
                          </div>
                          <Download className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {showNotes && (
                <Card className="border-0 shadow-xl animate-in slide-in-from-bottom-4 duration-300">
                  <CardHeader className="border-b border-gray-100">
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-blue-600" />
                      Notes Internes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <textarea
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all min-h-[120px]"
                      placeholder="Ajoutez vos notes sur ce candidat..."
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                    <div className="flex justify-end gap-2 mt-4">
                      <Button variant="ghost" size="sm" onClick={() => setShowNotes(false)}>Annuler</Button>
                      <Button size="sm">Enregistrer</Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-6 text-xl">Workflow de Validation</h3>
                  
                  <div className="relative pl-6 space-y-6 mb-8">
                    <div className="absolute top-0 bottom-0 left-2 w-0.5 bg-white/30"></div>
                    
                    {[
                      { label: 'Dossier soumis', date: selectedAdmission.submittedAt, done: true },
                      { label: 'Vérification automatique', date: 'En cours', done: true },
                      { label: 'Révision manuelle', date: 'En attente', done: false },
                      { label: 'Décision finale', date: 'À venir', done: false },
                    ].map((step, idx) => (
                      <div key={idx} className="relative">
                        <div className={`absolute -left-[26px] top-1 w-4 h-4 rounded-full ring-4 ring-white/20 ${step.done ? 'bg-white' : 'bg-white/30'}`}></div>
                        <p className="text-sm font-semibold">{step.label}</p>
                        <p className="text-xs text-white/70 mt-1">
                          {typeof step.date === 'string' && step.date.includes('-') 
                            ? new Date(step.date).toLocaleDateString('fr-FR')
                            : step.date}
                        </p>
                      </div>
                    ))}
                  </div>

                  {selectedAdmission.status === 'pending' ? (
                    <div className="space-y-3">
                      <Button 
                        variant="secondary" 
                        className="w-full bg-white text-emerald-600 hover:bg-emerald-50 border-0 shadow-lg font-bold"
                        onClick={() => handleStatusUpdate(selectedAdmission.id, 'accepted')}
                      >
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Accepter le Dossier
                      </Button>
                      <Button 
                        variant="secondary" 
                        className="w-full bg-white/20 hover:bg-white/30 text-white border-0"
                        onClick={() => setShowNotes(!showNotes)}
                      >
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Ajouter une Note
                      </Button>
                      <Button 
                        variant="secondary" 
                        className="w-full bg-white/20 hover:bg-red-500 text-white border-0"
                        onClick={() => handleStatusUpdate(selectedAdmission.id, 'rejected')}
                      >
                        <XCircle className="w-5 h-5 mr-2" />
                        Refuser
                      </Button>
                    </div>
                  ) : (
                    <div className={`p-4 rounded-xl flex items-center justify-center ${
                      selectedAdmission.status === 'accepted' 
                        ? 'bg-emerald-500/20 ring-2 ring-white/30' 
                        : 'bg-red-500/20 ring-2 ring-white/30'
                    }`}>
                      <span className="font-bold flex items-center text-lg">
                        {selectedAdmission.status === 'accepted' 
                          ? <><CheckCircle className="w-6 h-6 mr-2" /> Dossier Validé</>
                          : <><XCircle className="w-6 h-6 mr-2" /> Dossier Refusé</>
                        }
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    Score d&apos;Évaluation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      { label: 'Expérience', score: 85, color: 'blue' },
                      { label: 'Motivation', score: 92, color: 'emerald' },
                      { label: 'Adéquation', score: 78, color: 'purple' },
                    ].map((item, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">{item.label}</span>
                          <span className="text-sm font-bold text-gray-900">{item.score}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-full transition-all duration-500`}
                            style={{ width: `${item.score}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
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
            Demandes d&apos;Adhésion
          </h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            <User className="w-4 h-4" />
            Gérez et validez les nouvelles candidatures
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="md" leftIcon={Download}>Exporter CSV</Button>
          <Button variant="outline" size="md" leftIcon={Filter}>Filtres Avancés</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <Card key={idx} className={`border-0 shadow-lg bg-gradient-to-br ${stat.color} text-white overflow-hidden relative`}>
            <CardContent className="p-6">
              <div className="absolute top-0 right-0 opacity-10">
                <stat.icon className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <stat.icon className="w-8 h-8 opacity-80" />
                  <Badge className="bg-white/20 backdrop-blur text-white border-0 text-xs">
                    {stat.trend}
                  </Badge>
                </div>
                <p className="text-white/80 text-sm mb-1">{stat.label}</p>
                <p className="text-4xl font-bold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-0 shadow-xl">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher par nom, email ou entreprise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex gap-4 border-b border-gray-200 mb-6">
            {[
              { id: 'pending' as const, label: 'En Attente', count: pendingCount, color: 'orange' },
              { id: 'accepted' as const, label: 'Validées', count: acceptedCount, color: 'emerald' },
              { id: 'rejected' as const, label: 'Refusées', count: rejectedCount, color: 'red' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 px-4 border-b-2 font-semibold text-sm flex items-center gap-2 transition-all ${
                  activeTab === tab.id
                    ? `border-${tab.color}-600 text-${tab.color}-600`
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab.label}
                {tab.count > 0 && (
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    activeTab === tab.id
                      ? `bg-${tab.color}-100 text-${tab.color}-700`
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredAdmissions.map((admission) => (
              <div
                key={admission.id}
                className="p-6 rounded-xl border-2 border-gray-100 hover:border-blue-500 hover:bg-blue-50/30 transition-all cursor-pointer group"
                onClick={() => setSelectedAdmission(admission)}
              >
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <Image 
                      src={admission.avatar} 
                      alt={admission.fullName}
                      width={64}
                      height={64}
                      className="rounded-xl object-cover ring-2 ring-white shadow-lg group-hover:ring-blue-200 transition-all"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full ring-2 ring-white ${
                      admission.status === 'accepted' ? 'bg-emerald-500' :
                      admission.status === 'rejected' ? 'bg-red-500' : 'bg-orange-500'
                    }`}></div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {admission.fullName}
                        </h3>
                        <p className="text-sm text-gray-600">{admission.email}</p>
                      </div>
                      <Badge variant={
                        admission.status === 'accepted' ? 'success' :
                        admission.status === 'rejected' ? 'error' : 'warning'
                      }>
                        {admission.status === 'pending' ? 'En Attente' :
                         admission.status === 'accepted' ? 'Validée' : 'Refusée'}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        {admission.company}
                      </span>
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {admission.position}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(admission.submittedAt).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
