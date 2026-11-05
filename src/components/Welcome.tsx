import { motion } from "motion/react";
import { WeddingData } from "../data/weddingData";

interface WelcomeProps {
  data: WeddingData;
}

export default function Welcome({ data }: WelcomeProps) {
  return (
    <section 
      id="bienvenue" 
      className="py-24 px-6 md:px-12 bg-white text-[#0b1220] relative overflow-hidden flex flex-col items-center"
    >
      {/* Decorative Golden Corner Accents */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-[#d4af37]/40 pointer-events-none" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-[#d4af37]/40 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-[#d4af37]/40 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-[#d4af37]/40 pointer-events-none" />

      <div className="max-w-3xl w-full text-center flex flex-col items-center">
        {/* Subtle Flower/Heart Ornament divider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-[#d4af37] font-serif text-2xl tracking-widest mb-4"
        >
          ❦
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#1c315e] font-sans font-semibold mb-3"
        >
          Bienvenue à notre célébration
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="couple-names my-4 leading-none text-[#0b1220]!"
          style={{ color: "#0b1220" }}
        >
          {data.brideName} <span className="font-serif italic text-3xl md:text-4xl text-[#d4af37]">&</span> {data.groomName}
        </motion.h3>

        {/* Elegant Photo with gold border */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="relative my-10 max-w-lg w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-2 bg-[#fbf9f5] border border-[#d4af37]/40"
        >
          <div className="w-full h-full rounded-xl overflow-hidden relative">
            <img 
              src={data.welcomeImage} 
              alt="Les mariés" 
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Invitation Text Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="space-y-6 px-4 md:px-8 mt-4"
        >
          <p className="text-[#1e293b] font-sans font-light leading-relaxed text-sm sm:text-base md:text-lg">
            {data.welcomeText}
          </p>
          
          <div className="floral-divider py-6">
            <span className="floral-divider-icon">✨</span>
            <span className="font-serif italic text-[#b88e53] text-base tracking-widest font-semibold ml-1">Save the Date</span>
          </div>

          {/* Snapchat Filter Button */}
          {data.snapchatFilterUrl && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="pt-2 pb-4 flex flex-col items-center gap-2"
            >
              <a
                href={data.snapchatFilterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md border border-[#d4af37] text-[#1c315e] hover:text-[#0b1220] hover:bg-[#fbf9f5] active:scale-95 font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                <span>📸 Filtre Snapchat du Mariage</span>
              </a>
              <span className="text-[10px] text-[#475569] tracking-wider font-sans font-light">
                Utilisez notre filtre spécial pour immortaliser vos photos de la journée !
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
