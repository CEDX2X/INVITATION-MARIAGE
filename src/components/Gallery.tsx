import { useState } from "react";
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
    // Secure body scroll lock when lightbox is active
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
      className="py-24 px-6 md:px-12 bg-white text-darksoft relative flex flex-col items-center"
    >
      <div className="max-w-5xl w-full">
        {/* Header Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold-300 bg-gold-50 mb-4"
          >
            <Image className="w-5 h-5 text-gold-500" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-gold-600 mb-2"
          >
            Souvenirs
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-darksoft font-light"
          >
            Notre Album Photo
          </motion.h3>
          <div className="w-16 h-[2px] bg-gold-300 mx-auto mt-4" />
        </div>

        {/* Gallery Grid (Bento/Collage style grid for premium visuals) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.galleryImages.map((image, index) => {
            // Distribute sizing for layout variation
            const sizeClass = 
              index === 0 ? "md:col-span-2 md:row-span-2 h-[350px] md:h-[482px]" : 
              index === 3 ? "md:col-span-2 h-[230px] md:h-[230px]" : 
              "h-[230px]";

            return (
              <motion.div
                key={image.url}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: index * 0.1 }}
                onClick={() => openLightbox(index)}
                className={`${sizeClass} relative rounded-3xl overflow-hidden cursor-pointer group shadow-sm bg-stone-50 border border-stone-100 hover:border-gold-300 transition-all duration-500`}
              >
                <img 
                  src={image.url} 
                  alt={image.caption} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Text Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gold-300 font-sans font-medium">
                      Album
                    </span>
                    <p className="font-serif text-white text-lg mt-0.5 font-light">
                      {image.caption}
                    </p>
                  </div>
                </div>
                
                {/* Soft glow frame on hover */}
                <div className="absolute inset-0 border border-gold-300/0 group-hover:border-gold-300/40 rounded-3xl transition-colors duration-500 pointer-events-none z-15" />
              </motion.div>
            );
          })}
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
