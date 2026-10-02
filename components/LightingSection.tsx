"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Sun, Eye, Zap, Flame, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export const LightingSection: React.FC = () => {
  const [activePreset, setActivePreset] = useState<"festival" | "gold" | "cyber" | "stealth">("festival");

  const lightingFeatures = [
    {
      label: "BEAM ARRAYS",
      spec: "12x 380W Sharpy Moving Heads",
      desc: "Razor-sharp aerial beams carving geometric light patterns through the night.",
    },
    {
      label: "RGB LASER SCANNING",
      spec: "6W Solid-State DMX Laser Systems",
      desc: "Spectacular audience-scanning liquid skies, diffraction fans, and overhead laser tunnels.",
    },
    {
      label: "ATMOSPHERIC HAZE",
      spec: "Continuous Oil-Free Fluid Turbines",
      desc: "Even microscopic haze suspended in the air to make every single light ray three-dimensional.",
    },
    {
      label: "LED STROBE & BLINDERS",
      spec: "High-Output Crowd Blinders",
      desc: "Synchronized drop explosions that illuminate the entire room at the musical climax.",
    },
  ];

  return (
    <section id="lighting" className="relative bg-[#050505] py-28 overflow-hidden border-t border-white/[0.05]">
      {/* Dynamic Animated Laser Beams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gold Beam Sweep */}
        <div
          className={`laser-beam-gold top-0 left-[20%] transition-opacity duration-700 ${
            activePreset === "stealth" ? "opacity-10" : "opacity-70"
          }`}
        />
        {/* Red Beam Sweep */}
        <div
          className={`laser-beam-red top-0 right-[25%] transition-opacity duration-700 ${
            activePreset === "gold" || activePreset === "stealth" ? "opacity-0" : "opacity-60"
          }`}
        />
        {/* Cyan Beam Sweep */}
        <div
          className={`laser-beam-cyan top-0 left-[55%] transition-opacity duration-700 ${
            activePreset === "gold" || activePreset === "stealth" ? "opacity-0" : "opacity-75"
          }`}
        />
        {/* Purple Beam Sweep */}
        <div
          className={`laser-beam-purple top-0 right-[15%] transition-opacity duration-700 ${
            activePreset === "gold" || activePreset === "stealth" ? "opacity-0" : "opacity-60"
          }`}
        />

        {/* Ambient Stage Lights Glows */}
        <div className="absolute -top-32 left-1/3 w-[600px] h-[600px] bg-gradient-to-b from-[#FF2147]/20 via-[#7B3CFF]/15 to-transparent rounded-full blur-[160px]" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#D6A84F]/15 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[#FF2147]/10 border border-[#FF2147]/30">
              <Zap className="w-3.5 h-3.5 text-[#FF2147]" />
              <span className="text-xs uppercase font-mono tracking-widest text-[#FF2147]">
                ATMOSPHERIC ARCHITECTURE
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[0.95]">
              <span>LIGHTS.</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2147] via-[#D6A84F] to-[#00E5FF]">
                LASERS.
              </span>
              <br />
              <span>ATMOSPHERE.</span>
            </h2>
          </div>

          {/* Interactive Preset Buttons */}
          <div className="flex flex-col items-start lg:items-end gap-3">
            <span className="text-xs font-mono uppercase text-[#B8B8B8] tracking-widest">
              STAGE LIGHTING MODE:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActivePreset("festival")}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activePreset === "festival"
                    ? "bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                    : "bg-white/[0.05] text-[#B8B8B8] border border-white/10 hover:text-white"
                }`}
              >
                ⚡ FESTIVAL MULTI-BEAM
              </button>
              <button
                onClick={() => setActivePreset("gold")}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activePreset === "gold"
                    ? "bg-[#D6A84F] text-black font-bold shadow-[0_0_20px_rgba(214,168,79,0.6)]"
                    : "bg-white/[0.05] text-[#B8B8B8] border border-white/10 hover:text-[#D6A84F]"
                }`}
              >
                👑 NOIR GOLD LUXE
              </button>
              <button
                onClick={() => setActivePreset("cyber")}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activePreset === "cyber"
                    ? "bg-[#00E5FF] text-black font-bold shadow-[0_0_20px_rgba(0,229,255,0.6)]"
                    : "bg-white/[0.05] text-[#B8B8B8] border border-white/10 hover:text-[#00E5FF]"
                }`}
              >
                🌌 CYBER NEON
              </button>
            </div>
          </div>
        </div>

        {/* Big Visual Stadium Lighting Stage Display */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.95)] mb-16 group">
          <Image
            src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop"
            alt="Festival Stage Lasers and Moving Heads"
            fill
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.75] contrast-125 transition-transform duration-700 group-hover:scale-105"
          />
          {/* Vignette and Dark Bottom Blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40" />

          {/* Real-time Mode Badge inside Visual */}
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-10 flex items-center gap-3 bg-black/80 px-4 py-2.5 rounded-full border border-white/20 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-ping" />
            <span className="text-xs font-mono uppercase tracking-widest text-white">
              TIMECODED LIGHT SHOW • SYNCHRONIZED TO DJ BPM
            </span>
          </div>
        </div>

        {/* 4 Feature Specification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lightingFeatures.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#090909] border border-white/10 hover:border-[#F4C96B]/50 transition-all duration-300"
            >
              <span className="text-xs font-mono text-[#D6A84F] tracking-widest uppercase block mb-1">
                {item.label}
              </span>
              <h4 className="font-display text-lg font-bold uppercase text-white mb-2">
                {item.spec}
              </h4>
              <p className="text-sm text-[#B8B8B8] font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
