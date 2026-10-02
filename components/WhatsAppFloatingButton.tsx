"use client";

import React, { useState } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const WhatsAppFloatingButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl =
    "https://wa.me/910000000000?text=Hi%20NOIR%20BEAT!%20I'm%20planning%20an%20event%20and%20would%20love%20to%20check%20availability%20for%20DJ,%20Sound%20%26%20Lighting.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center select-none">
      {/* Tooltip / Label */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center gap-2 mr-3 px-4 py-2 rounded-full bg-[#0C0C0C]/95 border border-[#25D366]/40 text-white shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(37,211,102,0.2)] backdrop-blur-xl"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-white">
              CHAT WITH US
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-white shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_40px_rgba(37,211,102,0.85)] hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20"
        aria-label="Chat on WhatsApp with NOIR BEAT"
      >
        {/* Pulsing Ripple Rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
        <span className="absolute -inset-2 rounded-full border border-[#25D366]/40 animate-pulse pointer-events-none" />

        {/* Inner WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-transparent group-hover:scale-110 transition-transform duration-300 drop-shadow-md" />

        {/* Small Gold Sparkle Accent */}
        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#D6A84F] border border-black flex items-center justify-center shadow-sm">
          <Sparkles className="w-3 h-3 text-black" />
        </div>
      </a>
    </div>
  );
};
