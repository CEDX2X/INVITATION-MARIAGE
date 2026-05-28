import { motion } from "motion/react";
import realHorizontalRose from "../assets/roses/real_horizontal_rose.png";

export default function RoseSeparator() {
  return (
    <div className="horizontal-rose-divider select-none pointer-events-none">
      {/* Left fine line fading in towards the rose */}
      <div className="horizontal-rose-line" />

      {/* Centered Horizontal Rose Container with hover micro-animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="horizontal-rose-container"
      >
        <img 
          src={realHorizontalRose} 
          alt="Rose Rouge Réaliste" 
          className="w-36 h-auto max-h-[48px] object-contain filter drop-shadow-[0_3px_12px_rgba(229,29,46,0.45)]"
        />
      </motion.div>

      {/* Right fine line fading out away from the rose */}
      <div className="horizontal-rose-line line-right" />
    </div>
  );
}
