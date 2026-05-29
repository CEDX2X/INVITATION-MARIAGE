import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Music, VolumeX, Volume2, Pause, Play } from "lucide-react";

interface MusicPlayerProps {
  audioUrl: string;
  autoPlayTrigger: boolean;
}

export default function MusicPlayer({ audioUrl, autoPlayTrigger }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Attempt to play state whenever autoPlayTrigger becomes true
  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Lecture automatique bloquée par le navigateur : requiert un clic.");
        });
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Erreur d'initialisation audio : ", err);
        });
    }
  };

  if (!audioUrl) return null;

  return (
    <>
      <audio 
        ref={audioRef} 
        src={audioUrl} 
        loop 
        preload="metadata"
      />

      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={togglePlay}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative p-3.5 rounded-full shadow-[0_8px_30px_rgba(140,100,29,0.15)] border transition-all duration-500 flex items-center justify-center cursor-pointer ${
            isPlaying 
              ? "bg-gold-500 border-gold-400 text-white" 
              : "bg-white border-gold-200 text-gold-500"
          }`}
          title={isPlaying ? "Couper la musique" : "Activer la musique"}
        >
          {/* Subtle spinning aura */}
          {isPlaying && (
            <div className="absolute inset-0 rounded-full border border-gold-300 animate-ping opacity-35 pointer-events-none" />
          )}

          {/* Smooth spinning icon container */}
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ 
              repeat: isPlaying ? Infinity : 0, 
              duration: 8, 
              ease: "linear" 
            }}
            className="flex items-center justify-center"
          >
            <Music className="w-4 h-4 sm:w-5 h-5" />
          </motion.div>

          {/* Small badge representing mute state */}
          <div className="absolute -top-1 -right-1 bg-darksoft text-white rounded-full p-0.5 border border-white/20 text-[8px]">
            {isPlaying ? (
              <Volume2 className="w-2.5 h-2.5" />
            ) : (
              <VolumeX className="w-2.5 h-2.5 text-stone-300" />
            )}
          </div>
        </motion.button>
      </div>
    </>
  );
}
