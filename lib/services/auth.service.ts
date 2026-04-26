import { UGATE_API_BASE_URL, AUTH_API_BASE_URL, AUTH_USERS_API_BASE_URL } from '@/lib/config/api';

export interface LoginCredentials {
  identifier: string;
  password: string;
}

export interface RegisterCredentials {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  service?: string; // Doit idéalement être 'LETS_GO', 'SYNDICAT', etc. (défini par l'API)
  roles?: string[];
}

export interface UserInfo {
  id: string;
  username?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  roles?: string[];
  photoUri?: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: UserInfo;
}

export interface RefreshTokenResponse {
  accessToken: string;
}

const STORAGE_KEYS = {
  ACCESS_TOKEN: 'ugate_access_token',
  REFRESH_TOKEN: 'ugate_refresh_token',
  USER_INFO: 'ugate_user_info',
  TOKEN_EXPIRY: 'ugate_token_expiry',
};

export function getAccessToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
}

export function getRefreshToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
}

export function getUserInfo(): UserInfo | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(STORAGE_KEYS.USER_INFO);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as UserInfo;
  } catch {
    return null;
  }
}

export function isTokenExpired(): boolean {
  if (typeof window === 'undefined') return true;
  const expiryRaw = localStorage.getItem(STORAGE_KEYS.TOKEN_EXPIRY);
  if (!expiryRaw) return true;
  const expiry = Number(expiryRaw);
  return Date.now() >= (expiry - 30_000);
}

function saveAuthData(data: LoginResponse): void {
  if (typeof window === 'undefined') return;
  const expiryTime = Date.now() + 15 * 60 * 1000;
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.accessToken);
  localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken);
  localStorage.setItem(STORAGE_KEYS.USER_INFO, JSON.stringify(data.user));
  localStorage.setItem(STORAGE_KEYS.TOKEN_EXPIRY, expiryTime.toString());
}

export async function login(credentials: LoginCredentials): Promise<LoginResponse> {
  const response = await fetch(`${AUTH_API_BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const txt = await response.text();
    throw new Error(`Login failed (${response.status}): ${txt}`);
  }

  const data = (await response.json()) as LoginResponse;
  saveAuthData(data);
  return data;
}


export async function register(
    credentials: RegisterCredentials,
    profileImage?: File // Optionnel: permet d'envoyer la photo de profil dès l'inscription
): Promise<LoginResponse> {
  const formData = new FormData();

  // 1. On encapsule les données JSON dans un Blob pour forcer le Content-Type 'application/json'
  const dataBlob = new Blob([JSON.stringify(credentials)], { type: 'application/json' });
  formData.append('data', dataBlob);

  // 2. Ajout de l'image de profil si fournie (comme défini dans le Swagger)
  if (profileImage) {
    formData.append('file', profileImage);
  }

  const response = await fetch(`${AUTH_API_BASE_URL}/register`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const txt = await response.text();
    try {
      // Tente de parser l'erreur de l'API (ex: "L'email existe déjà")
      const err = JSON.parse(txt);
      throw new Error(err.message || err.error || `Erreur d'inscription (${response.status})`);
    } catch {
      // Fallback si l'erreur n'est pas en JSON
      throw new Error(`Register failed (${response.status}): ${txt}`);
    }
  }

  const data = (await response.json()) as LoginResponse;
  saveAuthData(data);
  return data;
}
// ------------------------------------------------------------------

export async function refreshAccessToken(): Promise<RefreshTokenResponse> {
  const refreshToken = getRefreshToken();
  if (!refreshToken) throw new Error('Missing refresh token');

  const response = await fetch(`${AUTH_API_BASE_URL}/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) {
    logout();
    throw new Error('Refresh token failed');
  }

  const data = (await response.json()) as RefreshTokenResponse;

  if (typeof window !== 'undefined') {
    const expiryTime = Date.now() + 15 * 60 * 1000;
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.accessToken);
    localStorage.setItem(STORAGE_KEYS.TOKEN_EXPIRY, expiryTime.toString());
  }

  return data;
}

export function logout(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.USER_INFO);
  localStorage.removeItem(STORAGE_KEYS.TOKEN_EXPIRY);
}

export async function getUserById(userId: string): Promise<UserInfo | null> {
  const token = getAccessToken();
  if (!token) return null;

  const response = await fetch(`${AUTH_USERS_API_BASE_URL}/${userId}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) return null;
  return (await response.json()) as UserInfo;
}

// Si ton Settings.tsx appelle updateUserProfile, voici une implémentation safe.
// Ajuste le endpoint si ton backend attend un autre chemin, mais garde la BASE URL.
export async function updateUserProfile(payload: any, profileImage?: File): Promise<UserInfo> {
  const token = getAccessToken();
  if (!token) throw new Error('Not authenticated');

  const formData = new FormData();
  Object.entries(payload || {}).forEach(([k, v]) => {
    if (v !== undefined && v !== null) formData.append(k, String(v));
  });
  if (profileImage) formData.append('profileImage', profileImage);

  const response = await fetch(`${UGATE_API_BASE_URL}/users/profile`, {
    method: 'PATCH',
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });

  if (!response.ok) {
    const txt = await response.text();
    throw new Error(`Update profile failed (${response.status}): ${txt}`);
  }

  const updated = (await response.json()) as UserInfo;
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.USER_INFO, JSON.stringify(updated));
  }
  return updated;
}