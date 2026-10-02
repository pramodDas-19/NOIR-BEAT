"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, Pause, ChevronDown, Volume2, Sparkles, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { audioEngine } from "./AudioSynthEngine";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [waveformBars, setWaveformBars] = useState<number[]>(new Array(36).fill(12));
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax Effect (Desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const bgTranslateX = useTransform(springX, [-0.5, 0.5], ["15px", "-15px"]);
  const bgTranslateY = useTransform(springY, [-0.5, 0.5], ["15px", "-15px"]);
  const textTranslateX = useTransform(springX, [-0.5, 0.5], ["-8px", "8px"]);
  const textTranslateY = useTransform(springY, [-0.5, 0.5], ["-8px", "8px"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  // Toggle Live Audio Beat Preview
  const handleToggleAudio = () => {
    if (typeof window !== "undefined") {
      const active = audioEngine.toggle();
      setIsPlaying(active);
    }
  };

  // Waveform Bar Animation Loop
  useEffect(() => {
    let animId: number;
    const dataArray = new Uint8Array(36);

    const updateBars = () => {
      if (isPlaying && audioEngine.analyser) {
        audioEngine.analyser.getByteFrequencyData(dataArray);
        const mapped = Array.from(dataArray).slice(0, 36).map((val) => {
          return Math.max(6, Math.min(84, (val / 255) * 80 + Math.random() * 8));
        });
        setWaveformBars(mapped);
      } else {
        // Ambient rhythm simulation
        const time = Date.now() * 0.005;
        const ambient = Array.from({ length: 36 }, (_, i) => {
          const wave1 = Math.sin(time + i * 0.35) * 16;
          const wave2 = Math.cos(time * 0.8 + i * 0.2) * 12;
          return Math.max(8, Math.min(55, 20 + wave1 + wave2));
        });
        setWaveformBars(ambient);
      }
      animId = requestAnimationFrame(updateBars);
    };

    animId = requestAnimationFrame(updateBars);
    return () => {
      cancelAnimationFrame(animId);
      if (typeof window !== "undefined" && audioEngine.stop) {
        audioEngine.stop();
      }
    };
  }, [isPlaying]);

  const handleScrollDown = () => {
    const el = document.getElementById("intro");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#050505] pt-28 pb-12 select-none"
    >
      {/* Background Concert Visual with Enhanced Stage Lighting */}
      <motion.div
        style={{ x: bgTranslateX, y: bgTranslateY }}
        className="absolute inset-0 z-0 scale-105 pointer-events-none"
      >
        <Image
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop"
          alt="NOIR BEAT Live Stage Experience"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60 filter brightness-[0.92] contrast-125"
        />

        {/* Cinematic Deep Gradients & Radial Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-[#050505]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#050505_85%)]" />

        {/* Volumetric Moving-Head Stage Spotlight Cones */}
        <div
          className="spotlight-cone-gold left-[12%]"
          style={{ animation: "coneSweepLeft 7s ease-in-out infinite" }}
        />
        <div
          className="spotlight-cone-cyan right-[16%]"
          style={{ animation: "coneSweepRight 8s ease-in-out infinite" }}
        />
        <div
          className="spotlight-cone-red right-[36%]"
          style={{ animation: "coneSweepCenter 6s ease-in-out infinite" }}
        />
        <div
          className="spotlight-cone-gold left-[34%]"
          style={{ animation: "coneSweepRight 9s ease-in-out infinite reverse" }}
        />

        {/* Sharp High-Output Stage Laser Beams */}
        <div className="laser-beam-gold top-0 left-[18%] opacity-80" />
        <div className="laser-beam-red top-0 right-[22%] opacity-70" />
        <div className="laser-beam-purple top-0 left-[68%] opacity-65" />
        <div className="laser-beam-cyan top-0 left-[38%] opacity-75" />
        <div className="laser-beam-gold top-0 right-[32%] opacity-60" />
        <div className="laser-beam-cyan top-0 right-[10%] opacity-55" />
      </motion.div>

      {/* Hero Massive Concert Stage Backlight Aura & Flares */}
      <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-r from-[#D6A84F]/30 via-[#F4C96B]/25 to-[#00E5FF]/20 rounded-full blur-[110px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-[#FF2147]/25 via-[#F4C96B]/30 to-[#7B3CFF]/20 rounded-full blur-[80px] pointer-events-none" />

      {/* Horizontal Anamorphic Lens Flare Streak */}
      <div className="absolute top-[45%] left-0 right-0 z-0 pointer-events-none">
        <div className="flare-streak-gold opacity-80" />
      </div>

      {/* Main Hero Center Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-center flex flex-col items-center">
        {/* Stage Service Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#D6A84F]/30 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(214,168,79,0.15)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F4C96B] animate-ping" />
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.3em] uppercase text-[#F4C96B]">
            DJ • SOUND • LIGHTING • ENTERTAINMENT
          </span>
        </motion.div>

        {/* Refined Headline */}
        <motion.div
          style={{ x: textTranslateX, y: textTranslateY }}
          className="w-full flex flex-col items-center justify-center font-display leading-[0.9] tracking-tight"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-silver-gradient drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] flex flex-col items-center select-none"
          >
            <span>FEEL</span>
            <span className="text-gold-gradient relative inline-block">
              THE
              {/* Subtle light bar accent */}
              <span className="absolute -inset-x-8 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#F4C96B]/30 to-transparent -z-10" />
            </span>
            <span>BEAT.</span>
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 sm:mt-7 max-w-xl text-sm sm:text-base md:text-lg text-[#B8B8B8] font-light tracking-wide px-4"
        >
          Music, atmosphere and energy engineered for unforgettable nights.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#D6A84F] via-[#F4C96B] to-[#D6A84F] text-[#050505] shadow-[0_0_35px_rgba(214,168,79,0.45)] hover:shadow-[0_0_55px_rgba(244,201,107,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 border border-[#F4C96B]"
          >
            <Sparkles className="w-4 h-4" />
            <span>BOOK THE EXPERIENCE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#sound"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest bg-white/[0.04] hover:bg-white/[0.1] text-white border border-white/20 hover:border-[#D6A84F]/60 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>EXPLORE THE SOUND</span>
            <Volume2 className="w-4 h-4 text-[#D6A84F] group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Audio Visualizer & Scroll Indicator */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full flex flex-col items-center mt-10">
        {/* Interactive Audio Synthesizer Bar Toggle */}
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={handleToggleAudio}
            className={`flex items-center gap-2.5 px-4 py-2 rounded-full border text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
              isPlaying
                ? "bg-[#D6A84F]/20 border-[#D6A84F] text-[#F4C96B] shadow-[0_0_20px_rgba(214,168,79,0.4)]"
                : "bg-white/[0.04] border-white/10 text-[#B8B8B8] hover:text-white hover:border-[#D6A84F]/40"
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-[#F4C96B]" />
                <span>PAUSE LIVE BEAT (128 BPM)</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-[#B8B8B8]" />
                <span>PREVIEW LIVE BEAT (TEST SOUND)</span>
              </>
            )}
          </button>
        </div>

        {/* Live Waveform (Thin Glowing Lines: ████ ▂▅▇▂▆▇▃ ███ ▂▆▇) */}
        <div className="w-full max-w-2xl h-16 flex items-end justify-center gap-1 sm:gap-1.5 px-4 py-2 rounded-xl bg-black/40 border border-white/[0.05] backdrop-blur-md shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
          {waveformBars.map((height, idx) => {
            const isMid = idx >= 10 && idx <= 25;
            return (
              <div
                key={idx}
                style={{
                  height: `${height}%`,
                }}
                className={`w-1 sm:w-1.5 rounded-full transition-all duration-75 ${
                  isMid
                    ? "bg-gradient-to-t from-[#D6A84F] to-[#F4C96B] shadow-[0_0_8px_#D6A84F]"
                    : idx % 3 === 0
                    ? "bg-gradient-to-t from-[#FF2147]/80 to-[#F4C96B]"
                    : "bg-gradient-to-t from-white/20 to-white/70"
                }`}
              />
            );
          })}
        </div>

        {/* Scroll Indicator: SCROLL TO ENTER with animated vertical line */}
        <button
          onClick={handleScrollDown}
          className="mt-6 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <span className="text-[10px] uppercase font-mono tracking-[0.35em] text-[#B8B8B8]/80 group-hover:text-[#F4C96B] transition-colors">
            SCROLL TO ENTER
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#D6A84F] via-[#D6A84F]/50 to-transparent relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 32, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-3 bg-white shadow-[0_0_6px_#FFF]"
            />
          </div>
        </button>
      </div>
    </section>
  );
};
