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
  audioMusicUrl: "https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Weeding%2FDadju-Tayc%20ft%20Fally%20Ipupa%20%C3%89pouse%20moi%20(Clip%20Officiel)%20%5Bi9N54oVuRfo%5D.mp3?alt=media&token=dc2eae8e-3726-4bb0-965b-adb5c084eeeb", // Musique douce par défaut ou laisser vide
  snapchatFilterUrl: "https://snapchat.com/t/AyTA1TY1", // Mettez votre lien de filtre Snapchat ici
  heroImage: "https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Weeding%2FFIN%2FFabiola%20%26%20placide_page-0001.jpg?alt=media&token=0f931931-893a-482c-b00f-aa606f6e4e3b",
  welcomeImage: "https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Weeding%2FFIN%2F51b64ccf-9103-4bb8-93ce-1bd8e0dec23f.JPG?alt=media&token=63d40756-4fa6-4ecb-9176-3d6803f37767",
  galleryImages: [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Weeding%2FFIN%2Fd156e3a9-dc61-4ba2-9d78-5b7adf74529c.jpeg?alt=media&token=4b1041a8-9328-44b1-938e-29b3727997ee",
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
