import { apiGet, apiPost, apiPatch, apiDelete } from './api.client';
import { ProductResponse } from './admin.service'; // On réutilise le type défini précédemment

const API_URL = 'https://ugate.pynfi.com';

export interface CreateProductDTO {
    syndicatId: string;
    name: string;
    description: string;
    price: number;
    sku: string;
    category: string;
    stock: number;
    isActive: boolean;
}

/**
 * Créer un produit avec image
 * Note: L'API semble attendre un DTO en query/part et l'image en body.
 * Nous utilisons FormData pour tout envoyer proprement.
 */
export async function createProduct(data: CreateProductDTO, imageFile: File): Promise<ProductResponse> {
    const formData = new FormData();

    // Construction de l'objet DTO pour l'envoyer comme demandé par l'API (souvent sous forme de blob ou string JSON)
    // Si l'API attend "dto" en query param, il faudra adapter l'URL.
    // Ici, on assume une approche standard Multipart où on envoie les champs.

    // Approche robuste : On envoie les champs individuellement ET on prépare le terrain si l'API change
    formData.append('image', imageFile);

    // Astuce : Certains backends Java attendent un champ 'dto' contenant le JSON
    const dto = JSON.stringify(data);

    // On construit l'URL avec le paramètre dto si c'est ce que Swagger demande spécifiquement
    // (parameters: [{name: "dto", in: "query"...}])
    const url = `${API_URL}/products?dto=${encodeURIComponent(dto)}`;

    // Note: On n'utilise pas apiPost ici car on doit gérer le FormData spécifiquement sans le header JSON par défaut
    const token = localStorage.getItem('ugate_access_token');

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            // Pas de Content-Type, le navigateur le mettra avec le boundary
        },
        body: formData
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Erreur création produit: ${error}`);
    }

    return await response.json();
}

/**
 * Mettre à jour un produit
 */
export async function updateProduct(id: string, data: Partial<CreateProductDTO>): Promise<ProductResponse> {
    return apiPatch(`${API_URL}/products/${id}`, data);
}

/**
 * Mettre à jour le stock
 */
export async function updateProductStock(id: string, quantity: number): Promise<ProductResponse> {
    return apiPatch(`${API_URL}/products/${id}/stock`, quantity); // Envoie l'entier directement
}

/**
 * Supprimer un produit
 */
export async function deleteProduct(id: string): Promise<void> {
    return apiDelete(`${API_URL}/products/${id}`);
}

/**
 * Récupérer les produits d'un syndicat
 */
export async function getProductsBySyndicate(syndicateId: string): Promise<ProductResponse[]> {
    return apiGet<ProductResponse[]>(`${API_URL}/products/syndicates/${syndicateId}`);
}