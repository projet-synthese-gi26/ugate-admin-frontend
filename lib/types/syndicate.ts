/**
 * Types pour les Syndicats
 * 
 * Basé sur l'API: https://ugate.pynfi.com/v3/api-docs
 */

/**
 * Réponse de l'API pour un syndicat
 */
export interface SyndicateResponse {
  id: string; // UUID
  name: string;
  description: string;
  domain: string; // Domaine d'activité (ex: Transport, Commerce)
  isApproved: boolean; // Approuvé par un super admin
  isActive?: boolean; // Activé et opérationnel (permet l'accès au dashboard)
  logoUrl: string;
  statusUrl: string; // URL du document des statuts
  creatorId: string; // UUID
  createdAt: string; // ISO date
}

/**
 * Requête pour créer un syndicat
 * Note: Cette création se fait via Swagger, pas dans cette app
 */
export interface CreateSyndicateRequest {
  name: string;
  description: string;
  domain: string;
  logo: File; // Fichier image PNG/JPG
  document: File; // Document PDF des statuts
}

/**
 * Réponse paginée pour la liste des syndicats
 */
export interface PaginatedSyndicatesResponse {
  content: SyndicateResponse[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

/**
 * Syndicat avec ses branches (pour l'administration)
 */
export interface SyndicateWithBranches extends SyndicateResponse {
  branches?: BranchResponse[];
}

/**
 * Réponse de l'API pour une branche
 */
export interface BranchResponse {
  id: string; // UUID
  syndicatId: string; // UUID
  name: string;
  location: string;
  contact?: string;
  bannerUrl?: string;
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
}

/**
 * Requête pour créer une branche
 */
export interface CreateBranchRequest {
  name: string;
  location: string;
  contact?: string;
  banner?: File; // Fichier image optionnel
}

/**
 * Requête pour mettre à jour une branche
 */
export interface UpdateBranchRequest {
  name?: string;
  location?: string;
  contact?: string;
}
