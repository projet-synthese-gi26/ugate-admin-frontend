import { apiGet, apiPost, apiPatch } from './api.client';

export type RequestStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export type MemberRole =
    | 'CUSTOMER'
    | 'DRIVER'
    | 'FLEET_MANAGER'
    | 'ADMIN'
    | 'PASSENGER'
    | 'PRESIDENT'
    | 'MODERATOR'
    | 'CLIENT';

export interface MembershipRequest {
    id: string;
    userId: string;
    syndicatId: string;
    branchId: string;
    status: RequestStatus;
    motivation: string;
    rejectionReason?: string;
    createdAt: string;
    updatedAt: string;
}

export interface MemberResponse {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    profileImageUrl?: string;
    role: MemberRole;
    branchId: string;
    joinedAt: string;
}

export interface SyndicateBranch {
    id: string;
    syndicatId: string;
    name: string;
    location: string;
    contact: string;
    bannerUrl?: string;
    createdAt: string;
    updatedAt: string;
}

export interface SyndicateStats {
    totalMembers: number;
    totalBranches: number;
    pendingRequests: number;
    activeServices: number;
    totalPublications: number;
    totalRevenue?: number;
}

export interface ProductResponse {
    id: string;
    syndicatId: string;
    name: string;
    description: string;
    price: number;
    sku: string;
    category: string;
    stock: number;
    image?: { url: string; type: string };
    isActive: boolean;
}

export async function getSyndicateStats(syndicateId: string): Promise<SyndicateStats> {
    return apiGet(`/admin/syndicates/${syndicateId}/stats`);
}

export async function getSyndicateBranches(syndicateId: string): Promise<SyndicateBranch[]> {
    return apiGet(`/syndicates/${syndicateId}/branches`);
}

export async function getBranchRequests(syndicateId: string, branchId: string): Promise<MembershipRequest[]> {
    return apiGet(`/admin/syndicates/${syndicateId}/branches/${branchId}/requests`);
}

export async function getSyndicateMembers(syndicateId: string): Promise<MemberResponse[]> {
    return apiGet(`/admin/syndicates/${syndicateId}/members`);
}

export async function processMembershipRequest(
    requestId: string,
    approve: boolean,
    rejectionReason?: string
): Promise<void> {
    return apiPost(`/admin/syndicates/requests/${requestId}/process`, { approve, rejectionReason });
}

export async function addMemberManually(
    syndicateId: string,
    branchId: string,
    payload: { email: string; firstName: string; lastName: string }
): Promise<void> {
    return apiPost(`/admin/syndicates/${syndicateId}/branches/${branchId}/members`, payload);
}

export async function updateMemberRole(
    syndicateId: string,
    userId: string,
    newRole: MemberRole
): Promise<void> {
    return apiPatch(`/admin/syndicates/${syndicateId}/members/${userId}/role`, { newRole });
}

// Si ton Settings admin utilise ces endpoints
export async function getSyndicateDetails(syndicateId: string): Promise<any> {
    return apiGet(`/syndicates/${syndicateId}`);
}

export async function updateSyndicate(
    syndicateId: string,
    payload: { name?: string; description?: string; domain?: string },
    files?: { charte?: File; statusDoc?: File }
): Promise<any> {
    const formData = new FormData();
    if (payload.name) formData.append('name', payload.name);
    if (payload.description) formData.append('description', payload.description);
    if (payload.domain) formData.append('domain', payload.domain);
    if (files?.charte) formData.append('charte', files.charte);
    if (files?.statusDoc) formData.append('statusDoc', files.statusDoc);

    return apiPatch(`/syndicates/${syndicateId}`, formData);
}