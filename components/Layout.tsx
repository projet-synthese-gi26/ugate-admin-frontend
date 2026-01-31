'use client';

import React from 'react';
import {
  LayoutDashboard, Calendar, ShoppingBag, Briefcase,
  Users, Settings, LogOut, Menu, Bell, Search,
  ChevronRight, Building2
} from 'lucide-react';
import { useAuth } from '@/lib/contexts/AuthContext';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  currentView: string;
  onChangeView: (view: string) => void;
  userEmail: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onChangeView, userEmail }) => {
  const { logout, user, syndicateStatus } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
    { id: 'branches', label: 'Antennes', icon: Building2 }, // Building2 from lucide-react
    { id: 'events', label: 'Événements', icon: Calendar },
    { id: 'products', label: 'Produits', icon: ShoppingBag },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'admissions', label: 'Membres', icon: Users, badge: syndicateStatus?.status === 'APPROVED' ? 4 : undefined }, // Exemple badge dynamique
    { id: 'settings', label: 'Paramètres', icon: Settings },
  ];

  return (
      <div className="min-h-screen flex bg-[#F8FAFC]">
        {/* Sidebar Premium */}
        <motion.aside
            initial={false}
            animate={{ width: isSidebarOpen ? 280 : 80 }}
            className="fixed left-0 top-0 h-screen bg-white border-r border-slate-200 z-30 hidden lg:flex flex-col shadow-sm"
        >
          {/* Logo Area */}
          <div className="h-20 flex items-center px-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              {/* Gradient Logo Bleu Nuit -> Bleu Royal */}
              <div className="w-10 h-10 bg-gradient-to-br from-[#172554] to-[#1e40af] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-900/20">
                U
              </div>
              {isSidebarOpen && (
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-[#172554] leading-tight">UGate</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Admin</span>
                  </div>
              )}
            </div>
          </div>

          {/* User / Syndicate Info Mini Card */}
          {isSidebarOpen && (
              <div className="px-4 py-6">
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center gap-3 transition-colors hover:border-blue-100 hover:bg-blue-50/30">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#172554] font-bold shadow-sm">
                    {syndicateStatus?.syndicateName?.[0] || 'S'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-[#172554] truncate">
                      {syndicateStatus?.syndicateName || 'Mon Syndicat'}
                    </p>
                    <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      En ligne
                    </p>
                  </div>
                </div>
              </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                  <button
                      key={item.id}
                      onClick={() => onChangeView(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative ${
                          isActive
                              ? 'bg-[#172554] text-white shadow-lg shadow-blue-900/20'
                              : 'text-slate-500 hover:bg-slate-50 hover:text-[#172554]'
                      }`}
                  >
                    <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-[#172554]'}`} />

                    {isSidebarOpen && (
                        <>
                          <span className="font-medium text-sm flex-1 text-left">{item.label}</span>
                          {item.badge && (
                              <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                                  isActive ? 'bg-white/20 text-white' : 'bg-red-100 text-red-600'
                              }`}>
                        {item.badge}
                      </span>
                          )}
                        </>
                    )}

                    {/* Petit indicateur actif sur le côté gauche (mode fermé) */}
                    {!isSidebarOpen && isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#172554] rounded-r-full" />
                    )}
                  </button>
              );
            })}
          </nav>

          {/* Footer Sidebar */}
          <div className="p-4 border-t border-slate-100">
            <button
                onClick={logout}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors ${!isSidebarOpen && 'justify-center'}`}
            >
              <LogOut className="w-5 h-5" />
              {isSidebarOpen && <span className="font-medium text-sm">Déconnexion</span>}
            </button>
          </div>
        </motion.aside>

        {/* Main Content Area */}
        <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${isSidebarOpen ? 'lg:ml-[280px]' : 'lg:ml-[80px]'}`}>

          {/* Topbar Glassmorphism */}
          <header className="sticky top-0 z-20 px-8 py-4 glass-panel border-b-0 m-4 rounded-2xl flex items-center justify-between mt-4 mx-6">
            <div className="flex items-center gap-4">
              <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors lg:block hidden"
              >
                <Menu className="w-5 h-5" />
              </button>

              {/* Breadcrumb ou Titre contextuel */}
              <div className="hidden md:flex items-center text-sm text-slate-500">
              <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200">
                <Building2 className="w-3 h-3 text-[#172554]" />
                <span className="font-medium text-[#172554]">{syndicateStatus?.syndicateName}</span>
              </span>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="font-medium text-slate-900 capitalize">{currentView.replace('-', ' ')}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Search Bar Premium */}
              <div className="hidden md:flex items-center relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3" />
                <input
                    type="text"
                    placeholder="Recherche rapide (Ctrl+K)"
                    className="pl-10 pr-4 py-2 bg-slate-50 border-none rounded-full text-sm focus:ring-2 focus:ring-[#172554]/10 w-64 transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2.5 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>

              {/* User Profile */}
              <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                <div className="text-right hidden md:block">
                  <p className="text-sm font-bold text-[#172554]">{user?.firstName} {user?.lastName}</p>
                  <p className="text-xs text-slate-500">Super Admin</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#172554] to-[#2563EB] p-[2px] cursor-pointer shadow-md shadow-blue-900/20">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <span className="font-bold text-[#172554]">{user?.firstName?.[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-6 pt-2 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
  );
};