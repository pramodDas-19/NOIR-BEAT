"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Disc, Sparkles, Radio } from "lucide-react";

export const IntroMarquee: React.FC = () => {
  const marqueeItems = [
    "DJ",
    "SOUND",
    "LIGHTING",
    "ENERGY",
    "NIGHTLIFE",
    "EXPERIENCE",
    "FESTIVAL",
    "ATMOSPHERE",
  ];

  return (
    <section id="intro" className="relative bg-[#050505] pt-24 pb-20 overflow-hidden border-t border-white/[0.05]">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7B3CFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D6A84F]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Statement Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10"
        >
          <Zap className="w-3.5 h-3.5 text-[#F4C96B]" />
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#B8B8B8]">
            THE NOIR PHILOSOPHY
          </span>
        </motion.div>

        {/* Huge Impact Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1] text-white"
        >
          <span>NOT JUST MUSIC.</span>
          <br />
          <span className="text-gold-gradient">AN EXPERIENCE.</span>
        </motion.h2>

        {/* Supporting Editorial Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#B8B8B8] font-light leading-relaxed tracking-wide"
        >
          We create high-energy entertainment experiences where sound, lighting and atmosphere come together.
        </motion.p>
      </div>

      {/* Full-bleed Horizontal Marquee */}
      <div className="mt-14 py-4 border-y border-white/[0.07] bg-[#0A0A0A]/60 backdrop-blur-md relative overflow-hidden select-none">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee-left space-x-12 shrink-0">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <div key={idx} className="flex items-center space-x-8">
                <span className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wider text-transparent stroke-text hover:text-white transition-colors duration-300">
                  {item}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#D6A84F] shadow-[0_0_8px_#D6A84F]" />
              </div>
            ))}
          </div>
          <div className="flex animate-marquee-left space-x-12 shrink-0" aria-hidden="true">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <div key={idx} className="flex items-center space-x-8">
                <span className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wider text-transparent stroke-text hover:text-white transition-colors duration-300">
                  {item}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#D6A84F] shadow-[0_0_8px_#D6A84F]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.35);
        }
      `}</style>
    </section>
  );
};
