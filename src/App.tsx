import { useState, useEffect } from "react";
import SparklesBackground from "./components/SparklesBackground";
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
import Envelope from "./components/Envelope";
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
    <div className="relative min-h-screen" style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Weeding%2FFIN%2F21d98fa2-e9df-454e-b10f-b907e245a892%20(2).JPG?alt=media&token=63753a10-0999-4090-b7e7-fd9dbd64f459')", backgroundSize: "cover", backgroundPosition: "center" }}>
      
      <SparklesBackground />
      
      {/* Immersive Background Music Player */}
      <MusicPlayer 
        audioUrl={weddingData.audioMusicUrl} 
        autoPlayTrigger={isInvitationOpened} 
      />

      {/* Main Page Layout */}
      <div className="invitation flex flex-col w-full relative">
        <CornerRoses />

        {/* Envelope modal at the very top */}
        {!isInvitationOpened && <Envelope data={weddingData} onOpen={handleOpenInvitation} />}
        
        {/* 1. Hero Section */}
        <Hero 
          data={weddingData} 
          onOpen={handleOpenInvitation} 
          isOpen={isInvitationOpened} 
        />

        <RoseSeparator />

        {/* Core content sections wrapped in elegant container */}
        <div className="relative z-25">
          
          {/* 2. Welcome/Introduction Section */}
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

          {/* 6. Romantic Gallery Section */}
          <Gallery data={weddingData} />

          <RoseSeparator />

          {/* 7. Interactive RSVP Confirmation Section */}
          <RSVP data={weddingData} />

          <RoseSeparator />

          {/* 8. Contribution Gifts Section */}
          <Gift data={weddingData} />

          <RoseSeparator />

          {/* 9. Romantic Quote Summary & Footer Section */}
          <Footer data={weddingData} />
          
        </div>
      </div>
    </div>
  );
}
