/**
 * Types pour les Événements
 * 
 * Basé sur l'API: https://ugate.pynfi.com/webjars/swagger-ui/index.html
 */

/**
 * Branche du syndicat
 */
export interface Branch {
  id: string;
  name: string;
  description?: string;
  location?: string;
  director: {
    name: string;
    email?: string;
    phone?: string;
  };
}

/**
 * Événement du syndicat
 */
export interface EventItem {
  id: string;
  creatorId: string;
  branchId: string;
  title: string;
  description: string;
  location: string;
  date: string; // Format: "2025-01-12"
  startTime: string; // Format: "11:00"
  endTime: string; // Format: "12:00"
  createdAt: string; // Format ISO: "2025-01-12T12:59:07.0092"
  updatedAt: string; // Format ISO: "2025-01-12T12:59:07.0092"
  participantCount: number;
  status?: 'active' | 'draft';
  images?: string[];
  videos?: string[];
  files?: string[];
}

/**
 * Données pour créer un événement
 */
export interface CreateEventRequest {
  creatorId: string;
  branchId: string;
  title: string;
  description: string;
  eventDate: string; // Format: "2026-01-15"
  location: string;
  startTime: string; // Format: "12:00"
  endTime: string; // Format: "15:00"
  images?: string[];
  videos?: string[];
  files?: string[];
}

/**
 * Participant à un événement
 */
export interface EventParticipant {
  userId: string;
  fullName: string;
}

/**
 * Réponse de création d'événement
 */
export interface CreateEventResponse {
  id: string;
  message: string;
}

/**
 * Type LocalTime utilisé par l'API pour les heures
 */
export interface LocalTime {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

/**
 * Réponse de l'API pour un événement
 */
export interface EventResponseDTO {
  id: string;
  creatorId: string;
  branchId: string;
  title: string;
  description: string;
  location: string;
  date: string;
  startTime: LocalTime;
  endTime: LocalTime;
  createdAt: string;
  updatedAt: string;
  participantCount: number;
  imageUrls?: string[];
}
