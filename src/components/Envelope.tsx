import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Heart } from "lucide-react";

interface EnvelopeProps {
  data: {
    welcomeText?: string;
    mobileMoneyName?: string;
    mobileMoneyNumber?: string;
    giftNote?: string;
    venueName?: string;
    venueAddress?: string;
    venueGoogleMapsUrl?: string;
  };
  onOpen: () => void;
}

export default function Envelope({ data, onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    // Laisse l'animation filée se dérouler pleinement avant d'ouvrir le site
    setTimeout(() => {
      onOpen();
    }, 1200);
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
          className="fixed inset-0 z-50 bg-[#000000] flex flex-col items-center justify-center p-4 select-none overflow-hidden"
          style={{ touchAction: "none" }}
        >
          {/* Particules scintillantes d'arrière-plan */}
          <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
            <div className="absolute top-[12%] left-[18%] w-1.5 h-1.5 bg-[#DF016E] rounded-full animate-pulse" />
            <div className="absolute top-[30%] right-[15%] w-2 h-2 bg-[#F39EBF] rounded-full animate-ping" style={{ animationDuration: '4.5s' }} />
            <div className="absolute bottom-[25%] left-[22%] w-2.5 h-2.5 bg-[#E51D2E] rounded-full animate-pulse" style={{ animationDuration: '3.2s' }} />
            <div className="absolute bottom-[18%] right-[20%] w-1.5 h-1.5 bg-[#FFF0F5] rounded-full animate-ping" style={{ animationDuration: '6s' }} />
            <div className="absolute top-[50%] left-[8%] w-1 h-1 bg-[#C70039] rounded-full animate-pulse" style={{ animationDuration: '2.5s' }} />
          </div>

          {/* En-tête de l'invitation */}
          <div className="text-center mb-6 max-w-sm px-4 z-10">
            <motion.p
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[10px] tracking-[0.35em] text-[#F39EBF] uppercase font-sans font-semibold mb-2"
            >
              Vous avez reçu une invitation d'exception
            </motion.p>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="font-serif text-2xl text-white font-light tracking-wide uppercase"
            >
              Fabiola & Placide
            </motion.h2>
          </div>

          {/* Corps de l'enveloppe interactive */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 55, damping: 15, delay: 0.3 }}
            onClick={!isOpening ? handleOpen : undefined}
            className="relative w-full max-w-[340px] h-[460px] rounded-3xl overflow-hidden cursor-pointer shadow-[0_30px_70px_rgba(223,1,110,0.18)] border border-[#DF016E]/15 group transition-all duration-500 hover:border-[#DF016E]/40"
          >
            {/* L'invitation physique élégante cachée en-dessous */}
            <motion.div
              initial={{ scale: 0.95, y: 5 }}
              animate={isOpening ? { scale: 1, y: 0 } : {}}
              className="absolute inset-2 bg-gradient-to-b from-[#FFFDFD] to-[#FFF5F8] rounded-[22px] flex flex-col justify-between p-7 text-center border-2 border-double border-[#DF016E]/20 overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-28 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#DF016E] to-transparent pointer-events-none" />
              <div className="absolute inset-2 border border-[#DF016E]/10 rounded-[18px] pointer-events-none" />

              {/* Initiales ornementées */}
              <div className="mt-2">
                <span className="font-serif text-3xl font-black tracking-widest text-[#5c0519] block italic select-none">
                  F & P
                </span>
                <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#DF016E]/40 to-transparent mx-auto block mt-1" />
              </div>

              {/* Corps principal carte */}
              <div className="my-auto px-1 space-y-3">
                <p className="font-serif italic text-xs uppercase tracking-[0.25em] text-[#900C3F]">
                  Save Our Date
                </p>
                <div className="text-[#330314]">
                  <p className="font-sans text-[11px] uppercase tracking-widest font-semibold opacity-70">
                    Célébration Civile
                  </p>
                  <p className="font-serif text-2xl font-semibold text-[#5c0519] my-0.5">
                    27 Juin 2026
                  </p>
                  <p className="font-sans text-[10px] tracking-wider italic text-[#C70039]">
                    Santa Barbara, Yaoundé
                  </p>
                </div>
              </div>

              {/* Signature bas de carte */}
              <div className="mb-2">
                <span className="h-[1.5px] w-16 bg-[#DF016E]/20 mx-auto block mb-2" />
                <p className="font-serif text-base italic text-[#900C3F] font-bold tracking-wide select-none">
                  Amour Éternel
                </p>
              </div>
            </motion.div>

            {/* Rabat gauche à motifs gravés */}
            <motion.div
              style={{ originX: 0 }}
              variants={{
                closed: { x: 0, rotateY: 0, opacity: 1 },
                opened: { x: "-100%", rotateY: -85, opacity: 0 }
              }}
              animate={isOpening ? "opened" : "closed"}
              transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-tr from-[#3b0311] via-[#5c0519] to-[#7a0c24] border-r border-[#900C3F]/30 z-20 flex items-center justify-end overflow-hidden shadow-[20px_0_30px_rgba(0,0,0,0.4)]"
            >
              {/* Entrelacs de vignes de roses (SVG vectoriel) */}
              <div className="absolute inset-0 opacity-45 pointer-events-none p-3 flex flex-col justify-between">
                <svg className="w-full h-full text-[#DF016E] filter drop-shadow-sm" viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M10 0 C 30 40, 20 80, 50 110 C 20 150, 40 180, 5 200" />
                  <path d="M45 40 C 30 60, 40 90, 15 120" />
                  <path d="M20 70 A 15 15 0 0 1 35 85" strokeWidth="0.8" />
                  <circle cx="20" cy="30" r="12" strokeWidth="1" strokeDasharray="3 2" />
                  <circle cx="20" cy="30" r="8" strokeWidth="1.2" />
                  <circle cx="20" cy="30" r="4" strokeWidth="1" />
                  <path d="M40 150 A 18 18 0 0 1 10 170" strokeWidth="0.7" />
                  <circle cx="30" cy="155" r="10" strokeWidth="1.2" />
                  <circle cx="30" cy="155" r="5" strokeWidth="1" />
                </svg>
              </div>
              <div className="absolute right-0 inset-y-12 w-[1px] bg-gradient-to-b from-transparent via-[#FFF0F5]/20 to-transparent" />
            </motion.div>

            {/* Rabat droit à motifs gravés */}
            <motion.div
              style={{ originX: 1 }}
              variants={{
                closed: { x: 0, rotateY: 0, opacity: 1 },
                opened: { x: "100%", rotateY: 85, opacity: 0 }
              }}
              animate={isOpening ? "opened" : "closed"}
              transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-tl from-[#3b0311] via-[#5c0519] to-[#7a0c24] border-l border-[#900C3F]/30 z-20 flex items-center justify-start overflow-hidden shadow-[-20px_0_30px_rgba(0,0,0,0.4)]"
            >
              {/* Entrelacs de vignes de roses (SVG vectoriel symétrique) */}
              <div className="absolute inset-0 opacity-45 pointer-events-none p-3 flex flex-col justify-between">
                <svg className="w-full h-full text-[#DF016E] filter drop-shadow-sm" viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M90 0 C 70 40, 80 80, 50 110 C 80 150, 60 180, 95 200" />
                  <path d="M55 40 C 70 60, 60 90, 85 120" />
                  <path d="M80 70 A 15 15 0 0 0 65 85" strokeWidth="0.8" />
                  <circle cx="80" cy="30" r="12" strokeWidth="1" strokeDasharray="3 2" />
                  <circle cx="80" cy="30" r="8" strokeWidth="1.2" />
                  <circle cx="80" cy="30" r="4" strokeWidth="1" />
                  <path d="M60 150 A 18 18 0 0 0 90 170" strokeWidth="0.7" />
                  <circle cx="70" cy="155" r="10" strokeWidth="1.2" />
                  <circle cx="70" cy="155" r="5" strokeWidth="1" />
                </svg>
              </div>
              <div className="absolute left-0 inset-y-12 w-[1px] bg-gradient-to-b from-transparent via-[#FFF0F5]/20 to-transparent" />
            </motion.div>

            {/* Sceau de cire en relief doré fait main avec gravure rose rose */}
            <motion.div
              variants={{
                closed: { scale: 1, rotate: 0, opacity: 1 },
                opened: { scale: 1.4, rotate: -20, opacity: 0 }
              }}
              animate={isOpening ? "opened" : "closed"}
              transition={{ duration: 1, ease: "easeIn" }}
              className="absolute top-1/2 left-1/2 -ml-11 -mt-11 w-22 h-22 z-30 flex items-center justify-center pointer-events-none"
            >
              <div 
                className="w-20 h-20 bg-gradient-to-br from-[#FFEBAE] via-[#C99C35] to-[#75550D] shadow-[0_8px_25px_rgba(0,0,0,0.55),_inset_0_2px_4px_rgba(255,255,255,0.4)] border border-[#FFEBAE]/30 flex items-center justify-center transform group-hover:scale-110 active:scale-95 transition-all duration-300"
                style={{ 
                  borderRadius: "45% 55% 52% 48% / 50% 48% 52% 50%" // Moule à bordures irrégulières coulées
                }}
              >
                <div 
                  className="w-[84%] h-[84%] border-2 border-[#FFEBAE]/15 rounded-full flex flex-col items-center justify-center relative p-1.5"
                  style={{ borderRadius: "46% 54% 50% 50% / 52% 48% 52% 48%" }}
                >
                  {/* Sceau estampé Rose vectorielle */}
                  <svg className="w-8 h-8 text-[#58410b] filter drop-shadow-[0.5px_0.5px_0px_rgba(255,255,255,0.15)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22v-3" />
                    <path d="M12 19c-1.5-1.5-3-2-3-4s1.5-3 3-4" />
                    <path d="M12 15c1.5-1.5 3-2 3-4s-1.5-3-3-4" />
                    <path d="M12 11c-1.2-1.2-2-2.5-2-4s1.5-4 2-5" />
                    <path d="M12 11c1.2-1.2 2-2.5 2-4s-1.5-4-2-5" />
                    <path d="M9 19c.5-1.5 1-3 1-5" />
                    <path d="M15 19c-.5-1.5-1-3-1-5" />
                    <path d="M12 12c.3-.5.8-.8 1.2-.8.5 0 .8.4.8.8 0 .8-1 1.2-2 2-1-.8-2-1.2-2-2 0-.4.3-.8.8-.8.4 0 .9.3 1.2.8z" fill="currentColor" opacity="0.3" />
                  </svg>
                  <span className="text-[6px] tracking-widest font-black uppercase text-white mt-1 select-none font-sans luxury-title-shadow">
                    Ouvrir
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Texte d'action interactif */}
            <div className="absolute bottom-5 inset-x-0 text-center z-25 pointer-events-none">
              <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-white/70 select-none animate-pulse">
                Touchez le sceau pour ouvrir
              </span>
            </div>
          </motion.div>

          {/* Note d'invitation magique */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1 }}
            className="mt-8 flex items-center gap-2 text-stone-400 z-10"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#DF016E]" />
            <span className="text-[10px] font-sans tracking-[0.22em] uppercase">Un instant magique vous attend</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
