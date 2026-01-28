/**
 * Types pour la gestion des produits selon l'API UGate
 */

/**
 * Requête pour créer ou mettre à jour un produit
 */
export interface ProductRequest {
  syndicatId: string;
  name: string;
  description: string;
  price: number;
  sku: string;
  category: string;
  stock: number;
  imageUrl?: string;
  isActive: boolean;
}

/**
 * Information sur un média (image, vidéo, fichier)
 */
export interface MediaInfo {
  url: string;
  type: string;
}

/**
 * Réponse de l'API pour un produit
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
  image?: MediaInfo;
  imageUrl?: string;
  isActive: boolean;
}

/**
 * Produit pour l'affichage frontend (combinaison API + mock)
 */
export interface ProductItem {
  id: string;
  syndicatId?: string;
  title: string;
  name?: string;
  description?: string;
  price: number;
  image: string;
  imageUrl?: string;
  status: 'in_stock' | 'out_of_stock';
  sku: string;
  category: string;
  stock?: number;
  isActive?: boolean;
  isMock?: boolean; // Flag pour identifier les produits fictifs
}

/**
 * Requête pour créer un produit
 */
export interface CreateProductRequest {
  syndicatId: string;
  name: string;
  description: string;
  price: number;
  sku: string;
  category: string;
  stock: number;
  imageUrl?: string;
  isActive?: boolean;
}

/**
 * Requête pour mettre à jour le stock
 */
export interface UpdateStockRequest {
  quantity: number;
}
