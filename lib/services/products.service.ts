/**
 * Service de Gestion des Produits
 * Synchronisé avec la spécification OpenAPI :
 * - Création via Multipart/Form-data (Image + Données)
 * - Mise à jour via PATCH JSON
 * - Gestion de stock via PATCH Integer
 */

import { apiGet, apiPost, apiPatch, apiDelete } from './api.client';
import { ProductResponse } from './admin.service';

const API_URL = 'https://ugate.pynfi.com';

// --- Types ---

// On étend l'interface de réponse si besoin, sinon on utilise celle de base
export interface Product extends ProductResponse {}

export interface CreateProductRequest {
    syndicatId: string;
    name: string;
    description: string;
    price: number;
    sku: string;
    category: string;
    stock: number;
    isActive: boolean;
}

export interface UpdateProductRequest {
    // Certains champs sont optionnels pour le PATCH
    syndicatId?: string;
    name?: string;
    description?: string;
    price?: number;
    sku?: string;
    category?: string;
    stock?: number;
    isActive?: boolean;
}

// --- Fonctions API ---

/**
 * Récupérer les produits d'un syndicat
 * GET /products/syndicates/{syndicatId}
 */
export async function getProductsBySyndicate(syndicateId: string): Promise<Product[]> {
    return apiGet<Product[]>(`${API_URL}/products/syndicates/${syndicateId}`);
}

/**
 * Récupérer les détails d'un produit
 * GET /products/{id}
 */
export async function getProductDetails(id: string): Promise<Product> {
    return apiGet<Product>(`${API_URL}/products/${id}`);
}

/**
 * Créer un produit avec image
 * POST /products (Multipart)
 * L'API attend les champs sous forme de "parts" dans le FormData
 */
export async function createProduct(data: CreateProductRequest, imageFile: File | null): Promise<Product> {
    const formData = new FormData();

    // Ajout des champs textuels
    formData.append('syndicatId', data.syndicatId);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', data.price.toString());
    formData.append('sku', data.sku);
    formData.append('category', data.category);
    formData.append('stock', data.stock.toString());
    formData.append('isActive', String(data.isActive));

    // Ajout de l'image
    // Note: L'API spécifie "image" comme un tableau de string (binary),
    // mais pour un upload simple, on envoie souvent le fichier unique ici.
    if (imageFile) {
        formData.append('image', imageFile);
    }

    // apiPost gère automatiquement l'absence de Content-Type JSON pour le FormData
    return apiPost<Product>(`${API_URL}/products`, formData);
}

/**
 * Mettre à jour les détails d'un produit
 * PATCH /products/{id} (JSON)
 */
export async function updateProduct(id: string, data: UpdateProductRequest): Promise<Product> {
    return apiPatch<Product>(`${API_URL}/products/${id}`, data);
}

/**
 * Mettre à jour le stock uniquement
 * PATCH /products/{id}/stock (Body: Integer)
 */
export async function updateProductStock(id: string, quantity: number): Promise<Product> {
    // L'API attend un entier directement dans le corps, pas un objet JSON complexe
    // apiPatch gère la conversion JSON
    return apiPatch<Product>(`${API_URL}/products/${id}/stock`, quantity);
}

/**
 * Supprimer un produit
 * DELETE /products/{id}
 */
export async function deleteProduct(id: string): Promise<void> {
    return apiDelete(`${API_URL}/products/${id}`);
}