import { apiGet, apiPost, apiPatch, apiDelete } from './api.client';
import { ProductResponse } from './admin.service';

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
    syndicatId?: string;
    name?: string;
    description?: string;
    price?: number;
    sku?: string;
    category?: string;
    stock?: number;
    isActive?: boolean;
}

export async function getProductsBySyndicate(syndicateId: string): Promise<Product[]> {
    return apiGet(`/products/syndicates/${syndicateId}`);
}

export async function getProductDetails(id: string): Promise<Product> {
    return apiGet(`/products/${id}`);
}

export async function createProduct(data: CreateProductRequest, imageFile: File | null): Promise<Product> {
    const formData = new FormData();
    formData.append('syndicatId', data.syndicatId);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', String(data.price));
    formData.append('sku', data.sku);
    formData.append('category', data.category);
    formData.append('stock', String(data.stock));
    formData.append('isActive', String(data.isActive));
    if (imageFile) formData.append('image', imageFile);

    return apiPost('/products', formData);
}

export async function updateProduct(id: string, data: UpdateProductRequest): Promise<Product> {
    return apiPatch(`/products/${id}`, data);
}

export async function updateProductStock(id: string, quantity: number): Promise<Product> {
    return apiPatch(`/products/${id}/stock`, quantity);
}

export async function deleteProduct(id: string): Promise<void> {
    return apiDelete(`/products/${id}`);
}