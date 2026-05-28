import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";
import { WeddingData } from "../data/weddingData";
import CornerRoses from "./CornerRoses";

const envelopeImageUrl = "https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Weeding%2Ft%C3%A9l%C3%A9chargement%20(8).jfif?alt=media&token=e667113e-342a-431c-b9dd-61e2e6fc2b20";

interface EnvelopeProps {
  data: WeddingData;
  onOpen: () => void;
}

export default function Envelope({ data, onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const initials = `${data.brideName?.charAt(0) ?? "F"}&${data.groomName?.charAt(0) ?? "P"}`;

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1000);
    setTimeout(() => {
      setIsDone(true);
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
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-[#000000] flex flex-col items-center justify-center p-4 select-none overflow-hidden"
          style={{ touchAction: "none" }}
        >
          <CornerRoses />

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
              {data.brideName} & {data.groomName}
            </motion.h2>
          </div>

          <div className="scene z-10">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 55, damping: 15, delay: 0.3 }}
              className="relative w-full max-w-[560px] h-[380px]"
            >
              <motion.div
                animate={isOpening ? { y: -180, rotateX: -22, opacity: 0.95 } : { y: 0, rotateX: 0, opacity: 1 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="absolute inset-0 origin-bottom"
                onClick={!isOpening ? handleOpen : undefined}
              >
                <img
                  src={envelopeImageUrl}
                  alt="Enveloppe fermée"
                  className="envelope-image w-full h-full object-cover rounded-[28px] shadow-[0_30px_70px_rgba(0,0,0,0.4)]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 40 }}
                animate={isOpening ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.92, y: 40 }}
                transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center p-6"
              >
                <div className="relative w-full max-w-[420px] rounded-[28px] bg-[#f7efe0]/95 border border-[#c9b590]/25 shadow-[0_24px_50px_rgba(0,0,0,0.18)] overflow-hidden">
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-[#7a1f2d] border-4 border-[#f1d591] shadow-[0_12px_24px_rgba(0,0,0,0.3)] flex items-center justify-center text-white text-2xl font-bold tracking-[0.35em]">
                    {initials}
                  </div>
                  <div className="pt-24 pb-10 px-8 text-center">
                    <h2 className="font-serif text-3xl text-[#4e1c26] leading-tight">{data.brideName} <span className="text-[#900c3f]">&</span> {data.groomName}</h2>
                    <p className="mt-5 text-base text-[#7b5f4a]">{data.weddingDateFormatted}</p>
                    <span className="mt-3 block text-xs uppercase tracking-[0.35em] text-[#a48163]">{data.venueName}</span>
                  </div>
                </div>
              </motion.div>
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
