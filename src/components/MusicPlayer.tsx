import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Music, VolumeX, Volume2 } from "lucide-react";

interface MusicPlayerProps {
  audioUrl: string;
  autoPlayTrigger: boolean;
}

export default function MusicPlayer({ audioUrl, autoPlayTrigger }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startPlayback = () => {
    if (!audioRef.current) return;
    audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.log("Attente d'interaction tactile pour lancer la musique :", err);
      });
  };

  useEffect(() => {
    if (autoPlayTrigger) {
      startPlayback();
    }
  }, [autoPlayTrigger]);

  // Unlock audio playback on mobile Safari / Chrome upon first user touch anywhere
  useEffect(() => {
    const handleFirstTouch = () => {
      if (audioRef.current && audioRef.current.paused) {
        startPlayback();
      }
    };

    window.addEventListener("touchstart", handleFirstTouch, { passive: true });
    window.addEventListener("click", handleFirstTouch, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleFirstTouch);
      window.removeEventListener("click", handleFirstTouch);
    };
  }, []);

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
        preload="auto"
        playsInline
      />

      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={togglePlay}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative p-3.5 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] border transition-all duration-300 flex items-center justify-center cursor-pointer ${
            isPlaying 
              ? "bg-[#d4af37] border-[#fce879] text-[#0b1220]" 
              : "bg-[#121e36] border-[#d4af37]/40 text-[#d4af37]"
          }`}
          title={isPlaying ? "Couper la musique" : "Activer la musique"}
        >
          {isPlaying && (
            <div className="absolute inset-0 rounded-xl border border-[#fce879] animate-ping opacity-35 pointer-events-none" />
          )}

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

          <div className="absolute -top-1 -right-1 bg-[#0b1220] text-[#fbf9f5] rounded-full p-0.5 border border-[#d4af37]/30 text-[8px]">
            {isPlaying ? (
              <Volume2 className="w-2.5 h-2.5 text-[#fce879]" />
            ) : (
              <VolumeX className="w-2.5 h-2.5 text-[#e5d3b3]" />
            )}
          </div>
        </motion.button>
      </div>
    </>
  );
}
