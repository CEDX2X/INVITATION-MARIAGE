import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Heart } from "lucide-react";
import { WeddingData } from "../data/weddingData";

interface EnvelopeProps {
  data: WeddingData;
  onOpen: () => void;
}

export default function Envelope({ data, onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    // Play sound / music via parent state trigger
    onOpen();
    // Wrap up animation and fade out completely after 1.8 seconds
    setTimeout(() => {
      setIsDone(true);
      // Restore scrolling to the page
      document.body.style.overflow = "unset";
    }, 1800);
  };

  if (isDone) return null;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-[#161413] flex flex-col items-center justify-center p-4 select-none overflow-hidden"
          style={{ touchAction: "none" }}
        >
          {/* Decorative subtle floating stars in the dark background */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-[10%] left-[15%] w-1.5 h-1.5 bg-gold-300 rounded-full animate-pulse" />
            <div className="absolute top-[25%] right-[20%] w-1 h-1 bg-gold-200 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-[30%] left-[25%] w-2 h-2 bg-gold-400 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="absolute bottom-[15%] right-[10%] w-1.5 h-1.5 bg-gold-300 rounded-full animate-ping" style={{ animationDuration: '5s' }} />
          </div>

          <div className="text-center mb-8 max-w-sm px-4">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[10px] tracking-[0.3em] text-gold-300 uppercase font-sans font-semibold mb-2"
            >
              Vous avez reçu une invitation
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="font-serif text-2xl sm:text-3xl text-white font-light tracking-wide"
            >
              Le Mariage de {data.brideName} & {data.groomName}
            </motion.h2>
          </div>

          {/* Elegant 3D Envelope Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60, delay: 0.4 }}
            onClick={!isOpening ? handleOpen : undefined}
            className="relative w-full max-w-[350px] aspect-[5/4] bg-[#22201d] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-gold-300/35 cursor-pointer flex flex-col items-center justify-between p-6 overflow-hidden group hover:border-gold-300/60 transition-colors duration-500"
          >
            {/* Fine Double border inside envelope card */}
            <div className="absolute inset-3 border border-gold-300/20 rounded-xl pointer-events-none" />
            <div className="absolute inset-4 border border-gold-300/10 rounded-xl pointer-events-none" />

            {/* Back Flap Simulation (Diagonal vectors) */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 80" preserveAspectRatio="none">
                {/* Visual guidelines rendering back flap boundaries */}
                <path
                  d="M 0,0 L 50,45 L 100,0"
                  fill="none"
                  stroke="rgba(176, 141, 87, 0.15)"
                  strokeWidth="1"
                />
                <path
                  d="M 0,80 L 50,45 L 100,80"
                  fill="none"
                  stroke="rgba(176, 141, 87, 0.08)"
                  strokeWidth="1"
                />
              </svg>
            </div>

            {/* Top Envelope Flap Rotation */}
            <motion.div
              style={{ originY: 0 }}
              animate={isOpening ? { rotateX: 180, zIndex: 0, opacity: 0 } : { rotateX: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute top-3 left-3 right-3 h-[42%] bg-[#2d2a26] border-b border-gold-300/20 rounded-t-lg z-20 pointer-events-none origin-top flex items-center justify-center"
            >
              <div className="w-full h-full relative">
                {/* Triangular shadow style */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
              </div>
            </motion.div>

            {/* Glowing Letter card inside envelope sliding out */}
            <motion.div
              animate={isOpening ? { y: -120, scale: 1.05, opacity: 1 } : { y: 0, scale: 0.95, opacity: 0.8 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="w-[88%] h-[82%] bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.15)] mx-auto mt-2 flex flex-col items-center justify-center p-4 border border-gold-200 text-center relative z-10"
            >
              <div className="absolute inset-2 border border-gold-300/25 rounded-lg pointer-events-none" />
              <p className="font-serif italic text-gold-600 text-[11px] uppercase tracking-widest font-bold">Invitation</p>
              <h3 className="font-serif text-[#1e1c1a] text-lg font-medium tracking-wide my-1">
                {data.brideName} <span className="font-serif text-xs text-gold-500 italic">&</span> {data.groomName}
              </h3>
              <p className="text-stone-400 text-[9px] uppercase tracking-wider font-semibold font-sans">Pour nos chers invités</p>
            </motion.div>

            {/* Golden Wax Seal Button Component */}
            <motion.div
              animate={{ scale: isOpening ? 0 : [1, 1.05, 1] }}
              transition={{ repeat: isOpening ? 0 : Infinity, duration: 2.5, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -ml-10 -mt-10 w-20 h-20 bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 rounded-full shadow-[0_10px_25px_rgba(172,128,45,0.4)] border border-gold-200 flex items-center justify-center z-30 group-hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 rounded-full border border-gold-100/30 flex flex-col items-center justify-center p-1 text-center select-none">
                <Heart className="w-5 h-5 text-white fill-white/10 animate-pulse" />
                <span className="text-[7px] uppercase tracking-widest text-[#1e1c1a] font-black mt-1">OUVRIR</span>
              </div>
            </motion.div>

            {/* Bottom text helper */}
            <p className="text-gold-300/60 text-[9px] tracking-widest uppercase font-semibold font-sans z-30 mb-1">
              Cliquez pour ouvrir l'enveloppe
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1 }}
            className="mt-8 flex items-center gap-1.5 text-stone-500"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-300" />
            <span className="text-[10px] font-sans tracking-[0.2em] uppercase">Un instant magique vous attend</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
