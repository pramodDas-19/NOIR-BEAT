"use client";

import React from "react";
import { Quote, Star, MessageSquare } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      quote: "The energy completely transformed our reception. The dance floor never stopped from the moment the first track hit until 4 AM.",
      author: "Riya & Karan",
      role: "Luxury Destination Wedding, Goa",
      vibe: "WEDDING AFTER-PARTY",
      rating: 5,
    },
    {
      quote: "The sound and lighting made our event feel like a professional production. The transitions were surgical, and our CEO didn't want to leave the floor.",
      author: "Event Director",
      role: "Global Tech Summit & Awards Gala",
      vibe: "CORPORATE GALA",
      rating: 5,
    },
    {
      quote: "Exactly the kind of atmosphere we wanted. Incredible energy, breathtaking lighting, and a DJ who knows how to control the room like nobody else.",
      author: "Private Client",
      role: "Private Hillside Villa Celebration",
      vibe: "VIP PRIVATE EVENT",
      rating: 5,
    },
  ];

  return (
    <section className="relative bg-[#070707] py-28 overflow-hidden border-t border-white/[0.05]">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D6A84F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
            <MessageSquare className="w-3.5 h-3.5 text-[#F4C96B]" />
            <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#B8B8B8]">
              CROWD REACTIONS (DEMO CONTENT)
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[0.95]">
            THE ENERGY <span className="text-gold-gradient">SPEAKS FOR ITSELF.</span>
          </h2>
          <p className="mt-4 text-xs font-mono text-[#D6A84F] tracking-widest uppercase">
            * Representative client feedback for preview purposes
          </p>
        </div>

        {/* 3 Large Testimonial Cards with Oversized Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl p-8 sm:p-10 bg-[#0A0A0A] border border-white/10 hover:border-[#D6A84F]/40 transition-all duration-300 flex flex-col justify-between shadow-[0_20px_40px_rgba(0,0,0,0.8)] group"
            >
              {/* Refined Quote Mark Background */}
              <div className="absolute top-6 right-6 text-white/[0.04] group-hover:text-[#D6A84F]/10 transition-colors pointer-events-none font-display font-black text-6xl leading-none select-none">
                “
              </div>

              <div>
                {/* Five Gold Stars */}
                <div className="flex items-center gap-1 mb-6 text-[#F4C96B]">
                  {Array.from({ length: rev.rating }).map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-[#F4C96B]" />
                  ))}
                  <span className="ml-2 text-[10px] font-mono uppercase tracking-widest text-[#B8B8B8]">
                    {rev.vibe}
                  </span>
                </div>

                <p className="text-base sm:text-lg text-[#E0E0E0] font-light leading-relaxed italic relative z-10 mb-8">
                  “{rev.quote}”
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-white/[0.08] relative z-10">
                <p className="font-display text-lg font-bold uppercase text-white group-hover:text-[#D6A84F] transition-colors">
                  {rev.author}
                </p>
                <p className="text-xs text-[#888] font-mono mt-0.5">
                  {rev.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
