"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { IntroMarquee } from "@/components/IntroMarquee";
import { ServicesSection } from "@/components/ServicesSection";
import { DjPerformanceSection } from "@/components/DjPerformanceSection";
import { SoundSection } from "@/components/SoundSection";
import { LightingSection } from "@/components/LightingSection";
import { EventTypesSection } from "@/components/EventTypesSection";
import { CrazyMarquee } from "@/components/CrazyMarquee";
import { ExperienceSection } from "@/components/ExperienceSection";
import { GallerySection } from "@/components/GallerySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-[#D6A84F] selection:text-black">
      {/* Persistent Floating Navbar */}
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Hero Section with Live Audio Engine & Waveform */}
      <Hero onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Intro Philosophical Statement & Horizontal Marquee */}
      <IntroMarquee />

      {/* 4 Immersive Service Panels */}
      <ServicesSection />

      {/* DJ Performance Section with Interactive Rotating Vinyl */}
      <DjPerformanceSection />

      {/* Sound Section with Live Frequency Oscilloscope */}
      <SoundSection />

      {/* Lighting Section with Animated Lasers & Atmosphere */}
      <LightingSection />

      {/* Event Types: Where We Play */}
      <EventTypesSection onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Crazy Dual Opposing Marquee */}
      <CrazyMarquee />

      {/* Experience Timeline: The 4 Night Phases */}
      <ExperienceSection />

      {/* Visual Editorial Gallery with Lightbox */}
      <GallerySection />

      {/* Testimonials with Giant Quotes */}
      <TestimonialsSection />

      {/* Massive Final CTA with Confetti Burst */}
      <FinalCtaSection onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Contact Information & Inquiry Form */}
      <ContactSection onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Minimal Footer */}
      <Footer />

      {/* Stage Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />
    </main>
  );
}
