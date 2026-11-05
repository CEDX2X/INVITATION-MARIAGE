import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { QrCode, X, Search, CheckCircle2, AlertTriangle, UserCheck, ShieldCheck, RefreshCw } from "lucide-react";
import confetti from "canvas-confetti";
import { WeddingData } from "../data/weddingData";

interface QRScannerModalProps {
  data: WeddingData;
  isOpen: boolean;
  onClose: () => void;
}

interface GuestRecord {
  id: string;
  name: string;
  passId: string;
  guestsCount: number;
  status: "confirmed" | "checked_in" | "declined";
  checkInTime?: string;
}

export default function QRScannerModal({ data, isOpen, onClose }: QRScannerModalProps) {
  const [passInput, setPassInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [scanResult, setScanResult] = useState<{
    success: boolean;
    message: string;
    guest?: GuestRecord;
  } | null>(null);

  // Initial guest list state
  const [guestList, setGuestList] = useState<GuestRecord[]>([
    { id: "1", name: "M. & Mme Jean-Paul Mbarga", passId: "GH-8942", guestsCount: 2, status: "confirmed" },
    { id: "2", name: "Mlle Larissa K.", passId: "GH-2026", guestsCount: 1, status: "checked_in", checkInTime: "14:12" },
    { id: "3", name: "M. Emmanuel Nguema", passId: "GH-1104", guestsCount: 2, status: "confirmed" },
    { id: "4", name: "Mme Aude Gaëlle S.", passId: "GH-3390", guestsCount: 1, status: "checked_in", checkInTime: "14:05" },
    { id: "5", name: "M. Fabrice & Famille", passId: "GH-7712", guestsCount: 4, status: "confirmed" },
    { id: "6", name: "Mme Chantal B.", passId: "GH-5521", guestsCount: 1, status: "confirmed" },
  ]);

  if (!isOpen) return null;

  const handleVerifyPass = (codeToVerify?: string) => {
    const code = (codeToVerify || passInput).trim().toUpperCase();
    if (!code) return;

    const guestIndex = guestList.findIndex(
      (g) => g.passId.toUpperCase() === code || g.name.toLowerCase().includes(code.toLowerCase())
    );

    if (guestIndex !== -1) {
      const guest = guestList[guestIndex];

      if (guest.status === "checked_in") {
        setScanResult({
          success: false,
          message: `ATTENTION : Le Pass #${guest.passId} de ${guest.name} a déjà été validé à ${guest.checkInTime || "l'entrée"}.`,
          guest,
        });
      } else {
        // Mark as checked in
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
        
        const updatedList = [...guestList];
        updatedList[guestIndex] = { ...guest, status: "checked_in", checkInTime: timeStr };
        setGuestList(updatedList);

        setScanResult({
          success: true,
          message: `ACCÈS ACCORDÉ ! Bienvenue à ${guest.name} (${guest.guestsCount} personne(s)).`,
          guest: updatedList[guestIndex],
        });

        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
          colors: ["#d4af37", "#fce879", "#1c315e", "#ffffff"]
        });
      }
    } else {
      setScanResult({
        success: false,
        message: `PASS INVALIDE : Aucun billet trouvé sous le code "${code}".`,
      });
    }

    setPassInput("");
  };

  const totalConfirmed = guestList.reduce((acc, g) => acc + g.guestsCount, 0);
  const totalCheckedIn = guestList.filter((g) => g.status === "checked_in").reduce((acc, g) => acc + g.guestsCount, 0);
  const totalPending = totalConfirmed - totalCheckedIn;

  const filteredGuests = guestList.filter(
    (g) => g.name.toLowerCase().includes(searchQuery.toLowerCase()) || g.passId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-[#121e36] rounded-3xl border-2 border-[#d4af37] max-w-3xl w-full p-5 sm:p-8 shadow-2xl relative my-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-stone-400 hover:text-white bg-[#0d1627] p-2 rounded-md border border-[#d4af37]/30 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-6 border-b border-[#d4af37]/25 pb-4">
            <div className="p-2.5 rounded-2xl bg-[#1c315e] border border-[#d4af37] text-[#fce879]">
              <QrCode size={24} />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-bold">
                Espace Contrôle d'Accès & QR Code
              </h3>
              <p className="text-xs text-[#e5d3b3]">
                Portail des hôtes d'accueil — Mariage de {data.brideName} & {data.groomName}
              </p>
            </div>
          </div>

          {/* Real-time Dashboard Stats counter */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-[#0d1627] p-3 sm:p-4 rounded-2xl border border-[#d4af37]/30 text-center">
              <span className="text-[10px] uppercase tracking-wider text-[#e5d3b3] font-semibold block">Total Invités</span>
              <span className="font-serif text-xl sm:text-2xl font-bold text-white mt-1 block">{totalConfirmed}</span>
            </div>
            <div className="bg-[#1c315e] p-3 sm:p-4 rounded-2xl border border-emerald-500/50 text-center">
              <span className="text-[10px] uppercase tracking-wider text-emerald-300 font-semibold block">Accès Validés</span>
              <span className="font-serif text-xl sm:text-2xl font-bold text-emerald-400 mt-1 block">{totalCheckedIn}</span>
            </div>
            <div className="bg-[#0d1627] p-3 sm:p-4 rounded-2xl border border-amber-500/40 text-center">
              <span className="text-[10px] uppercase tracking-wider text-amber-200 font-semibold block">En Attente</span>
              <span className="font-serif text-xl sm:text-2xl font-bold text-amber-400 mt-1 block">{totalPending}</span>
            </div>
          </div>

          {/* Quick Scanner & Code Input */}
          <div className="bg-[#0d1627] p-4 sm:p-6 rounded-2xl border border-[#d4af37]/40 mb-6 space-y-4">
            <label className="block text-xs uppercase tracking-widest font-sans font-semibold text-[#fce879]">
              Scanner ou Saisir un Code Billet (ex: GH-8942)
            </label>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={passInput}
                onChange={(e) => setPassInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleVerifyPass()}
                placeholder="Ex: GH-8942 ou Nom de l'invité"
                className="flex-1 bg-[#121e36] border border-[#d4af37]/40 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4af37]"
              />
              <button
                onClick={() => handleVerifyPass()}
                className="px-6 py-3 rounded-md bg-[#d4af37] text-[#0b1220] font-bold text-xs uppercase tracking-wider hover:bg-[#fce879] active:scale-95 transition-all shadow-md shrink-0 cursor-pointer"
              >
                Valider l'Entrée
              </button>
            </div>

            {/* Scan Feedback Banner */}
            <AnimatePresence>
              {scanResult && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`p-4 rounded-xl border flex items-start gap-3 ${
                    scanResult.success
                      ? "bg-emerald-950/80 border-emerald-500 text-emerald-200"
                      : "bg-rose-950/80 border-rose-500 text-rose-200"
                  }`}
                >
                  {scanResult.success ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-semibold text-sm">{scanResult.message}</p>
                    {scanResult.guest && (
                      <p className="text-xs mt-1 opacity-80 font-mono">
                        Code Pass: #{scanResult.guest.passId} • Total {scanResult.guest.guestsCount} personne(s)
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Searchable Guest Table */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              <h4 className="font-serif text-base text-[#fce879] font-bold">
                Registre des Invités ({filteredGuests.length})
              </h4>

              <div className="relative w-48 sm:w-64">
                <Search className="w-3.5 h-3.5 text-[#e5d3b3] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher par nom..."
                  className="w-full bg-[#0d1627] border border-[#d4af37]/30 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white focus:outline-none"
                />
              </div>
            </div>

            <div className="border border-[#d4af37]/25 rounded-2xl overflow-hidden bg-[#0d1627]/60">
              <div className="max-h-60 overflow-y-auto divide-y divide-[#d4af37]/15">
                {filteredGuests.length > 0 ? (
                  filteredGuests.map((guest) => (
                    <div
                      key={guest.id}
                      className="p-3.5 flex items-center justify-between gap-3 hover:bg-[#121e36]/80 transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-sm font-semibold text-white">{guest.name}</span>
                          <span className="font-mono text-[10px] text-[#d4af37] bg-[#121e36] px-2 py-0.5 rounded border border-[#d4af37]/30">
                            #{guest.passId}
                          </span>
                        </div>
                        <p className="text-[10px] text-[#e5d3b3] mt-0.5">
                          {guest.guestsCount} personne(s) • {guest.status === "checked_in" ? `Entré à ${guest.checkInTime}` : "En attente"}
                        </p>
                      </div>

                      {guest.status === "checked_in" ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                          <CheckCircle2 size={12} />
                          Validé
                        </span>
                      ) : (
                        <button
                          onClick={() => handleVerifyPass(guest.passId)}
                          className="px-3 py-1 rounded-lg bg-[#1c315e] border border-[#d4af37]/50 text-[#fce879] hover:bg-[#d4af37] hover:text-[#0b1220] font-bold text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Cocher Entrée
                        </button>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-xs text-[#e5d3b3]/60">
                    Aucun invité trouvé correspondant à votre recherche.
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
