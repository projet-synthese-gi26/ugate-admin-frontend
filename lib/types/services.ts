/**
 * Types pour la gestion des services selon l'API UGate
 */

/**
 * Requête pour créer ou mettre à jour un service
 */
export interface ServiceOfferingRequest {
  title: string;
  description: string;
  price: number;
  features: string[];
  isActive: boolean;
}

/**
 * Réponse de l'API pour un service
 */
export interface ServiceOfferingResponse {
  id: string;
  title: string;
  description: string;
  price: number;
  features: string[];
  isActive: boolean;
}

/**
 * Service pour l'affichage frontend (combinaison API + mock)
 */
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string | number;
  images: string[];
  features: string[];
  isActive?: boolean;
  isMock?: boolean; // Flag pour identifier les services fictifs
}

/**
 * Requête pour créer un service
 */
export interface CreateServiceRequest {
  title: string;
  description: string;
  price: number;
  features: string[];
  isActive?: boolean;
}
