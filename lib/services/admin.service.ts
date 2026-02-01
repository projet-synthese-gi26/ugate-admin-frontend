/**
 * Service d'Administration du Syndicat
 *
 * Ce service centralise toutes les opérations qu'un administrateur de syndicat
 * peut effectuer : gestion des membres, statistiques, produits, etc.
 */

import {apiGet, apiPatch, apiPost} from './api.client';


const API_URL = 'https://ugate.pynfi.com';

// --- Interfaces (Types) ---

/**
 * Statistiques globales du syndicat pour le tableau de bord
 */
export interface SyndicateStats {
    totalMembers: number;
    totalBranches: number;
    pendingRequests: number;
    activeServices: number;
    totalPublications: number;

    // Champs optionnels pour la compatibilité UI si l'API ne les renvoie pas encore
    activeMembers?: number;
    totalRevenue?: number;
    activeSyndicats?: number;
    pendingSyndicats?: number;
}


export interface SyndicateFullStatsResponse {
    totalMembers: number;
    totalBranches: number;
    pendingRequests: number;
    activeServices: number;
    totalPublications: number;
}

/**
 * Structure d'une demande d'adhésion
 */
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

    user?: {
        firstName: string;
        lastName: string;
        email: string;
        profileImageUrl?: string;
    };
}

export type MemberRole =
    | 'CUSTOMER'
    | 'DRIVER'
    | 'FLEET_MANAGER'
    | 'ADMIN'
    | 'PASSENGER'
    | 'PRESIDENT'
    | 'MODERATOR'
    | 'CLIENT';

export type RequestStatus = 'PENDING' | 'APPROVED' | 'REJECTED';



/**
 * Structure d'une branche (Agence)
 */
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

/**
 * Données requises pour inviter un membre manuellement
 */
export interface InviteMemberRequest {
    email: string;
    firstName: string;
    lastName: string;
}

/**
 * Structure d'un produit
 */
export interface ProductResponse {
    id: string;
    syndicatId: string;
    name: string;
    description: string;
    price: number;
    sku: string;
    category: string;
    stock: number;
    image?: {
        url: string;
        type: string;
    };
    isActive: boolean;
}

export interface UpdateMemberRoleRequest {
    newRole: MemberRole;
}

/** Payload pour ajouter un membre manuellement */
export interface AddMemberRequest {
    email: string;
    firstName: string;
    lastName: string;
}

/** Payload pour traiter une demande */
export interface MembershipApprovalRequest {
    approve: boolean;
    rejectionReason?: string;
}











// --- Fonctions API ---

/**
 * Récupérer les demandes d'adhésion en attente
 * @param syndicateId - UUID du syndicat
 */
export async function getMembershipRequests(syndicateId: string): Promise<MembershipRequest[]> {
    return apiGet<MembershipRequest[]>(`${API_URL}/admin/syndicates/${syndicateId}/requests`);
}



/**
 * Traiter une demande d'adhésion (Accepter ou Refuser)
 * @param requestId - UUID de la demande
 * @param approve - true pour accepter, false pour refuser
 * @param rejectionReason - Raison du refus (obligatoire si refusé)
 */
export async function processMembershipRequest(
    requestId: string,
    approve: boolean,
    rejectionReason?: string
): Promise<void> {
    return apiPost(`${API_URL}/admin/syndicates/requests/${requestId}/process`, {
        approve,
        rejectionReason
    });
}

export interface MemberResponse {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    profileImageUrl?: string;
    role: 'CUSTOMER' | 'DRIVER' | 'FLEET_MANAGER' | 'ADMIN' | 'PASSENGER' | 'PRESIDENT' | 'MODERATOR' | 'CLIENT';
    branchId: string;
    joinedAt: string;
}

/**
 * GET /admin/syndicates/{syndicatId}/stats
 * Obtenir les statistiques du syndicat
 */
export async function getSyndicateStats(syndicateId: string): Promise<SyndicateFullStatsResponse> {
    return apiGet<SyndicateFullStatsResponse>(`${API_URL}/admin/syndicates/${syndicateId}/stats`);
}

/**
 * GET /admin/syndicates/{syndicatId}/members
 * Lister les membres d'un syndicat
 */
export async function getSyndicateMembers(syndicateId: string): Promise<MemberResponse[]> {
    return apiGet<MemberResponse[]>(`${API_URL}/admin/syndicates/${syndicateId}/members`);
}

/**
 * PATCH /admin/syndicates/{syndicatId}/members/{userId}/role
 * Changer le rôle d'un membre
 */
export async function updateMemberRole(syndicateId: string, userId: string, newRole: MemberRole): Promise<void> {
    const payload: UpdateMemberRoleRequest = { newRole };
    return apiPatch(`${API_URL}/admin/syndicates/${syndicateId}/members/${userId}/role`, payload);
}

/**
 * GET /admin/syndicates/{syndicatId}/branches/{branchId}/requests
 * Lister les demandes d'une branche spécifique
 */
export async function getBranchRequests(syndicateId: string, branchId: string): Promise<MembershipRequest[]> {
    return apiGet<MembershipRequest[]>(`${API_URL}/admin/syndicates/${syndicateId}/branches/${branchId}/requests`);
}

/**
 * GET /admin/syndicates/requests/{requestId}
 * Obtenir les détails d'une demande
 */
export async function getRequestDetails(requestId: string): Promise<MembershipRequest> {
    return apiGet<MembershipRequest>(`${API_URL}/admin/syndicates/requests/${requestId}`);
}


/**
 * POST /admin/syndicates/{syndicatId}/branches/{branchId}/members/add
 * Ajouter un membre manuellement (Invitation)
 */
export async function addMemberManually(
    syndicateId: string,
    branchId: string,
    data: AddMemberRequest
): Promise<void> {
    return apiPost(`${API_URL}/admin/syndicates/${syndicateId}/branches/${branchId}/members/add`, data);
}


/**
 * GET /syndicates/{syndicatId}/branches
 * Récupérer la liste des branches pour les filtres
 */
export async function getSyndicateBranches(syndicateId: string): Promise<SyndicateBranch[]> {
    return apiGet<SyndicateBranch[]>(`${API_URL}/syndicates/${syndicateId}/branches`);
}

/**
 * Récupérer tous les produits associés à un syndicat
 * @param syndicateId - UUID du syndicat
 */
export async function getSyndicateProducts(syndicateId: string): Promise<ProductResponse[]> {
    return apiGet<ProductResponse[]>(`${API_URL}/products/syndicates/${syndicateId}`);
}





export interface SyndicateDocuments {
    logoUrl?: string;
    charteUrl?: string;
    statusUrl?: string;
    membersListUrl?: string;
    commitmentCertificateUrl?: string;
}

export interface OrganizationInfo {
    legalForm: string;
    socialNetwork?: string;
    keywords?: string;
    email: string;
    shortName: string;
    longName: string;
}

export interface SyndicateDetailsResponse {
    id: string;
    name: string;
    description: string;
    domain: string;
    type: string;
    isApproved: boolean;
    isActive: boolean;
    documents: SyndicateDocuments;
    organization: OrganizationInfo;
    creator: { id: string; fullName: string; email: string };
    stats: { totalMembers: number; totalBranches: number };
    createdAt: string;
    updatedAt: string;
}

// --- Nouvelles Fonctions API ---

/**
 * GET /syndicates/{id}/details
 * Récupérer les détails complets du syndicat (incluant docs et stats)
 */
export async function getSyndicateDetails(syndicateId: string): Promise<SyndicateDetailsResponse> {
    return apiGet<SyndicateDetailsResponse>(`${API_URL}/syndicates/${syndicateId}/details`);
}

/**
 * PATCH /syndicates/{id}
 * Mise à jour du syndicat (Multipart pour les fichiers)
 */
export async function updateSyndicate(
    syndicateId: string,
    data: {
        name?: string;
        description?: string;
        domain?: string;
    },
    files?: {
        logo?: File;
        charte?: File;
        statusDoc?: File;
    }
): Promise<void> {
    const formData = new FormData();

    // Champs texte
    if (data.name) formData.append('name', data.name);
    if (data.description) formData.append('description', data.description);
    if (data.domain) formData.append('domain', data.domain);

    // Fichiers
    if (files?.logo) formData.append('logo', files.logo);
    if (files?.charte) formData.append('charte', files.charte);
    if (files?.statusDoc) formData.append('statusDoc', files.statusDoc);

    // Note: apiPatch gère automatiquement l'absence de Content-Type JSON pour FormData
    // mais nous devons utiliser fetch directement si apiPatch force le JSON,
    // vérifions votre api.client.ts -> Il gère bien le FormData !
    return apiPatch(`${API_URL}/syndicates/${syndicateId}`, formData);
}


export async function updateUserProfile(data: UpdateUserProfileDTO, imageFile?: File): Promise<any> {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value);
    });

    if (imageFile) {
        formData.append('image', imageFile);
    }

    // Utilisation de apiPost qui gère le Token automatiquement
    return apiPost(`${API_URL}/syndicates/user`, formData);
}