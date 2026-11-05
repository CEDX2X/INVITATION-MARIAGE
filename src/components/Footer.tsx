import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { WeddingData } from "../data/weddingData";

interface FooterProps {
  data: WeddingData;
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-white text-[#0b1220] py-20 px-6 text-center relative overflow-hidden flex flex-col items-center border-t border-[#d4af37]/20">
      <div className="max-w-xl w-full space-y-8 relative z-10">
        
        {/* Romantic Phrase Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="space-y-4 px-4"
        >
          <span className="text-[#d4af37] font-serif text-3xl">“</span>
          <p className="font-serif italic text-[#1c315e] text-lg sm:text-xl font-medium leading-relaxed">
            {data.romanticPhrase}
          </p>
          <span className="text-[#d4af37] font-serif text-3xl block -mt-2">”</span>
        </motion.div>

        {/* Divider Ornament */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-[1px] bg-[#d4af37]/50" />
          <span className="text-[#d4af37] text-sm">❦</span>
          <div className="w-10 h-[1px] bg-[#d4af37]/50" />
        </div>

        {/* Couple signatures */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="space-y-2"
        >
          <h4 className="font-serif text-3xl sm:text-4xl text-[#0b1220] tracking-wider font-bold">
            {data.brideName} & {data.groomName}
          </h4>
          <p className="text-[#334155] text-xs font-sans tracking-[0.25em] uppercase font-semibold">
            Nous avons hâte de célébrer ce moment avec vous.
          </p>
          <p className="text-[#b88e53] text-[10px] font-mono tracking-widest mt-1 font-bold">
            {data.weddingDateFormatted}
          </p>
        </motion.div>

        {/* Closing details */}
        <div className="pt-8 border-t border-[#d4af37]/20 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-[#64748b] text-[10px] sm:text-xs">
            <span>Fait d'amour et de poésie</span>
            <Heart size={10} className="text-[#d4af37] fill-[#d4af37]/30" />
          </div>
          <p className="text-[#94a3b8] text-[9px] font-sans tracking-widest uppercase">
            Invitation digitale créée avec amour
          </p>
        </div>
      </div>
    </footer>
  );
}
