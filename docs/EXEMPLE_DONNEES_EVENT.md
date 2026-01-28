# 📝 Exemples de Données pour Tester la Création d'Événements

## Exemple 1 : Assemblée Générale

**Titre :**
```
Assemblée Générale Annuelle 2026
```

**Description :**
```
Réunion statutaire annuelle pour présenter le bilan de l'année écoulée et définir les orientations stratégiques pour 2026. Ordre du jour : rapport financier, élection du nouveau bureau, projets futurs et questions diverses. Tous les membres actifs sont conviés à cette réunion importante.
```

**Date :**
```
2026-02-15
```

**Lieu :**
```
Salle de Conférences Hilton, Avenue Kennedy, Yaoundé
```

**Heure de début :**
```
09:00
```

**Heure de fin :**
```
17:00
```

---

## Exemple 2 : Formation Professionnelle

**Titre :**
```
Formation sur les Droits du Travail au Cameroun
```

**Description :**
```
Session de formation intensive couvrant les aspects essentiels du Code du travail camerounais. Au programme : contrats de travail, droits et obligations, procédures de licenciement, négociation collective et résolution des conflits. Formation animée par Me. Jean Kamga, avocat spécialisé en droit social.
```

**Date :**
```
2026-01-28
```

**Lieu :**
```
Centre de Formation UGATE, Immeuble Rose, 3ème étage, Douala
```

**Heure de début :**
```
14:00
```

**Heure de fin :**
```
18:00
```

---

## Exemple 3 : Événement Social

**Titre :**
```
Journée de Solidarité et d'Entraide
```

**Description :**
```
Grande journée de solidarité syndicale avec activités sociales et culturelles. Au programme : marche de sensibilisation, stands d'information sur les services du syndicat, consultations juridiques gratuites, animations musicales et repas communautaire. Venez nombreux avec vos familles !
```

**Date :**
```
2026-03-10
```

**Lieu :**
```
Place de l'Indépendance, Bafoussam
```

**Heure de début :**
```
08:00
```

**Heure de fin :**
```
16:00
```

---

## Exemple 4 : Conférence

**Titre :**
```
Conférence sur la Sécurité et Santé au Travail
```

**Description :**
```
Conférence internationale sur les meilleures pratiques en matière de sécurité et santé au travail. Thèmes abordés : prévention des accidents, équipements de protection individuelle, gestion des risques psychosociaux, premiers secours en milieu professionnel. Avec la participation d'experts de l'OIT.
```

**Date :**
```
2026-02-20
```

**Lieu :**
```
Centre International de Conférences, Boulevard de la Liberté, Douala
```

**Heure de début :**
```
09:30
```

**Heure de fin :**
```
13:00
```

---

## Exemple 5 : Atelier de Travail

**Titre :**
```
Atelier de Négociation Collective
```

**Description :**
```
Atelier pratique destiné aux délégués syndicaux pour renforcer leurs compétences en négociation. Exercices pratiques, jeux de rôle et études de cas réels. Objectif : maîtriser les techniques de négociation pour défendre efficacement les intérêts des travailleurs.
```

**Date :**
```
2026-02-05
```

**Lieu :**
```
Salle Municipale, Rue du Commerce, Garoua
```

**Heure de début :**
```
10:00
```

**Heure de fin :**
```
15:30
```

---

## 🎯 Instructions de Test Rapide

### Pour un test rapide, copier-coller :

**Test Minimal (tous les champs obligatoires) :**

- **Titre :** `Test Événement API`
- **Description :** `Ceci est un test de création d'événement via l'API`
- **Date :** `2026-01-25`
- **Lieu :** `Bureau UGATE`
- **Heure début :** `10:00`
- **Heure fin :** `12:00`

### Notes importantes :

1. **Format de date** : Toujours utiliser le format `AAAA-MM-JJ` (ex: 2026-01-25)
2. **Format d'heure** : Toujours utiliser le format `HH:MM` (ex: 14:30)
3. **Caractères spéciaux** : Les apostrophes et accents sont acceptés
4. **Longueur** : 
   - Titre : min 5 caractères, max 200 caractères
   - Description : min 10 caractères, max 2000 caractères
   - Lieu : min 5 caractères, max 200 caractères

### Erreurs communes à éviter :

❌ **Ne pas faire :**
- Date au format JJ/MM/AAAA
- Heure sans les deux-points (1400 au lieu de 14:00)
- Heure de fin avant l'heure de début
- Champs vides ou avec uniquement des espaces

✅ **Bonnes pratiques :**
- Vérifier que l'heure de fin est après l'heure de début
- Utiliser des descriptions détaillées et informatives
- Préciser l'adresse complète dans le lieu
- Choisir une date future (pas dans le passé)
