/** @format */
"use client";
import React from "react";
import HeroBackground from "../animation/HeroBackground"; // ব্যাকগ্রাউন্ড কম্পোনেন্ট
import HeroCanvas from "../animation/HeroCanvas"; // অ্যানিমেশন কম্পোনেন্ট
import HeroContent from "../animation/HeroContent";
export default function HeroSection() {
  return (
    <section className="font-bricolage-grotesque-font relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-[#050b07] px-4 pb-12 pt-28 text-slate-100 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
      {/* 1. Background Layer */}
      <HeroBackground />

      {/* 2. Canvas Motion Animation Layer */}
      <HeroCanvas />

      {/* 3. Hero Content Layer */}
      <HeroContent />
    </section>
  );
}
