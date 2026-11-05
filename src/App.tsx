import { useState, useEffect } from "react";
import { QrCode, Ticket, ShieldCheck } from "lucide-react";
import SparklesBackground from "./components/SparklesBackground";
import Envelope from "./components/Envelope";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Countdown from "./components/Countdown";
import Program from "./components/Program";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import TicketPass from "./components/TicketPass";
import QRScannerModal from "./components/QRScannerModal";
import Gift from "./components/Gift";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import CornerRoses from "./components/CornerRoses";
import RoseSeparator from "./components/RoseSeparator";

import { weddingData } from "./data/weddingData";

export default function App() {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);
  const [guestName, setGuestName] = useState("M. & Mme Invité Privilégié");
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleOpenInvitation = () => {
    setIsInvitationOpened(true);
  };

  const handleTicketGenerated = (name: string) => {
    setGuestName(name);
  };

  return (
    <div className="relative min-h-screen bg-white text-[#0b1220] overflow-x-hidden">
      {/* Interactive Envelope Landing Screen */}
      <Envelope data={weddingData} onOpen={handleOpenInvitation} />

      <SparklesBackground />
      
      {/* Background Music Player */}
      <MusicPlayer 
        audioUrl={weddingData.audioMusicUrl} 
        autoPlayTrigger={isInvitationOpened} 
      />

      {/* Floating Header Navigation Bar */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#d4af37]/30 py-2.5 px-4 flex items-center justify-between gap-2 max-w-4xl mx-auto rounded-b-2xl shadow-md">
        <a href="#hero" className="font-serif text-sm font-bold text-[#0b1220] tracking-wider shrink-0 flex items-center gap-1.5">
          <span>{weddingData.brideName}</span>
          <span className="text-[#d4af37] italic">&</span>
          <span>{weddingData.groomName}</span>
        </a>

        <nav className="hidden sm:flex items-center gap-4 text-[11px] font-sans font-medium uppercase tracking-widest text-[#1c315e]">
          <a href="#programme" className="hover:text-[#d4af37] transition-colors">Programme</a>
          <a href="#lieu" className="hover:text-[#d4af37] transition-colors">Lieu</a>
          <a href="#billet" className="hover:text-[#d4af37] transition-colors text-[#d4af37] font-bold flex items-center gap-1">
            <Ticket className="w-3 h-3" />
            <span>Mon Billet</span>
          </a>
          <a href="#rsvp" className="hover:text-[#d4af37] transition-colors">RSVP</a>
        </nav>

        <button
          onClick={() => setIsScannerOpen(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1c315e] border border-[#d4af37]/50 text-[#fce879] hover:bg-[#d4af37] hover:text-[#0b1220] text-[10px] uppercase font-bold tracking-wider transition-all cursor-pointer shadow-sm"
          title="Contrôle d'accès QR Code"
        >
          <QrCode className="w-3.5 h-3.5" />
          <span className="hidden xs:inline">Scanner QR</span>
        </button>
      </header>

      {/* Main Page Layout */}
      <div className="invitation flex flex-col w-full relative pt-12">
        <CornerRoses />

        {/* 1. Hero Section */}
        <Hero 
          data={weddingData} 
          onOpen={handleOpenInvitation} 
          isOpen={isInvitationOpened} 
        />

        <RoseSeparator />

        {/* Core content sections wrapped in elegant container */}
        <div className="relative z-25">
          {/* 2. Welcome Section */}
          <Welcome data={weddingData} />

          <RoseSeparator />

          {/* 3. Countdown Section */}
          <Countdown data={weddingData} />

          <RoseSeparator />

          {/* 4. Timeline Program Section */}
          <Program data={weddingData} />

          <RoseSeparator />

          {/* 5. Venue & Maps Location Section */}
          <Location data={weddingData} />

          <RoseSeparator />

          {/* 6. Romantic Gallery & Dress Code Section */}
          <Gallery data={weddingData} />

          <RoseSeparator />

          {/* 7. Interactive Ticket Pass Section inspired by ticketpj */}
          <TicketPass 
            data={weddingData} 
            guestName={guestName}
            ticketId="GH-2026-8942"
            onOpenScanner={() => setIsScannerOpen(true)}
          />

          <RoseSeparator />

          {/* 8. Interactive RSVP Confirmation Section */}
          <RSVP 
            data={weddingData} 
            onTicketGenerated={handleTicketGenerated}
          />

          <RoseSeparator />

          {/* 9. Contribution Gifts Section */}
          <Gift data={weddingData} />

          <RoseSeparator />

          {/* 10. Footer Section */}
          <Footer data={weddingData} />
        </div>
      </div>

      {/* Access Control & QR Scanner Modal */}
      <QRScannerModal 
        data={weddingData}
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
      />
    </div>
  );
}
