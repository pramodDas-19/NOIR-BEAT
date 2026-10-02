"use client";

import React from "react";

export const CrazyMarquee: React.FC = () => {
  const line1 = [
    "TURN IT UP",
    "FEEL THE ENERGY",
    "OWN THE NIGHT",
    "NOIR BEAT",
    "TURN IT UP",
    "FEEL THE ENERGY",
    "OWN THE NIGHT",
    "NOIR BEAT",
  ];

  const line2 = [
    "MUSIC FOR UNFORGETTABLE MOMENTS",
    "HIGH OCTANE SOUND",
    "LIGHTS & LASERS",
    "PURE EUPHORIA",
    "MUSIC FOR UNFORGETTABLE MOMENTS",
    "HIGH OCTANE SOUND",
    "LIGHTS & LASERS",
    "PURE EUPHORIA",
  ];

  return (
    <section className="relative bg-[#050505] py-14 overflow-hidden select-none border-y border-white/[0.08]">
      {/* Background ambient strobe glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-[#D6A84F]/5 via-[#FF2147]/5 to-[#00E5FF]/5 blur-3xl pointer-events-none" />

      {/* Line 1: Moving Left */}
      <div className="flex whitespace-nowrap overflow-hidden py-2">
        <div className="flex animate-marquee-left space-x-8 shrink-0">
          {line1.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8">
              <span className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white hover:text-gold-gradient transition-colors duration-300">
                {item}
              </span>
              <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#D6A84F] shadow-[0_0_12px_#D6A84F]" />
            </div>
          ))}
        </div>
        <div className="flex animate-marquee-left space-x-8 shrink-0" aria-hidden="true">
          {line1.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8">
              <span className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white hover:text-gold-gradient transition-colors duration-300">
                {item}
              </span>
              <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#D6A84F] shadow-[0_0_12px_#D6A84F]" />
            </div>
          ))}
        </div>
      </div>

      {/* Line 2: Moving Right with Outline Stroke Font */}
      <div className="flex whitespace-nowrap overflow-hidden py-2">
        <div className="flex animate-marquee-right space-x-8 shrink-0">
          {line2.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8">
              <span className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-transparent stroke-white-outline hover:text-[#00E5FF] transition-colors duration-300">
                {item}
              </span>
              <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rotate-45 bg-[#FF2147] shadow-[0_0_12px_#FF2147]" />
            </div>
          ))}
        </div>
        <div className="flex animate-marquee-right space-x-8 shrink-0" aria-hidden="true">
          {line2.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8">
              <span className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-transparent stroke-white-outline hover:text-[#00E5FF] transition-colors duration-300">
                {item}
              </span>
              <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rotate-45 bg-[#FF2147] shadow-[0_0_12px_#FF2147]" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stroke-white-outline {
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
};
