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

const StatCard = ({ title, value, change, icon: Icon, trend, gradient, percentage }: StatCardProps) => (
  <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0">
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
    <CardContent className="p-6 relative">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{value}</h3>
        </div>
        <div className={`p-3 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 transition-transform`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className={`inline-flex items-center text-sm font-bold ${trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
            {trend === 'up' ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
            {change}
          </span>
          <span className="text-sm text-gray-400 ml-2">ce mois</span>
        </div>
        {percentage && (
          <div className="flex items-center gap-2">
            <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-500`} style={{ width: `${percentage}%` }}></div>
            </div>
            <span className="text-xs font-semibold text-gray-500">{percentage}%</span>
          </div>
        )}
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
    { name: 'Événements', value: 400, color: '#3B82F6' },
    { name: 'Produits', value: 300, color: '#10B981' },
    { name: 'Services', value: 200, color: '#F59E0B' },
    { name: 'Adhésions', value: 100, color: '#EF4444' },
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
      color: 'from-blue-500 to-blue-600', 
      action: () => {
        onChangeView?.('events');
        onTriggerAction?.('create-event');
      }
    },
    { 
      icon: ShoppingBag, 
      label: 'Ajouter Produit', 
      color: 'from-emerald-500 to-emerald-600', 
      action: () => {
        onChangeView?.('products');
        onTriggerAction?.('create-product');
      }
    },
    { 
      icon: Users, 
      label: 'Nouvelle Admission', 
      color: 'from-purple-500 to-purple-600', 
      action: () => {
        onChangeView?.('admissions');
        onTriggerAction?.('create-admission');
      }
    },
    { 
      icon: FileText, 
      label: 'Rapport Mensuel', 
      color: 'from-orange-500 to-orange-600', 
      action: handleGenerateReport
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header avec actions rapides */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Tableau de Bord
          </h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            <Activity className="w-4 h-4" />
            Bienvenue, voici vos performances en temps réel
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none shadow-sm cursor-pointer hover:border-blue-500 hover:shadow-md transition-all font-medium"
          >
            <option value="7d">7 derniers jours</option>
            <option value="30d">30 derniers jours</option>
            <option value="90d">90 derniers jours</option>
            <option value="1y">Cette année</option>
          </select>
          <Button variant="outline" size="md" leftIcon={Download}>
            Exporter
          </Button>
          <Button variant="primary" size="md" leftIcon={Bell}>
            Notifications
          </Button>
        </div>
      </div>

      {/* Actions rapides */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action, idx) => (
          <button
            key={idx}
            onClick={action.action}
            className="group relative overflow-hidden bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            <div className="relative flex flex-col items-center gap-3">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${action.color} shadow-lg group-hover:scale-110 transition-transform`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-900 group-hover:text-white transition-colors">
                {action.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Membres Totaux" 
          value="2,543" 
          change="+12.5%" 
          icon={Users} 
          trend="up" 
          gradient="from-blue-500 to-blue-600"
          percentage={85}
        />
        <StatCard 
          title="Événements Actifs" 
          value="24" 
          change="+8" 
          icon={Calendar} 
          trend="up" 
          gradient="from-emerald-500 to-emerald-600"
          percentage={72}
        />
        <StatCard 
          title="Revenus Mensuels" 
          value="45,200 €" 
          change="+18.2%" 
          icon={DollarSign} 
          trend="up" 
          gradient="from-purple-500 to-purple-600"
          percentage={91}
        />
        <StatCard 
          title="Taux Engagement" 
          value="68%" 
          change="-2.1%" 
          icon={TrendingUp} 
          trend="down" 
          gradient="from-orange-500 to-orange-600"
          percentage={68}
        />
      </div>

      {/* Graphiques principaux */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Graphique de croissance */}
        <div className="lg:col-span-2">
          <Card className="h-full border-0 shadow-xl">
            <CardHeader className="border-b border-gray-100">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Croissance des Adhésions
                </CardTitle>
                <div className="flex gap-2">
                  <Badge variant="success">+12.5%</Badge>
                  <Badge variant="info">Tendance positive</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={CHART_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#6B7280', fontSize: 12}} 
                      dy={10}
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
                      itemStyle={{ color: '#1F2937', fontSize: '13px', fontWeight: 600 }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="new" 
                      stroke="#3B82F6" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorNew)" 
                      activeDot={{ r: 8, strokeWidth: 0, fill: '#2563EB' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="active" 
                      stroke="#10B981" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorActive)" 
                      activeDot={{ r: 8, strokeWidth: 0, fill: '#059669' }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Distribution par catégorie */}
        <Card className="border-0 shadow-xl">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-600" />
              Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-[250px] w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-3">
              {categoryData.map((cat, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></div>
                    <span className="text-sm font-medium text-gray-700">{cat.name}</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{cat.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance et Top événements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance hebdomadaire */}
        <Card className="border-0 shadow-xl">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-600" />
              Performance Hebdomadaire
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      borderRadius: '12px', 
                      border: '1px solid #E5E7EB', 
                      boxShadow: '0 10px 40px -10px rgb(0 0 0 / 0.2)' 
                    }}
                  />
                  <Legend />
                  <Bar dataKey="events" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="products" fill="#10B981" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="services" fill="#F59E0B" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top événements */}
        <Card className="border-0 shadow-xl">
          <CardHeader className="border-b border-gray-100">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Top Événements
              </CardTitle>
              <Button variant="ghost" size="sm">Voir tout</Button>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {topEvents.map((event, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-blue-50 hover:to-white transition-all group cursor-pointer border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold shadow-lg">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{event.name}</h4>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {event.attendees} participants
                        </span>
                        <Badge variant={event.status === 'En cours' ? 'success' : event.status === 'Terminé' ? 'default' : 'info'} className="text-xs">
                          {event.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{event.revenue}</p>
                    <span className={`text-xs font-semibold flex items-center gap-1 ${event.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
                      {event.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      {event.trend === 'up' ? '+' : '-'}15%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenus et Activité récente */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Analyse des revenus */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-xl">
            <CardHeader className="border-b border-gray-100">
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                Analyse Financière
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        borderRadius: '12px', 
                        border: '1px solid #E5E7EB', 
                        boxShadow: '0 10px 40px -10px rgb(0 0 0 / 0.2)' 
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="expenses" stroke="#EF4444" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="profit" stroke="#3B82F6" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activité récente améliorée */}
        <Card className="border-0 shadow-xl">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              Activité Récente
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6 relative">
              <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20" />
              
              {[
                { icon: Users, title: 'Nouvelle admission', desc: 'Thomas Dubois validé', time: '2h', color: 'from-blue-500 to-blue-600' },
                { icon: Calendar, title: 'Événement créé', desc: 'Formation Leadership', time: '4h', color: 'from-emerald-500 to-emerald-600' },
                { icon: ShoppingBag, title: 'Produit ajouté', desc: 'Sac professionnel', time: '6h', color: 'from-purple-500 to-purple-600' },
                { icon: Award, title: 'Objectif atteint', desc: '100 nouveaux membres', time: '8h', color: 'from-orange-500 to-orange-600' },
                { icon: MessageSquare, title: 'Nouveau message', desc: 'Support client', time: '12h', color: 'from-pink-500 to-pink-600' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 relative group">
                  <div className={`z-10 w-9 h-9 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                    <p className="text-xs text-gray-400 mt-1 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Il y a {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
