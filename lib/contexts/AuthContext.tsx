/**
 * Contexte d'Authentification & Statut Syndicat
 *
 * Ce fichier gère :
 * 1. L'état d'authentification utilisateur (JWT)
 * 2. L'état du syndicat de l'utilisateur (Créé ? En attente ? Validé ?)
 */

'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import {
  login as apiLogin,
  register as apiRegister,
  logout as apiLogout,
  getUserInfo,
  isAuthenticated as checkAuth,
  refreshAccessToken
} from '@/lib/services/auth.service';
import { apiGet } from '@/lib/services/api.client';
import { LoginCredentials, RegisterCredentials, UserInfo } from '@/lib/types/auth';

// --- Types ---

/**
 * Statut du syndicat de l'utilisateur courant.
 * Crucial pour diriger l'utilisateur vers le bon flux (Onboarding vs Dashboard).
 */
export interface UserSyndicateStatus {
  hasSyndicate: boolean;
  syndicateId?: string;
  // Mappe les booléens isApproved/isActive vers un état lisible
  status?: 'PENDING' | 'APPROVED' | 'REJECTED' | 'DEACTIVATED';
  syndicateName?: string;
}

/**
 * Interface de la réponse API pour un Syndicat (basé sur Swagger)
 */
interface SyndicateApiResponse {
  id: string;
  name: string;
  isApproved: boolean;
  isActive: boolean;
  // autres champs ignorés pour le contexte auth
}

/**
 * Interface du Contexte
 */
interface AuthContextType {
  // Auth de base
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserInfo | null;
  error: string | null;

  // Actions Auth
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  checkAuthentication: () => void;

  // Gestion Syndicat
  syndicateStatus: UserSyndicateStatus | null;
  refreshSyndicateStatus: () => Promise<void>;
  isSyndicateLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// --- Provider ---

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // États Auth
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  // États Syndicat
  const [syndicateStatus, setSyndicateStatus] = useState<UserSyndicateStatus | null>(null);
  const [isSyndicateLoading, setIsSyndicateLoading] = useState(false);

  /**
   * Vérifie et met à jour le statut du syndicat de l'utilisateur
   * Appelle l'endpoint /syndicates/mine
   */
  const refreshSyndicateStatus = useCallback(async () => {
    // Ne rien faire si pas connecté
    if (!checkAuth()) {
      setSyndicateStatus(null);
      return;
    }

    setIsSyndicateLoading(true);
    try {
      // Appel à l'API UGate
      const syndicates = await apiGet<SyndicateApiResponse[]>('https://ugate.pynfi.com/syndicates/mine');

      if (syndicates && syndicates.length > 0) {
        const mySyndicate = syndicates[0]; // On prend le premier (hypothèse: 1 user = 1 syndicat)

        // Logique de détermination du statut
        let computedStatus: UserSyndicateStatus['status'] = 'PENDING';

        if (mySyndicate.isApproved && mySyndicate.isActive) {
          computedStatus = 'APPROVED';
        } else if (mySyndicate.isApproved && !mySyndicate.isActive) {
          computedStatus = 'DEACTIVATED';
        } else if (!mySyndicate.isApproved) {
          computedStatus = 'PENDING';
        }

        setSyndicateStatus({
          hasSyndicate: true,
          syndicateId: mySyndicate.id,
          status: computedStatus,
          syndicateName: mySyndicate.name
        });

        console.log('🏢 Statut Syndicat:', computedStatus);
      } else {
        // Pas de syndicat trouvé
        setSyndicateStatus({ hasSyndicate: false });
        console.log('🏢 Aucun syndicat associé à ce compte');
      }
    } catch (err) {
      console.error("❌ Erreur récupération syndicat:", err);
      // En cas d'erreur API (ex: 404 ou 500), on assume pas de syndicat pour ne pas bloquer
      setSyndicateStatus({ hasSyndicate: false });
    } finally {
      setIsSyndicateLoading(false);
    }
  }, []);

  /**
   * Vérifier l'authentification au chargement
   */
  const checkAuthentication = useCallback(() => {
    const authenticated = checkAuth();
    setIsAuthenticated(authenticated);

    if (authenticated) {
      const userInfo = getUserInfo();
      setUser(userInfo);
      // Si authentifié, on lance la vérification du syndicat
      refreshSyndicateStatus();
    } else {
      setUser(null);
      setSyndicateStatus(null);
    }

    setIsLoading(false);
  }, [refreshSyndicateStatus]);

  /**
   * Connexion
   */
  const login = async (credentials: LoginCredentials): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await apiLogin(credentials);

      setIsAuthenticated(true);
      setUser(response.user);

      // Après login succès, vérifier immédiatement le statut syndicat
      await refreshSyndicateStatus();

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur de connexion';
      setError(errorMessage);
      setIsAuthenticated(false);
      setUser(null);
      setSyndicateStatus(null);
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
      await apiRegister(credentials);
      // Note: Pas de login automatique, l'utilisateur doit se connecter
    } catch (err) {
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
    apiLogout();
    setIsAuthenticated(false);
    setUser(null);
    setSyndicateStatus(null);
    setError(null);
  };

  /**
   * Effet initial
   */
  useEffect(() => {
    checkAuthentication();
  }, [checkAuthentication]);

  /**
   * Rafraîchissement automatique du token (toutes les 10 min)
   */
  useEffect(() => {
    if (!isAuthenticated) return;

    const refreshInterval = setInterval(async () => {
      try {
        await refreshAccessToken();
      } catch (error) {
        console.error('❌ Échec du rafraîchissement auto:', error);
        logout();
      }
    }, 10 * 60 * 1000);

    return () => clearInterval(refreshInterval);
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
    syndicateStatus,
    refreshSyndicateStatus,
    isSyndicateLoading
  };

  return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
  );
};

// --- Hook ---

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth doit être utilisé à l\'intérieur d\'un AuthProvider');
  }
  return context;
};