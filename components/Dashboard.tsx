'use client';

import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts';
import { Users, Calendar, TrendingUp, DollarSign, ArrowUpRight, ArrowDownRight, Activity, ShoppingBag, Target, Clock, Star, Award, Zap, Bell, MessageSquare, FileText, Download } from 'lucide-react';
import { CHART_DATA } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  trend: 'up' | 'down';
  gradient: string;
  percentage?: number;
}

const StatCard = ({ title, value, change, icon: Icon, trend, gradient }: StatCardProps) => (
  <Card className="hover:shadow-lg transition-all border-0">
    <CardContent className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-2">{value}</h3>
          <div className="flex items-center mt-2">
            <span className={`inline-flex items-center text-sm font-semibold ${trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
              {trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
              {change}
            </span>
          </div>
        </div>
        <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient}`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
    </CardContent>
  </Card>
);

interface DashboardProps {
  onChangeView?: (view: string) => void;
  onTriggerAction?: (action: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onChangeView, onTriggerAction }) => {
  const [timeRange, setTimeRange] = useState('30d');
  
  const categoryData = [
    { name: 'Événements', value: 400, color: '#1877F2' },
    { name: 'Produits', value: 300, color: '#6B7280' },
    { name: 'Services', value: 200, color: '#9CA3AF' },
    { name: 'Adhésions', value: 100, color: '#D1D5DB' },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
    { month: 'Fév', revenue: 3000, expenses: 1398, profit: 1602 },
    { month: 'Mar', revenue: 2000, expenses: 9800, profit: -7800 },
    { month: 'Avr', revenue: 2780, expenses: 3908, profit: -1128 },
    { month: 'Mai', revenue: 1890, expenses: 4800, profit: -2910 },
    { month: 'Juin', revenue: 2390, expenses: 3800, profit: -1410 },
  ];

  const performanceData = [
    { name: 'Lun', events: 12, products: 8, services: 5 },
    { name: 'Mar', events: 19, products: 12, services: 8 },
    { name: 'Mer', events: 15, products: 10, services: 6 },
    { name: 'Jeu', events: 25, products: 15, services: 10 },
    { name: 'Ven', events: 22, products: 18, services: 12 },
    { name: 'Sam', events: 18, products: 14, services: 9 },
    { name: 'Dim', events: 20, products: 16, services: 11 },
  ];

  const topEvents = [
    { name: 'Formation Leadership', attendees: 156, revenue: '12,450€', status: 'En cours', trend: 'up' },
    { name: 'Assemblée Générale', attendees: 142, revenue: '8,900€', status: 'Terminé', trend: 'up' },
    { name: 'Atelier Négociation', attendees: 89, revenue: '5,670€', status: 'Planifié', trend: 'up' },
    { name: 'Networking Été', attendees: 67, revenue: '3,200€', status: 'Planifié', trend: 'down' },
  ];

  const handleGenerateReport = () => {
    const reportData = {
      period: timeRange,
      totalMembers: 2543,
      activeEvents: 24,
      monthlyRevenue: 45200,
      engagementRate: 68,
      generatedAt: new Date().toLocaleString('fr-FR')
    };
    
    const reportContent = `
RAPPORT MENSUEL - UGATE ADMIN
================================
Généré le: ${reportData.generatedAt}
Période: ${timeRange === '30d' ? '30 derniers jours' : timeRange === '7d' ? '7 derniers jours' : timeRange === '90d' ? '90 derniers jours' : 'Cette année'}

STATISTIQUES PRINCIPALES
------------------------
Membres Totaux: ${reportData.totalMembers}
Événements Actifs: ${reportData.activeEvents}
Revenus Mensuels: ${reportData.monthlyRevenue}€
Taux d'Engagement: ${reportData.engagementRate}%

PERFORMANCE
-----------
✓ Croissance des adhésions: +12.5%
✓ Nouveaux événements créés: +8
✓ Augmentation des revenus: +18.2%

Ce rapport a été généré automatiquement par UGate Admin.
    `.trim();
    
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rapport-mensuel-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const quickActions = [
    { 
      icon: Calendar, 
      label: 'Créer Événement', 
      color: 'bg-[#1877F2]', 
      action: () => {
        onChangeView?.('events');
        onTriggerAction?.('create-event');
      }
    },
    { 
      icon: ShoppingBag, 
      label: 'Ajouter Produit', 
      color: 'bg-[#1877F2]', 
      action: () => {
        onChangeView?.('products');
        onTriggerAction?.('create-product');
      }
    },
    { 
      icon: Users, 
      label: 'Nouvelle Admission', 
      color: 'bg-[#1877F2]', 
      action: () => {
        onChangeView?.('admissions');
        onTriggerAction?.('create-admission');
      }
    },
    { 
      icon: FileText, 
      label: 'Rapport Mensuel', 
      color: 'bg-gray-600', 
      action: handleGenerateReport
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header simplifié */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Tableau de Bord
          </h1>
          <p className="text-gray-500 mt-1">
            Vue d&apos;ensemble de votre activité
          </p>
        </div>
        <div className="flex gap-3">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-4 py-2.5 outline-none hover:border-[#1877F2] transition-all"
          >
            <option value="7d">7 jours</option>
            <option value="30d">30 jours</option>
            <option value="90d">90 jours</option>
          </select>
          <Button variant="outline" size="md" leftIcon={Download} onClick={handleGenerateReport}>
            Exporter
          </Button>
        </div>
      </div>

      {/* Actions rapides - Version compacte */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {quickActions.slice(0, 4).map((action, idx) => (
          <button
            key={idx}
            onClick={action.action}
            className="group bg-white rounded-lg p-4 border border-gray-200 hover:border-[#1877F2] hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${action.color}`}>
                <action.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-900">
                {action.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Membres Totaux" 
          value="2,543" 
          change="+12.5%" 
          icon={Users} 
          trend="up" 
          gradient="from-[#1877F2] to-[#1877F2]"
        />
        <StatCard 
          title="Événements Actifs" 
          value="24" 
          change="+8" 
          icon={Calendar} 
          trend="up" 
          gradient="from-[#1877F2] to-[#1877F2]"
        />
        <StatCard 
          title="Revenus Mensuels" 
          value="45,200 €" 
          change="+18.2%" 
          icon={DollarSign} 
          trend="up" 
          gradient="from-[#1877F2] to-[#1877F2]"
        />
        <StatCard 
          title="Taux Engagement" 
          value="68%" 
          change="-2.1%" 
          icon={TrendingUp} 
          trend="down" 
          gradient="from-gray-600 to-gray-600"
        />
      </div>

      {/* Graphique principal + Top événements */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Graphique de croissance */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-lg">
            <CardHeader className="border-b border-gray-100">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#1877F2]" />
                Croissance des Adhésions
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={CHART_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1877F2" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#1877F2" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#6B7280', fontSize: 12}} 
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#6B7280', fontSize: 12}} 
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        borderRadius: '12px', 
                        border: '1px solid #E5E7EB', 
                        boxShadow: '0 10px 40px -10px rgb(0 0 0 / 0.2)' 
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="new" 
                      stroke="#1877F2" 
                      strokeWidth={2} 
                      fillOpacity={1} 
                      fill="url(#colorNew)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top événements */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-[#1877F2]" />
              Top Événements
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-3">
              {topEvents.slice(0, 4).map((event, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-all cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{event.name}</h4>
                      <span className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                        <Users className="w-3 h-3" />
                        {event.attendees} participants
                      </span>
                    </div>
                    <p className="font-bold text-gray-900 text-sm">{event.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activité récente */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="border-b border-gray-100">
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#1877F2]" />
            Activité Récente
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Users, title: 'Nouvelle admission', desc: 'Thomas Dubois validé', time: '2h' },
              { icon: Calendar, title: 'Événement créé', desc: 'Formation Leadership', time: '4h' },
              { icon: ShoppingBag, title: 'Produit ajouté', desc: 'Sac professionnel', time: '6h' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#1877F2] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-500 truncate">{item.desc}</p>
                  <p className="text-xs text-gray-400 mt-1">Il y a {item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
