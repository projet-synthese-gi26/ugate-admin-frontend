// lib/config/api.ts
// Source unique de vérité pour les URLs API de l'admin
// Les 2 variables utilisées ici sont EXACTEMENT celles du frontend normal :
// - NEXT_PUBLIC_UGATE_API_URL
// - NEXT_PUBLIC_AUTH_API_URL

const isProd = true;

function normalizeBaseUrl(url: string): string {
    return url.replace(/\/+$/, '');
}

function requireEnv(name: string, value: string | undefined): string {
    if (value && value.trim().length > 0) {
        return value.trim();
    }

    const message = `La variable d'environnement ${name} est manquante.`;

    if (isProd) {
        throw new Error(message);
    }

    console.warn(`⚠️ ${message}`);
    return '';
}

/**
 * API métier (syndicats, branches, produits, services, events, admin...)
 * Variable EXACTEMENT identique au frontend normal.
 */
export const UGATE_API_BASE_URL = normalizeBaseUrl(
    requireEnv('NEXT_PUBLIC_UGATE_API_URL', process.env.NEXT_PUBLIC_UGATE_API_URL)
);

/**
 * Base auth (même variable que le frontend normal).
 * On dérive ensuite /api/auth et /api/users.
 */
export const AUTH_BASE_URL = normalizeBaseUrl(
    requireEnv('NEXT_PUBLIC_AUTH_API_URL', process.env.NEXT_PUBLIC_AUTH_API_URL)
);

/**
 * Endpoints dérivés pour coller au backend actuel de l’admin
 */
export const AUTH_API_BASE_URL = `${AUTH_BASE_URL}/api/auth`;
export const AUTH_USERS_API_BASE_URL = `${AUTH_BASE_URL}/api/users`;

export function isAbsoluteUrl(url: string): boolean {
    return /^https?:\/\//i.test(url);
}

export function joinUrl(base: string, path: string): string {
    if (!path) return base;
    if (isAbsoluteUrl(path)) return path;

    const cleanBase = normalizeBaseUrl(base);
    const cleanPath = path.startsWith('/') ? path : `/${path}`;

    return `${cleanBase}${cleanPath}`;
}