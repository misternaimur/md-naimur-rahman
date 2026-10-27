/** @format */
"use client";

import React from "react";
import { motion } from "motion/react";
import Logo from "@/components/layout/Logo";

export default function Loading() {
  return (
    <main
      aria-live="polite"
      className="fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#030704] px-4 text-white"
    >
      {/* Background Ambient Glow Effects */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[160px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[160px]" />

      {/* Subtle Dot Grid Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Central Component: Logo inside a spinning / pulsing orbit ring */}
        <div className="relative flex items-center justify-center">
          {/* Rotating Glowing Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-4 rounded-3xl border border-dashed border-green-500/30"
          />

          {/* Ambient Inner Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-green-500/20 to-emerald-400/20 blur-xl" />

          {/* Animated Brand Logo Box */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1], // Custom smooth cubic-bezier spring
            }}
            className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-green-400/40 bg-white/95 p-3.5 shadow-[0_0_50px_rgba(34,197,94,0.3)] backdrop-blur-xl"
          >
            <Logo className="h-full w-full" />
          </motion.div>
        </div>

        {/* Text & Dynamic Indicator */}
        <div className="mt-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center gap-1.5"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-emerald-400">
              Welcome
            </span>
            <h2 className="text-xl font-medium tracking-tight text-neutral-200">
              Preparing Portfolio...
            </h2>
          </motion.div>

          {/* Pulsing Dot Status Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-[11px] font-medium tracking-wider text-neutral-400">
              SECURE CONNECTION
            </span>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
