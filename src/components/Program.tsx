import { motion } from "motion/react";
import { Church, Camera, Wine, Utensils, Music, Heart, Calendar } from "lucide-react";
import { WeddingData } from "../data/weddingData";

interface ProgramProps {
  data: WeddingData;
}

const getEventIcon = (name: string) => {
  const size = 20;
  switch (name) {
    case "church":
      return <Church size={size} className="text-[#d4af37]" />;
    case "rings":
      return <Heart size={size} className="text-[#d4af37] fill-[#d4af37]/20" />;
    case "camera":
      return <Camera size={size} className="text-[#d4af37]" />;
    case "glass":
      return <Wine size={size} className="text-[#d4af37]" />;
    case "plate":
      return <Utensils size={size} className="text-[#d4af37]" />;
    case "music":
      return <Music size={size} className="text-[#d4af37]" />;
    default:
      return <Heart size={size} className="text-[#d4af37]" />;
  }
};

export default function Program({ data }: ProgramProps) {
  return (
    <section 
      id="programme" 
      className="py-24 px-6 md:px-12 bg-white text-[#0b1220] relative flex flex-col items-center"
    >
      <div className="max-w-3xl w-full">
        {/* Header Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#d4af37]/50 bg-[#fbf9f5] mb-4 shadow-sm"
          >
            <Calendar className="w-5 h-5 text-[#d4af37]" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="section-title mb-6"
          >
            Le Déroulement
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0b1220] font-light"
          >
            Programme de la Journée
          </motion.h3>
          <div className="w-16 h-[2px] bg-[#d4af37] mx-auto mt-4" />
        </div>

        {/* Timeline Event List */}
        <div className="program-list relative pl-6 sm:pl-8 border-l border-[#d4af37]/40 max-w-xl mx-auto space-y-12">
          {data.program.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timing Node Anchor */}
              <div className="absolute -left-[38px] sm:-left-[46px] top-1 bg-[#fbf9f5] border border-[#d4af37] w-8 h-8 rounded-full flex items-center justify-center shadow-md group-hover:border-[#b88e53] transition-all duration-300 transform group-hover:scale-110 z-15">
                {getEventIcon(event.iconName)}
              </div>

              {/* Card Container */}
              <div className="event-card p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2">
                  <span className="font-mono text-xs font-bold bg-[#1c315e] text-white border border-[#d4af37]/30 px-3 py-1 rounded-md tracking-wider">
                    {event.time}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-[#0b1220]">
                    {event.title}
                  </h4>
                </div>
                <p className="text-[#334155] font-sans font-light text-xs sm:text-sm mt-1 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
