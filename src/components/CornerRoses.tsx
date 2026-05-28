// Remote corner roses image (placed on extremities of the site)
const cornerRosesUrl = "https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Weeding%2F4.png?alt=media&token=dd450cbd-4915-4d37-b529-487a9ef5982d";

interface CornerRosesProps {
  // Allow choosing specific corners (e.g., only bottom-left and top-right like the envelope screen)
  corners?: ("top-left" | "top-right" | "bottom-left" | "bottom-right")[];
}

export default function CornerRoses({ corners = ["top-left", "top-right", "bottom-left", "bottom-right"] }: CornerRosesProps) {
  // Bouquet image rendered with gentle sway animation and responsive scaling
  // `extraClasses` lets callers increase size/offset so we can render multiple overlapping bouquets
  const renderBouquet = (rotationClass: string, extraClasses = "") => (
    <div
      className={`absolute pointer-events-none z-30 filter drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)] ${extraClasses} ${rotationClass}`}
    >
      <img 
        src={cornerRosesUrl} 
        alt="Bouquet de Roses Réaliste" 
        className="w-full h-full object-contain"
      />
    </div>
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-25">
      {/* Top Left Corner - several overlapping bouquets, larger and more numerous */}
      {corners.includes("top-left") && (
        <>
          {renderBouquet("top-0 left-0 origin-top-left -translate-x-2 -translate-y-2 sm:-translate-x-1 sm:-translate-y-1 rotate-0", "w-40 h-40 sm:w-48 sm:h-48 -translate-x-1 -translate-y-1")}
          {renderBouquet("top-0 left-0 origin-top-left -translate-x-8 -translate-y-6 sm:-translate-x-6 sm:-translate-y-4 rotate-6", "w-32 h-32 sm:w-36 sm:h-36 -translate-x-6 -translate-y-4")}
          {renderBouquet("top-0 left-0 origin-top-left -translate-x-2 -translate-y-14 sm:-translate-x-1 sm:-translate-y-10 rotate-330", "w-24 h-24 sm:w-28 sm:h-28 -translate-x-2 -translate-y-8")}
        </>
      )}

      {/* Top Right Corner - several overlapping bouquets, larger and more numerous */}
      {corners.includes("top-right") && (
        <>
          {renderBouquet("top-0 right-0 origin-top-right translate-x-2 -translate-y-2 sm:translate-x-1 sm:-translate-y-1 -rotate-90", "w-40 h-40 sm:w-48 sm:h-48 translate-x-1 -translate-y-1")}
          {renderBouquet("top-0 right-0 origin-top-right translate-x-8 -translate-y-6 sm:translate-x-6 sm:-translate-y-4 -rotate-84", "w-32 h-32 sm:w-36 sm:h-36 translate-x-6 -translate-y-4")}
          {renderBouquet("top-0 right-0 origin-top-right translate-x-2 -translate-y-14 sm:translate-x-1 sm:-translate-y-10 -rotate-120", "w-24 h-24 sm:w-28 sm:h-28 translate-x-2 -translate-y-8")}
        </>
      )}

      {/* Bottom Left Corner - several overlapping bouquets, larger and more numerous */}
      {corners.includes("bottom-left") && (
        <>
          {renderBouquet("bottom-0 left-0 origin-bottom-left -translate-x-2 translate-y-2 sm:-translate-x-1 sm:translate-y-1 rotate-90", "w-40 h-40 sm:w-48 sm:h-48 -translate-x-1 translate-y-1")}
          {renderBouquet("bottom-0 left-0 origin-bottom-left -translate-x-8 translate-y-6 sm:-translate-x-6 sm:translate-y-4 rotate-120", "w-32 h-32 sm:w-36 sm:h-36 -translate-x-6 translate-y-4")}
          {renderBouquet("bottom-0 left-0 origin-bottom-left -translate-x-2 translate-y-14 sm:-translate-x-1 sm:translate-y-10 rotate-60", "w-24 h-24 sm:w-28 sm:h-28 -translate-x-2 translate-y-8")}
        </>
      )}

      {/* Bottom Right Corner - several overlapping bouquets, larger and more numerous */}
      {corners.includes("bottom-right") && (
        <>
          {renderBouquet("bottom-0 right-0 origin-bottom-right translate-x-2 translate-y-2 sm:translate-x-1 sm:translate-y-1 rotate-180", "w-40 h-40 sm:w-48 sm:h-48 translate-x-1 translate-y-1")}
          {renderBouquet("bottom-0 right-0 origin-bottom-right translate-x-8 translate-y-6 sm:translate-x-6 sm:translate-y-4 rotate-200", "w-32 h-32 sm:w-36 sm:h-36 translate-x-6 translate-y-4")}
          {renderBouquet("bottom-0 right-0 origin-bottom-right translate-x-2 translate-y-14 sm:translate-x-1 sm:translate-y-10 rotate-240", "w-24 h-24 sm:w-28 sm:h-28 translate-x-2 translate-y-8")}
        </>
      )}
    </div>
  );
}
