/**
 * Événements fictifs pour le développement et les tests
 * Ces données permettent de tester l'interface avant la création de vrais événements via l'API
 */

import { EventItem } from '@/lib/types/events';

/**
 * Événements fictifs par branche
 */
export const MOCK_EVENTS: Record<string, EventItem[]> = {
  // Agence de Yaoundé
  '11c24c4-bc4c-9876-5432-10fcdcb40b7e': [
    {
      id: 'evt-yaounde-1',
      creatorId: 'user-1',
      branchId: '11c24c4-bc4c-9876-5432-10fcdcb40b7e',
      title: 'Assemblée Générale Annuelle 2026',
      description: 'Réunion annuelle de tous les membres pour discuter des orientations stratégiques et élire le nouveau bureau.',
      location: 'Hôtel Hilton Yaoundé',
      date: '2026-02-15',
      startTime: '09:00',
      endTime: '17:00',
      createdAt: '2026-01-10T10:00:00.000Z',
      updatedAt: '2026-01-10T10:00:00.000Z',
      participantCount: 156,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80']
    },
    {
      id: 'evt-yaounde-2',
      creatorId: 'user-1',
      branchId: '11c24c4-bc4c-9876-5432-10fcdcb40b7e',
      title: 'Formation sur les Droits des Travailleurs',
      description: 'Session de formation intensive sur les droits fondamentaux des travailleurs et les procédures de réclamation.',
      location: 'Siège UGATE Yaoundé',
      date: '2026-01-25',
      startTime: '14:00',
      endTime: '18:00',
      createdAt: '2026-01-08T14:30:00.000Z',
      updatedAt: '2026-01-08T14:30:00.000Z',
      participantCount: 45,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80']
    },
    {
      id: 'evt-yaounde-3',
      creatorId: 'user-1',
      branchId: '11c24c4-bc4c-9876-5432-10fcdcb40b7e',
      title: 'Journée Portes Ouvertes',
      description: 'Découvrez les activités du syndicat et rencontrez nos représentants. Inscription gratuite.',
      location: 'Place de la Réunification',
      date: '2026-03-10',
      startTime: '10:00',
      endTime: '16:00',
      createdAt: '2026-01-05T09:00:00.000Z',
      updatedAt: '2026-01-05T09:00:00.000Z',
      participantCount: 89,
      status: 'draft',
      images: ['https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80']
    }
  ],
  
  // Agence de Douala
  '22d35e5-cd5d-8765-4321-20ecdcb50c8f': [
    {
      id: 'evt-douala-1',
      creatorId: 'user-2',
      branchId: '22d35e5-cd5d-8765-4321-20ecdcb50c8f',
      title: 'Conférence sur la Sécurité au Travail',
      description: 'Conférence animée par des experts en santé et sécurité au travail. Thèmes: prévention des accidents, équipements de protection.',
      location: 'Centre de Conférences Bonanjo',
      date: '2026-02-20',
      startTime: '08:30',
      endTime: '13:00',
      createdAt: '2026-01-12T11:00:00.000Z',
      updatedAt: '2026-01-12T11:00:00.000Z',
      participantCount: 120,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80']
    },
    {
      id: 'evt-douala-2',
      creatorId: 'user-2',
      branchId: '22d35e5-cd5d-8765-4321-20ecdcb50c8f',
      title: 'Marche de Solidarité',
      description: 'Marche pacifique pour soutenir les droits des travailleurs et sensibiliser le public.',
      location: 'Boulevard de la Liberté',
      date: '2026-01-30',
      startTime: '07:00',
      endTime: '12:00',
      createdAt: '2026-01-09T08:00:00.000Z',
      updatedAt: '2026-01-09T08:00:00.000Z',
      participantCount: 234,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80']
    }
  ],
  
  // Agence de Bafoussam
  '33e46f6-de6e-7654-3210-30fcdcb60d9g': [
    {
      id: 'evt-bafoussam-1',
      creatorId: 'user-3',
      branchId: '33e46f6-de6e-7654-3210-30fcdcb60d9g',
      title: 'Atelier de Négociation Collective',
      description: 'Formation pratique sur les techniques de négociation collective et la représentation syndicale.',
      location: 'Salle Municipale de Bafoussam',
      date: '2026-02-05',
      startTime: '09:00',
      endTime: '15:00',
      createdAt: '2026-01-11T10:00:00.000Z',
      updatedAt: '2026-01-11T10:00:00.000Z',
      participantCount: 67,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80']
    }
  ],
  
  // Agence de Garoua
  '44f57g7-ef7f-6543-2109-40gcdcb70e0h': [
    {
      id: 'evt-garoua-1',
      creatorId: 'user-4',
      branchId: '44f57g7-ef7f-6543-2109-40gcdcb70e0h',
      title: 'Séminaire sur la Protection Sociale',
      description: 'Discussion sur les systèmes de protection sociale et les avantages pour les travailleurs.',
      location: 'Hôtel Le Ribadou',
      date: '2026-02-28',
      startTime: '10:00',
      endTime: '16:00',
      createdAt: '2026-01-10T15:00:00.000Z',
      updatedAt: '2026-01-10T15:00:00.000Z',
      participantCount: 52,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80']
    }
  ],
  
  // Agence de Limbé
  '55g68h8-fg8g-5432-1098-50hcdcb80f1i': [
    {
      id: 'evt-limbe-1',
      creatorId: 'user-5',
      branchId: '55g68h8-fg8g-5432-1098-50hcdcb80f1i',
      title: 'Journée de Sensibilisation Environnementale',
      description: 'Sensibilisation sur les conditions de travail respectueuses de l\'environnement et le développement durable.',
      location: 'Plage de Limbé',
      date: '2026-03-15',
      startTime: '08:00',
      endTime: '14:00',
      createdAt: '2026-01-12T09:00:00.000Z',
      updatedAt: '2026-01-12T09:00:00.000Z',
      participantCount: 78,
      status: 'draft',
      images: ['https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80']
    }
  ],
  
  // Agence de Maroua
  '66h79i9-gh9h-4321-0987-60icdcb90g2j': [
    {
      id: 'evt-maroua-1',
      creatorId: 'user-6',
      branchId: '66h79i9-gh9h-4321-0987-60icdcb90g2j',
      title: 'Forum sur l\'Emploi des Jeunes',
      description: 'Rencontre entre jeunes travailleurs et employeurs pour discuter des opportunités d\'emploi et de formation.',
      location: 'Centre Culturel de Maroua',
      date: '2026-02-12',
      startTime: '09:00',
      endTime: '17:00',
      createdAt: '2026-01-08T12:00:00.000Z',
      updatedAt: '2026-01-08T12:00:00.000Z',
      participantCount: 95,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80']
    }
  ]
};

/**
 * Récupérer les événements fictifs d'une branche
 */
export function getMockEventsByBranch(branchId: string): EventItem[] {
  return MOCK_EVENTS[branchId] || [];
}
