import { motion } from "motion/react";

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
        <svg 
          width="150" 
          height="45" 
          viewBox="0 0 150 45" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-[0_2px_8px_rgba(229,29,46,0.3)]"
        >
          {/* DEFINITIONS FOR GRADIENTS AND GLOWS */}
          <defs>
            {/* Deep Rich Red Gradients for 3D Petal Depth */}
            <linearGradient id="rose-deep" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B0311" />
              <stop offset="60%" stopColor="#5C0519" />
              <stop offset="100%" stopColor="#900C3F" />
            </linearGradient>
            
            <linearGradient id="rose-mid" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#900C3F" />
              <stop offset="50%" stopColor="#C70039" />
              <stop offset="100%" stopColor="#E51D2E" />
            </linearGradient>

            <linearGradient id="rose-bright" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E51D2E" />
              <stop offset="70%" stopColor="#DF016E" />
              <stop offset="100%" stopColor="#F39EBF" />
            </linearGradient>

            {/* Natural Green Gradients for Leaves and Stem */}
            <linearGradient id="leaf-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#506D44" />
              <stop offset="100%" stopColor="#253C1F" />
            </linearGradient>

            <linearGradient id="leaf-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7E9F6E" />
              <stop offset="100%" stopColor="#3C5E30" />
            </linearGradient>
          </defs>

          {/* 1. GREEN STEM (ALLONGÉ À L'HORIZONTALE DE GAUCHE À DROITE) */}
          {/* Stem path extending from center-left rose bud base rightwards */}
          <path 
            d="M48 22 C 60 20, 95 24, 138 21" 
            stroke="url(#leaf-grad-1)" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />

          {/* Thorns along the stem */}
          <path d="M72 21.5 L74 17.5 L76 22" fill="#253C1F" />
          <path d="M105 22.8 L103 26.8 L101 22.3" fill="#253C1F" />

          {/* 2. LEAF STRUCTURES (FEUILLES DE ROSE DISCRETES ET REALISTES) */}
          {/* Leaf 1 - Top Left branching from stem */}
          <path 
            d="M68 21 C 65 15, 60 12, 53 14 C 55 19, 62 21, 68 21 Z" 
            fill="url(#leaf-grad-2)" 
            stroke="#253C1F" 
            strokeWidth="0.5"
          />
          <path d="M53 14 C 58 16, 62 18, 68 21" stroke="#1B2E15" strokeWidth="0.5" /> {/* Leaf vein */}

          {/* Leaf 2 - Top Right branching from stem */}
          <path 
            d="M85 22 C 90 15, 100 13, 108 17 C 102 22, 94 23, 85 22 Z" 
            fill="url(#leaf-grad-1)" 
            stroke="#253C1F" 
            strokeWidth="0.5"
          />
          <path d="M85 22 C 94 21, 100 19, 108 17" stroke="#1B2E15" strokeWidth="0.5" />

          {/* Leaf 3 - Bottom Left branching from stem */}
          <path 
            d="M98 22.5 C 96 28.5, 88 33, 80 30 C 84 26, 92 23.5, 98 22.5 Z" 
            fill="url(#leaf-grad-2)" 
            stroke="#253C1F" 
            strokeWidth="0.5"
          />
          <path d="M80 30 C 86 28, 92 26, 98 22.5" stroke="#1B2E15" strokeWidth="0.5" />

          {/* Leaf 4 - Very small end leaf */}
          <path 
            d="M125 21.5 C 129 17.5, 134 18.5, 137 21 C 133 22, 129 22.5, 125 21.5 Z" 
            fill="url(#leaf-grad-1)" 
            stroke="#253C1F" 
            strokeWidth="0.4"
          />

          {/* Rose Sepals supporting the flower base */}
          <path d="M42 22 C 45 25, 47 24, 49 22 C 47 18, 45 18, 42 22 Z" fill="#253C1F" />
          <path d="M44 23.5 C 45 28, 43 30, 41 29 C 41 26, 42 25, 44 23.5 Z" fill="#253C1F" />
          <path d="M43 19 C 44 14, 42 12, 40 13 C 40 16, 41 17, 43 19 Z" fill="#253C1F" />

          {/* 3. BLOOMING ROSE FLOWER HEAD (BOUTON DE ROSE MAGNIFIQUE EN 3D) */}
          {/* Base outer dark petals for shadows */}
          <path 
            d="M25 25 C 22 17, 30 11, 38 14 C 44 16, 47 23, 44 29 C 38 34, 27 32, 25 25 Z" 
            fill="url(#rose-deep)" 
          />

          {/* Outer Layer Petals */}
          <path 
            d="M22 23 C 20 15, 28 8, 38 10 C 45 11, 49 19, 46 26 C 42 32, 28 32, 22 23 Z" 
            fill="url(#rose-mid)" 
          />

          {/* Left Wing Petal */}
          <path 
            d="M23 24 C 20 18, 25 12, 31 14 C 29 20, 26 26, 23 24 Z" 
            fill="url(#rose-deep)" 
          />
          <path 
            d="M24 23 C 21 19, 25 14, 30 15 C 28 20, 26 24, 24 23 Z" 
            fill="url(#rose-mid)" 
          />

          {/* Right Wing Petal */}
          <path 
            d="M36 14 C 42 12, 47 18, 45 25 C 40 25, 36 20, 36 14 Z" 
            fill="url(#rose-deep)" 
          />
          <path 
            d="M37 15 C 42 13, 46 18, 44 24 C 40 24, 37 20, 37 15 Z" 
            fill="url(#rose-mid)" 
          />

          {/* Bottom Cup Petal */}
          <path 
            d="M25 25 C 30 32, 42 32, 45 25 C 40 27, 29 27, 25 25 Z" 
            fill="url(#rose-bright)" 
          />
          
          {/* Middle Overlapping Petal Layers */}
          <path 
            d="M28 20 C 27 15, 34 12, 38 15 C 41 18, 39 23, 35 24 C 30 25, 29 23, 28 20 Z" 
            fill="url(#rose-deep)" 
          />
          <path 
            d="M29 20 C 28 16, 33 13, 37 16 C 40 18, 38 22, 35 23 C 31 24, 30 22, 29 20 Z" 
            fill="url(#rose-mid)" 
          />

          {/* Highlighted Petals for Center Bloom */}
          <path 
            d="M30 19 C 30 16, 34 14, 36 16 C 38 18, 37 21, 35 21 C 33 21, 31 20, 30 19 Z" 
            fill="url(#rose-bright)" 
          />

          {/* Inner core swirl */}
          <path 
            d="M32 18.5 C 33 17, 35 17, 35.5 18 C 35 19, 33 19, 32 18.5 Z" 
            fill="url(#rose-deep)" 
          />
          <path 
            d="M33 18 C 34 17.5, 34.5 17.5, 34.8 18" 
            stroke="#F39EBF" 
            strokeWidth="0.8" 
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Right fine line fading out away from the rose */}
      <div className="horizontal-rose-line line-right" />
    </div>
  );
}
