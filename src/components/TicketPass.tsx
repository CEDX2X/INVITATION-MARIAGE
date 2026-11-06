import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { QrCode, Download, Share2, Check, Copy, Ticket } from "lucide-react";
import html2canvas from "html2canvas";
import confetti from "canvas-confetti";
import { WeddingData } from "../data/weddingData";

interface TicketPassProps {
  data: WeddingData;
  guestName?: string;
  ticketId?: string;
  onOpenScanner?: () => void;
}

export default function TicketPass({ data, guestName = "M. & Mme Invité Privilégié", ticketId = "GH-2026-8942", onOpenScanner }: TicketPassProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [selectedInspiration, setSelectedInspiration] = useState<string | null>(null);
  
  const ticketRef = useRef<HTMLDivElement | null>(null);

  const cleanPassId = ticketId.toUpperCase();

  // Simple QR SVG matrix generator
  const generateQrDataMatrix = (text: string) => {
    const matrix: boolean[][] = Array(21).fill(false).map(() => Array(21).fill(false));
    
    const setFinderPattern = (row: number, col: number) => {
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 7; c++) {
          if (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
            matrix[row + r][col + c] = true;
          }
        }
      }
    };

    setFinderPattern(0, 0);
    setFinderPattern(0, 14);
    setFinderPattern(14, 0);

    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = (hash << 5) - hash + text.charCodeAt(i);
      hash |= 0;
    }

    for (let r = 0; r < 21; r++) {
      for (let c = 0; c < 21; c++) {
        if ((r < 8 && c < 8) || (r < 8 && c > 12) || (r > 12 && c < 8)) continue;
        const cellHash = (hash + r * 31 + c * 17) % 3;
        matrix[r][c] = cellHash === 0;
      }
    }

    return matrix;
  };

  const qrMatrix = generateQrDataMatrix(`${data.brideName}-${data.groomName}-${cleanPassId}-${guestName}`);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#fce879', '#1c315e', '#ffffff']
    });
  };

  const handleDownloadTicket = async () => {
    if (!ticketRef.current) return;
    setIsDownloading(true);
    triggerConfetti();

    try {
      const canvas = await html2canvas(ticketRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: '#0b1220',
        logging: false,
      });

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `Billet_Mariage_${data.brideName}_${data.groomName}_${guestName.replace(/\s+/g, '_')}.png`;
      link.click();
    } catch (err) {
      console.error("Erreur lors de la génération du billet image :", err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShareWhatsApp = () => {
    const text = `Voici mon Billet d'Accès Privilège pour le Mariage de ${data.brideName} & ${data.groomName} 💍\n📅 Date : ${data.weddingDateFormatted}\n📍 Lieu : ${data.venueName}\nPass VIP : #${cleanPassId}\nInvité : ${guestName}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleCopyPassId = () => {
    navigator.clipboard.writeText(cleanPassId);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="billet" className="py-20 px-4 sm:px-6 bg-white text-[#0b1220] relative flex flex-col items-center">
      <div className="max-w-3xl w-full">
        {/* Header Title */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#d4af37]/50 bg-[#fbf9f5] mb-3 shadow-sm"
          >
            <Ticket className="w-5 h-5 text-[#d4af37]" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mb-4"
          >
            Accès Privilège
          </motion.h2>

          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl text-[#0b1220] font-light"
          >
            Votre Billet d'Entrée Privée
          </motion.h3>

          <p className="text-[#334155] text-xs mt-2 max-w-md mx-auto font-sans font-light">
            Présentez ce billet d'accès officiel muni de son QR code à l'entrée de la cérémonie.
          </p>
          <div className="w-16 h-[1px] bg-[#d4af37] mx-auto mt-4 opacity-70" />
        </div>

        {/* ELEGANT HANDCRAFTED WEDDING TICKET CARD */}
        <div className="relative max-w-xl mx-auto select-none" ref={ticketRef}>
          <div className="relative rounded-2xl bg-[#121e36] border border-[#d4af37]/50 shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
            
            {/* Top Gold Foil Bar */}
            <div className="bg-[#d4af37] py-2 px-6 flex items-center justify-between text-[#0b1220] font-sans font-bold text-[10px] uppercase tracking-[0.25em]">
              <span>CÉLÉBRATION CIVILE • PASS PRIVÉ</span>
              <span className="font-mono">#{cleanPassId}</span>
            </div>

            {/* Main Ticket Content */}
            <div className="p-6 sm:p-8 space-y-6 relative">
              {/* Couple Official Portrait Medallion */}
              <div className="flex flex-col items-center justify-center pt-2">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 border-2 border-[#d4af37] bg-[#121e36] shadow-lg mb-3">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#0b1220]">
                    <img 
                      src={data.couplePortrait} 
                      alt={`${data.brideName} & ${data.groomName}`} 
                      className="w-full h-full object-cover object-top filter brightness-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#e5d3b3] font-sans font-medium">
                  <span>Mariage Civil</span>
                  <span>·</span>
                  <span>Douala 2026</span>
                </div>
                
                <h3 className="couple-names text-4xl sm:text-5xl my-2">
                  {data.brideName} <span className="text-[#d4af37] font-serif italic text-2xl sm:text-3xl">&</span> {data.groomName}
                </h3>
                
                <p className="font-serif italic text-xs text-[#e5d3b3]">
                  Invitation personnelle réservée à l'attention de
                </p>
              </div>

              {/* Clean Unboxed Details Grid */}
              <div className="border-t border-b border-[#d4af37]/20 py-4 space-y-3 text-left">
                <div className="flex justify-between items-baseline border-b border-[#d4af37]/10 pb-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#e5d3b3] font-medium">Invité d'Honneur</span>
                  <span className="font-serif text-sm font-bold text-[#fce879]">{guestName}</span>
                </div>

                <div className="flex justify-between items-baseline border-b border-[#d4af37]/10 pb-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#e5d3b3] font-medium">Date & Heure</span>
                  <span className="font-sans text-xs font-semibold text-white">Samedi 26 Décembre 2026 · 14h00</span>
                </div>

                <div className="flex justify-between items-baseline border-b border-[#d4af37]/10 pb-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#e5d3b3] font-medium">Cérémonie Civile</span>
                  <span className="font-sans text-xs font-medium text-white">Mairie de Douala 5ème</span>
                </div>

                <div className="flex justify-between items-baseline border-b border-[#d4af37]/10 pb-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#e5d3b3] font-medium">Cocktail & Réception</span>
                  <span className="font-sans text-xs font-medium text-white">Restaurant Le Perroquet</span>
                </div>

                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] uppercase tracking-widest text-[#e5d3b3] font-medium">Code Vestimentaire</span>
                  <span className="font-serif font-bold text-[#fce879]">Chic & Glamour</span>
                </div>
              </div>
            </div>

            {/* Perforated Stub Line */}
            <div className="relative flex items-center justify-center my-1">
              <div className="w-full border-t border-dashed border-[#d4af37]/40 px-8" />
            </div>

            {/* Ticket Stub & QR Code Section */}
            <div className="p-6 bg-[#0d1627]/95 flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* QR Code Canvas Frame - Luxury Gold styling */}
              <div 
                onClick={() => setShowQrModal(true)}
                className="bg-[#0b1220] p-3 rounded-xl shadow-md border border-[#d4af37] cursor-pointer group transform hover:scale-105 transition-transform duration-300 flex flex-col items-center"
              >
                <div className="w-28 h-28 grid grid-cols-21 gap-[1px] bg-[#0b1220] p-1.5 rounded-lg border border-[#d4af37]/30">
                  {qrMatrix.map((row, r) => 
                    row.map((cell, c) => (
                      <div 
                        key={`${r}-${c}`} 
                        className={cell ? "bg-[#d4af37]" : "bg-[#0b1220]"}
                      />
                    ))
                  )}
                </div>
                <span className="text-[8px] uppercase tracking-widest text-[#d4af37] font-semibold mt-2 group-hover:text-[#fce879] transition-colors">
                  Afficher Grand Format
                </span>
              </div>

              {/* Clean Serial Info */}
              <div className="flex-1 text-center sm:text-left space-y-2">
                <div className="text-[11px] text-[#e5d3b3] font-sans font-light">
                  Scannez ce QR code à l'entrée de la cérémonie pour valider votre accès.
                </div>

                {/* Simulated Clean Barcode */}
                <div className="w-full max-w-[220px] h-9 bg-white/95 p-1 rounded flex items-center justify-between gap-[2px] mx-auto sm:mx-0">
                  {[...Array(32)].map((_, i) => {
                    const width = (i % 3 === 0 ? "w-[3px]" : i % 2 === 0 ? "w-[1.5px]" : "w-[1px]");
                    return <div key={i} className={`h-full bg-black ${width}`} />;
                  })}
                </div>

                <p className="font-mono text-[10px] text-[#d4af37] tracking-widest">
                  PASS #{cleanPassId} · DOUALA 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Toolbar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleDownloadTicket}
            disabled={isDownloading}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#d4af37] text-[#0b1220] font-bold text-xs uppercase tracking-wider hover:bg-[#fce879] active:scale-95 transition-all shadow-md cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{isDownloading ? "Génération en cours..." : "Télécharger mon Billet (PNG)"}</span>
          </button>

          <button
            onClick={handleShareWhatsApp}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#121e36] border border-[#d4af37]/60 text-[#fce879] hover:bg-[#1c315e] active:scale-95 font-semibold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-[#d4af37]" />
            <span>Envoyer sur WhatsApp</span>
          </button>

          <button
            onClick={handleCopyPassId}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#0d1627] border border-[#d4af37]/30 text-[#e5d3b3] hover:text-white active:scale-95 font-medium text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#d4af37]" />}
            <span>{copiedLink ? "Code Copié !" : "Copier le Code Pass"}</span>
          </button>

          {onOpenScanner && (
            <button
              onClick={onOpenScanner}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#1c315e] border border-[#d4af37]/50 text-[#fce879] hover:bg-[#d4af37] hover:text-[#0b1220] active:scale-95 font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
            >
              <QrCode className="w-4 h-4" />
              <span>Contrôle Accès</span>
            </button>
          )}
        </div>

        {/* DRESS CODE INSPIRATIONS MOODBOARD */}
        {data.dressCodeInspirations && data.dressCodeInspirations.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#d4af37]/20 text-center">
            <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-[#b88e53]">
              Dress Code Chic & Glamour
            </span>

            <h4 className="font-serif text-2xl sm:text-3xl text-[#0b1220] font-light mt-2">
              Inspirations Tenues pour les Invités
            </h4>
            
            <p className="text-[#334155] text-xs mt-2 max-w-lg mx-auto font-sans font-light">
              Guide de style officiel pour vous accompagner dans le choix de vos tenues.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-left">
              {data.dressCodeInspirations.map((item, idx) => (
                <motion.div
                  key={item.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  onClick={() => setSelectedInspiration(item.url)}
                  className="bg-[#fbf9f5] rounded-2xl overflow-hidden border border-[#d4af37]/35 shadow-sm group hover:border-[#d4af37] transition-all cursor-pointer"
                >
                  <div className="h-72 overflow-hidden relative">
                    <img 
                      src={item.url} 
                      alt={item.title} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    
                    <div className="absolute bottom-3 inset-x-3 text-left">
                      <span className="text-[10px] font-sans uppercase tracking-widest text-[#fce879] block font-semibold">
                        Inspiration
                      </span>
                      <h5 className="font-serif text-base font-bold text-white leading-tight">
                        {item.title}
                      </h5>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white border-t border-[#d4af37]/20">
                    <p className="text-[#334155] text-xs font-sans leading-snug">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Modal preview for inspiration images */}
        <AnimatePresence>
          {selectedInspiration && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInspiration(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-pointer"
            >
              <div className="relative max-w-xl w-full max-h-[85vh] flex flex-col items-center justify-center">
                <img 
                  src={selectedInspiration} 
                  alt="Inspiration Dress Code" 
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl border border-[#d4af37] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setSelectedInspiration(null)}
                  className="mt-4 px-6 py-2 rounded-full bg-[#d4af37] text-[#0b1220] font-bold text-xs uppercase tracking-wider hover:bg-[#fce879]"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fullscreen QR Code Modal */}
        <AnimatePresence>
          {showQrModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQrModal(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#121e36] p-8 rounded-3xl border border-[#d4af37] text-center max-w-sm w-full shadow-2xl flex flex-col items-center space-y-4"
              >
                <div className="p-4 bg-[#0b1220] rounded-2xl border-2 border-[#d4af37] shadow-xl">
                  <div className="w-56 h-56 grid grid-cols-21 gap-[2px] bg-[#0b1220] p-2 rounded-xl border border-[#d4af37]/30">
                    {qrMatrix.map((row, r) => 
                      row.map((cell, c) => (
                        <div 
                          key={`modal-${r}-${c}`} 
                          className={cell ? "bg-[#d4af37]" : "bg-[#0b1220]"}
                        />
                      ))
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-xl text-[#fce879] font-bold">
                    Pass Accès VIP #{cleanPassId}
                  </h4>
                  <p className="text-white font-medium text-sm mt-1">
                    {guestName}
                  </p>
                  <p className="text-[#e5d3b3] text-xs mt-2">
                    Présentez ce QR Code à l'hôte d'accueil à l'entrée de la cérémonie.
                  </p>
                </div>

                <button
                  onClick={() => setShowQrModal(false)}
                  className="px-6 py-2.5 rounded-md bg-[#d4af37] text-[#0b1220] font-bold text-xs uppercase tracking-wider hover:bg-[#fce879] transition-colors cursor-pointer"
                >
                  Fermer
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
