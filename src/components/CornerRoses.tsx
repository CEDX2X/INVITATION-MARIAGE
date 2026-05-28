import { motion } from "motion/react";
// Remote corner roses image (placed on extremities of the site)
const cornerRosesUrl = "https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Weeding%2F4.png?alt=media&token=dd450cbd-4915-4d37-b529-487a9ef5982d";

interface CornerRosesProps {
  // Allow choosing specific corners (e.g., only bottom-left and top-right like the envelope screen)
  corners?: ("top-left" | "top-right" | "bottom-left" | "bottom-right")[];
}

export default function CornerRoses({ corners = ["top-left", "top-right", "bottom-left", "bottom-right"] }: CornerRosesProps) {
  // Bouquet image rendered with gentle sway animation and responsive scaling
  const renderBouquet = (rotationClass: string) => (
      <motion.div 
      animate={{ 
        y: [0, -3, 0],
        rotate: [0, 1.2, 0]
      }}
      transition={{ 
        repeat: Infinity, 
        duration: 5 + Math.random() * 2, 
        ease: "easeInOut" 
      }}
      className={`absolute w-24 h-24 sm:w-28 sm:h-28 pointer-events-none z-30 filter drop-shadow-[0_6px_15px_rgba(0,0,0,0.55)] ${rotationClass}`}
      >
      <img 
        src={cornerRosesUrl} 
        alt="Bouquet de Roses Réaliste" 
        className="w-full h-full object-contain"
      />
    </motion.div>
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-25">
      {/* Top Left Corner - oriented pointing down-right */}
      {corners.includes("top-left") && renderBouquet("top-0 left-0 origin-top-left -translate-x-2 -translate-y-2 sm:-translate-x-1 sm:-translate-y-1 rotate-0")}

      {/* Top Right Corner - oriented pointing down-left */}
      {corners.includes("top-right") && renderBouquet("top-0 right-0 origin-top-right translate-x-2 -translate-y-2 sm:translate-x-1 sm:-translate-y-1 -rotate-90")}

      {/* Bottom Left Corner - oriented pointing up-right */}
      {corners.includes("bottom-left") && renderBouquet("bottom-0 left-0 origin-bottom-left -translate-x-2 translate-y-2 sm:-translate-x-1 sm:translate-y-1 rotate-90")}

      {/* Bottom Right Corner - oriented pointing up-left */}
      {corners.includes("bottom-right") && renderBouquet("bottom-0 right-0 origin-bottom-right translate-x-2 translate-y-2 sm:translate-x-1 sm:translate-y-1 rotate-180")}
    </div>
  );
}
