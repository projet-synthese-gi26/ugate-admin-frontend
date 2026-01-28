/**
 * Service des Syndicats
 * 
 * Gère toutes les opérations liées aux syndicats
 * API: https://ugate.pynfi.com
 */

import { 
  SyndicateResponse, 
  PaginatedSyndicatesResponse,
  BranchResponse,
  CreateBranchRequest,
  UpdateBranchRequest,
  CreateSyndicateRequest
} from '@/lib/types/syndicate';
import { apiGet, apiPost, apiPatch } from './api.client';
import { getAccessToken } from './auth.service';

// URL de base de l'API
const API_BASE_URL = 'https://ugate.pynfi.com';

/**
 * ➕ FONCTION 1 : Créer un syndicat
 * 
 * @param syndicateData - Données du syndicat à créer (avec fichiers)
 * @returns Syndicat créé
 */
export async function createSyndicate(syndicateData: CreateSyndicateRequest): Promise<SyndicateResponse> {
  try {
    console.log('➕ Création d\'un syndicat...');
    
    // Créer FormData pour l'upload des fichiers
    const formData = new FormData();
    formData.append('name', syndicateData.name);
    formData.append('description', syndicateData.description);
    formData.append('domain', syndicateData.domain);
    formData.append('logo', syndicateData.logo);
    formData.append('document', syndicateData.document);
    
    // Utiliser fetch directement car c'est du multipart/form-data
    const token = getAccessToken();
    if (!token) {
      throw new Error('Token d\'authentification manquant');
    }
    
    const response = await fetch(`${API_BASE_URL}/syndicates`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
        // Ne pas définir Content-Type - laisse le navigateur gérer multipart/form-data
      },
      body: formData
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ HTTP ${response.status}:`, errorText);
      throw new Error(`Échec de la création du syndicat (${response.status}): ${errorText}`);
    }
    
    const syndicate = await response.json();
    
    console.log('✅ Syndicat créé avec succès');
    
    return syndicate;
  } catch (error) {
    console.error('❌ Erreur lors de la création du syndicat:', error);
    throw error;
  }
}

/**
 * 📋 FONCTION 2 : Récupérer MES syndicats (créés par moi)
 * 
 * @returns Liste des syndicats créés par l'utilisateur connecté
 */
export async function getMySyndicates(): Promise<SyndicateResponse[]> {
  try {
    console.log('📋 Récupération de mes syndicats...');
    
    const syndicates = await apiGet<SyndicateResponse[]>(`${API_BASE_URL}/syndicates/mine`);
    
    console.log(`✅ ${syndicates.length} syndicat(s) récupéré(s)`);
    
    return syndicates;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des syndicats:', error);
    throw error;
  }
}

/**
 * 📋 FONCTION 2 : Récupérer les syndicats d'un utilisateur (dont il est membre)
 * 
 * @param userId - ID de l'utilisateur
 * @returns Liste des syndicats dont l'utilisateur est membre
 */
export async function getUserSyndicates(userId: string): Promise<SyndicateResponse[]> {
  try {
    console.log('📋 Récupération des syndicats de l\'utilisateur:', userId);
    
    const syndicates = await apiGet<SyndicateResponse[]>(`${API_BASE_URL}/syndicates/user/${userId}`);
    
    console.log(`✅ ${syndicates.length} syndicat(s) récupéré(s)`);
    
    return syndicates;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des syndicats:', error);
    throw error;
  }
}

/**
 * 📋 FONCTION 3 : Récupérer tous les syndicats (paginé)
 * 
 * @param page - Numéro de la page (0..N)
 * @param size - Nombre d'éléments par page
 * @returns Liste paginée des syndicats
 */
export async function getAllSyndicates(page: number = 0, size: number = 10): Promise<PaginatedSyndicatesResponse> {
  try {
    console.log(`📋 Récupération des syndicats (page ${page}, taille ${size})...`);
    
    const response = await apiGet<PaginatedSyndicatesResponse>(
      `${API_BASE_URL}/syndicates?page=${page}&size=${size}`
    );
    
    console.log(`✅ ${response.content.length} syndicat(s) sur ${response.totalElements} récupéré(s)`);
    
    return response;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des syndicats:', error);
    throw error;
  }
}

/**
 * 🏢 FONCTION 4 : Récupérer les branches d'un syndicat
 * 
 * @param syndicatId - ID du syndicat
 * @returns Liste des branches du syndicat
 */
export async function getSyndicatBranches(syndicatId: string): Promise<BranchResponse[]> {
  try {
    console.log('🏢 Récupération des branches du syndicat:', syndicatId);
    
    const branches = await apiGet<BranchResponse[]>(`${API_BASE_URL}/syndicates/${syndicatId}/branches`);
    
    console.log(`✅ ${branches.length} branche(s) récupérée(s)`);
    
    return branches;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des branches:', error);
    throw error;
  }
}

/**
 * ➕ FONCTION 5 : Créer une branche pour un syndicat
 * 
 * @param syndicatId - ID du syndicat
 * @param branchData - Données de la branche à créer
 * @returns Branche créée
 */
export async function createBranch(syndicatId: string, branchData: CreateBranchRequest): Promise<BranchResponse> {
  try {
    console.log('➕ Création d\'une branche pour le syndicat:', syndicatId);
    
    // Créer FormData pour l'upload de la bannière
    const formData = new FormData();
    formData.append('name', branchData.name);
    formData.append('location', branchData.location);
    
    if (branchData.contact) {
      formData.append('contact', branchData.contact);
    }
    
    if (branchData.banner) {
      formData.append('banner', branchData.banner);
    }
    
    // Utiliser fetch directement car c'est du multipart/form-data
    const token = getAccessToken();
    if (!token) {
      throw new Error('Token d\'authentification manquant');
    }
    
    const response = await fetch(`${API_BASE_URL}/syndicates/${syndicatId}/branches`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
        // Ne pas définir Content-Type - laisse le navigateur gérer multipart/form-data
      },
      body: formData
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ HTTP ${response.status}:`, errorText);
      throw new Error(`Échec de la création de la branche (${response.status}): ${errorText}`);
    }
    
    const branch = await response.json();
    
    console.log('✅ Branche créée avec succès');
    
    return branch;
  } catch (error) {
    console.error('❌ Erreur lors de la création de la branche:', error);
    throw error;
  }
}

/**
 * ✏️ FONCTION 6 : Mettre à jour une branche
 * 
 * @param branchId - ID de la branche
 * @param branchData - Données à mettre à jour
 * @returns Branche mise à jour
 */
export async function updateBranch(branchId: string, branchData: UpdateBranchRequest): Promise<BranchResponse> {
  try {
    console.log('✏️ Mise à jour de la branche:', branchId);
    
    const branch = await apiPatch<BranchResponse>(`${API_BASE_URL}/branches/${branchId}`, branchData);
    
    console.log('✅ Branche mise à jour avec succès');
    
    return branch;
  } catch (error) {
    console.error('❌ Erreur lors de la mise à jour de la branche:', error);
    throw error;
  }
}
