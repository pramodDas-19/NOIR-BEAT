import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        secondary: "#0A0A0A",
        surface: "#111111",
        surfaceLight: "#181818",
        gold: {
          DEFAULT: "#D6A84F",
          bright: "#F4C96B",
          dark: "#A37A2C",
        },
        muted: "#B8B8B8",
        accent: {
          red: "#FF2147",
          purple: "#7B3CFF",
          cyan: "#00E5FF",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-sora)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "marquee-left": "marqueeLeft 35s linear infinite",
        "marquee-right": "marqueeRight 35s linear infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "laser-sweep": "laserSweep 6s ease-in-out infinite",
      },
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4", filter: "blur(20px)" },
          "50%": { opacity: "0.8", filter: "blur(30px)" },
        },
        laserSweep: {
          "0%, 100%": { transform: "rotate(-25deg) scaleY(1)" },
          "50%": { transform: "rotate(25deg) scaleY(1.3)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
