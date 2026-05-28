/**
 * Données personnalisables de l'invitation de mariage.
 * Toutes les informations textuelles, photos, couleurs, programme,
 * coordonnées de contact, etc. sont centralisées ici.
 */

export interface ProgramEvent {
  id: string;
  time: string;
  title: string;
  description: string;
  iconName: "church" | "rings" | "camera" | "glass" | "plate" | "music";
}

export interface WeddingData {
  brideName: string;
  groomName: string;
  weddingDateFormatted: string; // Ex: Samedi 12 Septembre 2026
  countdownDate: string; // Format ISO: "YYYY-MM-DDTHH:MM:SS"
  whatsappNumber: string; // Numéro WhatsApp international avec préfixe (ex: "+33612345678" ou "22507000000")
  welcomeText: string;
  venueName: string;
  venueAddress: string;
  venueGoogleMapsUrl: string;
  giftNote: string;
  mobileMoneyNumber: string;
  mobileMoneyName: string;
  showGiftSection: boolean;
  romanticPhrase: string;
  audioMusicUrl: string;
  snapchatFilterUrl?: string; // Optionnel : lien du filtre Snapchat pour les invités
  heroImage: string;
  welcomeImage: string;
  galleryImages: { url: string; caption: string }[];
  program: ProgramEvent[];
}

export const weddingData: WeddingData = {
  brideName: "Fabiola",
  groomName: "Placide",
  weddingDateFormatted: "Samedi 27 Juin 2026",
  countdownDate: "2026-06-27T10:00:00",
  whatsappNumber: "+237699999979", // Référence Cameroun
  welcomeText: "Entourés de nos familles et amis, nous sommes heureux de vous convier à notre mariage civil. Votre présence à nos côtés rendra cette journée inoubliable.",
  venueName: "Au jardin de René",
  venueAddress: "Santa Barbara, Yaoundé, Cameroun",
  venueGoogleMapsUrl: "https://maps.google.com/?q=Jardin+de+Rene+Santa+Barbara+Yaounde",
  giftNote: "Une liste de cadeaux est disponible aux magasins Orca Douala et Yaoundé au nom du couple MBANG OYONO.",
  mobileMoneyNumber: "MBANG OYONO",
  mobileMoneyName: "MBANG OYONO",
  showGiftSection: true,
  romanticPhrase: "Deux vies, deux cœurs, unis pour un seul et même voyage.",
  audioMusicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Musique douce par défaut ou laisser vide
  snapchatFilterUrl: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=3b3eb321fcef46f592ba26ec91ffbbcc&metadata=01", // Mettez votre lien de filtre Snapchat ici
  heroImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2669&auto=format&fit=crop",
  welcomeImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop",
  galleryImages: [
    {
      url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2670&auto=format&fit=crop",
      caption: "La promesse d'une vie"
    },
    {
      url: "https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=2670&auto=format&fit=crop",
      caption: "Le regard complice"
    },
    {
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2670&auto=format&fit=crop",
      caption: "Main dans la main"
    },
    {
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2670&auto=format&fit=crop",
      caption: "Pour l'éternité"
    },
    {
      url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2670&auto=format&fit=crop",
      caption: "La douceur de l'instant"
    },
    {
      url: "https://images.unsplash.com/photo-1507504038482-76210452405d?q=80&w=2670&auto=format&fit=crop",
      caption: "Sous le ciel couchant"
    }
  ],
  program: [
    {
      id: "civil",
      time: "10h00",
      title: "Célébration Civile",
      description: "Notre union civile célébrée au magnifique jardin de René.",
      iconName: "rings"
    },
    {
      id: "party",
      time: "20h00",
      title: "Soirée Dansante",
      description: "Une réception magique et animée sous les étoiles pour fêter notre amour.",
      iconName: "music"
    }
  ]
};
