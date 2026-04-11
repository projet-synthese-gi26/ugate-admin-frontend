/**
 * Client API (UGATE) avec intercepteur de token
 */

import { getAccessToken, isTokenExpired, refreshAccessToken, logout } from './auth.service';
import { UGATE_API_BASE_URL, isAbsoluteUrl, joinUrl } from '@/lib/config/api';

function resolveUgateUrl(url: string): string {
  return isAbsoluteUrl(url) ? url : joinUrl(UGATE_API_BASE_URL, url);
}

async function getAuthHeaders(customHeaders: HeadersInit = {}): Promise<HeadersInit> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };

  if (isTokenExpired()) {
    try {
      await refreshAccessToken();
    } catch {
      logout();
      if (typeof window !== 'undefined') window.location.href = '/';
      throw new Error('Session expirée');
    }
  }

  const token = getAccessToken();
  if (token) (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;

  return headers;
}

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

  if (response.status === 204) return null as T;

  try {
    return (await response.json()) as T;
  } catch {
    return null as T;
  }
}

export async function apiGet<T>(url: string, options: RequestInit = {}): Promise<T> {
  const headers = await getAuthHeaders(options.headers);
  const response = await fetch(resolveUgateUrl(url), { ...options, method: 'GET', headers });
  return handleResponse<T>(response);
}

export async function apiPost<T>(url: string, body?: unknown, options: RequestInit = {}): Promise<T> {
  const headers = await getAuthHeaders(options.headers);

  if (body instanceof FormData) {
    delete (headers as Record<string, string>)['Content-Type'];
  }

  const response = await fetch(resolveUgateUrl(url), {
    ...options,
    method: 'POST',
    headers,
    body: body instanceof FormData ? body : body ? JSON.stringify(body) : undefined,
  });

  return handleResponse<T>(response);
}

export async function apiPatch<T>(url: string, body?: unknown, options: RequestInit = {}): Promise<T> {
  const headers = await getAuthHeaders(options.headers);

  if (body instanceof FormData) {
    delete (headers as Record<string, string>)['Content-Type'];
  }

  const response = await fetch(resolveUgateUrl(url), {
    ...options,
    method: 'PATCH',
    headers,
    body: body instanceof FormData ? body : body ? JSON.stringify(body) : undefined,
  });

  return handleResponse<T>(response);
}

export async function apiDelete<T>(url: string, options: RequestInit = {}): Promise<T> {
  const headers = await getAuthHeaders(options.headers);
  const response = await fetch(resolveUgateUrl(url), { ...options, method: 'DELETE', headers });
  return handleResponse<T>(response);
}