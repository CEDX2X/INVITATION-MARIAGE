import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, MailOpen } from "lucide-react";
import { WeddingData } from "../data/weddingData";
import CornerRoses from "./CornerRoses";

interface EnvelopeProps {
  data: WeddingData;
  onOpen: () => void;
}

export default function Envelope({ data, onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [scale, setScale] = useState(1);

  const initials = `${data.brideName?.charAt(0) ?? "F"}&${data.groomName?.charAt(0) ?? "P"}`;

  useEffect(() => {
    // Lock body scrolling when the envelope is shown
    document.body.style.overflow = "hidden";
    
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 360) {
        setScale(0.55);
      } else if (width < 400) {
        setScale(0.62);
      } else if (width < 480) {
        setScale(0.72);
      } else if (width < 640) {
        setScale(0.85);
      } else {
        setScale(1.05);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpen = () => {
    setIsOpening(true);
  };

  const handleFinalOpen = () => {
    setIsFadingOut(true);
    document.body.style.overflow = "unset";
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: isFadingOut ? 0 : 1, y: isFadingOut ? -30 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 select-none overflow-hidden"
          style={{ touchAction: "none" }}
        >
          <CornerRoses />

          <div className="text-center mb-8 max-w-sm px-4 z-10">
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
            <div className="scene select-none" style={{ transform: `scale(${scale})` }}>
              <motion.div 
                className="envelope"
                style={{ transition: "none" }}
                animate={{
                  y: isOpening ? -10 : 0,
                  rotateX: isOpening ? 4 : 0,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Envelope Back */}
                <div className="envelope-back" />

                {/* Letter (Invitation Card) */}
                <motion.div
                  className="letter"
                  style={{ x: "-50%", transition: "none", pointerEvents: isOpening ? "auto" : "none" }}
                  initial={{ y: 120, scale: 0.9, opacity: 0 }}
                  animate={{
                    y: isOpening ? -110 : 120,
                    scale: isOpening ? 1.04 : 0.9,
                    opacity: isOpening ? 1 : 0,
                    zIndex: isOpening ? 10 : 1,
                  }}
                  transition={{
                    y: { delay: 0.8, duration: 1.0, ease: [0.16, 1, 0.3, 1] },
                    scale: { delay: 0.8, duration: 1.0, ease: [0.16, 1, 0.3, 1] },
                    opacity: { delay: isOpening ? 0.8 : 0, duration: isOpening ? 0.6 : 0.3 },
                    zIndex: { delay: isOpening ? 0.8 : 0 }
                  }}
                >
                  {/* Letter content */}
                  <div className="letter-content flex flex-col items-center justify-between p-6 h-full text-center border-2 border-[#e7c67a]/40 rounded-lg m-1 shadow-inner relative overflow-hidden bg-gradient-to-b from-[#fffdf8] to-[#fbf7ee]">
                    {/* Subtle romantic watermark */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Weeding%2F4.png?alt=media&token=dd450cbd-4915-4d37-b529-487a9ef5982d')] bg-center bg-no-repeat bg-contain pointer-events-none" />

                    {/* Elegant top ornament */}
                    <div className="text-[#e7c67a] font-light text-xs tracking-[0.2em] mb-1">
                      ⚜ &nbsp; F & P &nbsp; ⚜
                    </div>

                    <div className="my-auto flex flex-col justify-center items-center">
                      <h3 className="font-serif text-2xl font-semibold tracking-wide text-rose-950 mb-1 leading-tight">
                        {data.brideName} <span className="text-rose-600 font-accent text-3xl font-normal">&</span> {data.groomName}
                      </h3>
                      <p className="text-[10px] tracking-[0.2em] text-[#9a7a60] uppercase mb-3 font-sans">
                        Invitation de Mariage
                      </p>
                      <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#e7c67a] to-transparent mb-3" />
                      <p className="text-[11px] font-sans text-stone-500 font-medium leading-relaxed tracking-wider px-2 max-w-[320px]">
                        {data.weddingDateFormatted}
                        <br />
                        <span className="text-[10px] text-stone-400 font-normal">Yaoundé, Cameroun</span>
                      </p>
                    </div>

                    {/* Final CTA */}
                    <motion.button
                      onClick={handleFinalOpen}
                      className="mt-3 px-5 py-2 bg-gradient-to-r from-[#900C3F] to-[#DF016E] hover:from-[#c70039] hover:to-[#ff1493] text-white rounded-full text-[10px] font-sans tracking-[0.22em] uppercase border border-[#e7c67a]/50 shadow-[0_6px_20px_rgba(223,1,110,0.3)] flex items-center gap-2 cursor-pointer z-10"
                      whileHover={{ scale: 1.05, borderColor: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MailOpen className="w-3.5 h-3.5" />
                      Ouvrir l'invitation
                    </motion.button>
                  </div>
                </motion.div>

                {/* Top Flap (triangle folding down) */}
                <motion.div
                  className="top-flap"
                  style={{ transformOrigin: "top center", transition: "none" }}
                  animate={{
                    rotateX: isOpening ? 180 : 0,
                    zIndex: isOpening ? 0 : 5
                  }}
                  transition={{
                    rotateX: { duration: 0.9, ease: "easeInOut" },
                    zIndex: { delay: isOpening ? 0.45 : 0.45 }
                  }}
                >
                  <div className="flap-pattern" />
                </motion.div>

                {/* Front Pocket */}
                <div className="front-pocket">
                  <div className="front-pattern" />
                </div>

                {/* Interactive pulsing glow around the seal */}
                {!isOpening && (
                  <motion.div
                    className="absolute left-1/2 bottom-[24px] -translate-x-1/2 w-28 h-28 rounded-full bg-rose-400/20 blur-md pointer-events-none z-5"
                    animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}

                {/* Wax Seal (Monogram) */}
                <motion.div
                  className="monogram cursor-pointer flex flex-col items-center justify-center select-none"
                  style={{ transition: "none" }}
                  onClick={!isOpening ? handleOpen : undefined}
                  animate={{
                    scale: isOpening ? 0 : 1,
                    opacity: isOpening ? 0 : 1,
                    rotate: isOpening ? -15 : -2,
                    y: isOpening ? 50 : 0
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.08, rotate: 1 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <span className="font-accent text-[30px] font-normal leading-none tracking-normal text-white">{initials}</span>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex items-center gap-2 text-stone-300 z-10"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span className="text-[10px] font-sans tracking-[0.22em] uppercase">
              {!isOpening ? "Cliquez sur le sceau pour ouvrir" : "Un instant magique vous attend"}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
