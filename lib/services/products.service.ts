/**
 * Service pour la gestion des produits via l'API UGate
 */

import { 
  ProductResponse, 
  ProductRequest, 
  CreateProductRequest,
  ProductItem 
} from '@/lib/types/products';
import { apiGet, apiPost, apiPatch, apiDelete, apiPostMultipart } from './api.client';

// URL de base de l'API
const API_BASE_URL = 'https://ugate.pynfi.com';

/**
 * 📦 FONCTION 1 : Récupérer les produits d'un syndicat
 * 
 * @param syndicatId - ID du syndicat
 * @returns Liste des produits
 */
export async function getProductsBySyndicat(syndicatId: string): Promise<ProductItem[]> {
  try {
    console.log('📦 Récupération des produits pour le syndicat:', syndicatId);
    
    const response = await apiGet<ProductResponse[]>(`${API_BASE_URL}/products/syndicates/${syndicatId}`);
    
    // Transformer la réponse en format attendu par le frontend
    const products: ProductItem[] = response.map((product: ProductResponse) => ({
      id: product.id,
      syndicatId: product.syndicatId,
      title: product.name,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image?.url || product.imageUrl || '/placeholder-product.jpg',
      imageUrl: product.image?.url || product.imageUrl,
      status: (product.stock > 0 && product.isActive) ? 'in_stock' : 'out_of_stock',
      sku: product.sku,
      category: product.category,
      stock: product.stock,
      isActive: product.isActive,
      isMock: false
    }));
    
    console.log(`✅ ${products.length} produit(s) récupéré(s)`);
    
    return products;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des produits:', error);
    throw error;
  }
}

/**
 * 🆕 FONCTION 2 : Créer un nouveau produit avec upload d'image
 * 
 * @param productData - Données du produit à créer
 * @param imageFile - Fichier image à uploader (optionnel)
 * @returns Produit créé
 */
export async function createProduct(
  productData: CreateProductRequest, 
  imageFile?: File
): Promise<ProductResponse> {
  try {
    console.log('➕ Création d\'un nouveau produit:', productData.name);
    console.log('📋 Données à envoyer:', productData);
    
    // Créer le FormData pour l'upload
    const formData = new FormData();
    
    // Ajouter l'image si fournie
    if (imageFile) {
      formData.append('image', imageFile);
      console.log('🖼️ Image ajoutée:', imageFile.name, imageFile.size, 'bytes');
    }
    
    // Construire l'URL avec les paramètres du produit en query string
    const queryParams = new URLSearchParams({
      'dto.syndicatId': productData.syndicatId,
      'dto.name': productData.name,
      'dto.description': productData.description,
      'dto.price': productData.price.toString(),
      'dto.sku': productData.sku,
      'dto.category': productData.category,
      'dto.stock': productData.stock.toString(),
      'dto.isActive': (productData.isActive !== undefined ? productData.isActive : true).toString()
    });
    
    const url = `${API_BASE_URL}/products?${queryParams.toString()}`;
    
    const response = await apiPostMultipart<ProductResponse>(url, formData);
    
    console.log('✅ Produit créé avec succès:', response.id);
    
    return response;
  } catch (error) {
    console.error('❌ Erreur lors de la création du produit:', error);
    throw error;
  }
}

/**
 * 📝 FONCTION 3 : Mettre à jour un produit
 * 
 * @param productId - ID du produit
 * @param productData - Nouvelles données du produit
 * @returns Produit mis à jour
 */
export async function updateProduct(productId: string, productData: Partial<ProductRequest>): Promise<ProductResponse> {
  try {
    console.log('📝 Mise à jour du produit:', productId);
    
    const response = await apiPatch<ProductResponse>(`${API_BASE_URL}/products/${productId}`, productData);
    
    console.log('✅ Produit mis à jour avec succès');
    
    return response;
  } catch (error) {
    console.error('❌ Erreur lors de la mise à jour du produit:', error);
    throw error;
  }
}

/**
 * 📊 FONCTION 4 : Mettre à jour le stock d'un produit
 * 
 * @param productId - ID du produit
 * @param newStock - Nouvelle quantité en stock
 * @returns Produit avec stock mis à jour
 */
export async function updateProductStock(productId: string, newStock: number): Promise<ProductResponse> {
  try {
    console.log('📊 Mise à jour du stock du produit:', productId, '→', newStock);
    
    const response = await apiPatch<ProductResponse>(
      `${API_BASE_URL}/products/${productId}/stock`, 
      newStock,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log('✅ Stock mis à jour avec succès');
    
    return response;
  } catch (error) {
    console.error('❌ Erreur lors de la mise à jour du stock:', error);
    throw error;
  }
}

/**
 * 🗑️ FONCTION 5 : Supprimer un produit
 * 
 * @param productId - ID du produit à supprimer
 */
export async function deleteProduct(productId: string): Promise<void> {
  try {
    console.log('🗑️ Suppression du produit:', productId);
    
    await apiDelete<void>(`${API_BASE_URL}/products/${productId}`);
    
    console.log('✅ Produit supprimé avec succès');
  } catch (error) {
    console.error('❌ Erreur lors de la suppression du produit:', error);
    throw error;
  }
}

/**
 * 🔍 FONCTION 6 : Récupérer les détails d'un produit
 * 
 * @param productId - ID du produit
 * @returns Détails du produit
 */
export async function getProductDetails(productId: string): Promise<ProductResponse> {
  try {
    console.log('🔍 Récupération des détails du produit:', productId);
    
    const response = await apiGet<ProductResponse>(`${API_BASE_URL}/products/${productId}`);
    
    console.log('✅ Détails du produit récupérés');
    
    return response;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des détails:', error);
    throw error;
  }
}
