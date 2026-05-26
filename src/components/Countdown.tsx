import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Clock } from "lucide-react";
import { WeddingData } from "../data/weddingData";

interface CountdownProps {
  data: WeddingData;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export default function Countdown({ data }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const targetDate = new Date(data.countdownDate);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    // Calculate immediately
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [data.countdownDate]);

  const timeBlocks = [
    { label: "Jours", value: timeLeft.days },
    { label: "Heures", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Secondes", value: timeLeft.seconds },
  ];

  return (
    <section 
      id="count-down" 
      className="py-16 px-6 bg-gradient-to-b from-ivory to-white text-darksoft border-y border-gold-100 flex flex-col items-center"
    >
      <div className="max-w-xl w-full text-center">
        {/* Header Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold-300 bg-gold-50 mb-4"
        >
          <Clock className="w-5 h-5 text-gold-500" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-gold-600 mb-6"
        >
          Compte à rebours
        </motion.h3>

        {timeLeft.isExpired ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 bg-gold-50 rounded-2xl border border-gold-200/80"
          >
            <p className="font-serif italic text-2xl text-gold-600">
              C'est aujourd'hui le grand jour ! Nous célébrons notre union.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
            {timeBlocks.map((block, index) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-3 sm:p-5 flex flex-col items-center shadow-[0_10px_20px_rgba(140,100,29,0.04)] border border-stone-100"
              >
                <span className="font-serif font-light text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                  {block.value.toString().padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-400 font-sans font-medium mt-2">
                  {block.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-stone-400 text-xs mt-8 tracking-widest font-sans font-light"
        >
          Date sacrée : {data.weddingDateFormatted} — {new Date(data.countdownDate).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
        </motion.p>
      </div>
    </section>
  );
}
