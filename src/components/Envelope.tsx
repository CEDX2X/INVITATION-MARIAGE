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
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 55, damping: 16, delay: 0.2 }}
              className="relative w-[420px] h-[280px]"
            >
              <motion.div
                className="relative w-full h-full cursor-pointer"
                animate={isOpening ? { y: 12, scale: 0.98, opacity: 0.96 } : { y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                onClick={!isOpening ? handleOpen : undefined}
              >
                <div className="absolute inset-0 rounded-[24px] bg-[#f7efe4] border border-stone-200 shadow-[0_24px_70px_rgba(0,0,0,0.24)] overflow-hidden">
                  <div
                    className="absolute inset-x-8 top-0 h-[60%] bg-white border-b border-stone-200 shadow-[inset_0_-12px_18px_rgba(0,0,0,0.08)] envelope-top-flap"
                  >
                    <motion.div
                      className="absolute inset-x-0 top-0 h-full bg-white envelope-flap"
                      animate={isOpening ? { rotateX: -125, y: -88, opacity: 0.93 } : { rotateX: 0, y: 0, opacity: 1 }}
                      transition={{ duration: 0.9, ease: 'easeInOut' }}
                    >
                      <div className="absolute inset-x-10 bottom-0 h-2 rounded-full bg-stone-100/80" />
                      <div className="absolute inset-x-10 bottom-10 h-10 rounded-t-full bg-gradient-to-t from-stone-200/20 to-transparent" />
                    </motion.div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-[55%] bg-[#fcfaf5] border-t border-stone-200 shadow-[inset_0_8px_16px_rgba(0,0,0,0.05)]">
                    <div className="absolute inset-x-10 top-8 bottom-8 bg-white rounded-[20px] border border-[#ece4d8] shadow-inner" />
                  </div>

                  <div className="absolute left-1/2 top-[24%] -translate-x-1/2 w-24 h-24 rounded-full bg-rose-500 border-2 border-rose-600 shadow-[0_12px_22px_rgba(199,46,91,0.28)] flex items-center justify-center z-10">
                    <span className="envelope-seal-text">{initials}</span>
                  </div>

                  <div className="absolute inset-x-0 top-[15%] h-px bg-stone-200/30" />
                  <div className="absolute inset-x-0 top-[21%] h-px bg-stone-200/20" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={isOpening ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.96 }}
                transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center p-6 z-0 pointer-events-none"
              >
                <div className="relative w-full max-w-[400px] rounded-[22px] bg-[#fffdf8] border border-[#e9dfd2] shadow-[0_18px_36px_rgba(0,0,0,0.16)] p-8 text-center">
                  <div className="absolute inset-x-10 top-6 h-12 rounded-t-[18px] bg-gradient-to-b from-white to-transparent" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-rose-800 mb-2">
                    {data.brideName} <span className="text-rose-600">&</span> {data.groomName}
                  </h2>
                  <p className="text-sm text-stone-500">
                    {data.weddingDateFormatted} — {new Date(data.countdownDate).toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})}
                  </p>
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
