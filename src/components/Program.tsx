import { motion } from "motion/react";
import { Church, Camera, Wine, Utensils, Music, Heart, Calendar } from "lucide-react";
import { WeddingData, ProgramEvent } from "../data/weddingData";

interface ProgramProps {
  data: WeddingData;
}

// Map icon string to Lucide component
const getEventIcon = (name: string) => {
  const size = 20;
  switch (name) {
    case "church":
      return <Church size={size} className="text-gold-500" />;
    case "rings":
      return <Heart size={size} className="text-gold-500 fill-gold-200/30" />;
    case "camera":
      return <Camera size={size} className="text-gold-500" />;
    case "glass":
      return <Wine size={size} className="text-gold-500" />;
    case "plate":
      return <Utensils size={size} className="text-gold-500" />;
    case "music":
      return <Music size={size} className="text-gold-500" />;
    default:
      return <Heart size={size} className="text-gold-500" />;
  }
};

export default function Program({ data }: ProgramProps) {
  return (
    <section 
      id="programme" 
      className="py-24 px-6 md:px-12 bg-white text-darksoft relative flex flex-col items-center"
    >
      <div className="max-w-3xl w-full">
        {/* Header Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold-300 bg-gold-50 mb-4"
          >
            <Calendar className="w-5 h-5 text-gold-500" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-gold-600 mb-2"
          >
            Le Déroulement
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-darksoft font-light"
          >
            Programme de la Journée
          </motion.h3>
          <div className="w-16 h-[2px] bg-gold-300 mx-auto mt-4" />
        </div>

        {/* Timeline Event List */}
        <div className="relative pl-6 sm:pl-8 border-l border-gold-200/80 max-w-xl mx-auto space-y-12">
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
              <div className="absolute -left-[38px] sm:-left-[46px] top-1 bg-white border border-gold-300 w-8 h-8 rounded-full flex items-center justify-center shadow-sm group-hover:border-gold-500 transition-all duration-300 transform group-hover:scale-110 z-15">
                {getEventIcon(event.iconName)}
              </div>

              {/* Card Container */}
              <div className="bg-ivory/50 rounded-2xl p-5 sm:p-6 border border-stone-100 hover:border-gold-200 hover:bg-gold-50/10 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_25px_rgba(140,100,29,0.03)]">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2">
                  <span className="font-mono text-xs font-semibold bg-gold-100 text-gold-700 px-3 py-1 rounded-full tracking-wider">
                    {event.time}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-medium text-stone-800">
                    {event.title}
                  </h4>
                </div>
                <p className="text-stone-500 font-sans font-light text-xs sm:text-sm mt-1 leading-relaxed">
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
