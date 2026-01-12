'use client';

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { useAuth } from '@/lib/contexts/AuthContext';

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setLocalError('Format d\'email invalide');
      return;
    }

    if (password.length < 6) {
      setLocalError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    try {
      await login({ identifier: email, password });
    } catch (err) {
      console.error('Erreur lors de la connexion:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo et titre */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1877F2] rounded-2xl shadow-lg mb-4">
            <span className="text-white font-bold text-3xl">U</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">UGate Admin</h1>
          <p className="text-gray-600">Connectez-vous à votre compte</p>
        </div>

        {/* Formulaire de connexion */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Message d'erreur */}
            {(localError || authError) && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{localError || authError}</span>
              </div>
            )}

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemple@email.com"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Mot de passe */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Se souvenir de moi et mot de passe oublié */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-[#1877F2] focus:ring-[#1877F2] focus:ring-offset-0 cursor-pointer"
                />
                <span className="text-sm text-gray-600">Se souvenir de moi</span>
              </label>
              <button
                type="button"
                className="text-sm text-[#1877F2] hover:text-[#1465D6] font-medium transition-colors"
              >
                Mot de passe oublié ?
              </button>
            </div>

            {/* Bouton de connexion */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              isLoading={authLoading}
            >
              Se connecter
            </Button>
          </form>

          {/* Séparateur */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">OU</span>
            </div>
          </div>

          {/* Lien vers inscription */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Vous n&apos;avez pas de compte ?{' '}
              <button
                type="button"
                onClick={onSwitchToRegister}
                className="text-[#1877F2] hover:text-[#1465D6] font-semibold transition-colors"
              >
                Créer un compte
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2024 UGate Admin. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
};
