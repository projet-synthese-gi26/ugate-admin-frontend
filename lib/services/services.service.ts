import { apiGet, apiPost, apiPatch, apiDelete } from './api.client';

const API_URL = 'https://ugate.pynfi.com';

export interface ServiceRequest {
    title: string;
    description: string;
    price: number;
    features: string[];
    isActive: boolean;
}

export interface ServiceResponse {
    id: string;
    title: string;
    description: string;
    price: number;
    features: string[];
    isActive: boolean;
    // Note: Pas d'image dans la réponse API actuelle
}

/**
 * Créer un nouveau service
 */
export async function createService(data: ServiceRequest): Promise<ServiceResponse> {
    return apiPost<ServiceResponse>(`${API_URL}/service-offerings`, data);
}

/**
 * Récupérer les services actifs (Marketplace)
 * TODO: Demander au backend un endpoint /syndicates/{id}/services pour voir aussi les services inactifs/brouillons
 */
export async function getActiveServices(): Promise<ServiceResponse[]> {
    return apiGet<ServiceResponse[]>(`${API_URL}/service-offerings/active`);
}

/**
 * Mettre à jour un service
 */
export async function updateService(id: string, data: Partial<ServiceRequest>): Promise<ServiceResponse> {
    return apiPatch<ServiceResponse>(`${API_URL}/service-offerings/${id}`, data);
}

/**
 * Supprimer un service
 */
export async function deleteService(id: string): Promise<void> {
    return apiDelete(`${API_URL}/service-offerings/${id}`);
}

/**
 * Récupérer un service par son ID
 */
export async function getServiceById(id: string): Promise<ServiceResponse> {
    return apiGet<ServiceResponse>(`${API_URL}/service-offerings/${id}`);
}