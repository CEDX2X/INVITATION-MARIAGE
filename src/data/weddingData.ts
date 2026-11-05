/**
 * Données centralisées du mariage de Gaëlle & Hermann.
 * Intègre les photos officielles du couple et le moodboard Dress Code Chic & Glamour.
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
  weddingDateFormatted: string; // Ex: Samedi 26 Décembre 2026
  countdownDate: string; // Format ISO
  whatsappNumber: string;
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
  snapchatFilterUrl?: string;
  heroImage: string;
  welcomeImage: string;
  couplePortrait: string;
  galleryImages: { url: string; caption: string }[];
  dressCodeInspirations: { url: string; title: string; subtitle: string }[];
  program: ProgramEvent[];
}

export const weddingData: WeddingData = {
  brideName: "Gaëlle",
  groomName: "Hermann",
  weddingDateFormatted: "Samedi 26 Décembre 2026",
  countdownDate: "2026-12-26T14:00:00",
  whatsappNumber: "+237699999979", // Référence Cameroun
  welcomeText: "Entourés de nos familles et amis, nous sommes heureux de vous convier à notre mariage civil. Votre présence à nos côtés rendra cette journée inoubliable.",
  venueName: "Mairie de Douala 5ème & Restaurant Le Perroquet",
  venueAddress: "Douala 5ème, Douala, Cameroun",
  venueGoogleMapsUrl: "https://maps.google.com/?q=Mairie+de+Douala+5eme",
  giftNote: "Votre présence est notre plus précieux présent. Pour ceux qui souhaitent nous accompagner dans notre nouvelle vie de couple, une attention sera disponible le jour J.",
  mobileMoneyNumber: "GAËLLE & HERMANN",
  mobileMoneyName: "GAËLLE & HERMANN",
  showGiftSection: true,
  romanticPhrase: "Deux vies, deux cœurs, unis pour un seul et même voyage.",
  audioMusicUrl: "https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Weeding%2FDadju-Tayc%20ft%20Fally%20Ipupa%20%C3%89pouse%20moi%20(Clip%20Officiel)%20%5Bi9N54oVuRfo%5D.mp3?alt=media&token=dc2eae8e-3726-4bb0-965b-adb5c084eeeb",
  snapchatFilterUrl: "https://snapchat.com/t/AyTA1TY1",
  heroImage: "/assets/aistudio/photo_7_2026-11-04_10-19-07_c77de141.jpg",
  welcomeImage: "/assets/aistudio/photo_7_2026-11-04_10-19-07_c77de141.jpg",
  couplePortrait: "/assets/aistudio/photo_7_2026-11-04_10-19-07_c77de141.jpg",
  galleryImages: [
    {
      url: "/assets/aistudio/photo_7_2026-11-04_10-19-07_c77de141.jpg",
      caption: "Gaëlle & Hermann — Notre Amour Éternel"
    },
    {
      url: "/assets/aistudio/photo_6_2026-11-04_10-19-07_ab64019b.jpg",
      caption: "Tenues de Couple — Ensemble Bleu Nuit & Blanc"
    },
    {
      url: "/assets/aistudio/photo_3_2026-11-04_10-19-07_ff30e6d6.jpg",
      caption: "Inspirations Marié & Témoins"
    },
    {
      url: "/assets/aistudio/photo_4_2026-11-04_10-19-07_3b7d763b.jpg",
      caption: "Inspiration Dames — Robes Champagne & Gold"
    },
    {
      url: "/assets/aistudio/photo_1_2026-11-04_10-19-07_652129c0.jpg",
      caption: "Inspiration Hommes — Costume Bleu Nuit"
    },
    {
      url: "/assets/aistudio/photo_5_2026-11-04_10-19-07_7e7482e0.jpg",
      caption: "Accessoires & Bijoux Dorés"
    },
    {
      url: "/assets/aistudio/photo_2_2026-11-04_10-19-07_d829c38c.jpg",
      caption: "Variantes Robes Satin & Teintes Warm"
    }
  ],
  dressCodeInspirations: [
    {
      url: "/assets/aistudio/photo_6_2026-11-04_10-19-07_ab64019b.jpg",
      title: "Harmonie de Couple",
      subtitle: "Veste bleu nuit, pantalon blanc & robe satin"
    },
    {
      url: "/assets/aistudio/photo_3_2026-11-04_10-19-07_ff30e6d6.jpg",
      title: "Costume Marié & Garçons d'Honneur",
      subtitle: "Veste beige croisée & smoking bleu nuit"
    },
    {
      url: "/assets/aistudio/photo_4_2026-11-04_10-19-07_3b7d763b.jpg",
      title: "Robes Champagne & Glamour",
      subtitle: "Teintes dorées, satin & sequins d'exception"
    },
    {
      url: "/assets/aistudio/photo_1_2026-11-04_10-19-07_652129c0.jpg",
      title: "Styles Hommes Chic",
      subtitle: "Costume bleu nuit assorti aux cravates"
    },
    {
      url: "/assets/aistudio/photo_5_2026-11-04_10-19-07_7e7482e0.jpg",
      title: "Accessoires & Bijoux",
      subtitle: "Sacs dorés, bijoux Van Cleef & coiffures chic"
    },
    {
      url: "/assets/aistudio/photo_2_2026-11-04_10-19-07_d829c38c.jpg",
      title: "Palette Champagne & Burnt-Orange",
      subtitle: "Nuances chaudes et raffinées"
    }
  ],
  program: [
    {
      id: "civil",
      time: "14h00 précises",
      title: "Célébration Civile",
      description: "Notre mariage civil célébré à la Mairie de Douala 5ème à 14h précises.",
      iconName: "rings"
    },
    {
      id: "cocktail",
      time: "16h00",
      title: "Cocktail & Festivités",
      description: "Un cocktail chaleureux au restaurant Le Perroquet sous le thème Chic & Glamour.",
      iconName: "glass"
    }
  ]
};
