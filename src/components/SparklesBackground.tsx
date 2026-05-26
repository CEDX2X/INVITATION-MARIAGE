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
    // Colors based on the user's theme palette: 
    // Fuchsia, Light Pink, Vibrant Red, Sweet Rose
    const colors = [
      "rgba(243, 158, 191, 0.7)", // #F39EBF (Rose poudré)
      "rgba(223, 1, 110, 0.75)",  // #DF016E (Fuchsia)
      "rgba(229, 29, 46, 0.7)",   // #E51D2E (Rouge éclatant)
      "rgba(199, 0, 57, 0.65)",   // #C70039 (Rouge carmin)
      "rgba(255, 240, 245, 0.8)", // #FFF0F5 (Blanc rosé doux)
    ];

    const items: SparkleItem[] = [];
    const count = 48; // Beautiful quantity across the layout without being heavy

    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        top: Math.random() * 100, // percentage
        left: Math.random() * 100, // percentage
        size: Math.random() * 4 + 2, // 2px to 6px
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 5, // up to 5s delay
        duration: Math.random() * 4 + 3, // 3s to 7s duration
      });
    }

    setSparkles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {/* Delicate background gradient glow matching the colors */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-[#DF016E]/5 blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#E51D2E]/4 blur-[130px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '11s' }} />
      <div className="absolute top-[50%] left-[45%] w-[300px] h-[300px] rounded-full bg-[#F39EBF]/4 blur-[100px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '9s' }} />

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
            boxShadow: `0 0 ${sparkle.size * 1.5}px ${sparkle.color}`,
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

      {/* Elegant cross-shaped twinkling stars */}
      {[...Array(10)].map((_, i) => {
        const top = Math.random() * 95 + 2;
        const left = Math.random() * 95 + 2;
        const color = i % 2 === 0 ? "#F39EBF" : "#DF016E";
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
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration,
              delay,
              ease: "easeInOut",
            }}
          >
            {/* Horizontal stroke */}
            <div 
              className="absolute w-3.5 h-[1.5px] rounded-full" 
              style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
            />
            {/* Vertical stroke */}
            <div 
              className="absolute h-3.5 w-[1.5px] rounded-full" 
              style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
