import { motion } from "motion/react";
import { ChevronDown, Calendar, MapPin } from "lucide-react";
import { WeddingData } from "../data/weddingData";
import FallingPetals from "./FallingPetals";
import CornerRoses from "./CornerRoses";

interface HeroProps {
  data: WeddingData;
  onOpen: () => void;
  isOpen: boolean;
}

export default function Hero({ data, onOpen, isOpen }: HeroProps) {
  const handleOpenClick = () => {
    onOpen();
    const element = document.getElementById("bienvenue");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero h-[100dvh] w-full overflow-hidden flex flex-col justify-between items-center text-center px-4 relative">
      {/* Falling Rose Petals effect */}
      <FallingPetals />

      {/* Frame of real corner red roses */}
      <CornerRoses />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.heroImage}
          alt={`${data.brideName} & ${data.groomName}`}
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-95"
          referrerPolicy="no-referrer"
        />
        {/* Soft Dark Romantic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/80 z-10" />
      </div>

      {/* Top Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="relative z-20 mt-12 pt-6"
      >
        <span className="text-[11px] tracking-[0.4em] uppercase text-gold-200 font-sans font-semibold luxury-title-shadow">
          Célébration de Mariage
        </span>
        <div className="w-12 h-[1px] bg-gold-300 mx-auto mt-2 opacity-65" />
      </motion.div>

      {/* Main Couple Names & Invitation Intro */}
      <div className="relative z-20 my-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="text-gold-200 font-serif italic text-2xl md:text-3xl tracking-widest mb-1 font-light"
        >
          Invitation
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.6 }}
          className="couple-names my-5 px-4"
        >
          {data.brideName} <span className="text-gold-300 font-serif italic text-2xl sm:text-3xl">&</span> {data.groomName}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          className="flex flex-col items-center gap-2 mt-4"
        >
          <div className="flex items-center gap-2 text-white/90 text-sm tracking-widest font-sans font-light bg-black/20 backdrop-blur-[2px] px-4 py-2 rounded-full border border-white/10">
            <Calendar className="w-4 h-4 text-gold-300" />
            <span>{data.weddingDateFormatted}</span>
          </div>
          <div className="flex items-center gap-2 text-white/95 text-xs tracking-widest font-sans font-extralight mt-1">
            <MapPin className="w-3.5 h-3.5 text-gold-300" />
            <span>{data.venueName}</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Button Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="relative z-20 mb-12 pb-6 flex flex-col items-center gap-4"
      >
        <button
          id="btn-ouvrir-invitation"
          onClick={handleOpenClick}
          className="group relative px-8 py-3.5 rounded-full overflow-hidden border border-gold-300 bg-black/40 text-white font-sans text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:border-gold-200 shadow-[0_4px_20px_rgba(0,0,0,0.3)] cursor-pointer"
        >
          {/* Gentle glow effect behind or inside button */}
          <span className="absolute inset-0 w-full h-full bg-gold-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10 font-medium">Ouvrir l'invitation</span>
        </button>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-gold-300/80 cursor-pointer"
          onClick={handleOpenClick}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
