import { apiGet, apiPost, apiDelete } from './api.client';
import { getAccessToken } from './auth.service';

const API_URL = 'https://ugate.pynfi.com';

// --- Types basés sur la spécification API (Swagger) ---

export interface LocalTime {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export interface EventItem {
  id: string;
  creatorId: string;
  branchId: string;
  title: string;
  description: string;
  location: string;
  date: string;         // Format "YYYY-MM-DD"
  startTime: LocalTime;
  endTime: LocalTime;
  createdAt: string;
  updatedAt: string;
  participantCount: number;
  imageUrls: string[]; // Le backend renvoie TOUS les médias (images et vidéos) dans ce tableau
  videos?: string[]; // On peut garder ce type optionnel si le backend l'ajoute plus tard
}

export interface CreateEventDTO {
  creatorId: string;
  branchId: string;
  title: string;
  description: string;
  eventDate: string; // "YYYY-MM-DD"
  location: string;
  startTime: string; // "HH:mm"
  endTime: string;   // "HH:mm"
}

export interface EventParticipant {
  userId: string;
  fullName: string;
}

// --- Helpers pour le formatage ---

export function formatLocalTime(time: LocalTime | null | undefined): string {
  if (!time) return '';
  const h = time.hour?.toString().padStart(2, '0') || '00';
  const m = time.minute?.toString().padStart(2, '0') || '00';
  return `${h}:${m}`;
}

export function formatDateFr(dateStr: string): string {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

// --- Fonctions API ---

export async function getEventsByBranch(branchId: string): Promise<EventItem[]> {
  return apiGet<EventItem[]>(`${API_URL}/events/branch/${branchId}`);
}

/**
 * Créer un événement avec image OU vidéo
 * CORRECTION : Tous les fichiers sont envoyés dans le champ 'images'
 */
export async function createEvent(
    data: CreateEventDTO,
    imageFile?: File,
    videoFile?: File
): Promise<void> {
  const formData = new FormData();

  formData.append('creatorId', data.creatorId);
  formData.append('branchId', data.branchId);
  formData.append('title', data.title);
  formData.append('description', data.description);
  formData.append('eventDate', data.eventDate);
  formData.append('location', data.location);
  formData.append('startTime', data.startTime);
  formData.append('endTime', data.endTime);

  // LOGIQUE CORRIGÉE : On attache le média (image OU vidéo) au champ 'images'
  if (imageFile) {
    formData.append('images', imageFile);
  } else if (videoFile) {
    // On envoie bien la vidéo dans le champ 'images' comme demandé
    formData.append('images', videoFile);
  }

  const token = getAccessToken();

  const response = await fetch(`${API_URL}/events`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` },
    body: formData
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erreur lors de la création: ${errorText}`);
  }
}

export async function getEventParticipants(eventId: string): Promise<EventParticipant[]> {
  return apiGet<EventParticipant[]>(`${API_URL}/events/${eventId}/participants`);
}

export async function joinEvent(eventId: string): Promise<void> {
  return apiPost<void>(`${API_URL}/events/${eventId}/join`);
}

export async function leaveEvent(eventId: string): Promise<void> {
  return apiDelete<void>(`${API_URL}/events/${eventId}/leave`);
}

export async function deleteEvent(eventId: string): Promise<void> {
  console.warn("La suppression d'événement n'est pas disponible dans l'API actuelle.");
  return Promise.resolve();
}