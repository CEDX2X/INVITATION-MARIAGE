import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { WeddingData } from "../data/weddingData";

interface FooterProps {
  data: WeddingData;
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-darksoft text-white/90 py-20 px-6 text-center relative overflow-hidden flex flex-col items-center">
      {/* Decorative starry glowing background elements */}
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-gold-400/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-gold-400/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-xl w-full space-y-8 relative z-10">
        
        {/* Romantic Phrase Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="space-y-4 px-4"
        >
          <span className="text-gold-300 font-serif text-3xl">“</span>
          <p className="font-serif italic text-gold-100 text-lg sm:text-xl font-light leading-relaxed">
            {data.romanticPhrase}
          </p>
          <span className="text-gold-300 font-serif text-3xl block -mt-2">”</span>
        </motion.div>

        {/* Divider Ornament */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-[1px] bg-gold-300/30" />
          <span className="text-gold-400 text-sm">❦</span>
          <div className="w-10 h-[1px] bg-gold-300/30" />
        </div>

        {/* Couple signatures */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="space-y-2"
        >
          <h4 className="font-serif text-3xl sm:text-4xl text-gold-300 tracking-wider">
            {data.brideName} & {data.groomName}
          </h4>
          <p className="text-white/65 text-xs font-sans tracking-[0.25em] uppercase font-light">
            Nous avons hâte de célébrer ce moment avec vous.
          </p>
          <p className="text-white/50 text-[10px] font-mono tracking-widest mt-1">
            {data.weddingDateFormatted}
          </p>
        </motion.div>

        {/* Closing details */}
        <div className="pt-8 border-t border-white/5 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-stone-500 text-[10px] sm:text-xs">
            <span>Fait d'amour et de poésie</span>
            <Heart size={10} className="text-gold-400/60 fill-gold-400/20" />
          </div>
          <p className="text-stone-500 text-[9px] font-sans tracking-widest uppercase">
            Invitation digitale créée avec amour
          </p>
        </div>
      </div>
    </footer>
  );
}
