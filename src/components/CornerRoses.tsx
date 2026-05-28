import { motion } from "motion/react";

interface CornerRosesProps {
  // Allow choosing specific corners (e.g., only bottom-left and top-right like the envelope screen)
  corners?: ("top-left" | "top-right" | "bottom-left" | "bottom-right")[];
}

export default function CornerRoses({ corners = ["top-left", "top-right", "bottom-left", "bottom-right"] }: CornerRosesProps) {
  // SVG of a lush bouquet: 3 roses of different sizes and several green leaves
  const renderBouquet = (rotationClass: string) => (
    <motion.div 
      animate={{ 
        y: [0, -4, 0],
        rotate: [0, 1.5, 0]
      }}
      transition={{ 
        repeat: Infinity, 
        duration: 5 + Math.random() * 2, 
        ease: "easeInOut" 
      }}
      className={`absolute w-24 h-24 sm:w-28 sm:h-28 pointer-events-none z-30 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] ${rotationClass}`}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          {/* Velvety Red Gradients for 3D Rose Depth */}
          <radialGradient id="corner-rose-radial-1" cx="50%" cy="50%" r="50%" fx="35%" fy="35%">
            <stop offset="0%" stopColor="#ff3366" />
            <stop offset="35%" stopColor="#DF016E" />
            <stop offset="75%" stopColor="#900C3F" />
            <stop offset="100%" stopColor="#3B0311" />
          </radialGradient>

          <radialGradient id="corner-rose-radial-2" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
            <stop offset="0%" stopColor="#E51D2E" />
            <stop offset="45%" stopColor="#C70039" />
            <stop offset="85%" stopColor="#580C2E" />
            <stop offset="100%" stopColor="#1C020B" />
          </radialGradient>

          {/* Deep Green Gradients for Leaves */}
          <linearGradient id="corner-leaf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7E9F6E" />
            <stop offset="40%" stopColor="#3C5E30" />
            <stop offset="100%" stopColor="#1B2E15" />
          </linearGradient>
        </defs>

        {/* 1. GREEN LEAVES IN BACKGROUND */}
        {/* Leaf 1: Pointing outwards bottom-left */}
        <path d="M45 45 C20 40, 10 65, 25 80 C40 85, 50 60, 45 45 Z" fill="url(#corner-leaf-grad)" stroke="#1B2E15" strokeWidth="0.6" />
        <path d="M45 45 C35 55, 30 65, 25 80" stroke="#0F1B0B" strokeWidth="0.8" />

        {/* Leaf 2: Pointing outwards top-right */}
        <path d="M45 45 C50 15, 80 15, 80 40 C75 60, 55 55, 45 45 Z" fill="url(#corner-leaf-grad)" stroke="#1B2E15" strokeWidth="0.6" />
        <path d="M45 45 C55 35, 65 30, 80 40" stroke="#0F1B0B" strokeWidth="0.8" />

        {/* Leaf 3: Pointing outwards bottom-right */}
        <path d="M45 45 C65 65, 85 85, 75 95 C60 90, 55 70, 45 45 Z" fill="url(#corner-leaf-grad)" stroke="#1B2E15" strokeWidth="0.6" />
        <path d="M45 45 C55 55, 65 65, 75 95" stroke="#0F1B0B" strokeWidth="0.8" />

        {/* Leaf 4: Pointing outwards top-left */}
        <path d="M45 45 C20 20, 15 5, 35 15 C45 25, 45 35, 45 45 Z" fill="url(#corner-leaf-grad)" stroke="#1B2E15" strokeWidth="0.6" />
        <path d="M45 45 C35 35, 30 25, 35 15" stroke="#0F1B0B" strokeWidth="0.8" />

        {/* 2. CHUBBY REALISTIC ROSE BLOOM 1 (MAIN CENTER FLOWER) */}
        {/* Shadow base */}
        <circle cx="45" cy="45" r="24" fill="#1C020B" opacity="0.35" />
        {/* Outer petal rings */}
        <path d="M45 22 C60 22, 68 35, 68 45 C68 58, 55 68, 45 68 C30 68, 22 55, 22 45 C22 30, 32 22, 45 22 Z" fill="url(#corner-rose-radial-1)" />
        {/* Mid petal definitions */}
        <path d="M45 27 C56 27, 63 36, 63 45 C63 54, 54 62, 45 62 C34 62, 27 52, 27 45 C27 34, 35 27, 45 27 Z" fill="url(#corner-rose-radial-2)" />
        
        {/* Overlapping rose petal swirls */}
        <path d="M35 40 C38 33, 48 30, 55 35 C50 42, 40 45, 35 40 Z" fill="#900C3F" stroke="#E51D2E" strokeWidth="0.4" />
        <path d="M55 35 C62 40, 60 52, 50 55 C45 48, 45 40, 55 35 Z" fill="#900C3F" stroke="#E51D2E" strokeWidth="0.4" />
        <path d="M50 55 C42 60, 32 55, 32 45 C38 43, 46 48, 50 55 Z" fill="#900C3F" stroke="#E51D2E" strokeWidth="0.4" />
        <path d="M32 45 C28 38, 35 32, 45 35 C42 42, 38 45, 32 45 Z" fill="#900C3F" stroke="#E51D2E" strokeWidth="0.4" />
        
        {/* Rose core center */}
        <path d="M45 38 C49 38, 52 41, 52 45 C52 49, 48 52, 45 52 C41 52, 38 48, 38 45 C38 41, 41 38, 45 38 Z" fill="url(#corner-rose-radial-1)" />
        <path d="M45 41 C47 41, 49 43, 49 45 C49 47, 47 49, 45 49 C43 49, 41 47, 41 45 C41 43, 43 41, 45 41 Z" fill="#DF016E" />
        <path d="M44 44 C45 43.5, 46 43.5, 46.5 44" stroke="#FFF0F5" strokeWidth="0.6" strokeLinecap="round" />

        {/* 3. SMALL ROSE BLOOM 2 (TOP-LEFT ACCENT) */}
        <circle cx="28" cy="28" r="14" fill="url(#corner-rose-radial-2)" />
        {/* Petal details */}
        <path d="M28 17 C34 17, 39 23, 39 28 C39 33, 33 39, 28 39 C22 39, 17 33, 17 28 C17 22, 22 17, 28 17 Z" fill="url(#corner-rose-radial-2)" opacity="0.9" />
        <circle cx="28" cy="28" r="8" fill="url(#corner-rose-radial-1)" />
        <circle cx="28" cy="28" r="4" fill="#C70039" />
        <path d="M27 27 C28 26.5, 29 26.5, 29.5 27" stroke="#FFF0F5" strokeWidth="0.5" strokeLinecap="round" />

        {/* 4. SMALL ROSE BLOOM 3 (BOTTOM-RIGHT ACCENT) */}
        <circle cx="68" cy="68" r="12" fill="url(#corner-rose-radial-2)" />
        {/* Petal details */}
        <path d="M68 59 C73 59, 77 64, 77 68 C77 73, 73 77, 68 77 C62 77, 58 72, 58 68 C58 63, 62 59, 68 59 Z" fill="url(#corner-rose-radial-2)" opacity="0.9" />
        <circle cx="68" cy="68" r="7" fill="url(#corner-rose-radial-1)" />
        <circle cx="68" cy="68" r="3.5" fill="#C70039" />
      </svg>
    </motion.div>
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-25">
      {/* Top Left Corner */}
      {corners.includes("top-left") && renderBouquet("top-0 left-0 origin-top-left -translate-x-3 -translate-y-3 sm:-translate-x-1 sm:-translate-y-1 rotate-0")}

      {/* Top Right Corner */}
      {corners.includes("top-right") && renderBouquet("top-0 right-0 origin-top-right translate-x-3 -translate-y-3 sm:translate-x-1 sm:-translate-y-1 -rotate-90")}

      {/* Bottom Left Corner */}
      {corners.includes("bottom-left") && renderBouquet("bottom-0 left-0 origin-bottom-left -translate-x-3 translate-y-3 sm:-translate-x-1 sm:translate-y-1 rotate-90")}

      {/* Bottom Right Corner */}
      {corners.includes("bottom-right") && renderBouquet("bottom-0 right-0 origin-bottom-right translate-x-3 translate-y-3 sm:translate-x-1 sm:translate-y-1 rotate-180")}
    </div>
  );
}
