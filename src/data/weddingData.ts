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
  heroImage: string;
  welcomeImage: string;
  galleryImages: { url: string; caption: string }[];
  program: ProgramEvent[];
}

export const weddingData: WeddingData = {
  brideName: "Elena",
  groomName: "Charlie",
  weddingDateFormatted: "Samedi 12 Septembre 2026",
  countdownDate: "2026-09-12T15:00:00",
  whatsappNumber: "+33600000000", // Remplacer par le numéro des mariés
  welcomeText: "Cher(e) invité(e), c'est avec une immense joie et beaucoup d'émotion que nous vous invitons à célébrer avec nous le premier jour du reste de notre vie. Votre présence à nos côtés rendra cette journée inoubliable.",
  venueName: "Domaine de la Roseraie d'Or",
  venueAddress: "Chemin des Collines Dorées, 75016 Paris, France",
  venueGoogleMapsUrl: "https://maps.google.com/?q=Domaine+de+la+Roseraie+d+Or",
  giftNote: "Votre présence à nos côtés est notre plus beau cadeau. Cependant, si vous souhaitez contribuer à notre nouvelle vie à deux ou à notre voyage de noces, une boîte à contributions sera disponible le jour J, ou vous pouvez utiliser nos coordonnées Mobile Money ci-dessous.",
  mobileMoneyNumber: "+33 6 00 00 00 00",
  mobileMoneyName: "Elena & Charlie",
  showGiftSection: true,
  romanticPhrase: "L'amour n'est pas seulement un regard que l'on se porte, c'est un regard jeté ensemble dans la même direction.",
  audioMusicUrl: "https://drive.google.com/file/d/1uR3z3EEWdFU8-Yt0BhBRtBHxnScF1XvJ/view?usp=drive_link", // Musique douce par défaut ou laisser vide
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
      time: "14h00",
      title: "Cérémonie Civile",
      description: "Notre union à la mairie principale du 16ème arrondissement.",
      iconName: "rings"
    },
    {
      id: "religious",
      time: "15h30",
      title: "Cérémonie Laïque/Religieuse",
      description: "Une célébration pleine d'émotion sous l'arche fleurie du parc.",
      iconName: "church"
    },
    {
      id: "photos",
      time: "17h00",
      title: "Séance Photo",
      description: "Quelques clichés avec vous pour capturer ces merveilleux moments.",
      iconName: "camera"
    },
    {
      id: "cocktail",
      time: "18h00",
      title: "Cocktail & Réception",
      description: "Rafraîchissements, petits fours, rires et musiques festives.",
      iconName: "glass"
    },
    {
      id: "dinner",
      time: "20h00",
      title: "Dîner de Noces",
      description: "Un repas gastronomique aux bougies dans la grande verrière.",
      iconName: "plate"
    },
    {
      id: "party",
      time: "23h00",
      title: "Soirée Dansante",
      description: "Ouverture de bal suivie d'une célébration jusqu'au bout de la nuit.",
      iconName: "music"
    }
  ]
};
