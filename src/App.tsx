import { useState, useEffect } from "react";
import SparklesBackground from "./components/SparklesBackground";
import Envelope from "./components/Envelope";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Countdown from "./components/Countdown";
import Program from "./components/Program";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Gift from "./components/Gift";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import CornerRoses from "./components/CornerRoses";
import RoseSeparator from "./components/RoseSeparator";

import { weddingData } from "./data/weddingData";

export default function App() {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleOpenInvitation = () => {
    setIsInvitationOpened(true);
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

      {/* Main Page Layout */}
      <div className="invitation flex flex-col w-full relative pt-0">
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

          {/* 7. Interactive RSVP Confirmation Section */}
          <RSVP 
            data={weddingData} 
          />

          <RoseSeparator />

          {/* 8. Contribution Gifts Section */}
          <Gift data={weddingData} />

          <RoseSeparator />

          {/* 9. Footer Section */}
          <Footer data={weddingData} />
        </div>
      </div>
    </div>
  );
}
