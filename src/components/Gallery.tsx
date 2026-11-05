import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Image, X, ChevronLeft, ChevronRight } from "lucide-react";
import { WeddingData } from "../data/weddingData";

interface GalleryProps {
  data: WeddingData;
}

export default function Gallery({ data }: GalleryProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
    document.body.style.overflow = "unset";
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev === null || prev === 0 ? data.galleryImages.length - 1 : prev - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev === null || prev === data.galleryImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section 
      id="galerie" 
      className="py-24 px-6 md:px-12 bg-white text-[#0b1220] relative flex flex-col items-center"
    >
      <div className="max-w-5xl w-full">
        {/* Header Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#d4af37]/50 bg-[#fbf9f5] mb-4 shadow-sm"
          >
            <Image className="w-5 h-5 text-[#d4af37]" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#1c315e] mb-2"
          >
            Souvenirs
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0b1220] font-light"
          >
            Notre Album Photo
          </motion.h3>
          <div className="w-16 h-[2px] bg-[#d4af37] mx-auto mt-4" />
        </div>

        {/* Main gallery preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.galleryImages.slice(0, 2).map((image, index) => {
            const sizeClass = index === 0 ? "md:col-span-2 h-[420px] md:h-[520px]" : "h-[320px] sm:h-[420px]";

            return (
              <motion.div
                key={image.url}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: index * 0.1 }}
                onClick={() => openLightbox(index)}
                className={`${sizeClass} relative rounded-3xl overflow-hidden cursor-pointer group shadow-sm bg-[#fbf9f5] border border-[#d4af37]/35 hover:border-[#d4af37] transition-all duration-500`}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-sans font-medium">
                      Album
                    </span>
                    <p className="font-serif text-white text-lg mt-0.5 font-light">
                      {image.caption}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 border border-[#d4af37]/0 group-hover:border-[#d4af37]/40 rounded-3xl transition-colors duration-500 pointer-events-none z-15" />
              </motion.div>
            );
          })}
        </div>

        {/* Dress code section */}
        <div className="mt-16 text-center">
          <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-[#b88e53]">
            Dress Code
          </span>
          <h4 className="font-serif text-3xl sm:text-4xl text-[#0b1220] mt-3 font-light">
            Palette & Inspiration pour la Soirée
          </h4>
          <div className="w-16 h-[2px] bg-[#d4af37] mx-auto mt-4" />
        </div>

        {/* Dress Code swatches matching the exact uploaded reference photo */}
        <div className="flex justify-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="p-6 sm:p-8 rounded-3xl bg-[#fbf9f5] border border-[#d4af37]/40 max-w-xl w-full text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
          >
            <h4 className="font-serif text-lg sm:text-xl text-[#0b1220] font-bold mb-2 tracking-wide">
              Chic, Élégance & Distinction
            </h4>
            <p className="text-[#334155] text-xs font-sans tracking-wide mb-6">
              Assortissez vos tenues aux nuances officielles de notre célébration :
            </p>
            <div className="grid grid-cols-5 gap-2 sm:gap-4 items-center justify-center">
              {/* Bleu Nuit */}
              <div className="flex flex-col items-center gap-2">
                <div 
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[#d4af37]/50 shadow-md transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                  style={{ backgroundColor: "#0b1220" }}
                  title="Bleu Nuit"
                />
                <span className="text-[9px] sm:text-[10px] uppercase font-sans tracking-wider text-[#0b1220] font-semibold">Bleu Nuit</span>
              </div>
              {/* Bleu Royal */}
              <div className="flex flex-col items-center gap-2">
                <div 
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[#d4af37]/50 shadow-md transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                  style={{ backgroundColor: "#1c315e" }}
                  title="Bleu Royal"
                />
                <span className="text-[9px] sm:text-[10px] uppercase font-sans tracking-wider text-[#0b1220] font-semibold">Bleu Royal</span>
              </div>
              {/* Or Métallique */}
              <div className="flex flex-col items-center gap-2">
                <div 
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[#d4af37]/50 shadow-md transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                  style={{ backgroundColor: "#d4af37" }}
                  title="Or Métallique"
                />
                <span className="text-[9px] sm:text-[10px] uppercase font-sans tracking-wider text-[#0b1220] font-semibold">Or Métallique</span>
              </div>
              {/* Champagne */}
              <div className="flex flex-col items-center gap-2">
                <div 
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[#d4af37]/50 shadow-md transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                  style={{ backgroundColor: "#e5d3b3" }}
                  title="Champagne"
                />
                <span className="text-[9px] sm:text-[10px] uppercase font-sans tracking-wider text-[#0b1220] font-semibold">Champagne</span>
              </div>
              {/* Blanc Ivoire */}
              <div className="flex flex-col items-center gap-2">
                <div 
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[#d4af37]/50 shadow-md transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                  style={{ backgroundColor: "#ffffff" }}
                  title="Blanc Ivoire"
                />
                <span className="text-[9px] sm:text-[10px] uppercase font-sans tracking-wider text-[#0b1220] font-semibold">Ivoire</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {data.galleryImages.slice(2).map((image, index) => (
            <motion.div
              key={image.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.08 }}
              onClick={() => openLightbox(index + 2)}
              className="h-[260px] relative rounded-3xl overflow-hidden cursor-pointer group shadow-md bg-[#121e36] border border-[#d4af37]/25 hover:border-[#d4af37] transition-all duration-500"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-sans font-medium">
                    Dress code
                  </span>
                  <p className="font-serif text-white text-lg mt-0.5 font-light">
                    {image.caption}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 border border-[#d4af37]/0 group-hover:border-[#d4af37]/40 rounded-3xl transition-colors duration-500 pointer-events-none z-15" />
            </motion.div>
          ))}
        </div>

        {/* Immersive Lightbox Modal */}
        <AnimatePresence>
          {activePhotoIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-black/95 backdrop-blur-[6px] z-50 flex items-center justify-center p-4"
            >
              <button 
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-55 cursor-pointer"
                aria-label="Fermer"
              >
                <X size={28} />
              </button>

              <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 rounded-full hover:bg-white/5 transition-colors z-55 cursor-pointer max-xs:hidden"
                aria-label="Précédent"
              >
                <ChevronLeft size={36} />
              </button>

              <div 
                className="relative max-w-3xl w-full max-h-[80vh] flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  key={activePhotoIndex}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={data.galleryImages[activePhotoIndex].url}
                  alt={data.galleryImages[activePhotoIndex].caption}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <motion.p 
                  key={`caption-${activePhotoIndex}`}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="font-serif italic text-white/90 text-center text-lg mt-4 font-light"
                >
                  {data.galleryImages[activePhotoIndex].caption}
                </motion.p>
              </div>

              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 rounded-full hover:bg-white/5 transition-colors z-55 cursor-pointer max-xs:hidden"
                aria-label="Suivant"
              >
                <ChevronRight size={36} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
