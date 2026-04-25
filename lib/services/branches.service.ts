import { apiGet, apiPatch, apiPost } from './api.client';

export interface Branch {
    id: string;
    syndicatId: string;
    name: string;
    location: string;
    contact: string;
    bannerUrl?: string;
    latitude?: number | null;
    longitude?: number | null;
    createdAt: string;
    updatedAt: string;
}

export interface CreateBranchDTO {
    name: string;
    location: string;
    contact: string;
    latitude?: number | null;
    longitude?: number | null;
}

export async function getBranches(syndicateId: string): Promise<Branch[]> {
    return apiGet(`/syndicates/${syndicateId}/branches`);
}

export async function createBranch(
    syndicateId: string,
    data: CreateBranchDTO,
    bannerFile?: File
): Promise<Branch> {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('location', data.location);
    formData.append('contact', data.contact);

    if (typeof data.latitude === 'number') {
        formData.append('latitude', String(data.latitude));
    }

    if (typeof data.longitude === 'number') {
        formData.append('longitude', String(data.longitude));
    }

    if (bannerFile) {
        formData.append('banner', bannerFile);
    }

    return apiPost(`/syndicates/${syndicateId}/branches`, formData);
}

export async function updateBranch(
    branchId: string,
    data: Partial<CreateBranchDTO>
): Promise<Branch> {
    return apiPatch(`/branches/${branchId}`, data);
}
