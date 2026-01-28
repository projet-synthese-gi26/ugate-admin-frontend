/**
 * Service pour la gestion des services via l'API UGate
 */

import { 
  ServiceOfferingResponse, 
  ServiceOfferingRequest, 
  CreateServiceRequest,
  ServiceItem 
} from '@/lib/types/services';
import { apiGet, apiPost, apiPatch, apiDelete } from './api.client';

// URL de base de l'API
const API_BASE_URL = 'https://ugate.pynfi.com';

/**
 * 📋 FONCTION 1 : Récupérer tous les services actifs
 * 
 * @returns Liste des services actifs
 */
export async function getAllActiveServices(): Promise<ServiceItem[]> {
  try {
    console.log('📋 Récupération de tous les services actifs');
    
    const response = await apiGet<ServiceOfferingResponse[]>(`${API_BASE_URL}/service-offerings/active`);
    
    // Transformer la réponse en format attendu par le frontend
    const services: ServiceItem[] = response.map((service: ServiceOfferingResponse) => ({
      id: service.id,
      title: service.title,
      description: service.description,
      price: service.price,
      images: ['https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop'], // Image par défaut
      features: service.features,
      isActive: service.isActive,
      isMock: false
    }));
    
    console.log(`✅ ${services.length} service(s) récupéré(s)`);
    
    return services;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des services:', error);
    throw error;
  }
}

/**
 * 🆕 FONCTION 2 : Créer un nouveau service
 * 
 * @param serviceData - Données du service à créer
 * @returns Service créé
 */
export async function createService(serviceData: CreateServiceRequest): Promise<ServiceOfferingResponse> {
  try {
    console.log('➕ Création d\'un nouveau service:', serviceData.title);
    console.log('📋 Données à envoyer:', serviceData);
    
    const requestData: ServiceOfferingRequest = {
      title: serviceData.title,
      description: serviceData.description,
      price: serviceData.price,
      features: serviceData.features,
      isActive: serviceData.isActive !== undefined ? serviceData.isActive : true
    };
    
    const response = await apiPost<ServiceOfferingResponse>(`${API_BASE_URL}/service-offerings`, requestData);
    
    console.log('✅ Service créé avec succès:', response.id);
    
    return response;
  } catch (error) {
    console.error('❌ Erreur lors de la création du service:', error);
    throw error;
  }
}

/**
 * 📝 FONCTION 3 : Mettre à jour un service
 * 
 * @param serviceId - ID du service
 * @param serviceData - Nouvelles données du service
 * @returns Service mis à jour
 */
export async function updateService(serviceId: string, serviceData: Partial<ServiceOfferingRequest>): Promise<ServiceOfferingResponse> {
  try {
    console.log('📝 Mise à jour du service:', serviceId);
    
    const response = await apiPatch<ServiceOfferingResponse>(`${API_BASE_URL}/service-offerings/${serviceId}`, serviceData);
    
    console.log('✅ Service mis à jour avec succès');
    
    return response;
  } catch (error) {
    console.error('❌ Erreur lors de la mise à jour du service:', error);
    throw error;
  }
}

/**
 * 🗑️ FONCTION 4 : Supprimer un service
 * 
 * @param serviceId - ID du service à supprimer
 */
export async function deleteService(serviceId: string): Promise<void> {
  try {
    console.log('🗑️ Suppression du service:', serviceId);
    
    await apiDelete<void>(`${API_BASE_URL}/service-offerings/${serviceId}`);
    
    console.log('✅ Service supprimé avec succès');
  } catch (error) {
    console.error('❌ Erreur lors de la suppression du service:', error);
    throw error;
  }
}

/**
 * 🔍 FONCTION 5 : Récupérer les détails d'un service
 * 
 * @param serviceId - ID du service
 * @returns Détails du service
 */
export async function getServiceDetails(serviceId: string): Promise<ServiceOfferingResponse> {
  try {
    console.log('🔍 Récupération des détails du service:', serviceId);
    
    const response = await apiGet<ServiceOfferingResponse>(`${API_BASE_URL}/service-offerings/${serviceId}`);
    
    console.log('✅ Détails du service récupérés');
    
    return response;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des détails:', error);
    throw error;
  }
}
