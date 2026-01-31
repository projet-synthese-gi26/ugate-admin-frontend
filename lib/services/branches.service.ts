import { apiGet, apiPatch } from './api.client';
import { getAccessToken } from './auth.service';

const API_URL = 'https://ugate.pynfi.com';

export interface Branch {
    id: string;
    syndicatId: string;
    name: string;
    location: string;
    contact: string;
    bannerUrl?: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateBranchDTO {
    name: string;
    location: string;
    contact: string;
}

/**
 * Récupérer toutes les branches d'un syndicat
 * CORRECTION : L'argument s'appelle bien syndicateId (avec e) pour correspondre à l'URL
 */
export async function getBranches(syndicateId: string): Promise<Branch[]> {
    // Le nom de la variable ici doit être identique à celui dans ${...}
    return apiGet<Branch[]>(`${API_URL}/syndicates/${syndicateId}/branches`);
}

/**
 * Créer une nouvelle branche (Antenne)
 */
export async function createBranch(syndicateId: string, data: CreateBranchDTO, bannerFile?: File): Promise<Branch> {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('location', data.location);
    formData.append('contact', data.contact);

    if (bannerFile) {
        formData.append('banner', bannerFile);
    }

    const token = getAccessToken();

    // Utilisation de syndicateId (avec e)
    const response = await fetch(`${API_URL}/syndicates/${syndicateId}/branches`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: formData
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Erreur création branche: ${error}`);
    }

    return await response.json();
}

/**
 * Mettre à jour une branche
 */
export async function updateBranch(branchId: string, data: Partial<CreateBranchDTO>): Promise<Branch> {
    return apiPatch<Branch>(`${API_URL}/branches/${branchId}`, data);
}