/** @format */
"use client";
import React from "react";
import OrbitAnimation from "../animation/OrbitAnimation";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#050b07] text-white py-24 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden"
    >
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: About Text & Description */}
        <div className="lg:col-span-6 space-y-6 text-left">
          {/* Centered & Bold Heading */}
          <div className="text-center lg:text-left w-full">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white inline-block relative">
              Who am i ?
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-16 h-1 bg-green-500 rounded-full"></span>
            </h2>
          </div>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed pt-2">
            I am Md. Naimur Rahman, a Junior Full-Stack Developer and Computer
            Science &amp; Engineering student at Premier University,
            Chittagong[cite: 1]. I specialize in building high-performance web
            applications using React, Next.js, TypeScript, Node.js, Express.js,
            and MongoDB[cite: 1].
          </p>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Beyond coding, I have practical leadership experience—such as
            leading a six-member team on real-world projects like{" "}
            <span className="text-white font-medium">FoodieGo</span>, managing
            Scrum workflows via Jira, and handling production-ready codebases
            with clean architecture[cite: 1].
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#141414]/80 border border-neutral-800/80">
              <h3 className="text-2xl font-bold text-white">11+</h3>
              <p className="text-xs text-neutral-400 mt-1">
                MERN and Full Stack Web Projects Built
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#141414]/80 border border-neutral-800/80">
              <h3 className="text-2xl font-bold text-green-400">Team Lead</h3>
              <p className="text-xs text-neutral-400 mt-1">
                FoodieGo &amp; Scrum[cite: 1]
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Orbit Animation Component */}
        <div className="lg:col-span-6 flex justify-center items-center relative">
          <div className="absolute w-[350px] h-[350px] bg-green-500/15 rounded-full blur-[100px] pointer-events-none"></div>
          <OrbitAnimation />
        </div>
      </div>
    </section>
  );
}
