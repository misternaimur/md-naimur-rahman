/** @format */
"use client";

import React from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Image as ImageIcon,
} from "lucide-react";
import { FaUniversity } from "react-icons/fa";

const educationData = [
  {
    degree:
      "Bachelor of Science (B.Sc.), Computer Science and Engineering (CSE)",
    institution: "Premier University, Chittagong",
    period: "Mar 2023 – Present",
    status: "Currently Enrolled / Ongoing",
    location: "Chittagong, Bangladesh",
    image:
      "data:image/png;base64,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", // Replace with your university/campus image URL
    description:
      "Focusing on core computer science foundations, data structures, algorithms, object-oriented programming, and software engineering principles while building scalable real-world projects.",
    keySubjects: [
      "Data Structures",
      "Algorithms",
      "C / C++",
      "Database Management",
      "Software Engineering",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC) / ICT",
    institution: "Omargani M.E.S College",
    period: "2022 – 2023",
    status: "Completed",
    location: "Chittagong, Bangladesh",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mUVquqtwFntlnxhPeJHNlE4WLzDM7I5eSYb1e57Syg&s=10", // Replace with your college image URL
    description:
      "Completed higher secondary education with a specialized focus on Information and Communications Technology (ICT), laying the groundwork for programming and technology.",
    keySubjects: [
      "Information & Communications Technology (ICT)",
      "Mathematics",
      "Physics",
    ],
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050b07] text-white"
    >
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-green-500/10 rounded-none blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-none blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-4 py-1.5 rounded-none backdrop-blur-md">
            <GraduationCap className="w-4 h-4 text-green-400" />
            <span className="text-xs uppercase tracking-wider text-neutral-300 font-mono">
              Academic Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Educational <span className="text-green-400">Journey</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-mono">
            My academic foundation in computer science and technology that
            drives my engineering mindset.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between p-6 sm:p-8 bg-neutral-900/50 border border-neutral-800 shadow-xl hover:border-green-500/50 transition-all duration-300 rounded-none relative overflow-hidden"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* Academic Image / Banner Preview Box */}
                {edu.image && (
                  <div className="w-full h-44 sm:h-48 bg-neutral-950 border border-neutral-800 mb-6 relative overflow-hidden group-hover:border-green-500/40 transition-colors">
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050b07] via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/70 border border-neutral-800 text-xs font-mono text-green-400">
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>Campus / Institution</span>
                    </div>
                  </div>
                )}

                {/* Institution & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 text-green-400 font-mono text-xs uppercase tracking-wider">
                    <FaUniversity className="w-4 h-4" />
                    <span>{edu.institution}</span>
                  </div>
                  <span className="px-3 py-1 bg-green-950/80 border border-green-800 text-green-400 text-xs font-mono font-medium rounded-none">
                    {edu.status}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide mb-3">
                  {edu.degree}
                </h3>

                {/* Period & Location */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 mb-4 pb-4 border-b border-neutral-800">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-green-400" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-green-400" />
                    {edu.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans mb-6">
                  {edu.description}
                </p>
              </div>

              {/* Key Subjects / Focus Areas */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-mono font-semibold mb-3">
                  Key Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.keySubjects.map((subject, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 bg-[#141414] border border-neutral-800 text-xs text-neutral-300 font-mono rounded-none"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
