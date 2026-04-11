import { apiGet, apiPost, apiPatch, apiDelete } from './api.client';

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
}

export async function createService(data: ServiceRequest): Promise<ServiceResponse> {
    return apiPost('/service-offerings', data);
}

export async function getActiveServices(): Promise<ServiceResponse[]> {
    return apiGet('/service-offerings/active');
}

export async function updateService(id: string, data: Partial<ServiceRequest>): Promise<ServiceResponse> {
    return apiPatch(`/service-offerings/${id}`, data);
}

export async function deleteService(id: string): Promise<void> {
    return apiDelete(`/service-offerings/${id}`);
}

export async function getServiceById(id: string): Promise<ServiceResponse> {
    return apiGet(`/service-offerings/${id}`);
}