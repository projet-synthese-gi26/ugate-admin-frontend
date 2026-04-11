import { apiGet, apiPost, apiDelete } from './api.client';

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
  date: string;
  startTime: LocalTime;
  endTime: LocalTime;
  createdAt: string;
  updatedAt: string;
  participantCount: number;
  imageUrls: string[];
  videos?: string[];
}

export interface CreateEventDTO {
  creatorId: string;
  branchId: string;
  title: string;
  description: string;
  eventDate: string;
  location: string;
  startTime: string;
  endTime: string;
}

export interface EventParticipant {
  userId: string;
  fullName: string;
}

export function formatLocalTime(time: LocalTime | null | undefined): string {
  if (!time) return '';
  const h = time.hour?.toString().padStart(2, '0') || '00';
  const m = time.minute?.toString().padStart(2, '0') || '00';
  return `${h}:${m}`;
}

export function formatDateFr(dateStr: string): string {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

export async function getEventsByBranch(branchId: string): Promise<EventItem[]> {
  return apiGet(`/events/branch/${branchId}`);
}

export async function createEvent(data: CreateEventDTO, imageFile?: File, videoFile?: File): Promise<void> {
  const formData = new FormData();
  formData.append('creatorId', data.creatorId);
  formData.append('branchId', data.branchId);
  formData.append('title', data.title);
  formData.append('description', data.description);
  formData.append('eventDate', data.eventDate);
  formData.append('location', data.location);
  formData.append('startTime', data.startTime);
  formData.append('endTime', data.endTime);

  // ton backend attend tout dans images
  if (imageFile) formData.append('images', imageFile);
  if (videoFile) formData.append('images', videoFile);

  await apiPost('/events', formData);
}

export async function getEventParticipants(eventId: string): Promise<EventParticipant[]> {
  return apiGet(`/events/${eventId}/participants`);
}

export async function joinEvent(eventId: string): Promise<void> {
  return apiPost(`/events/${eventId}/join`);
}

export async function leaveEvent(eventId: string): Promise<void> {
  return apiDelete(`/events/${eventId}/leave`);
}