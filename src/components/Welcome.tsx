import { motion } from "motion/react";
import { WeddingData } from "../data/weddingData";

interface WelcomeProps {
  data: WeddingData;
}

export default function Welcome({ data }: WelcomeProps) {
  return (
    <section 
      id="bienvenue" 
      className="py-24 px-6 md:px-12 bg-ivory text-darksoft relative overflow-hidden flex flex-col items-center"
    >
      {/* Decorative Golden Corner Accents */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-gold-300/40 pointer-events-none" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-gold-300/40 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-gold-300/40 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-gold-300/40 pointer-events-none" />

      <div className="max-w-3xl w-full text-center flex flex-col items-center">
        {/* Subtle Flower/Heart Ornament divider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-gold-400 font-serif text-2xl tracking-widest mb-4"
        >
          ❦
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="text-xs md:text-sm tracking-[0.25em] uppercase text-gold-600 font-sans font-medium mb-3"
        >
          Bienvenue à notre célébration
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-gold-500 font-light my-4 tracking-wider leading-none"
        >
          {data.brideName} <span className="font-serif italic text-3xl md:text-4xl text-gold-400">&</span> {data.groomName}
        </motion.h3>

        {/* Elegant Photo with gold border */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="relative my-10 max-w-lg w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(140,100,29,0.12)] p-2 bg-white border border-gold-100"
        >
          <div className="w-full h-full rounded-xl overflow-hidden relative">
            <img 
              src={data.welcomeImage} 
              alt="Les mariés" 
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Elegant overlay to match styling */}
            <div className="absolute inset-0 bg-gold-600/5 mix-blend-multiply pointer-events-none" />
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
          <p className="text-stone-600 font-sans font-light leading-relaxed text-sm sm:text-base md:text-lg">
            {data.welcomeText}
          </p>
          
          <div className="flex justify-center items-center gap-4 py-6">
            <div className="w-16 h-[1px] bg-[#F39EBF]/30" />
            <span className="font-serif italic text-[#F39EBF] text-lg">Save the Date</span>
            <div className="w-16 h-[1px] bg-[#F39EBF]/30" />
          </div>

          {/* Elegant Dress Code section matching the card image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="my-8 p-6 rounded-2xl bg-black/40 border border-[#F39EBF]/10 max-w-md w-full"
          >
            <h4 className="font-serif text-lg text-white font-medium mb-3 tracking-wide">
              Dress Code : Chic & Glamour
            </h4>
            <p className="text-stone-400 text-xs font-sans tracking-wide mb-5">
              Faites briller notre journée en arborant les nuances de notre thème :
            </p>
            <div className="flex items-center justify-center gap-6 sm:gap-8">
              {/* Bordeaux */}
              <div className="flex flex-col items-center gap-2">
                <div 
                  className="w-12 h-12 rounded-full border border-white/20 shadow-md transform hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "#330314" }}
                />
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#F39EBF]/80 font-medium">Bordeaux</span>
              </div>
              {/* Red */}
              <div className="flex flex-col items-center gap-2">
                <div 
                  className="w-12 h-12 rounded-full border border-white/20 shadow-md transform hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "#E51D2E" }}
                />
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#F39EBF]/80 font-medium">Rouge</span>
              </div>
              {/* Fuchsia */}
              <div className="flex flex-col items-center gap-2">
                <div 
                  className="w-12 h-12 rounded-full border border-white/20 shadow-md transform hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "#DF016E" }}
                />
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#F39EBF]/80 font-medium">Fuchsia</span>
              </div>
              {/* Rose poudré */}
              <div className="flex flex-col items-center gap-2">
                <div 
                  className="w-12 h-12 rounded-full border border-white/20 shadow-md transform hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "#F39EBF" }}
                />
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#F39EBF]/80 font-medium">Rose poudré</span>
              </div>
            </div>
          </motion.div>

          {/* Elegant Snapchat Filter Button integration */}
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
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-gold-300 text-gold-300 hover:text-white hover:bg-gold-500/10 active:scale-95 font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                <span>📸 Filtre Snapchat du Mariage</span>
              </a>
              <span className="text-[10px] text-gold-300/60 tracking-wider font-sans font-light">
                Utilisez notre filtre spécial pour immortaliser vos photos de la journée !
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
