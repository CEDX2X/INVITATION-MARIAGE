// Remote single rose used between sections
const horizontalRoseUrl = "https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Weeding%2Fgh.png?alt=media&token=11889638-2ba5-4a78-a809-a8411a1b64b4";

export default function RoseSeparator() {
  return (
    <div className="horizontal-rose-divider select-none pointer-events-none">
      {/* Left fine line fading in towards the rose */}
      <div className="horizontal-rose-line" />

      <div className="horizontal-rose-container">
        <img
          src={horizontalRoseUrl}
          alt="Rose décorative centrale"
          loading="lazy"
          className="w-40 h-auto sm:w-56 sm:max-h-[120px] object-contain filter drop-shadow-[0_6px_18px_rgba(229,29,46,0.45)]"
        />
      </div>

      {/* Right fine line fading out away from the rose */}
      <div className="horizontal-rose-line line-right" />
    </div>
  );
}
