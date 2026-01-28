/**
 * Service pour la gestion des demandes d'adhésion
 * 
 * API Base: https://ugate.pynfi.com
 * Section Swagger: "Syndicat Admin Management" & "Gestion Syndicat & Membres"
 * 
 * ✅ CONFORME À L'API SWAGGER (Mis à jour le 25 janvier 2026)
 */

const API_BASE_URL = 'https://ugate.pynfi.com';

/**
 * Interface pour une demande d'adhésion depuis l'API
 * Correspond exactement à MembershipRequest dans Swagger
 */
export interface MembershipRequest {
  id: string;
  userId: string;
  syndicatId: string;
  branchId: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  motivation: string;
  rejectionReason: string | null;
  createdAt: string;
  updatedAt: string;
}

/**
 * Interface pour les statistiques complètes du syndicat
 * Correspond à SyndicateFullStatsResponse dans Swagger
 */
export interface SyndicateFullStatsResponse {
  totalMembers: number;
  totalBranches: number;
  pendingRequests: number;
  activeServices: number;
  totalPublications: number;
}

/**
 * Interface pour ajouter un membre manuellement
 */
export interface AddMemberRequest {
  email: string;
  firstName: string;
  lastName: string;
}

/**
 * Interface pour changer le rôle d'un membre
 */
export interface UpdateMemberRoleRequest {
  newRole: 'CUSTOMER' | 'DRIVER' | 'FLEET_MANAGER' | 'ADMIN' | 'PASSENGER' | 'PRESIDENT' | 'MODERATOR' | 'CLIENT';
}

/**
 * Fonction helper pour les appels API
 */
async function apiCall<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = localStorage.getItem('access_token');
  
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }

  return response.json();
}

/**
 * 📋 FONCTION 1 : Récupérer toutes les demandes d'adhésion d'un syndicat
 * 
 * Endpoint Swagger: GET /admin/syndicates/{syndicatId}/requests
 * Section: "Syndicat Admin Management"
 * 
 * @param syndicatId - ID du syndicat
 * @returns Liste de toutes les demandes (toutes branches confondues)
 */
export async function getSyndicateRequests(syndicatId: string): Promise<MembershipRequest[]> {
  try {
    console.log(`📋 Récupération des demandes d'adhésion pour le syndicat ${syndicatId}...`);
    
    const response = await apiCall<MembershipRequest[]>(
      `/admin/syndicates/${syndicatId}/requests`,
      { method: 'GET' }
    );
    
    console.log(`✅ ${response.length} demande(s) récupérée(s)`);
    return response;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des demandes:', error);
    throw error;
  }
}

/**
 * 🏢 FONCTION 2 : Récupérer les demandes d'une branche spécifique
 * 
 * Endpoint Swagger: GET /admin/syndicates/{syndicatId}/branches/{branchId}/requests
 * Section: "Syndicat Admin Management"
 * 
 * @param syndicatId - ID du syndicat
 * @param branchId - ID de la branche
 * @returns Liste des demandes pour cette branche
 */
export async function getBranchRequests(
  syndicatId: string,
  branchId: string
): Promise<MembershipRequest[]> {
  try {
    console.log(`🏢 Récupération des demandes pour la branche ${branchId}...`);
    
    const response = await apiCall<MembershipRequest[]>(
      `/admin/syndicates/${syndicatId}/branches/${branchId}/requests`,
      { method: 'GET' }
    );
    
    console.log(`✅ ${response.length} demande(s) récupérée(s)`);
    return response;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des demandes de la branche:', error);
    throw error;
  }
}

/**
 * ✅ FONCTION 3 : Traiter une demande (Approuver OU Rejeter)
 * 
 * Endpoint Swagger: POST /admin/syndicates/requests/{requestId}/process
 * Section: "Syndicat Admin Management"
 * 
 * @param requestId - ID de la demande
 * @param approve - true pour approuver, false pour rejeter
 * @param rejectionReason - Raison du rejet (optionnel, requis si approve=false)
 * @returns void (204 No Content)
 */
export async function processRequest(
  requestId: string,
  approve: boolean,
  rejectionReason?: string
): Promise<void> {
  try {
    console.log(`${approve ? '✅ Approbation' : '❌ Rejet'} de la demande ${requestId}...`);
    
    const response = await fetch(`${API_BASE_URL}/admin/syndicates/requests/${requestId}/process`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      },
      body: JSON.stringify({
        approve,
        rejectionReason: rejectionReason || null
      })
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    
    console.log(`✅ Demande ${approve ? 'approuvée' : 'rejetée'} avec succès`);
  } catch (error) {
    console.error('❌ Erreur lors du traitement:', error);
    throw error;
  }
}

/**
 * 📄 FONCTION 4 : Récupérer les détails d'une demande
 * 
 * Endpoint Swagger: GET /admin/syndicates/requests/{requestId}
 * Section: "Syndicat Admin Management"
 * 
 * @param requestId - ID de la demande
 * @returns Détails complets de la demande
 */
export async function getRequestDetails(requestId: string): Promise<MembershipRequest> {
  try {
    console.log(`📄 Récupération des détails de la demande ${requestId}...`);
    
    const response = await apiCall<MembershipRequest>(
      `/admin/syndicates/requests/${requestId}`,
      { method: 'GET' }
    );
    
    console.log('✅ Détails récupérés avec succès');
    return response;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des détails:', error);
    throw error;
  }
}

/**
 * 📊 FONCTION 5 : Récupérer les statistiques complètes du syndicat
 * 
 * Endpoint Swagger: GET /admin/syndicates/{syndicatId}/stats
 * Section: "Syndicat Admin Management"
 * 
 * @param syndicatId - ID du syndicat
 * @returns Statistiques complètes (Membres, Branches, Demandes, Services, Publications)
 */
export async function getSyndicateStats(syndicatId: string): Promise<SyndicateFullStatsResponse> {
  try {
    console.log(`📊 Récupération des statistiques pour le syndicat ${syndicatId}...`);
    
    const response = await apiCall<SyndicateFullStatsResponse>(
      `/admin/syndicates/${syndicatId}/stats`,
      { method: 'GET' }
    );
    
    console.log('✅ Statistiques récupérées avec succès');
    return response;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des statistiques:', error);
    throw error;
  }
}

/**
 * ➕ FONCTION 6 : Ajouter un membre manuellement
 * 
 * Endpoint Swagger: POST /admin/syndicates/{syndicatId}/branches/{branchId}/members/add
 * Section: "Syndicat Admin Management"
 * 
 * @param syndicatId - ID du syndicat
 * @param branchId - ID de la branche cible
 * @param memberData - Données du membre (email, firstName, lastName)
 * @returns Message de confirmation
 */
export async function addMemberManually(
  syndicatId: string,
  branchId: string,
  memberData: AddMemberRequest
): Promise<{ message: string }> {
  try {
    console.log(`➕ Ajout manuel d'un membre dans la branche ${branchId}...`);
    
    const response = await apiCall<{ message: string }>(
      `/admin/syndicates/${syndicatId}/branches/${branchId}/members/add`,
      {
        method: 'POST',
        body: JSON.stringify(memberData)
      }
    );
    
    console.log('✅ Membre ajouté avec succès');
    return response;
  } catch (error) {
    console.error('❌ Erreur lors de l\'ajout du membre:', error);
    throw error;
  }
}

/**
 * 🔄 FONCTION 7 : Changer le rôle d'un membre
 * 
 * Endpoint Swagger: PATCH /admin/syndicates/{syndicatId}/members/{userId}/role
 * Section: "Syndicat Admin Management"
 * 
 * @param syndicatId - ID du syndicat
 * @param userId - ID de l'utilisateur
 * @param newRole - Nouveau rôle à attribuer
 * @returns void (204 No Content)
 */
export async function updateMemberRole(
  syndicatId: string,
  userId: string,
  newRole: UpdateMemberRoleRequest['newRole']
): Promise<void> {
  try {
    console.log(`🔄 Changement de rôle pour l'utilisateur ${userId}...`);
    
    const response = await fetch(`${API_BASE_URL}/admin/syndicates/${syndicatId}/members/${userId}/role`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      },
      body: JSON.stringify({ newRole })
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    
    console.log('✅ Rôle mis à jour avec succès');
  } catch (error) {
    console.error('❌ Erreur lors du changement de rôle:', error);
    throw error;
  }
}
