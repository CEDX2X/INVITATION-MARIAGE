import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Heart, HeartOff, CheckCircle, Ticket } from "lucide-react";
import confetti from "canvas-confetti";
import { WeddingData } from "../data/weddingData";

interface RSVPProps {
  data: WeddingData;
  onTicketGenerated?: (guestName: string) => void;
}

export default function RSVP({ data, onTicketGenerated }: RSVPProps) {
  const [fullName, setFullName] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [guestCount, setGuestCount] = useState("1");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || attending === null) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#fce879', '#1c315e', '#ffffff']
    });

    if (onTicketGenerated) {
      onTicketGenerated(fullName);
    }

    const presenceEmoji = attending ? "🎉 Oui, avec grand plaisir !" : "😔 Non, avec regrets";
    
    const whatsappMessage = 
`Mariage de ${data.brideName} & ${data.groomName} 💍
-----------------------------------
RÉPONSE D'INVITATION (RSVP)

👤 Nom complet : ${fullName}
✨ Présence : ${presenceEmoji}
👥 Invitation : ${attending ? "1 Personne (Pass Individuel - Strictement Personnel)" : "0"}

💬 Message pour les mariés : 
"${message || "Tous nos vœux de bonheur pour ce magnifique voyage !"}"

-----------------------------------
Merci pour votre invitation !`;

    const cleanedPhone = data.whatsappNumber.replace(/[^0-9+]/g, "").replace(/^\+/, "");
    const waUrl = `https://wa.me/${cleanedPhone}?text=${encodeURIComponent(whatsappMessage)}`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(waUrl, "_blank");
      // Scroll to ticket section if present
      const ticketElem = document.getElementById("billet");
      if (ticketElem) {
        ticketElem.scrollIntoView({ behavior: "smooth" });
      }
    }, 1800);
  };

  return (
    <section 
      id="rsvp" 
      className="py-24 px-6 md:px-12 bg-white text-[#0b1220] relative flex flex-col items-center"
    >
      <div className="max-w-2xl w-full">
        {/* Header Title */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#d4af37]/50 bg-[#fbf9f5] mb-4 shadow-sm"
          >
            <Send className="w-5 h-5 text-[#d4af37]" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="section-title mb-6"
          >
            S'il vous plaît
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0b1220] font-light"
          >
            Confirmer votre Présence (RSVP)
          </motion.h3>
          <p className="text-[#1c315e] text-[11px] sm:text-xs tracking-widest uppercase font-mono mt-3 font-semibold">
            Merci de bien vouloir répondre avant le 15 Décembre 2026
          </p>
          <div className="w-16 h-[2px] bg-[#d4af37] mx-auto mt-4" />
        </div>

        {/* RSVP Card container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="event-card p-6 sm:p-10 relative overflow-hidden bg-[#fbf9f5]"
        >
          <div className="absolute inset-4 sm:inset-5 border border-[#d4af37]/35 pointer-events-none rounded-2xl" />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="rsvp-form"
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10 py-2 px-1"
              >
                {/* Full name input */}
                <div className="space-y-2">
                  <label htmlFor="fullname" className="block text-xs uppercase tracking-widest font-sans font-semibold text-[#1c315e]">
                    Nom & Prénom <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    id="fullname"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ex: M. Jean-Paul Mbarga"
                    className="w-full bg-white border border-[#d4af37]/40 rounded-xl px-4 py-3 text-[#0b1220] text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37] transition-colors placeholder-[#64748b]"
                  />
                </div>

                {/* Yes / No segment choice */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest font-sans font-semibold text-[#1c315e]">
                    Présence <span className="text-[#d4af37]">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      id="opt-present"
                      onClick={() => setAttending(true)}
                      className={`flex items-center justify-center gap-2 py-4 px-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        attending === true
                          ? "bg-[#1c315e] border-[#d4af37] text-white shadow-md font-bold"
                          : "bg-white border-[#d4af37]/30 text-[#0b1220] hover:border-[#d4af37]"
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${attending === true ? "fill-[#d4af37] text-[#d4af37]" : "text-[#1c315e]"}`} />
                      <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide">Présent(e)</span>
                    </button>
                    <button
                      type="button"
                      id="opt-absent"
                      onClick={() => setAttending(false)}
                      className={`flex items-center justify-center gap-2 py-4 px-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        attending === false
                          ? "bg-[#334155] border-[#d4af37]/60 text-white shadow-md font-bold"
                          : "bg-white border-[#d4af37]/30 text-[#0b1220] hover:border-[#d4af37]"
                      }`}
                    >
                      <HeartOff className="w-4 h-4 text-[#1c315e]" />
                      <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide">Absent(e)</span>
                    </button>
                  </div>
                </div>

                {/* Single guest invitation pass badge */}
                <AnimatePresence>
                  {attending === true && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2 overflow-hidden"
                    >
                      <label className="block text-xs uppercase tracking-widest font-sans font-semibold text-[#1c315e]">
                        Nombre de Personnes
                      </label>
                      <div className="w-full bg-[#fbf9f5] border border-[#d4af37]/60 rounded-xl px-4 py-3 text-[#0b1220] text-xs font-sans font-medium flex items-center justify-between shadow-sm">
                        <span className="font-semibold text-[#0b1220]">1 Personne (Pass Individuel)</span>
                        <span className="text-[10px] uppercase font-bold text-[#b88e53] bg-[#d4af37]/15 px-2.5 py-1 rounded-md border border-[#d4af37]/30">
                          Strictement Personnel
                        </span>
                      </div>
                      <p className="text-[10px] text-[#475569] italic font-sans">
                        Chaque invitation est personnelle et valable pour un seul convive.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Custom message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest font-sans font-semibold text-[#1c315e]">
                    Message aux mariés
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Un mot chaleureux pour notre union..."
                    className="w-full bg-white border border-[#d4af37]/40 rounded-xl px-4 py-3 text-[#0b1220] text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37] transition-colors resize-none placeholder-[#64748b]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={attending === null}
                  className={`w-full rsvp-button ${
                    attending === null ? "opacity-55 cursor-not-allowed pointer-events-none" : ""
                  }`}
                >
                  Générer mon Billet & Confirmer via WhatsApp
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="rsvp-submitted"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 px-4 space-y-5 flex flex-col items-center relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-[#fbf9f5] border border-[#d4af37] flex items-center justify-center text-[#d4af37] shadow-sm">
                  <CheckCircle className="w-10 h-10 text-[#d4af37]" />
                </div>
                
                <h4 className="font-serif text-2xl sm:text-3xl text-[#0b1220] font-bold">
                  Billet d'Accès Généré !
                </h4>
                
                <p className="text-[#334155] font-sans font-light leading-relaxed text-sm sm:text-base max-w-sm">
                  {attending 
                    ? `Merci ${fullName} ! Votre Billet VIP muni de son QR Code est prêt. Redirection vers WhatsApp...` 
                    : "Nous vous remercions chaleureusement d'avoir répondu. Redirection en cours vers WhatsApp..."}
                </p>

                <div className="inline-flex items-center gap-2 text-xs text-[#b88e53] font-semibold tracking-wider uppercase bg-white border border-[#d4af37]/40 py-2.5 px-5 rounded-md shadow-sm">
                  <Ticket className="w-4 h-4 text-[#d4af37]" />
                  <span>Pass d'accès VIP généré avec succès</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
