"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { X, Sparkles, CheckCircle2, Calendar, MapPin, Music, Sliders } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("Full Stage Production (DJ + Sound + Lights)");

  const packages = [
    { name: "Live DJ Performance Only", desc: "Flagship CDJ console + custom sets" },
    { name: "Full Stage Production (DJ + Sound + Lights)", desc: "Line arrays, subs, moving heads, lasers & haze" },
    { name: "Arena / Festival Hybrid Experience", desc: "Full concert rigging + live hybrid percussion & MC" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#D6A84F", "#F4C96B", "#00E5FF", "#FF2147"],
      });
    } catch {
      // safe fallback
    }
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl rounded-3xl bg-[#0C0C0C] border border-[#D6A84F]/30 p-6 sm:p-10 shadow-[0_0_60px_rgba(214,168,79,0.3)] my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#D6A84F]/20 text-[#D6A84F] flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display text-3xl font-black uppercase text-white mb-3">
                  BOOKING REQUEST LOCKED IN
                </h3>
                <p className="text-base text-[#B8B8B8] max-w-md mx-auto mb-8 font-light">
                  Thank you for locking in NOIR BEAT in preview mode. Our talent team would verify the calendar and provide rider specs.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#D6A84F] text-black"
                >
                  RETURN TO EXPERIENCE
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#F4C96B]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#F4C96B]">
                    STAGE RESERVATION
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white mb-2">
                  BOOK THE BEAT
                </h3>
                <p className="text-sm text-[#B8B8B8] font-light mb-6">
                  Select your package and lock in dates for an unforgettable sound experience.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Package Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#D6A84F] mb-2">
                      SELECT PRODUCTION SCALE
                    </label>
                    <div className="space-y-2">
                      {packages.map((pkg) => (
                        <div
                          key={pkg.name}
                          onClick={() => setSelectedPackage(pkg.name)}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-200 flex flex-col ${
                            selectedPackage === pkg.name
                              ? "bg-[#161616] border-[#D6A84F] shadow-[0_0_15px_rgba(214,168,79,0.2)]"
                              : "bg-white/[0.02] border-white/10 hover:border-white/20"
                          }`}
                        >
                          <span className="text-sm font-bold text-white uppercase">{pkg.name}</span>
                          <span className="text-xs text-[#888] font-mono mt-0.5">{pkg.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B8B8B8] mb-1">
                        Client / Host Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-[#D6A84F]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B8B8B8] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-[#D6A84F]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B8B8B8] mb-1">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-[#D6A84F]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B8B8B8] mb-1">
                        Destination / Venue
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. W Goa / Taj Exotica"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-[#D6A84F]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-4 rounded-xl text-sm font-black uppercase tracking-widest bg-gradient-to-r from-[#D6A84F] via-[#F4C96B] to-[#D6A84F] text-[#050505] shadow-[0_0_25px_rgba(214,168,79,0.5)] hover:shadow-[0_0_40px_rgba(244,201,107,0.8)] transition-all duration-300"
                  >
                    CONFIRM & REQUEST QUOTE
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
