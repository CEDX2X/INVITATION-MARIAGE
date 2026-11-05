import { useEffect, useState } from "react";

interface PetalItem {
  id: number;
  left: number;       // starting horizontal position (%)
  size: number;       // scale size in px (e.g. 14 to 26)
  delay: number;      // animation delay (negative to pre-fill screen)
  duration: number;   // animation speed (s)
  drift: number;      // horizontal wind offset (px)
  rotation: number;   // final spin angle (deg)
  shapeType: 0 | 1 | 2; // randomized organic shapes
  gradientId: string;
}

export default function FallingPetals() {
  const [petals, setPetals] = useState<PetalItem[]>([]);

  useEffect(() => {
    const count = 32; // Organic density
    const items: PetalItem[] = [];

    for (let i = 0; i < count; i++) {
      const delay = Math.random() * 12 - 12; // -12s to 0s
      const duration = Math.random() * 6 + 7;  // 7s to 13s
      const left = Math.random() * 100;
      const size = Math.random() * 12 + 14;    // 14px to 26px
      const drift = Math.random() * 180 - 60;  // -60px to 120px drift
      const rotation = Math.random() * 360 + 270;
      const shapeType = Math.floor(Math.random() * 3) as 0 | 1 | 2;
      const gradientId = `petal-grad-${i % 3}`;

      items.push({
        id: i,
        left,
        size,
        delay,
        duration,
        drift,
        rotation,
        shapeType,
        gradientId,
      });
    }

    setPetals(items);
  }, []);

  // SVG Paths for organic petal shapes
  const petalPaths = [
    // 1. Rounded Heart-Shaped Petal
    "M12 2 C16.5 -1.5, 23 2, 22.5 10 C22 16.5, 17 21, 12 23 C7 21, 2 16.5, 1.5 10 C1 2, 7.5 -1.5, 12 2 Z",
    // 2. Asymmetric Swaying Petal
    "M10 2 C15.5 0, 21.5 5, 19.5 12 C17.5 18, 12.5 22.5, 8 23.5 C3.5 22, 0.5 16, 2.5 11 C4 6, 5.5 2.5, 10 2 Z",
    // 3. Delicate Pointed Petal Leaf
    "M12 1 C16 4, 18 10, 15.5 17 C13.5 21, 10.5 23.5, 8.5 24 C6.5 23.5, 3.5 21, 2.5 17 C-0.5 10, 1.5 4, 5.5 1 C8 -1, 10 -1, 12 1 Z"
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-25">
      {/* SVG Definitions for Pristine White & Metallic Gold Petal Gradients */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          {/* Gradient 0: Pure White Rose Petal */}
          <linearGradient id="petal-grad-0" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#f7f5f0" />
            <stop offset="100%" stopColor="#e2d8c3" />
          </linearGradient>

          {/* Gradient 1: Shimmering Metallic Gold Accent */}
          <linearGradient id="petal-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fce879" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#b88e53" />
          </linearGradient>

          {/* Gradient 2: Soft Cream & Ivory Rose Petal */}
          <linearGradient id="petal-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#faf6ee" />
            <stop offset="100%" stopColor="#d9cbb2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Render Falling Petals */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal-fall"
          style={{
            left: `${petal.left}%`,
            top: `-40px`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            ["--petal-drift" as any]: `${petal.drift}px`,
            ["--petal-rotation" as any]: `${petal.rotation}deg`,
          }}
        >
          <svg
            viewBox="0 0 25 25"
            width="100%"
            height="100%"
            fill={`url(#${petal.gradientId})`}
            className="filter drop-shadow-[1px_3px_5px_rgba(0,0,0,0.5)]"
            style={{
              transform: `rotate(${Math.random() * 90}deg)`,
              opacity: Math.random() * 0.25 + 0.75,
            }}
          >
            <path d={petalPaths[petal.shapeType]} />
            <path 
              d="M12 2 C12.5 8, 12.5 15, 12 22" 
              stroke="rgba(255, 255, 255, 0.22)" 
              strokeWidth="0.8" 
              fill="none" 
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
