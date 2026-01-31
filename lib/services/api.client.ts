/**
 * Client API avec Intercepteur
 *
 * Ce fichier crée un client HTTP qui ajoute automatiquement
 * le token d'authentification à toutes les requêtes
 */

import { getAccessToken, isTokenExpired, refreshAccessToken, logout } from './auth.service';

/**
 * 🔧 FONCTION : Créer les headers avec le token
 */
async function getAuthHeaders(customHeaders: HeadersInit = {}): Promise<HeadersInit> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };

  // Pour le multipart (fichiers), on laisse le navigateur gérer le Content-Type
  // On supprime donc 'Content-Type' s'il a été défini à undefined explicitement par l'appelant
  // ou si c'est un FormData (détecté via l'usage, mais ici on gère via l'appelant qui peut passer un header vide pour l'écraser)

  // Note : fetch gère automatiquement le boundary pour FormData si on ne met PAS de Content-Type.
  // L'appelant doit passer { 'Content-Type': undefined } ou similaire s'il veut l'annuler,
  // mais notre implémentation par défaut met application/json.
  // Dans les fonctions ci-dessous, nous gérerons le cas FormData spécifiquement.

  if (isTokenExpired()) {
    try {
      await refreshAccessToken();
    } catch (refreshError) {
      console.error('❌ Impossible de rafraîchir le token');
      logout();
      if (typeof window !== 'undefined') window.location.href = '/';
      throw new Error('Session expirée');
    }
  }

  const token = getAccessToken();
  if (token) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }

  return headers;
}

/**
 * Helper pour gérer la réponse
 */
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    if (response.status === 401) {
      logout();
      if (typeof window !== 'undefined') window.location.href = '/';
      throw new Error('Non autorisé');
    }
    const errorText = await response.text();
    throw new Error(`Erreur HTTP: ${response.status} - ${errorText}`);
  }

  // Si la réponse est vide (ex: 204 No Content), on retourne null
  if (response.status === 204) {
    return null as T;
  }

  try {
    return await response.json() as T;
  } catch {
    // Si ce n'est pas du JSON valide mais que c'est OK (ex: string simple)
    return null as T;
  }
}

/**
 * 🌐 FONCTION : GET Request
 */
export async function apiGet<T>(url: string, options: RequestInit = {}): Promise<T> {
  const headers = await getAuthHeaders(options.headers);
  const response = await fetch(url, { ...options, method: 'GET', headers });
  return handleResponse<T>(response);
}

/**
 * 📤 FONCTION : POST Request
 */
export async function apiPost<T>(url: string, body?: unknown, options: RequestInit = {}): Promise<T> {
  const headers = await getAuthHeaders(options.headers);

  // Si le body est un FormData, on supprime le Content-Type JSON par défaut
  if (body instanceof FormData) {
    delete (headers as Record<string, string>)['Content-Type'];
  }

  const response = await fetch(url, {
    ...options,
    method: 'POST',
    headers,
    body: body instanceof FormData ? body : (body ? JSON.stringify(body) : undefined),
  });

  return handleResponse<T>(response);
}

/**
 * ✏️ FONCTION : PUT Request
 */
export async function apiPut<T>(url: string, body?: unknown, options: RequestInit = {}): Promise<T> {
  const headers = await getAuthHeaders(options.headers);

  if (body instanceof FormData) {
    delete (headers as Record<string, string>)['Content-Type'];
  }

  const response = await fetch(url, {
    ...options,
    method: 'PUT',
    headers,
    body: body instanceof FormData ? body : (body ? JSON.stringify(body) : undefined),
  });

  return handleResponse<T>(response);
}

/**
 * 🛠️ FONCTION : PATCH Request (Celle qui manquait)
 */
export async function apiPatch<T>(url: string, body?: unknown, options: RequestInit = {}): Promise<T> {
  const headers = await getAuthHeaders(options.headers);

  if (body instanceof FormData) {
    delete (headers as Record<string, string>)['Content-Type'];
  }

  const response = await fetch(url, {
    ...options,
    method: 'PATCH',
    headers,
    body: body instanceof FormData ? body : (body ? JSON.stringify(body) : undefined),
  });

  return handleResponse<T>(response);
}

/**
 * 🗑️ FONCTION : DELETE Request
 */
export async function apiDelete<T>(url: string, options: RequestInit = {}): Promise<T> {
  const headers = await getAuthHeaders(options.headers);
  const response = await fetch(url, { ...options, method: 'DELETE', headers });
  return handleResponse<T>(response);
}