"use client";

import React, { useState } from "react";
import { Speaker, Waves, Radio, Activity, Mic2, Cpu, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const SoundSection: React.FC = () => {
  const [subBassLevel, setSubBassLevel] = useState(88);

  const soundSpecs = [
    {
      title: "PREMIUM PA SYSTEMS",
      icon: Speaker,
      highlight: "138 dB Peak SPL",
      desc: "Concert-grade active line array modules delivering surgical frequency clarity from 35Hz to 20kHz with uniform throw across expansive indoor ballrooms and open-air lawns.",
    },
    {
      title: "GROUND-SHAKING SUBWOOFERS",
      icon: Activity,
      highlight: "28Hz Ultra-Low Extension",
      desc: "Dual 18” horn-loaded sub-bass enclosures tuned for physical chest impact. You don’t just hear the bass drops—you feel them resonate through your core.",
    },
    {
      title: "STAGE MONITORS & BOOTH SOUND",
      icon: Waves,
      highlight: "Zero-Latency Coaxial",
      desc: "Dedicated high-powered artist booth monitoring and stage wedge arrays allowing performers to hear pinpoint mix dynamics with zero latency.",
    },
    {
      title: "WIRELESS DIGITAL MICROPHONES",
      icon: Mic2,
      highlight: "24-Bit Encrypted RF",
      desc: "Shure & Sennheiser digital wireless mic packages with cardioid capsules, automated feedback suppression, and crystal-clear speech reproduction for keynotes and toasts.",
    },
    {
      title: "PROFESSIONAL MIXING ENGINES",
      icon: Cpu,
      highlight: "Dante Digital Audio Network",
      desc: "Pioneer DJM-V10 and Allen & Heath high-resolution audio processing matrices with studio-grade 32-bit D/A converters for pristine sonic fidelity.",
    },
  ];

  return (
    <section id="sound" className="relative bg-[#050505] py-28 overflow-hidden border-t border-white/[0.05]">
      {/* Background Cyan & Gold Acoustic Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-[#00E5FF]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#D6A84F]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30">
            <Waves className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span className="text-xs uppercase font-mono tracking-widest text-[#00E5FF]">
              ACOUSTIC ENGINEERING
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[0.95]">
            <span>SOUND YOU</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#D6A84F] to-[#F4C96B]">
              CAN FEEL.
            </span>
          </h2>

          <p className="mt-6 text-sm sm:text-base text-[#B8B8B8] font-light leading-relaxed">
            High energy doesn’t mean piercing volume. It means pure, uncompressed acoustic horsepower
            where you feel the kick in your solar plexus while conversations remain effortless.
          </p>
        </div>

        {/* Abstract Animated Oscilloscope Waves Banner */}
        <div className="relative w-full rounded-3xl bg-[#0B0B0B] border border-white/10 p-6 sm:p-10 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#00E5FF] mb-1">
                LIVE FREQUENCY RESPONSE OSCILLOSCOPE
              </p>
              <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white">
                SUB-BASS PRESSURE & FREQUENCY DYNAMICS
              </h3>
            </div>

            {/* Interactive Bass Pressure Slider */}
            <div className="flex items-center gap-4 bg-white/[0.04] px-4 py-2.5 rounded-xl border border-white/10">
              <span className="text-xs font-mono uppercase text-[#B8B8B8]">BASS INTENSITY:</span>
              <input
                type="range"
                min="40"
                max="100"
                value={subBassLevel}
                onChange={(e) => setSubBassLevel(Number(e.target.value))}
                className="w-28 sm:w-36 accent-[#00E5FF] cursor-pointer"
              />
              <span className="text-xs font-mono font-bold text-[#00E5FF]">{subBassLevel}%</span>
            </div>
          </div>

          {/* Animated Horizontal Frequency Wave Visualization */}
          <div className="relative h-32 sm:h-44 w-full flex items-center justify-between gap-1 overflow-hidden py-4">
            {Array.from({ length: 64 }).map((_, i) => {
              const freqFactor = Math.sin(i * 0.2) * 0.5 + 0.5;
              const heightMultiplier = (subBassLevel / 100) * 85;
              return (
                <motion.div
                  key={i}
                  animate={{
                    height: [
                      `${Math.max(8, freqFactor * heightMultiplier * 0.4)}%`,
                      `${Math.max(12, freqFactor * heightMultiplier + Math.random() * 15)}%`,
                      `${Math.max(6, freqFactor * heightMultiplier * 0.3)}%`,
                    ],
                  }}
                  transition={{
                    duration: 1.2 + (i % 5) * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex-1 rounded-full bg-gradient-to-t from-[#00E5FF] via-[#7B3CFF] to-[#F4C96B] opacity-80"
                  style={{
                    filter: i % 8 === 0 ? "drop-shadow(0 0 8px #00E5FF)" : "none",
                  }}
                />
              );
            })}
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-[#888] pt-4 border-t border-white/[0.06]">
            <span>20 Hz (INFRA BASS)</span>
            <span>250 Hz (WARM MIDS)</span>
            <span>2.5 kHz (PRESENCE)</span>
            <span>20 kHz (AIR)</span>
          </div>
        </div>

        {/* Technical Gear Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {soundSpecs.map((spec, idx) => {
            const IconComp = spec.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-[#00E5FF]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-[#00E5FF] group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#D6A84F] bg-[#D6A84F]/10 px-2.5 py-1 rounded-md border border-[#D6A84F]/20">
                      {spec.highlight}
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-bold uppercase text-white mb-2 group-hover:text-[#00E5FF] transition-colors">
                    {spec.title}
                  </h4>
                  <p className="text-sm text-[#B8B8B8] font-light leading-relaxed">
                    {spec.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-[#D6A84F]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>INDUSTRY TOURING STANDARD</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
