"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Clock, Flame, Zap, HeartHandshake, Compass } from "lucide-react";

interface Stage {
  number: string;
  title: string;
  timeframe: string;
  energyLevel: number;
  bpm: string;
  vibe: string;
  description: string;
  soundtrack: string;
  accent: string;
}

const stages: Stage[] = [
  {
    number: "01",
    title: "THE ARRIVAL",
    timeframe: "08:00 PM — 09:30 PM",
    energyLevel: 35,
    bpm: "115 - 120 BPM",
    vibe: "Deep, Melodic & Sophisticated",
    description:
      "Guests step into an architecturally lit space filled with warm low-end hums. Ambient deep house, organic grooves, and curated soul welcome guests as glasses clink and anticipation builds.",
    soundtrack: "Deep House • Organic Afro • Chill Melodic Downtempo",
    accent: "#D6A84F",
  },
  {
    number: "02",
    title: "THE BUILD-UP",
    timeframe: "09:30 PM — 11:00 PM",
    energyLevel: 65,
    bpm: "122 - 125 BPM",
    vibe: "Infectious Rhythm & Floor Gravitation",
    description:
      "The pulse tightens. Rhythmic basslines accelerate. Moving heads start scanning through fine haze. The first wave of dancers hits the floor as familiar hooks meet electrifying live remixes.",
    soundtrack: "Tech House • Nu-Disco • Commercial Re-Edits • Afro-Tech",
    accent: "#00E5FF",
  },
  {
    number: "03",
    title: "THE DROP",
    timeframe: "11:00 PM — 02:00 AM",
    energyLevel: 100,
    bpm: "128 - 132 BPM",
    vibe: "Maximum Adrenaline & Stadium Euphoria",
    description:
      "Full sensory overload. Heavy sub-bass reverberates through the chest, RGB laser tunnels slice through the dark, and cold spark jets explode as the entire crowd erupts in unison.",
    soundtrack: "Festival Anthems • Peak Time Big-Room • High-Energy Club Bangers",
    accent: "#FF2147",
  },
  {
    number: "04",
    title: "THE AFTERGLOW",
    timeframe: "02:00 AM — LATE",
    energyLevel: 80,
    bpm: "124 - 128 BPM",
    vibe: "Timeless Singalongs & Unforgettable Memories",
    description:
      "Nobody wants the night to end. Nostalgic singalong classics, euphoric progressive melodies, and intimate group euphoria. The dance floor is cemented into legend.",
    soundtrack: "Progressive Trance • Nostalgic 2000s Anthems • Sunrise Deep Sessions",
    accent: "#7B3CFF",
  },
];

export const ExperienceSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(2); // default to THE DROP

  const current = stages[selectedStage];

  return (
    <section id="experience" className="relative bg-[#070707] py-28 overflow-hidden border-t border-white/[0.05]">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[180px] pointer-events-none transition-colors duration-700"
        style={{
          background: `radial-gradient(circle, ${current.accent}20, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#D6A84F]/30">
            <Flame className="w-3.5 h-3.5 text-[#F4C96B]" />
            <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#F4C96B]">
              THE NIGHT ARCS
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-[0.95]">
            <span>ONE NIGHT.</span>
            <br />
            <span className="text-gold-gradient">ONE ENERGY.</span>
          </h2>

          <p className="mt-6 text-sm sm:text-base text-[#B8B8B8] font-light">
            An evening is not a random playlist. It is a carefully engineered four-phase emotional rollercoaster that leaves everyone breathless.
          </p>
        </div>

        {/* Timeline Stage Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stages.map((stage, idx) => {
            const isActive = selectedStage === idx;
            return (
              <button
                key={stage.number}
                onClick={() => setSelectedStage(idx)}
                className={`relative p-6 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between min-h-[140px] ${
                  isActive
                    ? "bg-[#111111] border-[#D6A84F] shadow-[0_0_25px_rgba(214,168,79,0.3)] scale-[1.02]"
                    : "bg-[#090909] border-white/10 hover:border-white/20 hover:bg-[#0D0D0D]"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className="font-display text-2xl font-black"
                    style={{ color: isActive ? stage.accent : "#666" }}
                  >
                    {stage.number}
                  </span>
                  <span className="text-[10px] font-mono text-[#888]">{stage.timeframe}</span>
                </div>

                <div>
                  <h3
                    className={`font-display text-base sm:text-lg font-bold uppercase transition-colors ${
                      isActive ? "text-white" : "text-[#999]"
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <div className="w-full bg-white/10 h-1 rounded-full mt-3 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${stage.energyLevel}%`,
                        backgroundColor: stage.accent,
                      }}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Dive Display */}
        <motion.div
          key={current.number}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-8 sm:p-12 bg-[#0B0B0B] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase border"
                  style={{
                    borderColor: current.accent,
                    color: current.accent,
                    backgroundColor: `${current.accent}15`,
                  }}
                >
                  STAGE {current.number} • {current.vibe}
                </span>
                <span className="text-xs font-mono text-[#B8B8B8] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D6A84F]" />
                  {current.timeframe}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-white mb-5">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-[#CCC] font-light leading-relaxed mb-6">
                {current.description}
              </p>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <p className="text-xs font-mono uppercase tracking-widest text-[#D6A84F] mb-1">
                  SOUNDTRACK SIGNATURE:
                </p>
                <p className="text-xs sm:text-sm font-mono text-white/90">{current.soundtrack}</p>
              </div>
            </div>

            {/* Right Energy Gauge */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-black/60 border border-white/10">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#888] mb-2">
                ENERGY GAUGE
              </span>
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center">
                {/* Circular Energy Meter */}
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="transparent"
                    stroke="#222"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="transparent"
                    stroke={current.accent}
                    strokeWidth="8"
                    strokeDasharray={264}
                    strokeDashoffset={264 - (264 * current.energyLevel) / 100}
                    strokeLinecap="round"
                    className="transition-all duration-700 ease-out"
                    style={{
                      filter: `drop-shadow(0 0 10px ${current.accent})`,
                    }}
                  />
                </svg>

                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="font-display text-3xl sm:text-4xl font-black text-white leading-none">
                    {current.energyLevel}%
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8B8B8] mt-1">
                    CROWD INTENSITY
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4 text-xs font-mono text-white/80">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#F4C96B]" />
                  <span>TEMPO: {current.bpm}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
