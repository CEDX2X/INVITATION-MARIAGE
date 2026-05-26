import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Heart, HeartOff, CheckCircle } from "lucide-react";
import { WeddingData } from "../data/weddingData";

interface RSVPProps {
  data: WeddingData;
}

export default function RSVP({ data }: RSVPProps) {
  const [fullName, setFullName] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [guestCount, setGuestCount] = useState("1");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || attending === null) return;

    // Build the formatted romantic French WhatsApp message
    const presenceEmoji = attending ? "🎉 Oui, avec grand plaisir !" : "😔 Non, avec regrets";
    const presenceText = attending 
      ? `Oui, je/nous serons présent(s) pour célébrer ce grand jour avec vous ! ✨`
      : `Malheureusement, je/nous ne pourrons pas être présents physiquement, mais nous serons avec vous par la pensée. ❤️`;
    
    const whatsappMessage = 
`Mariage de ${data.brideName} & ${data.groomName} 💍
-----------------------------------
RÉPONSE D'INVITATION (RSVP)

👤 Nom complet : ${fullName}
✨ Présence : ${presenceEmoji}
👥 Nombre de personnes : ${attending ? guestCount : "0"}

💬 Message pour les mariés : 
"${message || "Tous nos vœux de bonheur pour ce magnifique voyage !"}"

-----------------------------------
Merci pour votre invitation !`;

    // Strip non-numeric values from phone number
    const cleanedPhone = data.whatsappNumber.replace(/[^0-9+]/g, "").replace(/^\+/, "");
    const waUrl = `https://wa.me/${cleanedPhone}?text=${encodeURIComponent(whatsappMessage)}`;

    // Show success feedback
    setSubmitted(true);

    // Open WhatsApp link after short delay
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 1500);
  };

  return (
    <section 
      id="rsvp" 
      className="py-24 px-6 md:px-12 bg-ivory text-darksoft relative flex flex-col items-center"
    >
      <div className="max-w-2xl w-full">
        {/* Header Title */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold-300 bg-gold-50 mb-4"
          >
            <Send className="w-5 h-5 text-gold-500" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-gold-600 mb-2"
          >
            S'il vous plaît
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-darksoft font-light"
          >
            Confirmer votre Présence (RSVP)
          </motion.h3>
          <p className="text-stone-400 text-[11px] sm:text-xs tracking-widest uppercase font-mono mt-3">
            Merci de bien vouloir répondre avant le 15 août 2026
          </p>
          <div className="w-16 h-[2px] bg-gold-300 mx-auto mt-4" />
        </div>

        {/* RSVP Card container resembling high end texture paper card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-gold-200/50 shadow-[0_20px_50px_rgba(140,100,29,0.08)] relative overflow-hidden"
        >
          {/* Internal Elegant Double Border Frame */}
          <div className="absolute inset-4 sm:inset-5 border border-gold-200/40 pointer-events-none rounded-2xl" />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="rsvp-form"
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10 py-2 px-1"
              >
                {/* Full name input */}
                <div className="space-y-2">
                  <label htmlFor="fullname" className="block text-xs uppercase tracking-widest font-sans font-semibold text-stone-500">
                    Nom & Prénom <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="fullname"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ex: M. & Mme Dupont"
                    className="w-full bg-stone-50/50 border border-stone-250 rounded-xl px-4 py-3 text-stone-800 text-sm focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 transition-colors placeholder-stone-300"
                  />
                </div>

                {/* Yes / No segment choice with luxurious buttons */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest font-sans font-semibold text-stone-500">
                    Présence <span className="text-red-400">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      id="opt-present"
                      onClick={() => setAttending(true)}
                      className={`flex items-center justify-center gap-2 py-4 px-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        attending === true
                          ? "bg-gold-50/75 border-gold-500 text-gold-700 shadow-sm"
                          : "bg-stone-50/50 border-stone-200 text-stone-500 hover:border-stone-300"
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${attending === true ? "fill-gold-400 text-gold-500" : ""}`} />
                      <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide">Présent(e)</span>
                    </button>
                    <button
                      type="button"
                      id="opt-absent"
                      onClick={() => setAttending(false)}
                      className={`flex items-center justify-center gap-2 py-4 px-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        attending === false
                          ? "bg-stone-100 border-stone-500 text-stone-700 shadow-sm"
                          : "bg-stone-50/50 border-stone-200 text-stone-500 hover:border-stone-300"
                      }`}
                    >
                      <HeartOff className="w-4 h-4" />
                      <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide">Absent(e)</span>
                    </button>
                  </div>
                </div>

                {/* Guest dropdown counting (conditional) */}
                <AnimatePresence>
                  {attending === true && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2 overflow-hidden"
                    >
                      <label htmlFor="guestcount" className="block text-xs uppercase tracking-widest font-sans font-semibold text-stone-500">
                        Nombre de Personnes
                      </label>
                      <select
                        id="guestcount"
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full bg-stone-50/50 border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 transition-colors"
                      >
                        <option value="1">1 Personne</option>
                        <option value="2">2 Personnes</option>
                        <option value="3">3 Personnes</option>
                        <option value="4">4 Personnes</option>
                        <option value="5">5 Personnes et plus</option>
                      </select>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Custom message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest font-sans font-semibold text-stone-500">
                    Message aux mariés
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Un doux mot pour notre union ou demande diététique spécifique..."
                    className="w-full bg-stone-50/50 border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 transition-colors resize-none placeholder-stone-300"
                  />
                </div>

                {/* Submit Confirmation button */}
                <button
                  type="submit"
                  disabled={attending === null}
                  className={`w-full py-4 px-6 rounded-2xl font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 text-white shadow-md active:scale-98 ${
                    attending === null
                      ? "bg-stone-300 cursor-not-allowed"
                      : "bg-gold-500 hover:bg-gold-600 shadow-[0_5px_15px_rgba(172,128,45,0.2)] cursor-pointer"
                  }`}
                >
                  Confirmer ma Présence via WhatsApp
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="rsvp-submitted"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 px-4 space-y-6 flex flex-col items-center relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-gold-50 border border-gold-300 flex items-center justify-center text-gold-500">
                  <CheckCircle className="w-10 h-10" />
                </div>
                
                <h4 className="font-serif text-2xl sm:text-3xl text-gold-600 font-medium">
                  Merci infiniment !
                </h4>
                
                <p className="text-stone-500 font-sans font-light leading-relaxed text-sm sm:text-base max-w-sm">
                  {attending 
                    ? "Votre présence nous remplit de joie. Nous redirigeons votre confirmation sur notre WhatsApp personnel..." 
                    : "Nous vous remercions chaleureusement d'avoir répondu. Redirection en cours vers WhatsApp..."}
                </p>

                <div className="inline-flex items-center gap-2 text-xs text-gold-500 font-medium tracking-wider uppercase bg-gold-50 py-2 px-4 rounded-full mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
                  <span>Redirection WhatsApp...</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
