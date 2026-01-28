/**
 * Service des Événements
 * 
 * Gère toutes les opérations liées aux événements du syndicat
 * API: https://ugate.pynfi.com
 */

import { EventItem, CreateEventRequest, EventParticipant, CreateEventResponse, EventResponseDTO } from '@/lib/types/events';
import { apiGet, apiPost, apiDelete } from './api.client';
import { getAccessToken } from './auth.service';

// URL de base de l'API
const API_BASE_URL = 'https://ugate.pynfi.com';

/**
 * 📋 FONCTION 1 : Récupérer les événements d'une branche
 * 
 * @param branchId - ID de la branche
 * @returns Liste des événements de la branche
 */
export async function getEventsByBranch(branchId: string): Promise<EventItem[]> {
  try {
    console.log('📋 Récupération des événements pour la branche:', branchId);
    
    // L'API retourne un objet EventResponseDTO qui contient les événements
    const response = await apiGet<EventResponseDTO[]>(`${API_BASE_URL}/events/branch/${branchId}`);
    
    // Transformer la réponse en format attendu par le frontend
    const events: EventItem[] = response.map((event: EventResponseDTO) => ({
      id: event.id,
      creatorId: event.creatorId,
      branchId: event.branchId,
      title: event.title,
      description: event.description,
      location: event.location,
      date: event.date,
      startTime: `${String(event.startTime?.hour || 0).padStart(2, '0')}:${String(event.startTime?.minute || 0).padStart(2, '0')}`,
      endTime: `${String(event.endTime?.hour || 0).padStart(2, '0')}:${String(event.endTime?.minute || 0).padStart(2, '0')}`,
      createdAt: event.createdAt,
      updatedAt: event.updatedAt,
      participantCount: event.participantCount || 0,
      status: 'active' as const,
      images: event.imageUrls || []
    }));
    
    console.log(`✅ ${events.length} événement(s) récupéré(s)`);
    
    return events;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des événements:', error);
    throw error;
  }
}

/**
 * ➕ FONCTION 2 : Créer un nouvel événement
 * 
 * @param eventData - Données de l'événement à créer
 * @returns Réponse de création
 */
export async function createEvent(eventData: CreateEventRequest): Promise<CreateEventResponse> {
  try {
    console.log('➕ Création d\'un nouvel événement:', eventData.title);
    console.log('📋 Données reçues:', JSON.stringify(eventData, null, 2));
    
    // Validation des champs obligatoires
    if (!eventData.creatorId) {
      throw new Error('creatorId est obligatoire');
    }
    if (!eventData.branchId) {
      throw new Error('branchId est obligatoire');
    }
    if (!eventData.title || eventData.title.trim() === '') {
      throw new Error('Le titre est obligatoire');
    }
    if (!eventData.description || eventData.description.trim() === '') {
      throw new Error('La description est obligatoire');
    }
    if (!eventData.eventDate) {
      throw new Error('La date est obligatoire');
    }
    if (!eventData.location || eventData.location.trim() === '') {
      throw new Error('Le lieu est obligatoire');
    }
    if (!eventData.startTime) {
      throw new Error('L\'heure de début est obligatoire');
    }
    if (!eventData.endTime) {
      throw new Error('L\'heure de fin est obligatoire');
    }
    
    // Créer FormData avec des champs séparés (comme attendu par l'API)
    const formData = new FormData();
    formData.append('creatorId', eventData.creatorId);
    formData.append('branchId', eventData.branchId);
    formData.append('title', eventData.title.trim());
    formData.append('description', eventData.description.trim());
    formData.append('eventDate', eventData.eventDate);
    formData.append('location', eventData.location.trim());
    formData.append('startTime', eventData.startTime);
    formData.append('endTime', eventData.endTime);
    
    console.log('📦 Données à envoyer:');
    console.log('  - creatorId:', eventData.creatorId);
    console.log('  - branchId:', eventData.branchId);
    console.log('  - title:', eventData.title);
    console.log('  - description:', eventData.description);
    console.log('  - eventDate:', eventData.eventDate);
    console.log('  - location:', eventData.location);
    console.log('  - startTime:', eventData.startTime);
    console.log('  - endTime:', eventData.endTime);
    
    const response = await fetch(`${API_BASE_URL}/events`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getAccessToken()}`
        // Ne pas définir Content-Type - laisse le navigateur gérer multipart/form-data
      },
      body: formData
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ HTTP ${response.status}:`, errorText);
      console.error('📦 Données envoyées:', eventData);
      throw new Error(`Échec de la création de l'événement (${response.status}): ${errorText}`);
    }
    
    // Gérer les réponses vides ou non-JSON
    let result: CreateEventResponse;
    const contentType = response.headers.get('content-type');
    const contentLength = response.headers.get('content-length');
    
    // Si la réponse est vide ou n'est pas JSON
    if (contentLength === '0' || !contentType?.includes('application/json')) {
      console.log('⚠️ Réponse vide ou non-JSON de l\'API, création probablement réussie');
      // Créer une réponse par défaut
      result = {
        id: 'event-' + Date.now(), // ID temporaire
        message: 'Événement créé avec succès'
      };
    } else {
      // Tenter de parser le JSON
      const responseText = await response.text();
      if (responseText.trim()) {
        try {
          result = JSON.parse(responseText);
        } catch (err) {
          console.warn('⚠️ Impossible de parser la réponse JSON:', responseText);
          console.warn('Erreur de parsing:', err);
          // Créer une réponse par défaut si le parsing échoue
          result = {
            id: 'event-' + Date.now(),
            message: 'Événement créé (réponse non standard)'
          };
        }
      } else {
        // Réponse vide mais avec content-type JSON
        result = {
          id: 'event-' + Date.now(),
          message: 'Événement créé avec succès'
        };
      }
    }
    
    console.log('✅ Événement créé avec succès');
    
    return result;
  } catch (error) {
    console.error('❌ Erreur lors de la création de l\'événement:', error);
    throw error;
  }
}

/**
 * 👥 FONCTION 3 : Récupérer les participants d'un événement
 * 
 * @param eventId - ID de l'événement
 * @returns Liste des participants
 */
export async function getEventParticipants(eventId: string): Promise<EventParticipant[]> {
  try {
    console.log('👥 Récupération des participants pour l\'événement:', eventId);
    
    const participants = await apiGet<EventParticipant[]>(`${API_BASE_URL}/events/${eventId}/participants`);
    
    console.log(`✅ ${participants.length} participant(s) récupéré(s)`);
    
    return participants;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des participants:', error);
    throw error;
  }
}

/**
 * ✅ FONCTION 4 : Rejoindre un événement
 * 
 * @param eventId - ID de l'événement à rejoindre
 */
export async function joinEvent(eventId: string): Promise<void> {
  try {
    console.log('✅ Inscription à l\'événement:', eventId);
    
    await apiPost<void>(`${API_BASE_URL}/events/${eventId}/join`);
    
    console.log('✅ Inscription réussie');
  } catch (error) {
    console.error('❌ Erreur lors de l\'inscription:', error);
    throw error;
  }
}

/**
 * ❌ FONCTION 5 : Quitter un événement
 * 
 * @param eventId - ID de l'événement à quitter
 */
export async function leaveEvent(eventId: string): Promise<void> {
  try {
    console.log('❌ Désinscription de l\'événement:', eventId);
    
    await apiDelete<void>(`${API_BASE_URL}/events/${eventId}/leave`);
    
    console.log('✅ Désinscription réussie');
  } catch (error) {
    console.error('❌ Erreur lors de la désinscription:', error);
    throw error;
  }
}

/**
 * 🗑️ FONCTION 6 : Supprimer un événement
 * 
 * @param eventId - ID de l'événement à supprimer
 */
export async function deleteEvent(eventId: string): Promise<void> {
  try {
    console.log('🗑️ Suppression de l\'événement:', eventId);
    
    await apiDelete<void>(`${API_BASE_URL}/events/${eventId}`);
    
    console.log('✅ Événement supprimé avec succès');
  } catch (error) {
    console.error('❌ Erreur lors de la suppression:', error);
    throw error;
  }
}
