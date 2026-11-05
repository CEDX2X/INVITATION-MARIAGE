// User uploaded horizontal white rose branch image
const horizontalRoseUrl = "/assets/aistudio/1_6369cbdd.png";

export default function RoseSeparator() {
  return (
    <div className="horizontal-rose-divider select-none pointer-events-none my-10">
      {/* Left fine line fading in towards the rose */}
      <div className="horizontal-rose-line" />

      <div className="horizontal-rose-container flex items-center justify-center gap-3 px-4">
        <span className="text-[#d4af37] text-xs">✧</span>
        <img
          src={horizontalRoseUrl}
          alt="Branche de roses blanches"
          className="w-40 h-auto sm:w-52 sm:max-h-[120px] object-contain filter drop-shadow-[0_4px_14px_rgba(212,175,55,0.3)]"
        />
        <span className="text-[#d4af37] text-xs">✧</span>
      </div>

      {/* Right fine line fading out away from the rose */}
      <div className="horizontal-rose-line line-right" />
    </div>
  );
}
