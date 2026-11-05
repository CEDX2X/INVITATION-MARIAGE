import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface SparkleItem {
  id: number;
  top: number;
  left: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
}

export default function SparklesBackground() {
  const [sparkles, setSparkles] = useState<SparkleItem[]>([]);

  useEffect(() => {
    // Colors matching Royal Navy & Metallic Gold palette
    const colors = [
      "rgba(212, 175, 55, 0.8)",   // #D4AF37 (Or éclatant)
      "rgba(252, 232, 121, 0.85)", // #FCE879 (Or brillant)
      "rgba(229, 211, 179, 0.75)", // #E5D3B3 (Champagne beige)
      "rgba(251, 249, 245, 0.85)", // #FBF9F5 (Blanc ivoire)
      "rgba(184, 142, 83, 0.7)",   // #B88E53 (Or antique)
    ];

    const items: SparkleItem[] = [];
    const count = 48;

    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 3,
      });
    }

    setSparkles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {/* Background ambient radial glow in royal navy & gold */}
      <div className="absolute top-[20%] left-[10%] w-[380px] h-[380px] rounded-full bg-[#1c315e]/30 blur-[130px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[20%] right-[10%] w-[420px] h-[420px] rounded-full bg-[#d4af37]/10 blur-[140px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '11s' }} />
      <div className="absolute top-[50%] left-[45%] w-[320px] h-[320px] rounded-full bg-[#e5d3b3]/12 blur-[110px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '9s' }} />

      {/* Sparkling Stars */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: sparkle.color,
            boxShadow: `0 0 ${sparkle.size * 1.8}px ${sparkle.color}`,
          }}
          animate={{
            opacity: [0.1, 0.9, 0.1],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: sparkle.duration,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Cross-shaped twinkling stars */}
      {[...Array(12)].map((_, i) => {
        const top = Math.random() * 95 + 2;
        const left = Math.random() * 95 + 2;
        const color = i % 2 === 0 ? "#d4af37" : "#fce879";
        const delay = Math.random() * 6;
        const duration = Math.random() * 3 + 3;

        return (
          <motion.div
            key={`star-${i}`}
            className="absolute flex items-center justify-center pointer-events-none"
            style={{
              top: `${top}%`,
              left: `${left}%`,
            }}
            animate={{
              opacity: [0, 0.85, 0],
              scale: [0.5, 1.15, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration,
              delay,
              ease: "easeInOut",
            }}
          >
            <div 
              className="absolute w-3.5 h-[1.5px] rounded-full" 
              style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
            />
            <div 
              className="absolute h-3.5 w-[1.5px] rounded-full" 
              style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
