"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Youtube, MessageCircle, Send, CheckCircle2 } from "lucide-react";

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Wedding Reception",
    date: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-[#070707] py-28 overflow-hidden border-t border-white/[0.08]">
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D6A84F]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Brand & Demo Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#D6A84F]" />
                <span className="text-xs uppercase font-mono tracking-widest text-[#B8B8B8]">
                  DIRECT CONNECT
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white mb-2 leading-none">
                NOIR BEAT
              </h2>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#D6A84F] mb-6">
                DJ | SOUND | LIGHTING | ENTERTAINMENT
              </p>

              <p className="text-base text-[#B8B8B8] font-light leading-relaxed mb-8">
                Based out of Goa, India and touring globally for luxury destination weddings, private estate sessions, and festival arenas.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-[#E0E0E0]">
                  <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#D6A84F]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#888] font-mono uppercase">Headquarters</p>
                    <p className="text-sm font-medium">Goa, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[#E0E0E0]">
                  <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#D6A84F]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#888] font-mono uppercase">Direct Hotline (Demo)</p>
                    <p className="text-sm font-medium font-mono">+91 00000 00000</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[#E0E0E0]">
                  <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#D6A84F]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#888] font-mono uppercase">Bookings & Management</p>
                    <p className="text-sm font-medium font-mono">hello@noirbeat.com</p>
                  </div>
                </div>
              </div>

              {/* Demo Notice */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-[#888]">
                ⚠️ <span className="text-[#D6A84F]">NOTICE:</span> Contact details are representative demo information for demonstration purposes.
              </div>
            </div>

            {/* Social Icon Buttons */}
            <div className="pt-8 border-t border-white/10 mt-8">
              <p className="text-xs font-mono uppercase tracking-widest text-[#B8B8B8] mb-4">
                FOLLOW THE MOVEMENT:
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/[0.04] hover:bg-[#D6A84F] hover:text-black border border-white/10 flex items-center justify-center transition-all duration-300 text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/[0.04] hover:bg-[#FF2147] hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 text-white"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/[0.04] hover:bg-[#25D366] hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 text-white"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-[#0A0A0A] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-white mb-2">
                INQUIRE FOR YOUR EVENT
              </h3>
              <p className="text-sm text-[#B8B8B8] font-light mb-8">
                Share your dates and event vision. Our team responds within 12 hours.
              </p>

              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#D6A84F]/20 text-[#D6A84F] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-2xl font-bold uppercase text-white mb-2">
                    TRANSMISSION RECEIVED
                  </h4>
                  <p className="text-sm text-[#B8B8B8] max-w-sm">
                    Thank you! Your inquiry has been logged in demo mode. Our booking director would contact you with availability.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 text-xs font-mono uppercase tracking-widest text-[#D6A84F] hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B8B8B8] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Karan Singhania"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#D6A84F] text-white placeholder-white/20 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B8B8B8] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="karan@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#D6A84F] text-white placeholder-white/20 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B8B8B8] mb-2">
                        Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 focus:border-[#D6A84F] text-white focus:outline-none transition-colors"
                      >
                        <option>Wedding Sangeet / Reception</option>
                        <option>Corporate Summit / Gala</option>
                        <option>Exclusive Private Party</option>
                        <option>Club Night Residency</option>
                        <option>Music Festival Stage</option>
                        <option>College / University Fest</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B8B8B8] mb-2">
                        Event Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#D6A84F] text-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B8B8B8] mb-2">
                        City / Location
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Goa / Mumbai"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#D6A84F] text-white placeholder-white/20 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B8B8B8] mb-2">
                      Event Details & Sound/Lighting Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about the crowd size, venue vibe, music preferences, and production requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#D6A84F] text-white placeholder-white/20 focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#D6A84F] via-[#F4C96B] to-[#D6A84F] text-[#050505] shadow-[0_0_25px_rgba(214,168,79,0.4)] hover:shadow-[0_0_40px_rgba(244,201,107,0.7)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 border border-[#F4C96B]"
                  >
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT INQUIRY</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
