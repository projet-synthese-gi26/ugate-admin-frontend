/**
 * Client API avec Intercepteur
 * 
 * Ce fichier crée un client HTTP qui ajoute automatiquement
 * le token d'authentification à toutes les requêtes
 */

import { getAccessToken, isTokenExpired, refreshAccessToken, logout } from './auth.service';

/**
 * 🔧 FONCTION : Créer les headers avec le token
 * 
 * Ajoute automatiquement le token d'authentification aux headers
 * 
 * @param customHeaders - Headers personnalisés optionnels
 * @returns Headers complets avec le token
 */
async function getAuthHeaders(customHeaders: HeadersInit = {}): Promise<HeadersInit> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };

  // Vérifier si le token est expiré et le rafraîchir si nécessaire
  if (isTokenExpired()) {
    console.log('⚠️ Token expiré ou sur le point d\'expirer');
    try {
      await refreshAccessToken();
    } catch (refreshError) {
      console.error('❌ Impossible de rafraîchir le token');
      logout();
      if (typeof window !== 'undefined') {
        window.location.href = '/';
      }
      throw new Error('Session expirée');
    }
  }

  // Ajouter le token aux headers
  const token = getAccessToken();
  if (token) {
    console.log('🔑 Token ajouté à la requête');
    (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }

  return headers;
}

/**
 * 🌐 FONCTION : GET Request
 * 
 * Effectue une requête GET avec le token automatiquement ajouté
 * 
 * @param url - URL de la requête
 * @param options - Options fetch optionnelles
 * @returns Réponse de l'API
 */
export async function apiGet<T>(url: string, options: RequestInit = {}): Promise<T> {
  try {
    console.log('🌐 Appel API GET vers:', url);
    
    const headers = await getAuthHeaders(options.headers);
    
    const response = await fetch(url, {
      ...options,
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      if (response.status === 401) {
        console.error('❌ Non autorisé (401)');
        logout();
        if (typeof window !== 'undefined') {
          window.location.href = '/';
        }
        throw new Error('Non autorisé');
      }
      
      // Capturer les détails de l'erreur
      const errorText = await response.text();
      console.error(`❌ HTTP ${response.status}:`, errorText);
      console.error('📋 URL:', url);
      
      throw new Error(`Erreur HTTP: ${response.status} - ${errorText || response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ Requête réussie');
    console.log('📦 Données reçues:', data);
    return data as T;
  } catch (error) {
    console.error('❌ Erreur lors de la requête GET:', error);
    throw error;
  }
}

/**
 * 📤 FONCTION : POST Request
 * 
 * Effectue une requête POST avec le token automatiquement ajouté
 * 
 * @param url - URL de la requête
 * @param body - Corps de la requête
 * @param options - Options fetch optionnelles
 * @returns Réponse de l'API
 */
export async function apiPost<T>(url: string, body?: unknown, options: RequestInit = {}): Promise<T> {
  try {
    console.log('🌐 Appel API POST vers:', url);
    console.log('📦 Données envoyées:', body);
    
    const headers = await getAuthHeaders(options.headers);
    
    const response = await fetch(url, {
      ...options,
      method: 'POST',
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      if (response.status === 401) {
        console.error('❌ Non autorisé (401)');
        logout();
        if (typeof window !== 'undefined') {
          window.location.href = '/';
        }
        throw new Error('Non autorisé');
      }
      
      // Capturer les détails de l'erreur
      const errorText = await response.text();
      console.error(`❌ HTTP ${response.status}:`, errorText);
      console.error('📋 Headers envoyés:', headers);
      console.error('📦 Body envoyé:', body);
      
      throw new Error(`Erreur HTTP: ${response.status} - ${errorText || response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ Requête réussie');
    return data as T;
  } catch (error) {
    console.error('❌ Erreur lors de la requête POST:', error);
    throw error;
  }
}

/**
 * ✏️ FONCTION : PUT Request
 * 
 * Effectue une requête PUT avec le token automatiquement ajouté
 * 
 * @param url - URL de la requête
 * @param body - Corps de la requête
 * @param options - Options fetch optionnelles
 * @returns Réponse de l'API
 */
export async function apiPut<T>(url: string, body?: unknown, options: RequestInit = {}): Promise<T> {
  try {
    console.log('🌐 Appel API PUT vers:', url);
    
    const headers = await getAuthHeaders(options.headers);
    
    const response = await fetch(url, {
      ...options,
      method: 'PUT',
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      if (response.status === 401) {
        console.error('❌ Non autorisé (401)');
        logout();
        if (typeof window !== 'undefined') {
          window.location.href = '/';
        }
        throw new Error('Non autorisé');
      }
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ Requête réussie');
    return data as T;
  } catch (error) {
    console.error('❌ Erreur lors de la requête PUT:', error);
    throw error;
  }
}

/**
 * 🔧 FONCTION : PATCH Request
 * 
 * Effectue une requête PATCH avec le token automatiquement ajouté
 * 
 * @param url - URL de la requête
 * @param body - Corps de la requête
 * @param options - Options fetch optionnelles
 * @returns Réponse de l'API
 */
export async function apiPatch<T>(url: string, body?: unknown, options: RequestInit = {}): Promise<T> {
  try {
    console.log('🌐 Appel API PATCH vers:', url);
    
    const headers = await getAuthHeaders(options.headers);
    
    const response = await fetch(url, {
      ...options,
      method: 'PATCH',
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      if (response.status === 401) {
        console.error('❌ Non autorisé (401)');
        logout();
        if (typeof window !== 'undefined') {
          window.location.href = '/';
        }
        throw new Error('Non autorisé');
      }
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ Requête réussie');
    return data as T;
  } catch (error) {
    console.error('❌ Erreur lors de la requête PATCH:', error);
    throw error;
  }
}

/**
 * 🗑️ FONCTION : DELETE Request
 * 
 * Effectue une requête DELETE avec le token automatiquement ajouté
 * 
 * @param url - URL de la requête
 * @param options - Options fetch optionnelles
 * @returns Réponse de l'API
 */
/**
 * 📤 FONCTION : POST Request avec Multipart/Form-Data
 * 
 * Effectue une requête POST avec upload de fichiers (multipart/form-data)
 * 
 * @param url - URL de la requête
 * @param formData - FormData contenant les fichiers et données
 * @param options - Options fetch optionnelles
 * @returns Réponse de l'API
 */
export async function apiPostMultipart<T>(url: string, formData: FormData, options: RequestInit = {}): Promise<T> {
  try {
    console.log('🌐 Appel API POST (multipart) vers:', url);
    
    // Pour multipart/form-data, ne pas définir Content-Type (le navigateur le fait automatiquement avec boundary)
    const headers = await getAuthHeaders();
    
    // Retirer Content-Type pour laisser le navigateur le gérer
    const headersObj = headers as Record<string, string>;
    delete headersObj['Content-Type'];
    
    const response = await fetch(url, {
      ...options,
      method: 'POST',
      headers: headersObj,
      body: formData,
    });

    if (!response.ok) {
      if (response.status === 401) {
        console.error('❌ Non autorisé (401)');
        logout();
        if (typeof window !== 'undefined') {
          window.location.href = '/';
        }
        throw new Error('Non autorisé');
      }
      
      const errorText = await response.text();
      console.error(`❌ HTTP ${response.status}:`, errorText);
      
      throw new Error(`Erreur HTTP: ${response.status} - ${errorText || response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ Requête réussie');
    return data as T;
  } catch (error) {
    console.error('❌ Erreur lors de la requête POST multipart:', error);
    throw error;
  }
}

export async function apiDelete<T>(url: string, options: RequestInit = {}): Promise<T> {
  try {
    console.log('🌐 Appel API DELETE vers:', url);
    
    const headers = await getAuthHeaders(options.headers);
    
    const response = await fetch(url, {
      ...options,
      method: 'DELETE',
      headers,
    });

    if (!response.ok) {
      if (response.status === 401) {
        console.error('❌ Non autorisé (401)');
        logout();
        if (typeof window !== 'undefined') {
          window.location.href = '/';
        }
        throw new Error('Non autorisé');
      }
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ Requête réussie');
    return data as T;
  } catch (error) {
    console.error('❌ Erreur lors de la requête DELETE:', error);
    throw error;
  }
}
