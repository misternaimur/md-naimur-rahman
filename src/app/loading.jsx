/** @format */
"use client";

import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import Logo from "@/components/layout/Logo";

export default function Loading() {
  return (
    <main className="fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050b07] text-white">
      {/* Background Ambient Glow Effects */}
      <div className="pointer-events-none absolute -left-24 top-1/4 h-[420px] w-[420px] rounded-full bg-green-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center px-6">
        {/* Animated Brand Logo Box */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="flex h-20 w-20 items-center justify-center rounded-2xl border border-green-400/30 bg-white p-2 shadow-[0_0_45px_rgba(34,197,94,0.22)]"
        >
          <Logo className="h-full w-full" />
        </motion.div>

        {/* Loading Spinner & Status Text */}
        <div className="mt-8 flex w-full flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-white/[0.06] px-4 py-2 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 animate-spin text-green-400" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-300">
              Loading Portfolio...
            </span>
          </div>

          {/* Sharp Progress Bar Animation */}
          <div className="h-1 w-56 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full w-full rounded-full bg-green-400"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
