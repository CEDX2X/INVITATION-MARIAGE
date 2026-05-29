import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";
import { WeddingData } from "../data/weddingData";
import CornerRoses from "./CornerRoses";

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
    }, 800);
    setTimeout(() => {
      setIsDone(true);
      document.body.style.overflow = "unset";
    }, 1400);
  };

  if (isDone) return null;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-start pt-12 p-4 select-none overflow-hidden"
          style={{ touchAction: "none" }}
        >
          <CornerRoses />

          <div className="text-center mb-6 max-w-sm px-4 z-10">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 0.85, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[10px] tracking-[0.35em] text-rose-400 uppercase font-sans font-semibold mb-2"
            >
              Vous avez reçu une invitation d'exception
            </motion.p>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="font-serif text-2xl text-white font-light tracking-wide uppercase"
            >
              {data.brideName} & {data.groomName}
            </motion.h2>
          </div>

          <div className="z-10 w-full max-w-[560px] flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 50, damping: 14, delay: 0.25 }}
              className="relative w-[420px] h-[300px]"
            >
              <div
                className="absolute inset-0 rounded-[28px] bg-gradient-to-b from-white via-[#f8f3eb] to-[#f0e7dc] border border-stone-200 shadow-[0_24px_80px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer"
                onClick={!isOpening ? handleOpen : undefined}
              >
                <div className="absolute inset-x-10 top-12 h-[56%] bg-[#fbf7f2] rounded-[24px] border border-[#e8dfd3] shadow-inner" />
                <div className="absolute inset-x-12 top-[28%] h-0.5 bg-stone-200/50" />
                <div className="absolute inset-x-14 top-[38%] h-0.5 bg-stone-200/30" />
                <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden">
                  <motion.div
                    className="absolute inset-x-0 top-0 h-full bg-white"
                    style={{
                      clipPath: 'polygon(0 100%, 13% 0, 87% 0, 100% 100%)',
                      transformOrigin: '50% 100%',
                    }}
                    animate={isOpening ? { rotateX: -115, y: -92, opacity: 0.95 } : { rotateX: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 0.9, ease: 'easeInOut' }}
                  >
                    <div className="absolute inset-x-0 bottom-0 h-2 bg-stone-100/50" />
                    <div className="absolute inset-x-0 bottom-8 h-10 bg-gradient-to-t from-stone-100/30 via-transparent to-transparent" />
                  </motion.div>
                </div>

                <div className="absolute left-1/2 top-[22%] -translate-x-1/2 w-24 h-24 rounded-full bg-rose-500 border-2 border-rose-600 shadow-[0_14px_24px_rgba(199,46,91,0.28)] flex items-center justify-center z-20">
                  <span style={{ fontFamily: 'Great Vibes, serif', fontSize: '32px', color: '#fff', letterSpacing: '0.02em' }}>
                    {initials}
                  </span>
                </div>

                <div className="absolute -bottom-4 left-0 right-0 h-12 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={isOpening ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
                transition={{ duration: 0.85, delay: 0.2 }}
                className="absolute inset-0 flex items-center justify-center p-6 z-0 pointer-events-none"
              >
                <div className="relative w-full max-w-[400px] rounded-[22px] bg-[#fffcf6] border border-[#e9dfd2] shadow-[0_18px_40px_rgba(0,0,0,0.15)] p-8 text-center">
                  <div className="absolute inset-x-10 top-6 h-12 rounded-t-[18px] bg-gradient-to-b from-white to-transparent" />
                  <h2 className="font-serif text-2xl text-rose-800 mb-2">{data.brideName} <span className="text-rose-600">&</span> {data.groomName}</h2>
                  <p className="text-sm text-stone-500">{data.weddingDateFormatted} — {new Date(data.countdownDate).toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})}</p>
                  <p className="mt-4 text-sm text-stone-400">Cliquez à nouveau n'importe où pour continuer</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex items-center gap-2 text-stone-300 z-10"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span className="text-[10px] font-sans tracking-[0.22em] uppercase">Un instant magique vous attend</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
