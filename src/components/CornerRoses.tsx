// User uploaded white roses corner image
const cornerRosesUrl = "/assets/aistudio/2_f42631b9.png";

interface CornerRosesProps {
  corners?: ("top-left" | "top-right" | "bottom-left" | "bottom-right")[];
}

export default function CornerRoses({ corners = ["top-left", "top-right", "bottom-left", "bottom-right"] }: CornerRosesProps) {
  const renderBouquet = (rotationClass: string, extraClasses = "") => (
    <div
      className={`absolute pointer-events-none z-30 filter drop-shadow-[0_4px_16px_rgba(212,175,55,0.25)] ${extraClasses} ${rotationClass}`}
    >
      <img 
        src={cornerRosesUrl} 
        alt="Roses Blanches Élégantes" 
        className="w-full h-full object-contain"
      />
    </div>
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-25">
      {/* Top Left Corner */}
      {corners.includes("top-left") && (
        <>
          {renderBouquet("top-0 left-0 origin-top-left -translate-x-2 -translate-y-2 sm:-translate-x-1 sm:-translate-y-1 rotate-0", "w-40 h-40 sm:w-48 sm:h-48 -translate-x-1 -translate-y-1")}
          {renderBouquet("top-0 left-0 origin-top-left -translate-x-8 -translate-y-6 sm:-translate-x-6 sm:-translate-y-4 rotate-6", "w-32 h-32 sm:w-36 sm:h-36 -translate-x-6 -translate-y-4")}
          {renderBouquet("top-0 left-0 origin-top-left -translate-x-2 -translate-y-14 sm:-translate-x-1 sm:-translate-y-10 rotate-330", "w-24 h-24 sm:w-28 sm:h-28 -translate-x-2 -translate-y-8")}
        </>
      )}

      {/* Top Right Corner */}
      {corners.includes("top-right") && (
        <>
          {renderBouquet("top-0 right-0 origin-top-right translate-x-2 -translate-y-2 sm:translate-x-1 sm:-translate-y-1 -rotate-90", "w-40 h-40 sm:w-48 sm:h-48 translate-x-1 -translate-y-1")}
          {renderBouquet("top-0 right-0 origin-top-right translate-x-8 -translate-y-6 sm:translate-x-6 sm:-translate-y-4 -rotate-84", "w-32 h-32 sm:w-36 sm:h-36 translate-x-6 -translate-y-4")}
          {renderBouquet("top-0 right-0 origin-top-right translate-x-2 -translate-y-14 sm:translate-x-1 sm:-translate-y-10 -rotate-120", "w-24 h-24 sm:w-28 sm:h-28 translate-x-2 -translate-y-8")}
        </>
      )}

      {/* Bottom Left Corner */}
      {corners.includes("bottom-left") && (
        <>
          {renderBouquet("bottom-0 left-0 origin-bottom-left -translate-x-2 translate-y-2 sm:-translate-x-1 sm:translate-y-1 rotate-90", "w-40 h-40 sm:w-48 sm:h-48 -translate-x-1 translate-y-1")}
          {renderBouquet("bottom-0 left-0 origin-bottom-left -translate-x-8 translate-y-6 sm:-translate-x-6 sm:translate-y-4 rotate-120", "w-32 h-32 sm:w-36 sm:h-36 -translate-x-6 translate-y-4")}
          {renderBouquet("bottom-0 left-0 origin-bottom-left -translate-x-2 translate-y-14 sm:-translate-x-1 sm:translate-y-10 rotate-60", "w-24 h-24 sm:w-28 sm:h-28 -translate-x-2 translate-y-8")}
        </>
      )}

      {/* Bottom Right Corner */}
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
