import { motion } from "motion/react";
import { MapPin, Compass, ExternalLink } from "lucide-react";
import { WeddingData } from "../data/weddingData";

interface LocationProps {
  data: WeddingData;
}

export default function Location({ data }: LocationProps) {
  const embedQuery = encodeURIComponent(data.venueAddress);
  const embedUrl = `https://maps.google.com/maps?q=${embedQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section 
      id="lieu" 
      className="py-24 px-6 md:px-12 bg-white text-[#0b1220] relative flex flex-col items-center"
    >
      <div className="max-w-4xl w-full">
        {/* Header Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#d4af37]/50 bg-[#fbf9f5] mb-4 shadow-sm"
          >
            <MapPin className="w-5 h-5 text-[#d4af37]" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="section-title mb-6"
          >
            Le Lieu
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0b1220] font-light"
          >
            Où se dire Oui ?
          </motion.h3>
          <div className="w-16 h-[2px] bg-[#d4af37] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text and Info block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <h4 className="font-serif text-2xl sm:text-3xl text-[#0b1220] font-bold">
              {data.venueName}
            </h4>
            
            <p className="text-[#334155] font-sans font-light leading-relaxed text-sm sm:text-base max-w-md">
              Nous avons choisi ce havre de paix élégant pour partager ces moments précieux de fête et de complicité avec vous.
            </p>

            {/* Address box */}
            <div className="event-card p-5 text-left w-full max-w-md shadow-md">
              <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
              <div>
                <p className="font-sans font-semibold text-xs uppercase tracking-wider text-[#b88e53]">
                  Adresse
                </p>
                <p className="font-sans font-medium text-[#0b1220] text-sm mt-1 leading-relaxed">
                  {data.venueAddress}
                </p>
              </div>
            </div>

            {/* Google Maps Button */}
            <a 
              href={data.venueGoogleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#d4af37] text-[#0b1220] hover:bg-[#fce879] active:scale-95 font-sans text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer w-full sm:w-auto justify-center"
            >
              <Compass className="w-4 h-4 text-[#0b1220]" />
              <span>Voir sur Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#0b1220]" />
            </a>
          </motion.div>

          {/* Map Embed block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="lg:col-span-7 bg-[#fbf9f5] rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#d4af37]/40 p-2 h-[320px] sm:h-[400px]"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <iframe
                title="Carte du lieu"
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter brightness-[0.98] contrast-[1.02]"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
