# 🔐 Guide d'Authentification - UGate Admin Frontend

## 📚 Intégration Complète de l'Authentification API

Ce guide explique comment l'authentification a été intégrée dans **ugate-admin-frontend** avec l'API d'authentification.

**API Documentation**: https://auth-service.pynfi.com/swagger-ui/index.html

---

## 🏗️ Architecture d'Authentification

```
┌─────────────────────────────────────────────────────────────┐
│                 UGATE-ADMIN-FRONTEND (Next.js)               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐         ┌──────────────┐                  │
│  │   Login.tsx  │────────▶│ AuthContext  │                  │
│  │  (Interface) │         │   (État)     │                  │
│  └──────────────┘         └──────┬───────┘                  │
│                                   │                          │
│                                   ▼                          │
│                          ┌────────────────┐                  │
│                          │ auth.service.ts│                  │
│                          │  (Logique)     │                  │
│                          └────────┬───────┘                  │
│                                   │                          │
│                                   ▼                          │
│                          ┌────────────────┐                  │
│                          │  api.client.ts │                  │
│                          │ (Intercepteur) │                  │
│                          └────────┬───────┘                  │
└──────────────────────────────────┼───────────────────────────┘
                                   │
                                   │ HTTP + JWT Token
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────┐
│              API BACKEND (auth-service.pynfi.com)            │
├─────────────────────────────────────────────────────────────┤
│  POST /api/v1/auth/login     → Connexion                    │
│  POST /api/v1/auth/refresh   → Rafraîchir token             │
│  POST /api/v1/auth/logout    → Déconnexion                  │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 Fichiers Créés

### **1. Types d'Authentification**
📄 `lib/types/auth.ts`

Définit les interfaces TypeScript pour :
- `LoginResponse` - Réponse de l'API lors du login (accessToken, refreshToken, user)
- `UserInfo` - Informations utilisateur (id, username, email, phone, firstName, lastName, service, roles[], permissions[])
- `LoginCredentials` - Identifiant + mot de passe
- `RefreshTokenResponse` - Réponse du refresh token
- `DecodedToken` - Structure du JWT décodé

### **2. Service d'Authentification**
📄 `lib/services/auth.service.ts`

**11 fonctions principales** :
1. `login()` - Connexion à l'API (POST /api/auth/login)
2. `saveAuthData()` - Sauvegarder tokens et user info (localStorage)
3. `getAccessToken()` - Récupérer le token d'accès
4. `getRefreshToken()` - Récupérer le refresh token
5. `getUserInfo()` - Récupérer les infos utilisateur
6. `isTokenExpired()` - Vérifier l'expiration (15 minutes par défaut)
7. `refreshAccessToken()` - Rafraîchir le token (POST /api/auth/refresh)
8. `logout()` - Déconnexion
9. `isAuthenticated()` - Vérifier si connecté
10. `decodeToken()` - Décoder un JWT
11. `hasRole()` - Vérifier le rôle (supporte les tableaux de rôles)

### **3. Client API avec Intercepteur**
📄 `lib/services/api.client.ts`

**4 fonctions HTTP** avec token automatique :
- `apiGet()` - Requêtes GET
- `apiPost()` - Requêtes POST
- `apiPut()` - Requêtes PUT
- `apiDelete()` - Requêtes DELETE

**Fonctionnalités automatiques** :
- ✅ Ajout du token à chaque requête
- ✅ Vérification de l'expiration avant chaque requête
- ✅ Refresh automatique si token expiré
- ✅ Gestion des erreurs 401
- ✅ Déconnexion automatique si refresh échoue

### **4. Contexte React**
📄 `lib/contexts/AuthContext.tsx`

**État global partagé** :
- `isAuthenticated` - État de connexion
- `isLoading` - Chargement en cours
- `user` - Informations utilisateur
- `error` - Erreur éventuelle
- `login()` - Fonction de connexion
- `logout()` - Fonction de déconnexion
- `checkAuthentication()` - Vérifier l'état

**Hook personnalisé** : `useAuth()`

### **5. Fichiers Modifiés**

📄 `app/layout.tsx`
- Ajout du `<AuthProvider>` pour envelopper l'application

📄 `app/page.tsx`
- Utilisation de `useAuth()` au lieu de l'état local
- Affichage conditionnel selon l'authentification
- Gestion du loader pendant la vérification

📄 `components/Login.tsx`
- Utilisation de `useAuth()` pour la connexion
- Appel de l'API réelle au lieu de la simulation
- Gestion des erreurs d'authentification

---

## 🔄 Flux d'Authentification Complet

### **Scénario 1 : Première Connexion**

```
1. 👤 Utilisateur ouvre l'application
   └─ AuthContext vérifie localStorage
   └─ Aucun token trouvé
   └─ isAuthenticated = false

2. 🔐 app/page.tsx affiche <Login />

3. 📝 Utilisateur entre identifier + password
   └─ Validation locale (format email, longueur mot de passe)

4. 🌐 Login.tsx appelle useAuth().login()
   └─ AuthContext appelle auth.service.login()
   └─ auth.service fait POST /api/auth/login
   
5. ✅ API répond avec :
   {
     accessToken: "eyJhbGc...",
     refreshToken: "eyJhbGc...",
     user: {
       id: "123",
       username: "admin",
       email: "admin@ugate.com",
       phone: "+237...",
       firstName: "Admin",
       lastName: "User",
       service: "LETS_GO",
       roles: ["ADMIN"],
       permissions: ["READ", "WRITE"]
     }
   }

6. 💾 auth.service.saveAuthData() stocke :
   - localStorage.setItem('ugate_access_token', token)
   - localStorage.setItem('ugate_refresh_token', refreshToken)
   - localStorage.setItem('ugate_user_info', JSON.stringify(user))
   - localStorage.setItem('ugate_token_expiry', Date.now() + 900000) // 15 minutes

7. 🎉 AuthContext met à jour :
   - isAuthenticated = true
   - user = { ... }

8. 📱 app/page.tsx détecte isAuthenticated = true
   └─ Affiche Layout avec Dashboard
```

### **Scénario 2 : Requête API avec Token**

```
1. 📊 Un composant veut charger des données
   └─ Appelle apiGet('/api/syndicats')

2. 🔍 api.client vérifie :
   └─ Token expiré ? Non
   └─ Récupère token : getAccessToken()

3. 🌐 Fait la requête :
   GET /api/syndicats
   Headers: {
     'Authorization': 'Bearer eyJhbGc...',
     'Content-Type': 'application/json'
   }

4. ✅ API répond avec les données
   └─ Composant affiche les données
```

### **Scénario 3 : Token Expiré - Refresh Automatique**

```
1. ⏰ 15 minutes passées, token expiré

2. 📊 Un composant fait une requête
   └─ apiGet('/api/members')

3. 🔍 api.client détecte :
   └─ isTokenExpired() = true
   └─ "Token expiré, je dois le rafraîchir !"

4. 🔄 api.client appelle refreshAccessToken()
   └─ POST /api/auth/refresh
   └─ Body: { refreshToken: "eyJhbGc..." }

5. ✅ API répond avec nouveau token :
   {
     accessToken: "eyJNEW...",
     refreshToken: "eyJNEW...",
     user: { ... }
   }

6. 💾 Nouveaux tokens sauvegardés

7. 🔁 api.client refait la requête originale
   └─ GET /api/members
   └─ Avec le NOUVEAU token

8. ✅ Requête réussie !
```

---

## 🚀 Comment Tester

### **1. Démarrer l'application**

```bash
cd ugate-admin-frontend
npm install  # Si pas encore fait
npm run dev
```

### **2. Ouvrir dans le navigateur**

```
http://localhost:3000
```

### **3. Tester la connexion**

1. **Ouvrir la console du navigateur** (F12)
2. **Entrer vos identifiants** :
   - Identifier : Votre email ou username
   - Password : Votre mot de passe (minimum 6 caractères)

3. **Observer les logs dans la console** :
```
🔍 Vérification de l'authentification...
❌ Utilisateur non authentifié
🔄 Tentative de connexion pour: admin@ugate.com
🌐 Appel API vers: https://auth-service.pynfi.com/api/auth/login
✅ Connexion réussie !
💾 Sauvegarde des données d'authentification...
✅ Données sauvegardées avec succès
⏰ Token expire dans: 15 minutes
```

4. **Vérifier localStorage** (DevTools → Application → Local Storage) :
   - `ugate_access_token` ✅
   - `ugate_refresh_token` ✅
   - `ugate_user_info` ✅
   - `ugate_token_expiry` ✅

---

## 💡 Utilisation dans les Composants

### **Accéder à l'état d'authentification**

```typescript
import { useAuth } from '@/lib/contexts/AuthContext';

function MonComposant() {
  const { isAuthenticated, user, logout } = useAuth();
  
  if (!isAuthenticated) {
    return <div>Non connecté</div>;
  }
  
  return (
    <div>
      <p>Bonjour {user?.firstName || user?.email}</p>
      <button onClick={logout}>Se déconnecter</button>
    </div>
  );
}
```

### **Faire des requêtes API authentifiées**

```typescript
import { apiGet, apiPost, apiPut, apiDelete } from '@/lib/services/api.client';

// GET
const syndicats = await apiGet('/api/syndicats');

// POST
const newEvent = await apiPost('/api/events', {
  title: 'Mon événement',
  date: '2024-01-15'
});

// PUT
const updated = await apiPut('/api/events/123', {
  title: 'Titre modifié'
});

// DELETE
await apiDelete('/api/events/123');
```

**Le token est ajouté automatiquement à toutes ces requêtes !** 🎉

---

## 🔐 Sécurité

### **Stockage des Tokens**

Les tokens sont stockés dans `localStorage` :

**Avantages** :
- ✅ Simple à utiliser
- ✅ Persiste après fermeture du navigateur
- ✅ Accessible facilement

**Inconvénients** :
- ⚠️ Vulnérable aux attaques XSS
- ⚠️ Accessible par tout code JavaScript

**Recommandations pour la production** :
1. Utiliser des **httpOnly cookies** (plus sécurisé)
2. Implémenter **HTTPS** obligatoire
3. Ajouter **CSRF protection**
4. Configurer **Content Security Policy (CSP)**

### **Gestion des Rôles**

```typescript
import { hasRole } from '@/lib/services/auth.service';

// Vérifier un rôle spécifique (supporte les tableaux)
if (hasRole('ADMIN')) {
  // Afficher les options admin
}

// Vérifier plusieurs rôles
if (hasRole('MODERATOR') || hasRole('ADMIN')) {
  // Afficher les options de modération
}
```

---

## 🐛 Débogage

### **Problème : "CORS Error"**

```
❌ Access to fetch at 'https://auth-service.pynfi.com' from origin 
   'http://localhost:3000' has been blocked by CORS policy
```

**Solution** : Le backend doit autoriser votre domaine
```javascript
// Backend doit avoir :
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Headers: Authorization, Content-Type
```

### **Problème : "Token Invalid"**

```
❌ Erreur 401: Token invalide
```

**Vérification** :
```javascript
// Console :
const token = localStorage.getItem('ugate_access_token');
console.log(token);

// Décoder sur jwt.io pour voir le contenu
```

### **Problème : Boucle de Refresh**

Si le refresh token est aussi expiré, l'utilisateur sera automatiquement déconnecté et redirigé vers la page de login.

---

## 📊 Logs à Surveiller

```javascript
// Connexion
✅ Connexion réussie !
❌ Erreur lors de la connexion

// Token
⏰ Token expire dans: X secondes
⚠️ Token expiré ou sur le point d'expirer
✅ Token rafraîchi avec succès

// Requêtes
🌐 Appel API vers: URL
🔑 Token ajouté à la requête
✅ Requête réussie

// Déconnexion
🚪 Déconnexion en cours...
✅ Déconnexion réussie
```

---

## 🎯 Prochaines Étapes

### **1. Adapter l'URL de l'API**

Si votre API est à une URL différente, modifiez dans `lib/services/auth.service.ts` :

```typescript
const AUTH_API_URL = 'https://VOTRE-API.com/api/v1/auth';
```

### **2. Utiliser apiClient dans vos composants**

Remplacez tous les `fetch()` par `apiGet()`, `apiPost()`, etc. pour bénéficier de l'ajout automatique du token.

### **3. Tester avec l'API Réelle**

Vérifiez que l'API d'authentification est accessible et fonctionne correctement.

---

## ✅ Checklist d'Intégration

- [x] Types TypeScript créés (`lib/types/auth.ts`)
- [x] Service d'authentification créé (`lib/services/auth.service.ts`)
- [x] Client API avec intercepteur créé (`lib/services/api.client.ts`)
- [x] Contexte React créé (`lib/contexts/AuthContext.tsx`)
- [x] Layout mis à jour avec AuthProvider (`app/layout.tsx`)
- [x] Page principale mise à jour (`app/page.tsx`)
- [x] Composant Login mis à jour (`components/Login.tsx`)
- [ ] Tests avec l'API réelle
- [ ] Adaptation des autres composants pour utiliser apiClient
- [ ] Configuration des variables d'environnement
- [ ] Déploiement en production

---

## 🎓 Résumé

Vous avez maintenant :

✅ **Un système d'authentification complet** intégré avec l'API réelle
✅ **Une gestion automatique des tokens** (refresh, expiration)
✅ **Un intercepteur HTTP** qui ajoute le token à toutes les requêtes
✅ **Un contexte React** pour l'état global d'authentification
✅ **Une architecture modulaire** et maintenable

**L'application est prête à être testée avec l'API d'authentification !** 🚀

---

**Questions ou problèmes ?** Consultez les logs dans la console du navigateur pour déboguer.
