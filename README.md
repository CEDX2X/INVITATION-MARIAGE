# 💍 Faire-part de Mariage Digital Premium (React + Vite + Tailwind CSS)

Une invitation de mariage numérique haut de gamme, moderne et interactive. Conçue spécifiquement pour être partagée facilement par lien sur **WhatsApp**, elle offre une expérience mobile-first raffinée, douce et romantique pour vos invités.

---

## ✨ Fonctionnalités Majeures

- 📱 **Format Mobile-First Ultra-Premium** : Parfaitement adapté à l’écran d’un smartphone pour une lecture fluide dès l'ouverture sur WhatsApp, tout en restant somptueux et centré sur ordinateur.
- 🎨 **Esthétique de Luxe** : Tons ivoire, blanc cassé, accents dorés et noir doux, rythmés par la superbe typographie serif liseuse **Cormorant Garamond** et l'élégant **Inter** pour les textes.
- 🎵 **Expérience Sensorielle** : Lancement d'une musique douce de piano romantique en arrière-plan dès que l'invité clique sur "Ouvrir l'invitation".
- ⏳ **Compte à rebour en temps réel** : Suivi des jours, heures, minutes et secondes avant l'instant sacré.
- 📅 **Timeline du Programme** : Frise chronologique stylisée détaillant chaque temps de votre journée d'amour (Mairie, Cérémonie Laïque, Photos, Cocktail, Dîner, Bal).
- 📍 **Cartographie Interactive** : Adresse de l'événement couplée à une carte Google Maps intégrée et un bouton d'itinéraire direct.
- 📸 **Bento Galerie Photo** : Album d'images fluide s'ouvrant dans une visionneuse ( lightbox ) plein écran immersive au clic.
- 💌 **RSVP Intelligent WhatsApp** : Formulaire de confirmation sans compte utilisateur. L'invité renseigne son nom, sa présence, le nombre d'accompagnants et un mot doux. Au clic, sa réponse est formatée et ouverte directement sur le WhatsApp des mariés sous forme d'un message élégant prêt à envoyer !
- 🎁 **Section Cadeaux Discrète** : Zone facultative et soignée pour les contributions / Mobile Money, avec un bouton de copie rapide du numéro en un clic.

---

## 🛠️ Guide d'Installation de Départ

Pour lancer le projet en développement local sur votre machine, suivez ces quelques étapes :

### 1. Activer les dépendances
```bash
npm install
```

### 2. Lancer le serveur local
```bash
npm run dev
```
Le projet s’ouvrira par défaut sur l'adresse `http://localhost:3000`.

### 3. Compiler pour la production
```bash
npm run build
```

---

## ✍️ Comment Personnaliser Votre Invitation ?

Tous les détails de votre mariage sont stockés dans un fichier unique et hautement lisible. **Aucune connaissance complexe en code n'est requise !**

Ouvrez simplement le fichier suivant :
👉 `src/data/weddingData.ts`

### 1. Modifier les Noms et la Date
Modifiez les valeurs principales à la ligne 25-30 :
```typescript
brideName: "Elena",            // Prénom de la mariée
groomName: "Charlie",          // Prénom du marié
weddingDateFormatted: "Samedi 12 Septembre 2026", // La date affichée sur le site
```

### 2. Configurer le Compte à Rebours
Le compte à rebours se calcule automatiquement. Donnez-lui simplement votre date de mariage au format standard ISO `AAAA-MM-JJTHH:MM:SS` :
```typescript
countdownDate: "2026-09-12T15:00:00", // Remplacer par l'heure exacte de votre mariage
```

### 3. Configurer le numéro WhatsApp pour le RSVP
Pour que les invités vous envoient directement leur feuille de présence préremplie :
```typescript
whatsappNumber: "+33600000000", // Mettez votre numéro avec préfixe pays sans espace
```

### 4. Personnaliser le Programme
Vous pouvez ajouter, supprimer ou modifier des étapes du programme de la journée en complétant le tableau `program` :
```typescript
program: [
  {
    id: "civil",
    time: "14h00",
    title: "Cérémonie Civile",
    description: "Notre union à la mairie principale...",
    iconName: "rings" // Icônes dispo : "rings", "church", "camera", "glass", "plate", "music"
  },
  // ...
]
```

### 5. Configurer la Liste de Cadeaux (Mobile Money / Contribution)
Vous pouvez désactiver cette section en passant à `false`, ou configurer vos données pour des transferts simplifiés :
```typescript
showGiftSection: true, // true pour afficher, false pour masquer
mobileMoneyNumber: "+33 6 00 00 00 00", // Votre numéro Orange Money, MTN, Wave, Wave, etc.
mobileMoneyName: "Elena & Charlie", // Le titulaire du compte
```

### 6. Remplacer les Photos d’Illustration
Pour remplacer les photos par les vôtres, remplacez simplement les URLs des clés `heroImage`, `welcomeImage` et `galleryImages` par des liens d'images de votre choix :
- Vous pouvez stocker des images dans le dossier `/public/` et les lier en écrivant `/mon_image.jpg`.
- Ou utiliser des liens d'hébergement d'images en ligne de haute qualité.

---

*Fait d'amour et de poésie pour accompagner le premier jour du reste de votre vie.* 💍✨
