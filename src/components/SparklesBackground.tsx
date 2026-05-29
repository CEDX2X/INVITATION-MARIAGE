import { useEffect, useState } from "react";
import { motion } from "motion/react";

const glowVariants = [
  "absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-[#DF016E]/5 blur-[120px] pointer-events-none mix-blend-screen animate-pulse duration-[8000ms]",
  "absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#E51D2E]/4 blur-[130px] pointer-events-none mix-blend-screen animate-pulse duration-[11000ms]",
  "absolute top-[50%] left-[45%] w-[300px] h-[300px] rounded-full bg-[#F39EBF]/4 blur-[100px] pointer-events-none mix-blend-screen animate-pulse duration-[9000ms]",
];

const starVariants = [
  {
    position: "top-[8%] left-[12%]",
    colorClass: "bg-[#F39EBF] shadow-[0_0_6px_#F39EBF]",
    delay: 0.2,
    duration: 3.8,
  },
  {
    position: "top-[18%] left-[78%]",
    colorClass: "bg-[#DF016E] shadow-[0_0_6px_#DF016E]",
    delay: 1.1,
    duration: 4.2,
  },
  {
    position: "top-[28%] left-[48%]",
    colorClass: "bg-[#F39EBF] shadow-[0_0_6px_#F39EBF]",
    delay: 0.8,
    duration: 3.3,
  },
  {
    position: "top-[42%] left-[22%]",
    colorClass: "bg-[#DF016E] shadow-[0_0_6px_#DF016E]",
    delay: 1.6,
    duration: 4.5,
  },
  {
    position: "top-[52%] left-[68%]",
    colorClass: "bg-[#F39EBF] shadow-[0_0_6px_#F39EBF]",
    delay: 0.4,
    duration: 3.9,
  },
  {
    position: "top-[62%] left-[34%]",
    colorClass: "bg-[#DF016E] shadow-[0_0_6px_#DF016E]",
    delay: 2.1,
    duration: 4.1,
  },
  {
    position: "top-[72%] left-[82%]",
    colorClass: "bg-[#F39EBF] shadow-[0_0_6px_#F39EBF]",
    delay: 1.3,
    duration: 3.7,
  },
  {
    position: "top-[82%] left-[18%]",
    colorClass: "bg-[#DF016E] shadow-[0_0_6px_#DF016E]",
    delay: 2.7,
    duration: 4.6,
  },
  {
    position: "top-[88%] left-[54%]",
    colorClass: "bg-[#F39EBF] shadow-[0_0_6px_#F39EBF]",
    delay: 1.9,
    duration: 3.5,
  },
  {
    position: "top-[92%] left-[38%]",
    colorClass: "bg-[#DF016E] shadow-[0_0_6px_#DF016E]",
    delay: 2.4,
    duration: 4.3,
  },
];

export default function SparklesBackground() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateVisibility = () => {
      setShowAnimation(mediaQuery.matches && !reduceMotion.matches);
    };

    updateVisibility();
    mediaQuery.addEventListener?.("change", updateVisibility);
    reduceMotion.addEventListener?.("change", updateVisibility);

    return () => {
      mediaQuery.removeEventListener?.("change", updateVisibility);
      reduceMotion.removeEventListener?.("change", updateVisibility);
    };
  }, []);

  if (!showAnimation) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {glowVariants.map((variant, index) => (
        <div key={index} className={variant} />
      ))}

      {starVariants.map((star, index) => (
        <motion.div
          key={index}
          className={`absolute ${star.position} flex items-center justify-center pointer-events-none ${star.colorClass}`}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: star.duration,
            delay: star.delay,
            ease: "easeInOut",
          }}
        >
          <div className={`absolute w-3.5 h-[1.5px] rounded-full ${star.colorClass}`} />
          <div className={`absolute h-3.5 w-[1.5px] rounded-full ${star.colorClass}`} />
        </motion.div>
      ))}
    </div>
  );
}
