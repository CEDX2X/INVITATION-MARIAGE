import { motion } from "motion/react";
import { Gift as GiftIcon, MessageCircle } from "lucide-react";
import { WeddingData } from "../data/weddingData";

interface GiftProps {
  data: WeddingData;
}

export default function Gift({ data }: GiftProps) {
  if (!data.showGiftSection) return null;

  const cleanedPhone = data.whatsappNumber.replace(/[^0-9+]/g, "").replace(/^\+/, "");
  const giftMessage = `Bonjour Gaëlle & Hermann, je souhaite vous adresser un cadeau / une contribution pour votre mariage 🎁✨`;
  const whatsappGiftUrl = `https://wa.me/${cleanedPhone}?text=${encodeURIComponent(giftMessage)}`;

  return (
    <section 
      id="cadeau" 
      className="py-20 px-6 bg-white text-[#0b1220] border-y border-[#d4af37]/20 flex flex-col items-center"
    >
      <div className="max-w-xl w-full text-center">
        {/* Header Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#d4af37]/50 bg-[#fbf9f5] mb-4 shadow-sm"
        >
          <GiftIcon className="w-5 h-5 text-[#d4af37]" />
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
          className="font-serif text-3xl text-[#0b1220] font-light mb-6"
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
          <p className="text-[#334155] font-sans font-light leading-relaxed text-sm sm:text-base">
            {data.giftNote}
          </p>

          <div className="flex items-center justify-center pt-2">
            {/* Direct WhatsApp Gift Button */}
            <a
              href={whatsappGiftUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-md border border-[#d4af37] text-[#1c315e] hover:text-[#0b1220] hover:bg-[#fbf9f5] active:scale-95 font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Envoyer un Cadeau via WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
