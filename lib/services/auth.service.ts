/**
 * Service d'Authentification
 * 
 * Ce service gère toutes les opérations liées à l'authentification :
 * - Connexion (login)
 * - Déconnexion (logout)
 * - Gestion des tokens (stockage, récupération, validation)
 * - Rafraîchissement automatique des tokens
 */

import { LoginCredentials, RegisterCredentials, LoginResponse, RefreshTokenResponse, UserInfo, DecodedToken } from '@/lib/types/auth';

// URL de base de l'API d'authentification
const AUTH_API_URL = 'https://auth-service.pynfi.com/api/auth';

// Clés pour le stockage local
const STORAGE_KEYS = {
  ACCESS_TOKEN: 'ugate_access_token',
  REFRESH_TOKEN: 'ugate_refresh_token',
  USER_INFO: 'ugate_user_info',
  TOKEN_EXPIRY: 'ugate_token_expiry',
};

/**
 *  FONCTION 1 : Connexion
 * 
 * Appelle l'API de login et sauvegarde les tokens
 * 
 * @param credentials - Email et mot de passe
 * @returns Réponse de l'API avec tokens et infos utilisateur
 */
export async function login(credentials: LoginCredentials): Promise<LoginResponse> {
  try {
    console.log('🔄 Tentative de connexion pour:', credentials.identifier);
    console.log('🌐 URL API:', `${AUTH_API_URL}/login`);
    
    const response = await fetch(`${AUTH_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ HTTP ${response.status}:`, errorText);
      throw new Error(`Échec de la connexion (${response.status}): ${errorText || response.statusText}`);
    }

    const data: LoginResponse = await response.json();
    
    console.log('✅ Connexion réussie !');
    
    // Sauvegarder les données d'authentification
    saveAuthData(data);
    
    return data;
  } catch (error) {
    // Identifier le type d'erreur
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      console.error('❌ Erreur réseau: Impossible de joindre le serveur d\'authentification');
      console.error('   Vérifiez:');
      console.error('   1. Votre connexion internet');
      console.error('   2. Que l\'API est accessible:', AUTH_API_URL);
      console.error('   3. Les paramètres CORS du serveur');
      throw new Error('Impossible de joindre le serveur. Vérifiez votre connexion internet.');
    }
    
    console.error('❌ Erreur lors de la connexion:', error);
    throw error;
  }
}

/**
 *  FONCTION 12 : Inscription
 * 
 * Appelle l'API de register (sans connexion automatique)
 * 
 * @param credentials - Données d'inscription
 * @returns Réponse de l'API avec tokens et infos utilisateur
 */
export async function register(credentials: RegisterCredentials): Promise<LoginResponse> {
  try {
    console.log('📝 Tentative d\'inscription pour:', credentials.email);
    console.log('🌐 URL API:', `${AUTH_API_URL}/register`);
    console.log('📋 Données complètes envoyées:', {
      username: credentials.username,
      firstName: credentials.firstName,
      lastName: credentials.lastName,
      email: credentials.email,
      phone: credentials.phone,
      password: '***',
      service: credentials.service,
      roles: credentials.roles
    });
    
    // Créer FormData pour multipart/form-data
    const formData = new FormData();
    
    // L'API attend un champ "data" contenant le RegisterRequest en JSON
    const registerData = {
      username: credentials.username,
      password: credentials.password,
      email: credentials.email,
      phone: credentials.phone,
      firstName: credentials.firstName,
      lastName: credentials.lastName,
      service: credentials.service,
      roles: credentials.roles
    };
    
    // Ajouter les données en tant que blob JSON
    formData.append('data', new Blob([JSON.stringify(registerData)], { type: 'application/json' }));
    
    const response = await fetch(`${AUTH_API_URL}/register`, {
      method: 'POST',
      // Ne pas définir Content-Type - laisse le navigateur gérer multipart/form-data
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = 'Échec de l\'inscription';
      
      try {
        const errorData = JSON.parse(errorText);
        errorMessage = errorData.message || errorData.error || errorMessage;
      } catch {
        errorMessage = errorText || `Erreur HTTP ${response.status}`;
      }
      
      console.error(`❌ HTTP ${response.status}:`, errorMessage);
      throw new Error(errorMessage);
    }

    const data: LoginResponse = await response.json();
    
    console.log('✅ Inscription réussie ! Veuillez vous connecter.');
    
    // NE PAS sauvegarder les tokens - l'utilisateur doit se connecter
    
    return data;
  } catch (error) {
    // Identifier le type d'erreur
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      console.error('❌ Erreur réseau: Impossible de joindre le serveur d\'authentification');
      console.error('   Vérifiez:');
      console.error('   1. Votre connexion internet');
      console.error('   2. Que l\'API est accessible:', AUTH_API_URL);
      console.error('   3. Les paramètres CORS du serveur');
      throw new Error('Impossible de joindre le serveur. Vérifiez votre connexion internet.');
    }
    
    console.error('❌ Erreur lors de l\'inscription:', error);
    throw error;
  }
}

/**
 *  FONCTION 2 : Sauvegarder les données d'authentification
 * 
 * Stocke les tokens et les infos utilisateur dans localStorage
 * 
 * @param data - Données de connexion (tokens + user)
 */
export function saveAuthData(data: LoginResponse): void {
  console.log(' Sauvegarde des données d\'authentification...');
  
  // Calculer la date d'expiration du token (par défaut 15 minutes)
  const expiryTime = Date.now() + (15 * 60 * 1000);
  
  // Sauvegarder dans localStorage
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.accessToken);
  localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken);
  localStorage.setItem(STORAGE_KEYS.USER_INFO, JSON.stringify(data.user));
  localStorage.setItem(STORAGE_KEYS.TOKEN_EXPIRY, expiryTime.toString());
  
  console.log(' Données sauvegardées avec succès');
  console.log(' Token expire dans: 15 minutes');
}

/**
 * 🔑 FONCTION 3 : Récupérer le token d'accès
 * 
 * @returns Le token d'accès ou null s'il n'existe pas
 */
export function getAccessToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
}

/**
 * 🔄 FONCTION 4 : Récupérer le refresh token
 * 
 * @returns Le refresh token ou null s'il n'existe pas
 */
export function getRefreshToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
}

/**
 * 👤 FONCTION 5 : Récupérer les informations utilisateur
 * 
 * @returns Les infos utilisateur ou null
 */
export function getUserInfo(): UserInfo | null {
  if (typeof window === 'undefined') return null;
  
  const userInfoStr = localStorage.getItem(STORAGE_KEYS.USER_INFO);
  if (!userInfoStr) return null;
  
  try {
    return JSON.parse(userInfoStr) as UserInfo;
  } catch {
    return null;
  }
}

/**
 * ⏰ FONCTION 6 : Vérifier si le token est expiré
 * 
 * @returns true si le token est expiré ou sur le point d'expirer
 */
export function isTokenExpired(): boolean {
  if (typeof window === 'undefined') return true;
  
  const expiryStr = localStorage.getItem(STORAGE_KEYS.TOKEN_EXPIRY);
  if (!expiryStr) return true;
  
  const expiryTime = parseInt(expiryStr, 10);
  const now = Date.now();
  
  // Considérer le token comme expiré 30 secondes avant l'expiration réelle
  const buffer = 30 * 1000;
  
  return now >= (expiryTime - buffer);
}

/**
 * 🔄 FONCTION 7 : Rafraîchir le token d'accès
 * 
 * Utilise le refresh token pour obtenir un nouveau access token
 * 
 * @returns Nouveaux tokens
 */
export async function refreshAccessToken(): Promise<RefreshTokenResponse> {
  const refreshToken = getRefreshToken();
  
  if (!refreshToken) {
    throw new Error('Aucun refresh token disponible');
  }

  try {
    console.log('🔄 Rafraîchissement du token...');
    
    const response = await fetch(`${AUTH_API_URL}/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      throw new Error('Échec du rafraîchissement du token');
    }

    const data: RefreshTokenResponse = await response.json();
    
    console.log(' Token rafraîchi avec succès !');
    
    // Mettre à jour les tokens (par défaut 15 minutes)
    const expiryTime = Date.now() + (15 * 60 * 1000);
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.accessToken);
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken);
    localStorage.setItem(STORAGE_KEYS.USER_INFO, JSON.stringify(data.user));
    localStorage.setItem(STORAGE_KEYS.TOKEN_EXPIRY, expiryTime.toString());
    
    return data;
  } catch (error) {
    console.error('❌ Erreur lors du rafraîchissement:', error);
    throw error;
  }
}

/**
 * 🚪 FONCTION 8 : Déconnexion
 * 
 * Supprime tous les tokens et les infos utilisateur
 */
export function logout(): void {
  console.log('🚪 Déconnexion en cours...');
  
  if (typeof window === 'undefined') return;
  
  // Supprimer toutes les données d'authentification
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.USER_INFO);
  localStorage.removeItem(STORAGE_KEYS.TOKEN_EXPIRY);
  
  console.log('✅ Déconnexion réussie');
}

/**
 * ✅ FONCTION 9 : Vérifier si l'utilisateur est authentifié
 * 
 * @returns true si l'utilisateur a un token valide
 */
export function isAuthenticated(): boolean {
  const token = getAccessToken();
  return !!token && !isTokenExpired();
}

/**
 * 🔓 FONCTION 10 : Décoder un token JWT
 * 
 * @param token - Le token JWT à décoder
 * @returns Le payload décodé du token
 */
export function decodeToken(token: string): DecodedToken | null {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    
    return JSON.parse(jsonPayload) as DecodedToken;
  } catch {
    return null;
  }
}

/**
 * 🎭 FONCTION 11 : Vérifier le rôle de l'utilisateur
 * 
 * @param requiredRole - Le rôle requis
 * @returns true si l'utilisateur a le rôle requis
 */
export function hasRole(requiredRole: string): boolean {
  const user = getUserInfo();
  return user?.roles?.includes(requiredRole) ?? false;
}
