'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { LoginCredentials, RegisterCredentials, UserInfo } from '@/lib/services/auth.service';
import {
  login as loginService,
  register as registerService,
  logout as logoutService,
  getUserInfo,
  isTokenExpired,
  getAccessToken,
} from '@/lib/services/auth.service';
import { apiGet } from '@/lib/services/api.client';

type SyndicateApprovalStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

interface SyndicateStatus {
  hasSyndicate: boolean;
  syndicateId?: string;
  syndicateName?: string;
  status?: SyndicateApprovalStatus;
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

interface MineSyndicateResponse {
  id: string;
  name: string;
  status: SyndicateApprovalStatus;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSyndicateLoading, setIsSyndicateLoading] = useState(true);
  const [syndicateStatus, setSyndicateStatus] = useState<SyndicateStatus | null>(null);

  const refreshSyndicateStatus = useCallback(async () => {
    const token = getAccessToken();
    if (!token) {
      setSyndicateStatus(null);
      setIsSyndicateLoading(false);
      return;
    }

    setIsSyndicateLoading(true);
    try {
      const syndicate = await apiGet<MineSyndicateResponse>('/syndicates/mine');
      setSyndicateStatus({
        hasSyndicate: true,
        syndicateId: syndicate.id,
        syndicateName: syndicate.name,
        status: syndicate.status,
      });
    } catch {
      setSyndicateStatus({ hasSyndicate: false });
    } finally {
      setIsSyndicateLoading(false);
    }
  }, []);

  const checkAuthentication = useCallback(async () => {
    setIsLoading(true);
    try {
      const currentUser = getUserInfo();
      const token = getAccessToken();

      const ok = !!token && !isTokenExpired() && !!currentUser;

      setIsAuthenticated(ok);
      setUser(ok ? currentUser : null);

      if (ok) await refreshSyndicateStatus();
      else {
        setSyndicateStatus(null);
        setIsSyndicateLoading(false);
      }
    } catch (e) {
      console.error(e);
      setIsAuthenticated(false);
      setUser(null);
      setSyndicateStatus(null);
      setIsSyndicateLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, [refreshSyndicateStatus]);

  useEffect(() => {
    void checkAuthentication();
  }, [checkAuthentication]);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setError('');
    setIsLoading(true);
    try {
      const res = await loginService(credentials);
      setUser(res.user);
      setIsAuthenticated(true);
      await refreshSyndicateStatus();
    } catch (err: any) {
      setError(err?.message ?? 'Erreur login');
      setIsAuthenticated(false);
      setUser(null);
      setSyndicateStatus(null);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [refreshSyndicateStatus]);

  const register = useCallback(async (credentials: RegisterCredentials) => {
    setError('');
    setIsLoading(true);
    try {
      const res = await registerService(credentials);
      setUser(res.user);
      setIsAuthenticated(true);
      await refreshSyndicateStatus();
    } catch (err: any) {
      setError(err?.message ?? 'Erreur register');
      setIsAuthenticated(false);
      setUser(null);
      setSyndicateStatus(null);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [refreshSyndicateStatus]);

  const logout = useCallback(() => {
    logoutService();
    setUser(null);
    setError('');
    setIsAuthenticated(false);
    setSyndicateStatus(null);
    setIsSyndicateLoading(false);
  }, []);

  const value = useMemo<AuthContextValue>(() => ({
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
  }), [
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
  ]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth doit être utilisé dans AuthProvider');
  return ctx;
}