/**
 * Types pour l'Authentification
 * 
 * Ce fichier définit tous les types TypeScript utilisés pour l'authentification
 * Basé sur l'API: https://auth-service.pynfi.com/swagger-ui/index.html
 */

/**
 * Réponse de l'API lors de la connexion
 */
export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: UserInfo;
}

/**
 * Informations sur l'utilisateur connecté
 */
export interface UserInfo {
  id: string;
  username: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  service: string;
  roles: string[];
  permissions: string[];
  syndicatId?: string; // ID du syndicat auquel l'utilisateur appartient
}

/**
 * Identifiants de connexion
 */
export interface LoginCredentials {
  identifier: string;
  password: string;
}

/**
 * Données d'inscription
 */
export interface RegisterCredentials {
  username: string;
  password: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  service: string;
  roles: string[];
}

/**
 * Réponse lors du rafraîchissement du token
 */
export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  user: UserInfo;
}

/**
 * Structure d'un token JWT décodé
 */
export interface DecodedToken {
  sub: string;
  email: string;
  roles: string[];
  exp: number;
  iat: number;
}
