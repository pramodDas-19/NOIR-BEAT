"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X, Sparkles, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  spanClass: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "MIDNIGHT FESTIVAL HEADLINING",
    category: "FESTIVAL ARENA",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
    spanClass: "md:col-span-8 md:row-span-2 min-h-[380px] md:min-h-[500px]",
  },
  {
    id: "g2",
    title: "PIONEER CDJ-3000 MIXER DESK",
    category: "HARDWARE RIG",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
    spanClass: "md:col-span-4 md:row-span-1 min-h-[260px]",
  },
  {
    id: "g3",
    title: "CROWD WAVE & LASER TUNNEL",
    category: "CROWD EUPHORIA",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
    spanClass: "md:col-span-4 md:row-span-2 min-h-[380px]",
  },
  {
    id: "g4",
    title: "LUXURY DESTINATION WEDDING DANCEFLOOR",
    category: "DESTINATION WEDDINGS",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    spanClass: "md:col-span-4 md:row-span-1 min-h-[260px]",
  },
  {
    id: "g5",
    title: "CONCERT ACOUSTIC SUBWOOFER WALL",
    category: "SOUND SYSTEMS",
    image: "https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=1200&auto=format&fit=crop",
    spanClass: "md:col-span-4 md:row-span-1 min-h-[260px]",
  },
  {
    id: "g6",
    title: "EXCLUSIVE VIP NIGHTCLUB RESIDENCY",
    category: "NIGHTCLUB VIBES",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1200&auto=format&fit=crop",
    spanClass: "md:col-span-8 md:row-span-1 min-h-[300px]",
  },
];

export const GallerySection: React.FC = () => {
  const [activeModalImage, setActiveModalImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="relative bg-[#050505] py-28 overflow-hidden border-t border-white/[0.05]">
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#7B3CFF]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#D6A84F]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <Camera className="w-3.5 h-3.5 text-[#F4C96B]" />
              <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#B8B8B8]">
                VISUAL ARCHIVE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight">
              ENERGY IN <span className="text-gold-gradient">MOTION.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#B8B8B8] max-w-md font-light">
            Editorial snapshots captured from peak moments across the country’s most electrifying stages.
          </p>
        </div>

        {/* Magazine Editorial Asymmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalImage(item)}
              className={`group relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/10 hover:border-[#D6A84F]/60 transition-all duration-500 cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.8)] ${item.spanClass}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-center filter brightness-[0.7] contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Hover Overlay Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-[#D6A84F]">
                    {item.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(214,168,79,0.3)]"
            >
              <Image
                src={activeModalImage.image}
                alt={activeModalImage.title}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 bg-gradient-to-t from-black via-black/70 to-transparent">
                <span className="text-xs font-mono text-[#D6A84F] uppercase tracking-widest">
                  {activeModalImage.category}
                </span>
                <h4 className="font-display text-2xl sm:text-3xl font-black uppercase text-white mt-1">
                  {activeModalImage.title}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
