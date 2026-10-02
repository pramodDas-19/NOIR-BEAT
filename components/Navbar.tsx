"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Music2, Volume2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "#hero" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "SERVICES", href: "#services" },
    { label: "EVENTS", href: "#events" },
    { label: "GALLERY", href: "#gallery" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleScrollTo(e, "#hero")}
          className="group flex items-center gap-3 relative focus:outline-none"
        >
          <div className="relative h-11 w-36 sm:h-12 sm:w-44 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="NOIR BEAT"
              fill
              priority
              className="object-contain filter drop-shadow-[0_2px_12px_rgba(214,168,79,0.3)]"
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="relative px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8B8B8] hover:text-white transition-colors duration-200 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#D6A84F] group-hover:w-3/4 -translate-x-1/2 transition-all duration-300 shadow-[0_0_8px_#D6A84F]" />
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Controls */}
        <div className="flex items-center gap-3">
          {/* Desktop "BOOK THE BEAT" CTA */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#D6A84F] via-[#F4C96B] to-[#D6A84F] text-[#050505] shadow-[0_0_20px_rgba(214,168,79,0.4)] hover:shadow-[0_0_30px_rgba(244,201,107,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 border border-[#F4C96B]/50"
          >
            <span>BOOK THE BEAT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg text-[#B8B8B8] hover:text-white bg-white/[0.05] border border-white/10 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#D6A84F]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nightclub Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-[#D6A84F]/20 px-6 pt-6 pb-8 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          >
            {/* VIP Nightclub Accent Bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF2147] animate-ping" />
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#B8B8B8]">
                  STAGE STATUS • LIVE
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#D6A84F]">
                <Volume2 className="w-3.5 h-3.5" />
                <span className="font-mono text-[11px]">128 BPM</span>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="flex items-center justify-between text-lg font-bold uppercase tracking-[0.15em] text-[#E0E0E0] hover:text-[#D6A84F] py-2 border-b border-white/[0.04] transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#D6A84F]/60">0{idx + 1}</span>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="pt-4"
              >
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm bg-gradient-to-r from-[#D6A84F] via-[#F4C96B] to-[#D6A84F] text-[#050505] shadow-[0_0_25px_rgba(214,168,79,0.5)] flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>BOOK THE BEAT</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
