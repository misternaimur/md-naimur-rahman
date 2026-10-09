/** @format */
"use client";
import React from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
export default function HeroContent() {
  return (
    <div className="relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center py-12 text-center">
      {/* 1. Top Tagline Pill */}
      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#141414] via-[#1c1c1c] to-[#141414] border border-green-500/30 px-5 py-2.5 rounded-full shadow-[0_0_25px_rgba(34,197,94,0.15)] backdrop-blur-xl mb-8 group hover:border-green-500/60 transition-all duration-300">
        {/* Glowing Status Dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
        </span>

        {/* Tagline Text */}
        <span className="text-[11px] md:text-xs tracking-widest uppercase text-neutral-200 font-semibold bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
          Full Stack Systems &amp; Clean Architecture
        </span>
      </div>

      {/* 2. Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.25] md:leading-[1.2] text-white">
        {/* Line 1: Hi. I'm + Profile with Hover Card Effect */}
        <span className="inline-flex items-center justify-center flex-wrap gap-x-3 gap-y-2">
          Hi. I&apos;m
          {/* Profile Wrapper with Hover Card Effect */}
          <span className="relative mx-2 inline-block -rotate-2 transform cursor-pointer transition-transform duration-300 group hover:rotate-0">
            <span className="font-semibold text-green-400 inline-flex items-center gap-2.5 bg-[#161616] border border-neutral-800 px-5 py-2 rounded-full shadow-lg transition-all group-hover:border-green-400">
              <img
                src="/asset/mister-naimur.jpg"
                alt="Md Naimur Rahman"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
              />
              <span>Md Naimur Rahman</span>
            </span>

            {/* iOS Style Clean White Hover Card */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-80 bg-white text-neutral-900 border border-neutral-200 p-5 rounded-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 z-50 text-left">
              {/* Card Center: Large Preview Image */}
              <div className="relative w-full h-68 mb-4 overflow-hidden rounded-2xl bg-neutral-100">
                <img
                  src="/asset/mister-naimur.jpg"
                  alt="Md Naimur Rahman"
                  className="w-150 h-68 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Footer: Social Handle & Connect Button */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-neutral-200 shrink-0">
                    <img
                      src="/asset/mister-naimur.jpg"
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="text-xl  leading-tight">@misternaimur</h3>
                    <p className="text-[21px] font-medium text-neutral-500 mt-0.5">
                      Available for hire
                    </p>
                  </div>
                </div>

                {/* LinkedIn Connect Button */}
                <a
                  href="https://linkedin.com/in/misternaimur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-semibold rounded-2xl transition-all shadow-md active:scale-95 flex items-center gap-2"
                >
                  Connect
                </a>
              </div>
            </div>
          </span>
        </span>

        <br />

        {/* Line 2: What I Build */}
        <span className="inline-flex items-center justify-center flex-wrap gap-x-3 gap-y-2 mt-3">
          I build full-stack Web Applications
        </span>

        <br />

        {/* Line 3: Scale & Growing Widget */}
        <span className="inline-flex items-center justify-center flex-wrap gap-x-4 gap-y-3 mt-3">
          that scale businesses &amp; grow.
        </span>
      </h1>

      {/* 3. Action Buttons */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {/* Connect / Email Button */}
        <a
          href="mailto:misternaimur@gmail.com"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-neutral-900 font-semibold text-xs tracking-wider uppercase transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
        >
          <FaEnvelope
            size={14}
            className="text-neutral-800 transition-transform group-hover:scale-110"
          />
          Connect
        </a>

        {/* GitHub Profile Button */}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#161616] border border-neutral-800 text-neutral-300 font-semibold text-xs tracking-wider uppercase transition-all duration-300 transform hover:scale-105 active:scale-95 hover:bg-[#222222] hover:text-white hover:border-green-500/50 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]"
        >
          <FaGithub size={15} className="text-white" />
          GitHub Profile
        </a>
      </div>
    </div>
  );
}
