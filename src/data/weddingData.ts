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
  whatsappNumber: "+237690199155", // Référence Cameroun
  welcomeText: "Entourés de nos familles et amis, nous sommes heureux de vous convier à notre mariage civil. Votre présence à nos côtés rendra cette journée inoubliable.",
  venueName: "Au jardin de René Santa Barbara Yaoundé",
  venueAddress: "Santa Barbara, Yaoundé, Cameroun",
  venueGoogleMapsUrl: "https://maps.google.com/?q=Jardin+de+Rene+Santa+Barbara+Yaounde",
  giftNote: "Une liste de cadeaux est disponible aux magasins Orca Douala et Yaoundé au nom du couple MBANG OYONO.",
  mobileMoneyNumber: "+237690199155",
  mobileMoneyName: "BIBIANE BOAYE",
  showGiftSection: true,
  romanticPhrase: "C’est avec une immense joie et beaucoup d’émotion que nous avons l’honneur de vous inviter à célébrer l’union de nos vies. Votre présence, votre amour et votre bienveillance sont pour nous le plus précieux des cadeaux. Venez partager ce jour unique, entourés de rires, de chaleur et de souvenirs que nous garderons à jamais. Nous avons hâte de vous retrouver et de vivre ce moment inoubliable ensemble.Avec tout notre amour.",
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
      url: "https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Weeding%2FFIN%2FFabiola%20%26%20placide_page-0002.jpg?alt=media&token=9d92de4f-6c36-439b-aa75-d94ee40bb984",
      caption: "Le regard complice"
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Weeding%2FFIN%2FIMG_5871.JPG?alt=media&token=aeb9cdc6-f4e1-4c68-b436-8810010c0977",
      caption: "Dress code"
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Weeding%2FFIN%2Fcopy_6F9608C0-6FC2-4399-8A8F-A1BED4661372.PNG?alt=media&token=873baea4-8fb3-461c-a8a0-d866726eed67",
      caption: "Dress code"
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Weeding%2FFIN%2Fcopy_7A60AD89-19E9-4514-BAD7-1763A5B56367.PNG?alt=media&token=643cc725-34f5-45e3-abb2-5d9062bb6c9e",
      caption: "Dress code"
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Weeding%2FFIN%2Fcopy_9DBFF23E-AB30-4C67-92DC-8BF1611D8311.PNG?alt=media&token=c89bc81d-d04b-4424-8065-4d561372bdd1",
      caption: "Dress code"
    }
  ],
  program: [
    {
      id: "civil",
      time: "10h00",
      title: "Célébration Civile",
      description: "Notre union civile célébrée au magnifique jardin de René Santa Barbara Yaoundé.",
      iconName: "rings"
    },
    {
      id: "party",
      time: "20h00",
      title: "Soirée Dansante",
      description: "Une réception magique et animée sous les étoiles pour fêter notre amour (Toujours à Santa Barbara).",
      iconName: "music"
    }
  ]
};
