"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Instagram, Youtube, MessageCircle } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "DJ Performance", href: "#dj-performance" },
    { label: "Sound", href: "#sound" },
    { label: "Lighting", href: "#lighting" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#050505] pt-20 pb-12 border-t border-white/[0.08] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="relative h-14 w-48 mb-3">
              <Image
                src="/logo.png"
                alt="NOIR BEAT"
                fill
                className="object-contain filter drop-shadow-[0_2px_10px_rgba(214,168,79,0.3)]"
              />
            </div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#D6A84F]">
              MUSIC FOR UNFORGETTABLE MOMENTS
            </p>
            <p className="text-[11px] text-[#888] font-mono mt-1">
              DJ • SOUND • LIGHTING • ENTERTAINMENT
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#D6A84F] hover:text-[#D6A84F] flex items-center justify-center text-[#B8B8B8] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#FF2147] hover:text-[#FF2147] flex items-center justify-center text-[#B8B8B8] transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#25D366] hover:text-[#25D366] flex items-center justify-center text-[#B8B8B8] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D6A84F] to-[#F4C96B] text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-transform ml-2"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="py-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-mono uppercase tracking-wider text-[#888]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright & Demo Notice */}
        <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666] text-center sm:text-left">
          <p>© 2026 NOIR BEAT. Demo Website.</p>
          <p className="text-[11px] text-[#888]">
            Crafted for High-Voltage Stage & Luxury Event Production
          </p>
        </div>
      </div>
    </footer>
  );
};
