import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Gift as GiftIcon, Copy, Check, Heart } from "lucide-react";
import { WeddingData } from "../data/weddingData";

interface GiftProps {
  data: WeddingData;
}

export default function Gift({ data }: GiftProps) {
  const [copied, setCopied] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  if (!data.showGiftSection) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(data.mobileMoneyNumber);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section 
      id="cadeau" 
      className="py-20 px-6 bg-white text-darksoft border-y border-gold-100 flex flex-col items-center"
    >
      <div className="max-w-xl w-full text-center">
        {/* Header Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold-300 bg-gold-50 mb-4"
        >
          <GiftIcon className="w-5 h-5 text-gold-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="section-title mb-6"
        >
          Cadeaux & Contributions
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl text-darksoft font-light mb-6"
        >
          Notre Liste de Mariage
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="space-y-6 max-w-lg mx-auto"
        >
          <p className="text-stone-500 font-sans font-light leading-relaxed text-sm sm:text-base">
            {data.giftNote}
          </p>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold-300 text-gold-600 hover:text-gold-700 hover:bg-gold-50/40 active:scale-95 font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer"
          >
            <GiftIcon className="w-4 h-4" />
            <span>{showDetails ? "Masquer les détails" : "Envoyer un cadeau / contribution"}</span>
          </button>
        </motion.div>

        {/* Expandable Golden Accented Copyable Card */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, y: -15, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -15, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 overflow-hidden max-w-sm mx-auto"
            >
              <div className="event-card p-5 text-left space-y-4 shadow-sm relative">
                <div className="absolute top-4 right-4 pointer-events-none opacity-10">
                  <Heart className="w-12 h-12 text-gold-500 fill-gold-500" />
                </div>

                <div>
                  <h4 className="font-serif text-lg font-medium text-stone-800">
                    Mobile Money / Orange Money
                  </h4>
                  <p className="text-stone-400 text-[10px] uppercase font-sans tracking-widest mt-1">
                    Titulaire du compte : {data.mobileMoneyName}
                  </p>
                </div>

                <div className="flex items-center justify-between bg-white rounded-xl p-3 border border-stone-100 mt-2">
                  <div className="font-mono text-stone-700 text-sm font-medium tracking-wide">
                    {data.mobileMoneyNumber}
                  </div>
                  
                  <button
                    onClick={handleCopy}
                    className="p-2 transition-colors duration-300 bg-gold-50 hover:bg-gold-100 text-gold-600 rounded-lg cursor-pointer"
                    title="Copier le numéro"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {copied && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-emerald-700 font-sans text-[11px] font-semibold text-center mt-1"
                  >
                    ✓ Numéro copié avec succès !
                  </motion.p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
