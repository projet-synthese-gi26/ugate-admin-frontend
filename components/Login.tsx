'use client';

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { useAuth } from '@/lib/contexts/AuthContext';
import { AuthLayout } from './auth/AuthLayout';

interface LoginProps {
  onSwitchToRegister: () => void;
}

export const Login: React.FC<LoginProps> = ({ onSwitchToRegister }) => {
  const { login, error: authError, isLoading: authLoading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');

    if (!email || !password) {
      setLocalError('Veuillez remplir tous les champs');
      return;
    }

    try {
      await login({ identifier: email, password });
    } catch (err) {
      console.error('Erreur login:', err);
    }
  };

  return (
      <AuthLayout
          title="Bon retour !"
          subtitle="Entrez vos identifiants pour accéder à votre espace."
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {(localError || authError) && (
              <div className="flex items-center gap-3 p-4 bg-red-50/50 border border-red-100 rounded-xl text-red-600 text-sm animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{localError || authError}</span>
              </div>
          )}

          <div className="space-y-4">
            <Input
                label="Email professionnel"
                type="email"
                icon={Mail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nom@exemple.com"
                autoComplete="email"
            />

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700 ml-1">Mot de passe</label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1877F2] transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="flex h-11 w-full rounded-xl border border-gray-200 bg-white px-4 pl-10 pr-12 py-2 text-sm transition-all duration-200 placeholder:text-gray-400 focus:border-[#1877F2] focus:ring-4 focus:ring-[#1877F2]/5 focus:outline-none"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-md transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-[#1877F2] focus:ring-[#1877F2] cursor-pointer"
              />
              <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">Se souvenir de moi</span>
            </label>
            <button type="button" className="text-sm font-semibold text-[#1877F2] hover:text-blue-700 hover:underline transition-all">
              Mot de passe oublié ?
            </button>
          </div>

          <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full bg-[#1877F2] hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
              isLoading={authLoading}
          >
            Se connecter
          </Button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-400 font-medium">Ou</span>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500">
            Pas encore de compte ?{' '}
            <button
                type="button"
                onClick={onSwitchToRegister}
                className="font-bold text-[#1877F2] hover:text-blue-700 hover:underline transition-all"
            >
              Créer un compte
            </button>
          </p>
        </form>
      </AuthLayout>
  );
};