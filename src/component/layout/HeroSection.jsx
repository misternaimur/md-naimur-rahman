/** @format */
"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import HeroBackground from "../animation/HeroBackground"; // ব্যাকগ্রাউন্ড কম্পোনেন্ট
import HeroCanvas from "../animation/HeroCanvas"; // অ্যানিমেশন কম্পোনেন্ট

export default function HeroSection() {
  return (
    <section className="font-bricolage-grotesque-font relative w-full min-h-[90vh] flex items-center justify-center bg-black text-slate-100 overflow-hidden px-4 sm:px-6 lg:px-8 pt-36 pb-20">
      {/* 1. Background Layer */}
      <HeroBackground />

      {/* 2. Canvas Motion Animation Layer */}
      <HeroCanvas />

      {/* 3. Hero Content Layer */}
      
    </section>
  );
}
