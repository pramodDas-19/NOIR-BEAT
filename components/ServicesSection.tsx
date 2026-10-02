"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Disc, Speaker, Lightbulb, Music, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accentColor: string;
  accentGlow: string;
  badge: string;
  features: string[];
}

const servicesData: Service[] = [
  {
    id: "dj",
    number: "01",
    title: "DJ PERFORMANCE",
    subtitle: "UNRIVALED CROWD CONTROL & VIBE ENGINEERING",
    description:
      "World-class live mixing blending melodic house, afro-tech, open-format, commercial anthems, and peak-time festival energy tuned to the exact pulse of the room.",
    image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?q=80&w=1200&auto=format&fit=crop",
    accentColor: "#D6A84F",
    accentGlow: "rgba(214, 168, 79, 0.4)",
    badge: "SIGNATURE SETS",
    features: ["Pioneer DJ CDJ-3000 Flagship Rigs", "Custom Edits & Live Mashups", "Seamless Genre Transitions"],
  },
  {
    id: "sound",
    number: "02",
    title: "PROFESSIONAL SOUND",
    subtitle: "CONCERT-GRADE ACOUSTICS DOWN TO 28Hz",
    description:
      "Precision-tuned line array systems and bone-rattling subwoofers engineered for crisp highs, warm mids, and chest-thumping bass without distortion or acoustic fatigue.",
    image: "https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=1200&auto=format&fit=crop",
    accentColor: "#00E5FF",
    accentGlow: "rgba(0, 229, 255, 0.4)",
    badge: "CONCERT ACOUSTICS",
    features: ["Sub-bass extension down to 28Hz", "Dante Digital Audio Network", "Precision Stage Monitoring"],
  },
  {
    id: "lighting",
    number: "03",
    title: "LIGHTING & VISUALS",
    subtitle: "IMMERSIVE LASERS & ATMOSPHERIC ARCHITECTURE",
    description:
      "Timecoded moving-head beams, high-output laser projections, LED blinders, and atmospheric haze that turn any venue into an electric festival arena.",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop",
    accentColor: "#FF2147",
    accentGlow: "rgba(255, 33, 71, 0.4)",
    badge: "STADIUM VISUALS",
    features: ["DMX Moving Head Beam Fixtures", "Atmospheric Fine Haze Turbines", "RGB High-Power Laser Scanning"],
  },
  {
    id: "entertainment",
    number: "04",
    title: "LIVE ENTERTAINMENT",
    subtitle: "HYBRID MUSICIANS, MCs & STAGE PERFORMERS",
    description:
      "Elevate the set with live percussionists, saxophone players, LED dancers, and magnetic MCs performing synchronously with the DJ for pure euphoria.",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
    accentColor: "#7B3CFF",
    accentGlow: "rgba(123, 60, 255, 0.4)",
    badge: "HYBRID SHOW",
    features: ["Live Sax & Percussion Integration", "Crowd Hype Host & MC", "Cold Pyrotechnics & Cryo Jets"],
  },
];

export const ServicesSection: React.FC = () => {
  const [activeHover, setActiveHover] = useState<number | null>(null);

  return (
    <section id="services" className="relative bg-[#050505] py-28 overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#D6A84F]/10 via-[#FF2147]/5 to-[#7B3CFF]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D6A84F]" />
              <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#B8B8B8]">
                CORE CAPABILITIES
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight">
              WE BRING <span className="text-gold-gradient">THE ENERGY.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#B8B8B8] max-w-md font-light">
            Every element engineered to ignite the crowd and create a high-octane sensory journey.
          </p>
        </div>

        {/* 4 Large Immersive Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const isHovered = activeHover === index;
            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setActiveHover(index)}
                onMouseLeave={() => setActiveHover(null)}
                className="group relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col justify-between min-h-[460px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-pointer"
              >
                {/* Background Image with Zoom & Dark Gradient */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-all duration-700 group-hover:scale-110 filter brightness-[0.45] contrast-125 group-hover:brightness-[0.6]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at bottom right, ${service.accentColor}, transparent 70%)`,
                    }}
                  />
                </div>

                {/* Top Panel Bar */}
                <div className="relative z-10 p-8 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs font-mono tracking-widest px-3 py-1 rounded-full uppercase border backdrop-blur-md transition-colors duration-300"
                      style={{
                        borderColor: isHovered ? service.accentColor : "rgba(255, 255, 255, 0.2)",
                        color: isHovered ? service.accentColor : "#FFFFFF",
                        backgroundColor: isHovered ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Refined Number Accent */}
                  <span
                    className="font-display text-4xl sm:text-5xl font-black transition-all duration-500 leading-none select-none text-white/20 group-hover:text-white/80"
                    style={{
                      textShadow: isHovered ? `0 0 20px ${service.accentColor}` : "none",
                    }}
                  >
                    {service.number}
                  </span>
                </div>

                {/* Bottom Content & Shift */}
                <div className="relative z-10 p-8 pt-0 transition-transform duration-500 group-hover:-translate-y-2">
                  <p className="text-[11px] font-mono tracking-[0.25em] text-[#D6A84F] uppercase mb-2">
                    {service.subtitle}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white mb-3 flex items-center justify-between">
                    <span>{service.title}</span>
                    <ArrowUpRight
                      className="w-5 h-5 text-[#D6A84F] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      style={{ color: service.accentColor }}
                    />
                  </h3>
                  <p className="text-sm sm:text-base text-[#B8B8B8] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
                    {service.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-xs font-mono text-white/80 bg-white/[0.04] px-3 py-1 rounded-md border border-white/[0.06]"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
