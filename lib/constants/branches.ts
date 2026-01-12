/**
 * Constantes pour les Branches du Syndicat
 * 
 * Liste des agences régionales du syndicat UGATE
 * Chaque branche est une succursale géographique du même syndicat national
 */

import { Branch } from '@/lib/types/events';

/**
 * Liste des branches (agences régionales) du syndicat
 * Toutes les branches défendent les mêmes intérêts et ont le même fonctionnement
 * Elles se différencient uniquement par leur localisation et leur responsable
 */
export const BRANCHES: Branch[] = [
  {
    id: '11c24c4-bc4c-9876-5432-10fcdcb40b7e',
    name: 'Agence de Yaoundé',
    description: 'Branche régionale du Centre',
    location: 'Yaoundé',
    director: {
      name: 'Dr. Marie Kouam',
      email: 'marie.kouam@ugate.cm',
      phone: '+237 6 70 00 00 01'
    }
  },
  {
    id: '22d35e5-cd5d-8765-4321-20ecdcb50c8f',
    name: 'Agence de Douala',
    description: 'Branche régionale du Littoral',
    location: 'Douala',
    director: {
      name: 'Prof. Jean Mbarga',
      email: 'jean.mbarga@ugate.cm',
      phone: '+237 6 70 00 00 02'
    }
  },
  {
    id: '33e46f6-de6e-7654-3210-30fcdcb60d9g',
    name: 'Agence de Bafoussam',
    description: 'Branche régionale de l\'Ouest',
    location: 'Bafoussam',
    director: {
      name: 'M. Paul Nkeng',
      email: 'paul.nkeng@ugate.cm',
      phone: '+237 6 70 00 00 03'
    }
  },
  {
    id: '44f57g7-ef7f-6543-2109-40gcdcb70e0h',
    name: 'Agence de Garoua',
    description: 'Branche régionale du Nord',
    location: 'Garoua',
    director: {
      name: 'Mme. Fatima Alim',
      email: 'fatima.alim@ugate.cm',
      phone: '+237 6 70 00 00 04'
    }
  },
  {
    id: '55g68h8-fg8g-5432-1098-50hcdcb80f1i',
    name: 'Agence de Limbé',
    description: 'Branche régionale du Sud-Ouest',
    location: 'Limbé',
    director: {
      name: 'M. Thomas Ekani',
      email: 'thomas.ekani@ugate.cm',
      phone: '+237 6 70 00 00 05'
    }
  },
  {
    id: '66h79i9-gh9h-4321-0987-60icdcb90g2j',
    name: 'Agence de Maroua',
    description: 'Branche régionale de l\'Extrême-Nord',
    location: 'Maroua',
    director: {
      name: 'M. Ibrahim Hamadou',
      email: 'ibrahim.hamadou@ugate.cm',
      phone: '+237 6 70 00 00 06'
    }
  }
];

/**
 * Récupérer une branche par son ID
 */
export function getBranchById(branchId: string): Branch | undefined {
  return BRANCHES.find(branch => branch.id === branchId);
}

/**
 * Récupérer le nom d'une branche par son ID
 */
export function getBranchName(branchId: string): string {
  const branch = getBranchById(branchId);
  return branch?.name || 'Branche inconnue';
}
