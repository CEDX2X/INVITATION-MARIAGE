import React from "react";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { WeddingData } from "../data/weddingData";

interface RSVPProps {
  data: WeddingData;
}

export default function RSVP({ data }: RSVPProps) {
  return (
    <section 
      id="rsvp" 
      className="py-24 px-6 md:px-12 bg-ivory text-darksoft relative flex flex-col items-center"
    >
      <div className="max-w-2xl w-full">
        {/* Header Title */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold-300 bg-gold-50 mb-4"
          >
            <MapPin className="w-5 h-5 text-gold-500" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="section-title mb-6"
          >
            Important
          </motion.h2>
          <div className="w-16 h-[2px] bg-gold-300 mx-auto mt-4" />
        </div>

        {/* Message Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="event-card p-8 sm:p-12 relative overflow-hidden text-center"
        >
          {/* Internal Elegant Double Border Frame */}
          <div className="absolute inset-4 sm:inset-5 border border-gold-200/40 pointer-events-none rounded-2xl" />

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-10 space-y-6"
          >
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-darksoft font-light leading-relaxed">
              Bien vouloir vous présenter sur le lieu de l'événement munis de votre carte nationale d'identité
            </p>
            
            <div className="w-16 h-[1px] bg-gold-300/50 mx-auto" />
            
            <p className="text-stone-400 text-sm font-sans italic">
              Merci pour votre compréhension
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
