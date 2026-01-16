'use client';

import React, { useState } from 'react';
import { 
  User, Mail, Lock, Bell, Globe, Shield, Database, 
  Palette, Monitor, Smartphone, Save, Eye, EyeOff,
  Building2, Users, Calendar, Package, FileText,
  CheckCircle2, AlertCircle, Info, ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Badge } from './ui/Badge';

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  const [profileData, setProfileData] = useState({
    firstName: 'Admin',
    lastName: 'Principal',
    email: 'admin@ugate.cm',
    phone: '+237 6 70 00 00 00',
    role: 'Super Administrateur',
    branch: 'Siège National - Yaoundé',
  });

  const [securityData, setSecurityData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: true,
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    newEvents: true,
    newMembers: true,
    productUpdates: true,
    systemAlerts: true,
  });

  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: 'light',
    language: 'fr',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: '24h',
  });

  const handleSave = () => {
    setSaveStatus('saving');
    setTimeout(() => {
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    }, 1000);
  };

  const tabs = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'security', label: 'Sécurité', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Apparence', icon: Palette },
    { id: 'organization', label: 'Organisation', icon: Building2 },
    { id: 'data', label: 'Données', icon: Database },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Paramètres</h1>
        <p className="text-gray-500 mt-1">Gérez vos préférences et configurations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <Card className="border-0 shadow-lg sticky top-24">
            <CardContent className="p-4">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? 'bg-[#1877F2] text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{tab.label}</span>
                      {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                    </button>
                  );
                })}
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-[#1877F2]" />
                    Informations Personnelles
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1877F2] to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                      {profileData.firstName[0]}{profileData.lastName[0]}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {profileData.firstName} {profileData.lastName}
                      </h3>
                      <p className="text-gray-500">{profileData.email}</p>
                      <Badge variant="info" className="mt-2">{profileData.role}</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Prénom"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                    />
                    <Input
                      label="Nom"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                    />
                    <Input
                      label="Email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    />
                    <Input
                      label="Téléphone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    />
                  </div>

                  <Input
                    label="Agence"
                    value={profileData.branch}
                    disabled
                  />
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button 
                  variant="primary" 
                  leftIcon={Save}
                  onClick={handleSave}
                  disabled={saveStatus === 'saving'}
                >
                  {saveStatus === 'saving' ? 'Enregistrement...' : saveStatus === 'saved' ? 'Enregistré !' : 'Enregistrer'}
                </Button>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-[#1877F2]" />
                    Changer le Mot de Passe
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="relative">
                    <Input
                      label="Mot de passe actuel"
                      type={showPassword ? 'text' : 'password'}
                      value={securityData.currentPassword}
                      onChange={(e) => setSecurityData({ ...securityData, currentPassword: e.target.value })}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <Input
                    label="Nouveau mot de passe"
                    type="password"
                    value={securityData.newPassword}
                    onChange={(e) => setSecurityData({ ...securityData, newPassword: e.target.value })}
                  />
                  <Input
                    label="Confirmer le mot de passe"
                    type="password"
                    value={securityData.confirmPassword}
                    onChange={(e) => setSecurityData({ ...securityData, confirmPassword: e.target.value })}
                  />
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#1877F2]" />
                    Authentification à Deux Facteurs
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">Activer 2FA</h4>
                      <p className="text-sm text-gray-500">Ajoutez une couche de sécurité supplémentaire</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={securityData.twoFactorEnabled}
                        onChange={(e) => setSecurityData({ ...securityData, twoFactorEnabled: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1877F2]"></div>
                    </label>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button variant="primary" leftIcon={Save} onClick={handleSave}>
                  Enregistrer
                </Button>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-[#1877F2]" />
                    Canaux de Notification
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {[
                    { key: 'emailNotifications', label: 'Notifications par Email', icon: Mail },
                    { key: 'pushNotifications', label: 'Notifications Push', icon: Monitor },
                    { key: 'smsNotifications', label: 'Notifications SMS', icon: Smartphone },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-gray-600" />
                          <span className="font-medium text-gray-900">{item.label}</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notificationSettings[item.key as keyof typeof notificationSettings] as boolean}
                            onChange={(e) => setNotificationSettings({ ...notificationSettings, [item.key]: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1877F2]"></div>
                        </label>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-[#1877F2]" />
                    Types de Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {[
                    { key: 'newEvents', label: 'Nouveaux événements', icon: Calendar },
                    { key: 'newMembers', label: 'Nouveaux membres', icon: Users },
                    { key: 'productUpdates', label: 'Mises à jour produits', icon: Package },
                    { key: 'systemAlerts', label: 'Alertes système', icon: AlertCircle },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-gray-600" />
                          <span className="font-medium text-gray-900">{item.label}</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notificationSettings[item.key as keyof typeof notificationSettings] as boolean}
                            onChange={(e) => setNotificationSettings({ ...notificationSettings, [item.key]: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1877F2]"></div>
                        </label>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button variant="primary" leftIcon={Save} onClick={handleSave}>
                  Enregistrer
                </Button>
              </div>
            </div>
          )}

          {/* Appearance Tab */}
          {activeTab === 'appearance' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-[#1877F2]" />
                    Thème et Affichage
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Thème</label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: 'light', label: 'Clair', icon: '☀️' },
                        { value: 'dark', label: 'Sombre', icon: '🌙' },
                      ].map((theme) => (
                        <button
                          key={theme.value}
                          onClick={() => setAppearanceSettings({ ...appearanceSettings, theme: theme.value })}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            appearanceSettings.theme === theme.value
                              ? 'border-[#1877F2] bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="text-3xl mb-2">{theme.icon}</div>
                          <div className="font-medium">{theme.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Langue</label>
                    <select
                      value={appearanceSettings.language}
                      onChange={(e) => setAppearanceSettings({ ...appearanceSettings, language: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#1877F2] focus:ring-4 focus:ring-blue-500/10 outline-none"
                    >
                      <option value="fr">Français</option>
                      <option value="en">English</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Format de date</label>
                      <select
                        value={appearanceSettings.dateFormat}
                        onChange={(e) => setAppearanceSettings({ ...appearanceSettings, dateFormat: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#1877F2] focus:ring-4 focus:ring-blue-500/10 outline-none"
                      >
                        <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                        <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                        <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Format d&apos;heure</label>
                      <select
                        value={appearanceSettings.timeFormat}
                        onChange={(e) => setAppearanceSettings({ ...appearanceSettings, timeFormat: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#1877F2] focus:ring-4 focus:ring-blue-500/10 outline-none"
                      >
                        <option value="24h">24 heures</option>
                        <option value="12h">12 heures (AM/PM)</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button variant="primary" leftIcon={Save} onClick={handleSave}>
                  Enregistrer
                </Button>
              </div>
            </div>
          )}

          {/* Organization Tab */}
          {activeTab === 'organization' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#1877F2]" />
                    Informations de l&apos;Organisation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Paramètres réservés</h4>
                        <p className="text-sm text-blue-700 mt-1">
                          Ces paramètres sont réservés aux super-administrateurs du siège national.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 opacity-50 pointer-events-none">
                    <Input label="Nom de l'organisation" value="Union Générale des Agents Techniques et Économiques" disabled />
                    <Input label="Sigle" value="UGATE" disabled />
                    <Input label="Siège social" value="Yaoundé, Cameroun" disabled />
                    <Input label="Email officiel" value="contact@ugate.cm" disabled />
                    <Input label="Téléphone" value="+237 6 70 00 00 00" disabled />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Data Tab */}
          {activeTab === 'data' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-[#1877F2]" />
                    Gestion des Données
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">Exporter mes données</h4>
                        <p className="text-sm text-gray-500">Téléchargez toutes vos données personnelles</p>
                      </div>
                      <Button variant="outline" size="sm" leftIcon={FileText}>
                        Exporter
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-red-900">Supprimer mon compte</h4>
                        <p className="text-sm text-red-700">Cette action est irréversible</p>
                      </div>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-300 hover:bg-red-100">
                        Supprimer
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#1877F2]" />
                    Confidentialité
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">Profil public</h4>
                        <p className="text-sm text-gray-500">Permettre aux autres membres de voir votre profil</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1877F2]"></div>
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
