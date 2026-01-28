# 📝 Exemples de Données pour Créer un Produit

## Exemple 1 : Carte de Membre

**Titre :**
```
Carte de Membre Syndicat 2026
```

**Prix :**
```
15000
```

**SKU :**
```
CARD-MEMBER-2026
```

**Catégorie :**
```
Adhésion
```

**Description :**
```
Carte officielle de membre du syndicat valable pour l'année 2026. Donne accès à tous les services et avantages réservés aux membres actifs : formations gratuites, assistance juridique, réductions partenaires.
```

**Stock :**
```
500
```

**URL de l'image :**
```
https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=400&fit=crop
```

---

## Exemple 2 : T-Shirt Syndicat

**Titre :**
```
T-Shirt Logo Syndicat - Coton Bio
```

**Prix :**
```
8500
```

**SKU :**
```
TSHIRT-LOGO-BIO-M
```

**Catégorie :**
```
Vêtements
```

**Description :**
```
T-shirt en coton biologique 100% avec logo du syndicat sérigraphié. Disponible en plusieurs tailles. Matière respirante et confortable, idéal pour les événements et manifestations. Lavable en machine à 30°C.
```

**Stock :**
```
200
```

**URL de l'image :**
```
https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop
```

---

## Exemple 3 : Manuel du Travailleur

**Titre :**
```
Guide Pratique des Droits du Travailleur 2026
```

**Prix :**
```
5000
```

**SKU :**
```
BOOK-GUIDE-WORK-2026
```

**Catégorie :**
```
Publications
```

**Description :**
```
Manuel complet de 250 pages couvrant tous les aspects du droit du travail au Cameroun. Inclut les dernières modifications législatives, des exemples pratiques, des modèles de lettres et un lexique juridique. Édition mise à jour 2026.
```

**Stock :**
```
300
```

**URL de l'image :**
```
https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop
```

---

## Exemple 4 : Badge Identification

**Titre :**
```
Badge d'Identification Professionnel
```

**Prix :**
```
3500
```

**SKU :**
```
BADGE-ID-PRO-001
```

**Catégorie :**
```
Accessoires
```

**Description :**
```
Badge d'identification professionnel en PVC résistant avec porte-badge inclus. Personnalisable avec photo et informations du membre. Format standard 85x54mm. Livré avec cordon tour de cou aux couleurs du syndicat.
```

**Stock :**
```
1000
```

**URL de l'image :**
```
https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=400&fit=crop
```

---

## Exemple 5 : Formation en Ligne

**Titre :**
```
Formation Négociation Collective - Accès 6 Mois
```

**Prix :**
```
25000
```

**SKU :**
```
FORM-NEGO-ONLINE-6M
```

**Catégorie :**
```
Formations
```

**Description :**
```
Accès illimité pendant 6 mois à notre plateforme de formation en ligne sur la négociation collective. 12 modules vidéo, exercices pratiques, études de cas réels, certificat de fin de formation. Animé par des experts en droit social.
```

**Stock :**
```
100
```

**URL de l'image :**
```
https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=400&h=400&fit=crop
```

---

## Exemple 6 : Casquette Syndicat

**Titre :**
```
Casquette Brodée Logo Syndicat
```

**Prix :**
```
4500
```

**SKU :**
```
CAP-LOGO-EMBR-001
```

**Catégorie :**
```
Vêtements
```

**Description :**
```
Casquette ajustable avec logo du syndicat brodé. Visière rigide, bandeau anti-transpiration. Fermeture réglable à l'arrière. Couleurs officielles du syndicat. Parfaite pour les événements en extérieur.
```

**Stock :**
```
150
```

**URL de l'image :**
```
https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop
```

---

## 🎯 Test Rapide - Copier-Coller

Pour un test rapide, utilisez ces données :

**Titre :** `Test Produit API`

**Prix :** `9999`

**SKU :** `TEST-API-001`

**Catégorie :** `Test`

**Description :** `Produit de test pour vérifier l'intégration avec l'API`

**Stock :** `50`

**URL de l'image :** `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop`

---

## 📋 Règles de Validation

### Champs Obligatoires
- ✅ **Titre** : Minimum 3 caractères
- ✅ **Prix** : Nombre positif (en FCFA)
- ✅ **SKU** : Code unique (lettres, chiffres, tirets)
- ✅ **Catégorie** : Texte non vide
- ✅ **Stock** : Nombre entier positif ou zéro

### Champs Optionnels
- **Description** : Recommandée pour une meilleure présentation
- **URL de l'image** : Lien vers une image (par défaut : image placeholder si vide)

### Formats Recommandés

**Prix :**
- Entrer le montant en FCFA (Francs CFA)
- Exemples : `5000`, `15000`, `25000`
- Pas de décimales pour les FCFA

**SKU (Stock Keeping Unit) :**
- Format : `CATEGORIE-TYPE-VARIANT`
- Exemples : 
  - `CARD-MEMBER-2026`
  - `TSHIRT-LOGO-BIO-M`
  - `BOOK-GUIDE-WORK-2026`
- Utiliser uniquement : lettres majuscules, chiffres, tirets
- Pas d'espaces ni de caractères spéciaux

**Catégories Suggérées :**
- Adhésion
- Vêtements
- Publications
- Accessoires
- Formations
- Services
- Fournitures
- Matériel

**Stock :**
- Nombre entier (0 ou plus)
- `0` = Rupture de stock
- `> 0` = En stock

---

## ⚠️ Erreurs Communes à Éviter

❌ **Ne pas faire :**
- Prix négatif ou avec des lettres
- SKU avec espaces : `CARD MEMBER 2026`
- Stock négatif : `-10`
- Titre vide ou trop court
- Catégorie vide

✅ **Bonnes pratiques :**
- Prix réaliste en FCFA
- SKU unique et descriptif
- Stock réaliste selon le type de produit
- Description détaillée et informative
- Catégorie cohérente avec le produit

---

## 💡 Conseils

1. **SKU Unique** : Chaque produit doit avoir un SKU différent
2. **Prix en FCFA** : Utiliser les prix locaux (pas d'euros ou dollars)
3. **Stock Initial** : Commencer avec un stock réaliste
4. **Description** : Plus c'est détaillé, mieux c'est pour les membres
5. **Catégorie** : Utiliser les catégories existantes pour la cohérence

---

## 🔄 Après Création

Une fois le produit créé :
- ✅ Il apparaîtra dans la liste des produits
- ✅ Il sera visible par tous les membres du syndicat
- ✅ Vous pourrez modifier le prix et le stock ultérieurement
- ✅ Il sera marqué comme "En stock" si stock > 0
- ✅ Il s'ajoutera aux produits fictifs existants
