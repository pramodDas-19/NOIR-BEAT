import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Sora, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noirbeat.com"),
  title: "NOIR BEAT | DJ, Sound & Entertainment",
  description:
    "NOIR BEAT creates unforgettable entertainment experiences through professional DJ performances, sound, lighting and event entertainment.",
  keywords: [
    "NOIR BEAT",
    "Luxury DJ",
    "Concert Sound System",
    "Event Lighting",
    "Festival DJ",
    "Destination Wedding DJ",
    "Goa DJ",
    "Private Parties",
    "Corporate Events",
    "Nightclub Experience",
  ],
  authors: [{ name: "NOIR BEAT" }],
  openGraph: {
    title: "NOIR BEAT | DJ, Sound & Entertainment",
    description:
      "Music, atmosphere and energy engineered for unforgettable nights. DJ • SOUND • LIGHTING • ENTERTAINMENT",
    url: "https://noirbeat.com",
    siteName: "NOIR BEAT",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "NOIR BEAT Luxury DJ & Entertainment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOIR BEAT | DJ, Sound & Entertainment",
    description:
      "Music, atmosphere and energy engineered for unforgettable nights.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${sora.variable} ${syne.variable} font-sans bg-[#050505] text-white antialiased selection:bg-[#D6A84F] selection:text-black`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
