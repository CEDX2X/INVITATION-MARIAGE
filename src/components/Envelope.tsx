import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Heart } from "lucide-react";
import { WeddingData } from "../data/weddingData";
import CornerRoses from "./CornerRoses";

interface EnvelopeProps {
  data: WeddingData;
  onOpen: () => void;
}

export default function Envelope({ data, onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const initials = `${data.brideName?.charAt(0) ?? "F"} & ${data.groomName?.charAt(0) ?? "P"}`;

  const handleOpen = () => {
    setIsOpening(true);
    // Let the animations run fully to match the premium cinematic tempo
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
          {/* Framed by real corner red roses */}
          <CornerRoses />

          {/* Gentle background romantic elements & sparkling feedback */}
          <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
            <div className="absolute top-[12%] left-[18%] w-1.5 h-1.5 bg-[#DF016E] rounded-full animate-pulse" />
            <div className="absolute top-[30%] right-[15%] w-2 h-2 bg-[#F39EBF] rounded-full animate-ping" style={{ animationDuration: '4.5s' }} />
            <div className="absolute bottom-[25%] left-[22%] w-2.5 h-2.5 bg-[#E51D2E] rounded-full animate-pulse" style={{ animationDuration: '3.2s' }} />
            <div className="absolute bottom-[18%] right-[20%] w-1.5 h-1.5 bg-[#FFF0F5] rounded-full animate-ping" style={{ animationDuration: '6s' }} />
            <div className="absolute top-[50%] left-[8%] w-1 h-1 bg-[#C70039] rounded-full animate-pulse" style={{ animationDuration: '2.5s' }} />
          </div>

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

          {/* Interactive Gatefold Folder Card Container - Vertical Format (approx 11:15 ratio) */}
          <div className="scene">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 55, damping: 15, delay: 0.3 }}
              onClick={!isOpening ? handleOpen : undefined}
              className={`envelope ${isOpening ? "opened" : ""} cursor-pointer`}
            >
              <div className="envelope-back" />
              <div className="top-flap" />
              <div className="front-pocket">
                <div className="flap-pattern" />
                <div className="front-pattern" />
                <div className="monogram">{initials}</div>
              </div>
              <div className="letter">
                <div className="letter-content">
                  <h2>{data.brideName} & {data.groomName}</h2>
                  <p>{data.weddingDateFormatted}</p>
                  <span>{data.venueName}</span>
                </div>
              </div>
            </motion.div>
          </div>

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
