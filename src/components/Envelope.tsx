import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";
import { weddingData } from "../data/weddingData";

interface EnvelopeProps {
  data?: {
    brideName?: string;
    groomName?: string;
    weddingDateFormatted?: string;
    venueAddress?: string;
  };
  onOpen: () => void;
}

export default function Envelope({ data = weddingData, onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const brideName = data.brideName || weddingData.brideName;
  const groomName = data.groomName || weddingData.groomName;

  const handleOpen = () => {
    setIsOpening(true);
    onOpen(); // Call immediately within user tap event loop for mobile audio autoplay permission
    setTimeout(() => {
      setIsDone(true);
      document.body.style.overflow = "unset";
    }, 2200);
  };

  if (isDone) return null;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-4 select-none overflow-hidden"
          style={{ touchAction: "none" }}
        >
          {/* Particules scintillantes d'arrière-plan */}
          <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
            <div className="absolute top-[12%] left-[18%] w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-pulse" />
            <div className="absolute top-[30%] right-[15%] w-2 h-2 bg-[#b88e53] rounded-full animate-ping" style={{ animationDuration: '4.5s' }} />
            <div className="absolute bottom-[25%] left-[22%] w-2.5 h-2.5 bg-[#d4af37] rounded-full animate-pulse" style={{ animationDuration: '3.2s' }} />
            <div className="absolute bottom-[18%] right-[20%] w-1.5 h-1.5 bg-[#1c315e] rounded-full animate-ping" style={{ animationDuration: '6s' }} />
            <div className="absolute top-[50%] left-[8%] w-1 h-1 bg-[#1c315e] rounded-full animate-pulse" style={{ animationDuration: '2.5s' }} />
          </div>

          {/* En-tête de l'invitation */}
          <div className="text-center mb-6 max-w-sm px-4 z-10">
            <motion.p
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[10px] tracking-[0.35em] text-[#b88e53] uppercase font-sans font-semibold mb-2"
            >
              Vous avez reçu une invitation d'exception
            </motion.p>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="font-serif text-2xl sm:text-3xl text-[#0b1220] font-light tracking-wide uppercase"
            >
              {brideName} & {groomName}
            </motion.h2>
          </div>

          {/* Corps de l'enveloppe interactive */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={
              isOpening 
                ? { scale: 1.15, opacity: 0, y: -40, rotateX: 15 } 
                : { scale: 1, opacity: 1, y: 0 }
            }
            transition={
              isOpening 
                ? { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
                : { type: "spring", stiffness: 55, damping: 15, delay: 0.2 }
            }
            onClick={!isOpening ? handleOpen : undefined}
            className="relative cursor-pointer max-w-[320px] sm:max-w-[360px] w-full group transition-all duration-300"
          >
            {/* L'image de l'enveloppe officielle transmise */}
            <div className="relative w-full aspect-[3/4] flex items-center justify-center filter drop-shadow-[0_15px_35px_rgba(11,18,32,0.25)] group-hover:drop-shadow-[0_20px_45px_rgba(212,175,55,0.4)] transition-all duration-500">
              <img 
                src="/assets/aistudio/Design_sans_titre__2__3f6fbcec.png" 
                alt="Enveloppe Mariage Gaëlle & Hermann" 
                className="w-full h-full object-contain transform group-hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Effet d'éclat lumineux au survol sur le sceau */}
              <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#d4af37]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Badge d'interaction sur le sceau */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                className="absolute top-[49%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
              >
                <div className="px-3 py-1 rounded-full bg-[#0b1220]/85 backdrop-blur-md border border-[#d4af37]/60 text-[#fce879] text-[9px] font-sans font-bold uppercase tracking-widest shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3 h-3 text-[#d4af37]" />
                  <span>Cliquer pour ouvrir</span>
                </div>
              </motion.div>
            </div>

            {/* Indication sous l'enveloppe */}
            <div className="text-center mt-3 pointer-events-none">
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#1c315e] select-none opacity-90">
                Touchez l'enveloppe pour découvrir l'invitation
              </span>
            </div>
          </motion.div>

          {/* Note d'invitation magique */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1 }}
            className="mt-8 flex items-center gap-2 text-[#334155] z-10"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-[10px] font-sans tracking-[0.22em] uppercase">Un instant magique vous attend</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
