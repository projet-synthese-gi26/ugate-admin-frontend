'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import type {
  LoginCredentials,
  RegisterCredentials,
  UserInfo,
} from '@/lib/services/auth.service';

import {
  login as loginService,
  register as registerService,
  logout as logoutService,
  getUserInfo,
  getAccessToken,
  isTokenExpired,
} from '@/lib/services/auth.service';

import { apiGet } from '@/lib/services/api.client';

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */

interface SyndicateStatus {
  exists: boolean;
  syndicateId?: string;
  name?: string;
  isApproved?: boolean;
  isActive?: boolean;
}

interface AuthContextValue {
  user: UserInfo | null;
  error: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  isSyndicateLoading: boolean;
  syndicateStatus: SyndicateStatus | null;

  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;

  checkAuthentication: () => Promise<void>;
  refreshSyndicateStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

/* ------------------------------------------------------------------ */
/* Provider                                                           */
/* ------------------------------------------------------------------ */

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
                                                                        children,
                                                                      }) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [isSyndicateLoading, setIsSyndicateLoading] = useState(true);
  const [syndicateStatus, setSyndicateStatus] =
      useState<SyndicateStatus | null>(null);

  /* -------------------------------------------------------------- */
  /* Syndicate status (SOURCE OF TRUTH)                             */
  /* -------------------------------------------------------------- */

  const refreshSyndicateStatus = useCallback(async () => {
    const token = getAccessToken();

    if (!token) {
      setSyndicateStatus(null);
      setIsSyndicateLoading(false);
      return;
    }

    setIsSyndicateLoading(true);

    try {
      const response = await apiGet<any[]>('/syndicates/mine');

      // Aucun syndicat
      if (!Array.isArray(response) || response.length === 0) {
        setSyndicateStatus({ exists: false });
        return;
      }

      // Le backend garantit un seul syndicat max par utilisateur
      const syndicate = response[0];

      setSyndicateStatus({
        exists: true,
        syndicateId: syndicate.id,
        name: syndicate.name,
        isApproved: syndicate.isApproved === true,
        isActive: syndicate.isActive === true,
      });
    } catch (e) {
      console.error('Erreur refreshSyndicateStatus:', e);
      setSyndicateStatus({ exists: false });
    } finally {
      setIsSyndicateLoading(false);
    }
  }, []);

  /* -------------------------------------------------------------- */
  /* Authentication                                                 */
  /* -------------------------------------------------------------- */

  const checkAuthentication = useCallback(async () => {
    setIsLoading(true);

    try {
      const token = getAccessToken();

      if (!token || isTokenExpired()) {
        logoutService();
        setIsAuthenticated(false);
        setUser(null);

        // ✅ IMPORTANT : sinon le loader peut rester bloqué à vie
        setSyndicateStatus(null);
        setIsSyndicateLoading(false);

        return;
      }

      const userInfo = await getUserInfo();
      setUser(userInfo);
      setIsAuthenticated(true);

      await refreshSyndicateStatus();
    } catch (e) {
      console.error('Erreur checkAuthentication:', e);

      logoutService();
      setIsAuthenticated(false);
      setUser(null);

      // ✅ IMPORTANT : même en cas d’erreur, il faut débloquer le loader syndicat
      setSyndicateStatus(null);
      setIsSyndicateLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, [refreshSyndicateStatus]);

  const login = async (credentials: LoginCredentials) => {
    setError('');

    try {
      await loginService(credentials);
      await checkAuthentication();
    } catch (e: any) {
      console.error('Erreur login:', e);
      setError(
          e?.message || 'Une erreur est survenue pendant la connexion.'
      );
      throw e;
    }
  };

  const register = async (credentials: RegisterCredentials) => {
    setError('');

    try {
      await registerService(credentials);
    } catch (e: any) {
      console.error('Erreur register:', e);
      setError(
          e?.message || "Une erreur est survenue pendant l'inscription."
      );
      throw e;
    }
  };

  const logout = () => {
    logoutService();
    setUser(null);
    setIsAuthenticated(false);
    setSyndicateStatus(null);

    // ✅ on remet aussi les loaders dans un état cohérent
    setIsLoading(false);
    setIsSyndicateLoading(false);
  };

  useEffect(() => {
    checkAuthentication();
  }, [checkAuthentication]);

  return (
      <AuthContext.Provider
          value={{
            user,
            error,
            isAuthenticated,
            isLoading,
            isSyndicateLoading,
            syndicateStatus,
            login,
            register,
            logout,
            checkAuthentication,
            refreshSyndicateStatus,
          }}
      >
        {children}
      </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
};
