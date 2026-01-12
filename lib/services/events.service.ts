/**
 * Service des Événements
 * 
 * Gère toutes les opérations liées aux événements du syndicat
 * API: https://ugate.pynfi.com
 */

import { EventItem, CreateEventRequest, EventParticipant, CreateEventResponse } from '@/lib/types/events';
import { apiGet, apiPost, apiDelete } from './api.client';
import { getAccessToken } from './auth.service';

// URL de base de l'API
const EVENTS_API_URL = 'https://ugate.pynfi.com';

/**
 * 📋 FONCTION 1 : Récupérer les événements d'une branche
 * 
 * @param branchId - ID de la branche
 * @returns Liste des événements de la branche
 */
export async function getEventsByBranch(branchId: string): Promise<EventItem[]> {
  try {
    console.log('📋 Récupération des événements pour la branche:', branchId);
    
    const events = await apiGet<EventItem[]>(`${EVENTS_API_URL}/events/branch/${branchId}`);
    
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
    
    // Préparer les données pour multipart/form-data
    const formData = new FormData();
    
    // Créer l'objet request selon le format attendu par l'API
    // Ajouter :00 aux heures si elles n'ont pas de secondes
    const formatTime = (time: string) => {
      return time.length === 5 ? `${time}:00` : time;
    };
    
    const requestData = {
      creatorId: eventData.creatorId,
      branchId: eventData.branchId,
      title: eventData.title.trim(),
      description: eventData.description.trim(),
      eventDate: eventData.eventDate,
      location: eventData.location.trim(),
      startTime: formatTime(eventData.startTime),
      endTime: formatTime(eventData.endTime)
    };
    
    console.log('📦 Request data à envoyer:', JSON.stringify(requestData, null, 2));
    console.table(requestData);
    
    // Essayer d'envoyer en JSON pur d'abord pour tester
    console.log('🧪 Test: Envoi en JSON pur au lieu de multipart/form-data');
    
    const response = await fetch(`${EVENTS_API_URL}/events`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ HTTP ${response.status}:`, errorText);
      console.error('📦 Données envoyées:', requestData);
      throw new Error(`Échec de la création de l'événement (${response.status}): ${errorText}`);
    }
    
    const result: CreateEventResponse = await response.json();
    
    console.log('✅ Événement créé avec succès:', result.id);
    
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
    
    const participants = await apiGet<EventParticipant[]>(`${EVENTS_API_URL}/events/${eventId}/participants`);
    
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
    
    await apiPost<void>(`${EVENTS_API_URL}/events/${eventId}/join`);
    
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
    
    await apiDelete<void>(`${EVENTS_API_URL}/events/${eventId}/leave`);
    
    console.log('✅ Désinscription réussie');
  } catch (error) {
    console.error('❌ Erreur lors de la désinscription:', error);
    throw error;
  }
}
