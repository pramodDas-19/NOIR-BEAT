"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Disc, Play, Radio, Volume2, Flame, Award, Sliders } from "lucide-react";
import { motion } from "framer-motion";

export const DjPerformanceSection: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(true);

  const eventBadges = [
    { name: "Weddings", icon: "💍" },
    { name: "Clubs", icon: "🍸" },
    { name: "Private Parties", icon: "🍾" },
    { name: "Corporate Events", icon: "👔" },
    { name: "Festivals", icon: "⚡" },
  ];

  return (
    <section id="dj-performance" className="relative bg-[#080808] py-28 overflow-hidden border-t border-white/[0.05]">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D6A84F]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#FF2147]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headlines & Story */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[#D6A84F]/10 border border-[#D6A84F]/30">
              <Disc className="w-3.5 h-3.5 text-[#F4C96B] animate-spin-slow" />
              <span className="text-xs uppercase font-mono tracking-widest text-[#F4C96B]">
                LIVE DJ PERFORMANCE
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[0.95] mb-6">
              <span>THE DJ</span>
              <br />
              <span className="text-gold-gradient">SETS THE</span>
              <br />
              <span>TONE.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#B8B8B8] font-light leading-relaxed mb-6">
              A DJ doesn’t merely play tracks—they command the emotional pulse of the night.
              From seamless sunset transitions to sudden, high-voltage peak time drops, NOIR BEAT crafts a custom sonic tapestry that keeps the floor locked in until the final encore.
            </p>

            {/* Badges of Where the DJ Plays */}
            <div className="mb-8 w-full">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#D6A84F] mb-3">
                PERFORMING AT:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {eventBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/[0.04] border border-white/10 hover:border-[#D6A84F]/50 hover:bg-white/[0.08] text-white transition-all duration-300"
                  >
                    <span>{badge.icon}</span>
                    <span>{badge.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full">
              <div>
                <p className="font-display text-2xl sm:text-3xl font-black text-white">500+</p>
                <p className="text-[11px] text-[#B8B8B8] font-mono uppercase mt-1">Shows Executed</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-black text-[#D6A84F]">100%</p>
                <p className="text-[11px] text-[#B8B8B8] font-mono uppercase mt-1">Live Crowd Lock</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-black text-white">0%</p>
                <p className="text-[11px] text-[#B8B8B8] font-mono uppercase mt-1">Pre-Recorded Sets</p>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic DJ Image + Rotating Vinyl Disc */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* Main Stage Image Frame */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group">
              <Image
                src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=1200&auto=format&fit=crop"
                alt="NOIR BEAT DJ Turntable Mixing Deck"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter brightness-[0.7] contrast-125 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />

              {/* Floating Live Deck Indicator */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 border border-white/20 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#FF2147] animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-white">
                  DECK A • PIONEER CDJ-3000
                </span>
              </div>
            </div>

            {/* Interactive Rotating Vinyl Disc Visual */}
            <div className="relative -mt-16 sm:-mt-24 z-20 flex flex-col items-center">
              <div
                onClick={() => setIsSpinning(!isSpinning)}
                className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full vinyl-grooves border-4 border-[#222] shadow-[0_10px_40px_rgba(0,0,0,0.9),0_0_30px_rgba(214,168,79,0.25)] flex items-center justify-center cursor-pointer group"
                title="Click to toggle vinyl spin"
              >
                {/* Vinyl Grooves Center Label */}
                <motion.div
                  animate={{ rotate: isSpinning ? 360 : 0 }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#A37A2C] via-[#F4C96B] to-[#D6A84F] p-1 flex items-center justify-center shadow-lg relative"
                >
                  <div className="w-full h-full rounded-full bg-[#050505] flex flex-col items-center justify-center p-2 text-center border border-[#F4C96B]/50">
                    <span className="text-[8px] font-mono tracking-widest uppercase text-[#F4C96B] font-bold">
                      NOIR BEAT
                    </span>
                    <span className="text-[7px] text-white/70 font-mono">33⅓ RPM</span>
                    {/* Spindle hole */}
                    <div className="w-3 h-3 rounded-full bg-[#F4C96B] mt-1 shadow-inner" />
                  </div>
                </motion.div>

                {/* Disc Glare reflection */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs font-mono text-[#D6A84F] uppercase tracking-wider">
                <Sliders className="w-3.5 h-3.5" />
                <span>ROTATING ANALOG VINYL VIBE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
