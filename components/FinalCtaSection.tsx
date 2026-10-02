"use client";

import React from "react";
import confetti from "canvas-confetti";
import { ArrowUpRight, MessageCircle, Sparkles, Zap, Flame } from "lucide-react";
import { motion } from "framer-motion";

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  const handleBookingClick = () => {
    // Fire gold/silver luxury confetti blast
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.75 },
        colors: ["#D6A84F", "#F4C96B", "#FFFFFF", "#FF2147"],
      });
    } catch {
      // fallback safe
    }
    onOpenBooking();
  };

  return (
    <section className="relative min-h-[90vh] bg-[#050505] flex items-center justify-center py-28 overflow-hidden border-t border-white/[0.08]">
      {/* Dynamic Animated Pulse Light Behind Headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#D6A84F]/25 via-[#FF2147]/15 to-[#00E5FF]/20 rounded-full blur-[160px] animate-pulse-slow pointer-events-none" />

      {/* Laser Light Rays Sweeping */}
      <div className="laser-beam-gold top-0 left-1/3 opacity-40 pointer-events-none" />
      <div className="laser-beam-red top-0 right-1/3 opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white/[0.04] border border-[#D6A84F]/40 backdrop-blur-md shadow-[0_0_20px_rgba(214,168,79,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#D6A84F] animate-ping" />
          <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#F4C96B] font-semibold">
            2026 TOUR & WEDDING SEASON CALENDAR OPEN
          </span>
        </div>

        {/* Refined Headline */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-white drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] select-none">
          <span>READY TO</span>
          <br />
          <span className="text-gold-gradient relative inline-block">
            TURN IT UP?
            {/* Subtle underline line glow */}
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F4C96B] to-transparent shadow-[0_0_15px_#F4C96B]" />
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="mt-8 max-w-xl mx-auto text-base sm:text-lg md:text-xl text-[#B8B8B8] font-light leading-relaxed">
          “Tell us what you're planning. We'll bring the sound, lights and energy.”
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 max-w-md mx-auto sm:max-w-none">
          {/* Glowing Gold Primary Button */}
          <button
            onClick={handleBookingClick}
            className="w-full sm:w-auto px-10 py-5 rounded-full text-base font-black uppercase tracking-widest bg-gradient-to-r from-[#D6A84F] via-[#F4C96B] to-[#D6A84F] text-[#050505] shadow-[0_0_40px_rgba(214,168,79,0.5)] hover:shadow-[0_0_70px_rgba(244,201,107,0.85)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 border border-[#F4C96B] group"
          >
            <Sparkles className="w-5 h-5 text-[#050505]" />
            <span>BOOK NOIR BEAT</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/910000000000?text=Hi%20NOIR%20BEAT%20Team!%20I'd%20love%20to%20inquire%20about%20booking%20an%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 rounded-full text-base font-bold uppercase tracking-widest bg-[#111111]/80 hover:bg-[#1A1A1A] text-white border border-white/20 hover:border-[#25D366]/60 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(0,0,0,0.6)]"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
            <span>WHATSAPP US</span>
          </a>
        </div>
      </div>
    </section>
  );
};
