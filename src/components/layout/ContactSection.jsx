/** @format */
"use client";

import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050b07] text-white"
    >
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-green-500/10 rounded-none blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-none blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-4 py-1.5 rounded-none backdrop-blur-md">
            <MessageSquare className="w-3.5 h-3.5 text-green-400" />
            <span className="text-xs uppercase tracking-wider text-neutral-300 font-mono">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Let&apos;s Build <span className="text-green-400">Together</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-mono">
            Have a project in mind, a collaboration request, or just want to
            connect? Drop a message or book a call directly.
          </p>
        </div>

        {/* Contact Grid: Left Info & Socials + Right Cal.com Booking */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Info Card */}
            <div className="p-6 sm:p-8 bg-neutral-900/50 border border-neutral-800 shadow-xl rounded-none space-y-6">
              <h3 className="text-xl font-bold text-white tracking-wide uppercase border-b border-neutral-800 pb-4">
                Contact Information
              </h3>

              <div className="space-y-4 font-mono text-sm">
                <a
                  href="mailto:misternaimur@gmail.com"
                  className="flex items-center gap-3 text-neutral-300 hover:text-green-400 transition-colors p-3 bg-[#141414] border border-neutral-800 rounded-none"
                >
                  <Mail className="w-5 h-5 text-green-400 shrink-0" />
                  <span className="truncate">misternaimur@gmail.com</span>
                </a>

                <a
                  href="https://wa.me/8801940599789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-300 hover:text-green-400 transition-colors p-3 bg-[#141414] border border-neutral-800 rounded-none"
                >
                  <Phone className="w-5 h-5 text-green-400 shrink-0" />
                  <span>+880 1940-599789</span>
                </a>

                <div className="flex items-center gap-3 text-neutral-300 p-3 bg-[#141414] border border-neutral-800 rounded-none">
                  <MapPin className="w-5 h-5 text-green-400 shrink-0" />
                  <span>Chattogram, Bangladesh</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-neutral-800">
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-mono font-semibold mb-4">
                  Connect on Socials
                </h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://linkedin.com/in/misternaimur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 px-4 bg-[#141414] hover:bg-neutral-800 border border-neutral-800 text-white font-mono text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <FaLinkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/misternaimur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 px-4 bg-[#141414] hover:bg-neutral-800 border border-neutral-800 text-white font-mono text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <FaGithub className="w-4 h-4 text-white" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://wa.me/8801940599789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 px-4 bg-[#141414] hover:bg-neutral-800 border border-neutral-800 text-white font-mono text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="w-4 h-4 text-green-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Cal.com Meeting Embed Box */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-6 bg-neutral-900/50 border border-neutral-800 shadow-xl rounded-none relative">
              <div className="mb-4 flex items-center justify-between border-b border-neutral-800 pb-3">
                <span className="text-sm font-mono text-green-400 uppercase tracking-wide">
                  Schedule a 30-Min Call
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  Powered by Cal.com
                </span>
              </div>

              {/* Cal.com Embed Container */}
              <div className="w-full h-[500px] sm:h-[550px] bg-[#0b120e] border border-neutral-800 overflow-hidden rounded-none">
                <Cal
                  namespace="30min"
                  calLink="misternaimur/30min"
                  style={{ width: "100%", height: "100%", overflow: "scroll" }}
                  config={{
                    layout: "month_view",
                    useSlotsViewOnSmallScreen: "true",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
