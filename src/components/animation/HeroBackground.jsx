/** @format */
"use client";
import React from "react";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Pure Black Base */}
      <div className="absolute inset-0 bg-white" />

      {/* 5% Very Subtle Green Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,197,94,0.06),transparent_60%)]" />

      {/* Soft White Ambient Glow (Top Right) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,255,255,0.09),transparent_55%)]" />

      {/* Soft White Ambient Glow (Bottom Left) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(255,255,255,0.07),transparent_55%)]" />

      {/* Central Deep White Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.04] blur-[160px] rounded-full" />
    </div>
  );
}
