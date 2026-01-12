/**
 * Contexte d'Authentification
 * 
 * Ce fichier crée un "contexte" React qui permet de :
 * - Partager l'état d'authentification dans toute l'application
 * - Éviter de passer les props à travers tous les composants
 * - Centraliser la logique d'authentification
 */

'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  login as apiLogin,
  register as apiRegister,
  logout as apiLogout,
  getUserInfo,
  isAuthenticated as checkAuth,
  refreshAccessToken
} from '@/lib/services/auth.service';
import { LoginCredentials, RegisterCredentials, UserInfo } from '@/lib/types/auth';

/**
 * Interface : État du Contexte
 */
interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserInfo | null;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  checkAuthentication: () => void;
}

/**
 * Création du Contexte
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Provider : Composant qui fournit le contexte
 */
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * Vérifier l'authentification
   */
  const checkAuthentication = () => {
    console.log('🔍 Vérification de l\'authentification...');
    
    const authenticated = checkAuth();
    setIsAuthenticated(authenticated);
    
    if (authenticated) {
      const userInfo = getUserInfo();
      setUser(userInfo);
      console.log('✅ Utilisateur authentifié:', userInfo?.email);
    } else {
      console.log('❌ Utilisateur non authentifié');
      setUser(null);
    }
    
    setIsLoading(false);
  };

  /**
   * Connexion
   */
  const login = async (credentials: LoginCredentials): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      
      console.log('🔐 Tentative de connexion...');
      
      const response = await apiLogin(credentials);
      
      setIsAuthenticated(true);
      setUser(response.user);
      
      console.log('✅ Connexion réussie !');
      
    } catch (err) {
      console.error('❌ Erreur de connexion:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur de connexion';
      setError(errorMessage);
      setIsAuthenticated(false);
      setUser(null);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Inscription
   */
  const register = async (credentials: RegisterCredentials): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      
      console.log('📝 Tentative d\'inscription...');
      
      await apiRegister(credentials);
      
      // NE PAS connecter automatiquement l'utilisateur
      // Il doit se connecter manuellement après inscription
      
      console.log('✅ Inscription réussie ! Veuillez vous connecter.');
      
    } catch (err) {
      console.error('❌ Erreur d\'inscription:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur d\'inscription';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Déconnexion
   */
  const logout = () => {
    console.log('🚪 Déconnexion...');
    
    apiLogout();
    setIsAuthenticated(false);
    setUser(null);
    setError(null);
    
    console.log('✅ Déconnexion réussie');
  };

  /**
   * Vérification initiale au montage
   */
  useEffect(() => {
    checkAuthentication();
  }, []);

  /**
   * Rafraîchissement automatique du token
   */
  useEffect(() => {
    if (!isAuthenticated) return;

    console.log('⏰ Configuration du rafraîchissement automatique du token');

    const refreshInterval = setInterval(async () => {
      try {
        console.log('🔄 Rafraîchissement automatique du token...');
        await refreshAccessToken();
        console.log('✅ Token rafraîchi automatiquement');
      } catch (error) {
        console.error('❌ Échec du rafraîchissement automatique:', error);
        logout();
      }
    }, 10 * 60 * 1000); // 10 minutes

    return () => {
      console.log('🧹 Nettoyage du timer de rafraîchissement');
      clearInterval(refreshInterval);
    };
  }, [isAuthenticated]);

  const value: AuthContextType = {
    isAuthenticated,
    isLoading,
    user,
    error,
    login,
    register,
    logout,
    checkAuthentication,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Hook personnalisé : useAuth
 */
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth doit être utilisé à l\'intérieur d\'un AuthProvider');
  }
  
  return context;
};
