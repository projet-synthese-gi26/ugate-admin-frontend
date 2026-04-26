'use client';

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, AlertCircle, User, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { useAuth } from '@/lib/contexts/AuthContext';
import { AuthLayout } from './auth/AuthLayout';

interface RegisterProps {
  onSwitchToLogin: () => void;
}

export const Register: React.FC<RegisterProps> = ({ onSwitchToLogin }) => {
  const { register, error: authError, isLoading: authLoading } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [localError, setLocalError] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Efface l'erreur dès que l'utilisateur commence à corriger ses champs
    if (localError) setLocalError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');

    if (formData.password !== formData.confirmPassword) {
      setLocalError('Les mots de passe ne correspondent pas');
      return;
    }

    if (!acceptTerms) {
      setLocalError('Vous devez accepter les conditions d\'utilisation');
      return;
    }

    try {
      await register({
        username: formData.username,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        service: 'SYNDICAT', // ✅ Modifié ici pour correspondre à ton enum Swagger
        roles: ['ADMIN']
      });
      setSuccess(true);
      setTimeout(onSwitchToLogin, 3000);
    } catch (err: any) {
      console.error('Erreur inscription:', err);
      // ✅ Affiche le vrai message d'erreur du backend dans l'interface (ex: Email déjà pris)
      setLocalError(err.message || "Une erreur est survenue lors de la création du compte.");
    }
  };

  if (success) {
    return (
        <AuthLayout title="Inscription réussie !" subtitle="Bienvenue chez UGate.">
          <div className="text-center py-10 animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500 animate-bounce" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Compte créé avec succès</h3>
            <p className="text-gray-500">Vous allez être redirigé vers la page de connexion...</p>
          </div>
        </AuthLayout>
    );
  }

  return (
      <AuthLayout
          title="Créer un compte"
          subtitle="Rejoignez la plateforme de référence pour les syndicats."
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          {(localError || authError) && (
              <div className="flex items-center gap-3 p-4 bg-red-50/50 border border-red-100 rounded-xl text-red-600 text-sm animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{localError || authError}</span>
              </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <Input
                label="Prénom"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Jean"
                required
            />
            <Input
                label="Nom"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Dupont"
                required
            />
          </div>

          <Input
              label="Nom d'utilisateur"
              name="username"
              icon={User}
              value={formData.username}
              onChange={handleChange}
              placeholder="j.dupont"
              required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
                label="Email"
                name="email"
                type="email"
                icon={Mail}
                value={formData.email}
                onChange={handleChange}
                placeholder="pro@email.com"
                required
            />
            <Input
                label="Téléphone"
                name="phone"
                type="tel"
                icon={Phone}
                value={formData.phone}
                onChange={handleChange}
                placeholder="+237..."
                required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative group">
              <Input
                  label="Mot de passe"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  icon={Lock}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••"
                  required
              />
            </div>
            <div className="relative group">
              <Input
                  label="Confirmation"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  icon={Lock}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••"
                  required
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-xs text-gray-500 hover:text-[#1877F2] font-medium transition-colors"
            >
              {showPassword ? "Masquer les mots de passe" : "Afficher les mots de passe"}
            </button>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200/50 hover:bg-gray-100 transition-colors">
            <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-gray-300 text-[#1877F2] focus:ring-[#1877F2] cursor-pointer"
            />
            <label htmlFor="terms" className="text-xs text-gray-600 cursor-pointer leading-relaxed select-none">
              J&apos;accepte les <a href="#" className="text-[#1877F2] font-semibold hover:underline">conditions d&apos;utilisation</a> et la <a href="#" className="text-[#1877F2] font-semibold hover:underline">politique de confidentialité</a> de UGate.
            </label>
          </div>

          <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full bg-[#1877F2] hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98]"
              isLoading={authLoading}
          >
            Créer mon compte
          </Button>

          <p className="text-center text-sm text-gray-500 pt-2">
            Déjà inscrit ?{' '}
            <button
                type="button"
                onClick={onSwitchToLogin}
                className="font-bold text-[#1877F2] hover:text-blue-700 hover:underline transition-all"
            >
              Se connecter
            </button>
          </p>
        </form>
      </AuthLayout>
  );
};