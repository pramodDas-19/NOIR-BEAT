"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface EventType {
  title: string;
  tagline: string;
  crowd: string;
  image: string;
  accent: string;
}

const eventTypes: EventType[] = [
  {
    title: "WEDDINGS",
    tagline: "HIGH-GLAMOUR SANGEETS & UNSTOPPABLE AFTER-PARTIES",
    crowd: "300 - 1500+ Guests",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    accent: "#D6A84F",
  },
  {
    title: "CORPORATE EVENTS",
    tagline: "SUMMITS, AWARDS GALAS & EXECUTIVE CELEBRATIONS",
    crowd: "200 - 3000+ Attendees",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    accent: "#00E5FF",
  },
  {
    title: "PRIVATE PARTIES",
    tagline: "LUXURY VILLA SESSIONS, YACHTS & EXCLUSIVE MILESTONES",
    crowd: "50 - 500+ VIPs",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    accent: "#FF2147",
  },
  {
    title: "CLUB NIGHTS",
    tagline: "HIGH-OCTANE RESIDENCIES & UNDERGROUND ENERGY",
    crowd: "Full Capacity Takeovers",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1200&auto=format&fit=crop",
    accent: "#7B3CFF",
  },
  {
    title: "FESTIVALS",
    tagline: "OPEN-AIR ARENAS, STAGE HEADLINING & MULTI-THOUSAND DROPS",
    crowd: "5000+ Festival Goers",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1200&auto=format&fit=crop",
    accent: "#F4C96B",
  },
  {
    title: "COLLEGE EVENTS",
    tagline: "COLOSSAL YOUTH FESTS & UNBOUNDED CONCERT DELIRIUM",
    crowd: "3000 - 10000+ Students",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop",
    accent: "#00E5FF",
  },
];

interface EventTypesProps {
  onOpenBooking: () => void;
}

export const EventTypesSection: React.FC<EventTypesProps> = ({ onOpenBooking }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="events" className="relative bg-[#050505] py-28 overflow-hidden border-t border-white/[0.05]">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#D6A84F]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D6A84F]" />
              <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#B8B8B8]">
                VERSATILE STAGES
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight">
              WHERE WE <span className="text-gold-gradient">PLAY.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#B8B8B8] max-w-md font-light">
            From intimate cliffside luxury villas to 10,000-person concert arenas, we curate custom energy profiles for every crowd.
          </p>
        </div>

        {/* 6 Large Editorial Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {eventTypes.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={item.title}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={onOpenBooking}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#0A0A0A] border border-white/10 hover:border-white/40 transition-all duration-500 cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between p-8"
              >
                {/* Background Image with Zoom & Dark Gradient */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center filter brightness-[0.4] contrast-125 transition-all duration-700 group-hover:scale-110 group-hover:brightness-[0.6]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at bottom, ${item.accent}, transparent 70%)`,
                  }}
                />

                {/* Top Badge & Arrow */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white/90">
                    {item.crowd}
                  </span>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-[#D6A84F] group-hover:text-black transition-all duration-300"
                    style={{
                      boxShadow: isHovered ? `0 0 20px ${item.accent}` : "none",
                    }}
                  >
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Bottom Editorial Content */}
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="text-xs font-mono text-[#D6A84F] uppercase tracking-[0.2em] block mb-2">
                    EXPERIENCE PROFILE
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white mb-2 leading-none">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8B8B8] font-light leading-relaxed">
                    {item.tagline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
