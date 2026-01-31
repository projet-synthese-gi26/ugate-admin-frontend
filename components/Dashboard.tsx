'use client';

import React, { useState, useEffect } from 'react';
import {
  Users, Calendar, TrendingUp, DollarSign,
  ShoppingBag, FileText, Download, Loader2, RefreshCw, ArrowUpRight, Plus
} from 'lucide-react';
import { Button } from './ui/Button';
import { useAuth } from '@/lib/contexts/AuthContext';
import { getSyndicateStats, SyndicateStats } from '@/lib/services/admin.service';
import { motion } from 'framer-motion';

// --- Skeleton Design ---
const StatCardSkeleton = () => (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm animate-pulse h-[140px]">
      <div className="flex justify-between items-start mb-4">
        <div className="h-10 w-10 bg-slate-100 rounded-full"></div>
        <div className="h-6 w-16 bg-slate-100 rounded-full"></div>
      </div>
      <div className="h-8 w-24 bg-slate-100 rounded mb-2"></div>
      <div className="h-4 w-32 bg-slate-100 rounded"></div>
    </div>
);

// --- Premium Stat Card ---
interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ElementType;
  trend?: string;
  trendUp?: boolean;
  colorClass: string; // ex: "text-blue-600 bg-blue-50"
  delay: number;
}

const StatCard = ({ title, value, icon: Icon, trend, trendUp = true, colorClass, delay }: StatCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay }}
        className="premium-card rounded-2xl p-6 relative overflow-hidden group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${colorClass} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-6 h-6 ${colorClass.split(' ')[0]}`} />
        </div>
        {trend && (
            <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
              {trendUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3 rotate-90" />}
              {trend}
            </div>
        )}
      </div>

      <div>
        <h3 className="text-3xl font-bold text-slate-900 tracking-tight mb-1">{value}</h3>
        <p className="text-sm font-medium text-slate-500">{title}</p>
      </div>
    </motion.div>
);

// --- Action Card ---
const ActionCard = ({ title, icon: Icon, onClick, color }: any) => (
    <button
        onClick={onClick}
        className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-md transition-all text-left group"
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{title}</h4>
        <p className="text-xs text-slate-500">Action rapide</p>
      </div>
      <Plus className="w-5 h-5 text-slate-300 ml-auto group-hover:text-blue-500" />
    </button>
);

interface DashboardProps {
  onChangeView?: (view: string) => void;
  onTriggerAction?: (action: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onChangeView, onTriggerAction }) => {
  const { syndicateStatus } = useAuth();
  const [stats, setStats] = useState<SyndicateStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStats = async () => {
    if (!syndicateStatus?.syndicateId) return;
    setIsLoading(true);
    try {
      const data = await getSyndicateStats(syndicateStatus.syndicateId);
      setStats(data);
    } catch (error) {
      console.error("Erreur stats:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, [syndicateStatus?.syndicateId]);

  return (
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Vue d&apos;ensemble</h1>
            <p className="text-slate-500 mt-2 text-lg">
              Voici ce qui se passe dans votre syndicat aujourd&apos;hui.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" onClick={fetchStats}>
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Actualiser
            </Button>
            <Button variant="secondary" size="sm" className="bg-[#0F172A] text-white hover:bg-[#1e293b]">
              <Download className="w-4 h-4 mr-2" />
              Exporter
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
              <>
                {[1,2,3,4].map(i => <StatCardSkeleton key={i} />)}
              </>
          ) : (
              <>
                <StatCard
                    title="Membres Actifs"
                    value={stats?.totalMembers || 0}
                    icon={Users}
                    trend="+12%"
                    colorClass="text-blue-600 bg-blue-50"
                    delay={0}
                />
                <StatCard
                    title="Demandes en attente"
                    value={stats?.pendingRequests || 0}
                    icon={FileText}
                    trend="+5"
                    colorClass="text-amber-600 bg-amber-50"
                    delay={0.1}
                />
                <StatCard
                    title="Services Actifs"
                    value={stats?.activeServices || 0}
                    icon={ShoppingBag}
                    trendUp={true}
                    colorClass="text-purple-600 bg-purple-50"
                    delay={0.2}
                />
                <StatCard
                    title="Revenus Mensuels"
                    value={`${(stats?.totalRevenue || 0).toLocaleString()} €`}
                    icon={DollarSign}
                    trend="+24%"
                    colorClass="text-emerald-600 bg-emerald-50"
                    delay={0.3}
                />
              </>
          )}
        </div>

        {/* Quick Actions & Recent Activity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Actions Rapides */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Actions Fréquentes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ActionCard
                  title="Nouvel Événement"
                  icon={Calendar}
                  color="bg-blue-600"
                  onClick={() => { onChangeView?.('events'); onTriggerAction?.('create-event'); }}
              />
              <ActionCard
                  title="Ajouter Produit"
                  icon={ShoppingBag}
                  color="bg-emerald-600"
                  onClick={() => { onChangeView?.('products'); onTriggerAction?.('create-product'); }}
              />
              <ActionCard
                  title="Valider Adhésion"
                  icon={Users}
                  color="bg-amber-500"
                  onClick={() => { onChangeView?.('admissions'); }}
              />
              <ActionCard
                  title="Publier Annonce"
                  icon={TrendingUp}
                  color="bg-purple-600"
                  onClick={() => { /* Feature future */ }}
              />
            </div>

            {/* Graph Placeholder (pour montrer le potentiel visuel) */}
            <div className="premium-card rounded-2xl p-6 mt-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-900">Analyses d&apos;audience</h3>
                <select className="bg-slate-50 border-none text-sm font-medium text-slate-600 rounded-lg py-1 px-3 outline-none">
                  <option>7 derniers jours</option>
                  <option>30 derniers jours</option>
                </select>
              </div>
              <div className="h-64 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 border-dashed">
                <p className="text-slate-400 text-sm">Graphique des visites (Placeholder)</p>
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 h-full">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Activité Récente</h3>
              <div className="space-y-6">
                {[
                  { title: 'Nouveau membre', desc: 'Jean Dupont a rejoint', time: '2 min', icon: Users, color: 'bg-blue-100 text-blue-600' },
                  { title: 'Vente produit', desc: 'Commande #1234', time: '1h', icon: ShoppingBag, color: 'bg-emerald-100 text-emerald-600' },
                  { title: 'Événement créé', desc: 'AG 2024', time: '3h', icon: Calendar, color: 'bg-purple-100 text-purple-600' },
                  { title: 'Nouvelle demande', desc: 'Validation requise', time: '5h', icon: FileText, color: 'bg-amber-100 text-amber-600' },
                ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                      <span className="text-xs text-slate-400 ml-auto">{item.time}</span>
                    </div>
                ))}
              </div>
              <button className="w-full mt-8 py-2 text-sm font-medium text-slate-500 hover:text-[#0F172A] transition-colors border-t border-slate-100">
                Voir tout l&apos;historique
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};