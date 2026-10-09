/** @format */
"use client";
import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaDocker } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiTailwindcss,
  SiJsonwebtokens,
  SiTypescript,
  SiRedis,
} from "react-icons/si";

const projects = [
  {
    title: "FoodieGo",
    badge: "Full-Stack AI Platform",
    description:
      "A full-stack food delivery platform supporting customer, vendor, rider, and admin workflows with real-time order and delivery features.",
    techStack: [
      {
        name: "Next.js",
        icon: <SiNextdotjs className="w-3.5 h-3.5 text-white" />,
      },
      {
        name: "React",
        icon: <FaReact className="w-3.5 h-3.5 text-cyan-400" />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-3.5 h-3.5 text-green-500" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="w-3.5 h-3.5 text-neutral-300" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-3.5 h-3.5 text-emerald-500" />,
      },
      {
        name: "Socket.IO",
        icon: <SiSocketdotio className="w-3.5 h-3.5 text-white" />,
      },
    ],
    contribution:
      "Led a six-member team as Team Lead, managing Jira, running Scrum updates, handling Git/GitHub collaboration, and building full-stack workflows.",
    liveDemo: "#",
    github: "#",
    isComingSoon: false,
  },
  {
    title: "DocAppoint",
    badge: "MERN Stack App",
    description:
      "A full-stack doctor appointment booking system featuring advanced doctor search, profiles, JWT authentication, protected routes, and interactive dashboards.",
    techStack: [
      {
        name: "React.js",
        icon: <FaReact className="w-3.5 h-3.5 text-cyan-400" />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-3.5 h-3.5 text-green-500" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="w-3.5 h-3.5 text-neutral-300" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-3.5 h-3.5 text-emerald-500" />,
      },
      {
        name: "JWT Auth",
        icon: <SiJsonwebtokens className="w-3.5 h-3.5 text-yellow-400" />,
      },
    ],
    contribution:
      "Developed complete appointment CRUD operations, implemented secure JWT authentication with protected routes, and designed a responsive interface.",
    liveDemo: "#",
    github: "#",
    isComingSoon: false,
  },
  {
    title: "Project Three",
    badge: "Full-Stack / SaaS",
    description:
      "Placeholder slot reserved for upcoming full-stack applications, architectures, or client tools currently in development.",
    techStack: [
      {
        name: "Next.js",
        icon: <SiNextdotjs className="w-3.5 h-3.5 text-white" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-3.5 h-3.5 text-blue-400" />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="w-3.5 h-3.5 text-cyan-300" />,
      },
    ],
    contribution:
      "Designed for high scalability, optimized database indexing, and role-based access control workflows.",
    liveDemo: "#",
    github: "#",
    isComingSoon: true,
  },
  {
    title: "Project Four",
    badge: "Microservices / API",
    description:
      "Reserved slot for advanced backend integrations, queue-based architecture, or modular component libraries.",
    techStack: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-3.5 h-3.5 text-green-500" />,
      },
      { name: "Redis", icon: <SiRedis className="w-3.5 h-3.5 text-red-500" /> },
      {
        name: "Docker",
        icon: <FaDocker className="w-3.5 h-3.5 text-blue-400" />,
      },
    ],
    contribution:
      "Focused on high-throughput server-side performance, data caching, and secure token management.",
    liveDemo: "#",
    github: "#",
    isComingSoon: true,
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050b07] text-white"
    >
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-green-500/10 rounded-none blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-none blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Featured <span className="text-green-400">Projects</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-mono">
            Real-world applications showcasing full-stack expertise, team
            leadership, and production-ready architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group flex flex-col justify-between p-6 sm:p-8 bg-neutral-900/50 border border-neutral-800 shadow-xl hover:border-green-500/50 transition-all duration-300 ${
                project.isComingSoon ? "border-dashed bg-neutral-900/30" : ""
              }`}
            >
              <div>
                {/* Screenshot Preview Box */}
                <div className="w-full h-52 bg-gradient-to-br from-neutral-900 to-[#0e1610] border border-neutral-800 flex items-center justify-center relative overflow-hidden mb-6 group-hover:border-green-500/40 transition-colors">
                  <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-neutral-500 font-mono text-sm tracking-wide">
                    {project.isComingSoon
                      ? `Coming Soon / Project 0${index + 1}`
                      : `${project.title} Screenshot Preview`}
                  </span>
                </div>

                {/* Title & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h3
                    className={`text-2xl font-bold tracking-wide ${project.isComingSoon ? "text-neutral-400" : "text-white"}`}
                  >
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-green-950/80 border border-green-800 text-green-400 text-xs font-mono font-medium">
                    {project.badge}
                  </span>
                </div>

                {/* Description */}
                <p
                  className={`text-sm sm:text-base leading-relaxed mb-6 font-sans ${project.isComingSoon ? "text-neutral-500" : "text-neutral-300"}`}
                >
                  {project.description}
                </p>

                {/* Technologies Used with Icons */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-mono font-semibold mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#141414] border border-neutral-800 text-xs text-neutral-300 font-mono"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contribution */}
                <div className="mb-8 p-4 bg-[#141414] border border-neutral-800">
                  <h4 className="text-xs uppercase tracking-wider text-green-400 font-mono font-semibold mb-2">
                    {project.isComingSoon
                      ? "Scope & Architecture"
                      : "My Individual Contribution"}
                  </h4>
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {project.contribution}
                  </p>
                </div>
              </div>

              {/* Links */}
              <div
                className={`flex items-center gap-4 pt-4 border-t border-neutral-800 ${project.isComingSoon ? "opacity-50 pointer-events-none" : ""}`}
              >
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-4 bg-green-500 hover:bg-green-400 text-black font-mono font-semibold text-sm transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-mono font-semibold text-sm transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
