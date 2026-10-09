/** @format */
"use client";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaUsers,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJira,
  SiVercel,
  SiCplusplus,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaReact className="w-5 h-5 text-cyan-400" />,
    skills: [
      { name: "React.js", icon: <FaReact className="w-4 h-4 text-cyan-400" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="w-4 h-4 text-white" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-4 h-4 text-blue-400" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-4 h-4 text-cyan-300" />,
      },
      {
        name: "Framer Motion",
        icon: <SiFramer className="w-4 h-4 text-pink-400" />,
      },
      {
        name: "HTML5",
        icon: <FaHtml5 className="w-4 h-4 text-orange-500" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="w-4 h-4 text-blue-500" />,
      },
    ],
  },
  {
    title: "Backend Development",
    icon: <FaNodeJs className="w-5 h-5 text-green-500" />,
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-4 h-4 text-green-500" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="w-4 h-4 text-neutral-300" />,
      },
      {
        name: "RESTful APIs",
        icon: <FaNodeJs className="w-4 h-4 text-green-400" />,
      },
      {
        name: "Authentication",
        icon: <FaUsers className="w-4 h-4 text-yellow-400" />,
      },
      {
        name: "JavaScript",
        icon: <FaReact className="w-4 h-4 text-yellow-300" />,
      },
    ],
  },
  {
    title: "Database",
    icon: <FaDatabase className="w-5 h-5 text-emerald-400" />,
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-4 h-4 text-emerald-500" />,
      },
      {
        name: "Mongoose ODM",
        icon: <SiMongoose className="w-4 h-4 text-red-400" />,
      },
      {
        name: "Data Modeling",
        icon: <FaDatabase className="w-4 h-4 text-emerald-400" />,
      },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <FaGitAlt className="w-5 h-5 text-orange-500" />,
    skills: [
      {
        name: "Git & GitHub",
        icon: <FaGitAlt className="w-4 h-4 text-orange-500" />,
      },
      {
        name: "Vercel",
        icon: <SiVercel className="w-4 h-4 text-white" />,
      },
      {
        name: "Jira & ClickUp",
        icon: <SiJira className="w-4 h-4 text-blue-500" />,
      },
      {
        name: "Notion",
        icon: <FaUsers className="w-4 h-4 text-neutral-300" />,
      },
    ],
  },
  {
    title: "Other Technical Skills",
    icon: <FaUsers className="w-5 h-5 text-green-400" />,
    skills: [
      {
        name: "Team Leadership",
        icon: <FaUsers className="w-4 h-4 text-green-400" />,
      },
      {
        name: "Scrum & Agile",
        icon: <FaUsers className="w-4 h-4 text-emerald-400" />,
      },
      {
        name: "Git Collab",
        icon: <FaGitAlt className="w-4 h-4 text-orange-400" />,
      },
      {
        name: "C / C++",
        icon: <SiCplusplus className="w-4 h-4 text-blue-500" />,
      },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#050b07] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-none blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-none blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Skills &amp; <span className="text-green-400">Expertise</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-mono">
            A comprehensive breakdown of the technologies, tools, and
            methodologies I leverage to build scalable web applications.
          </p>
        </div>

        {/* Skills Grid (Sharp Square Corners) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group p-6 sm:p-8 rounded-none bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-2xl shadow-xl hover:border-green-500/40 transition-all duration-300 hover:-translate-y-1 ${
                index === 4 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800/80">
                <div className="p-2.5 rounded-none bg-neutral-900 border border-neutral-800 group-hover:border-green-500/50 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-medium text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Horizontal Layout: Icon next to Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 px-4 py-3 bg-[#141414] border border-neutral-800/80 rounded-none text-xs sm:text-sm text-neutral-300 hover:text-white hover:border-green-500/40 hover:bg-neutral-900/80 transition-all duration-200 cursor-default"
                  >
                    <div className="p-2 rounded-none bg-neutral-900 border border-neutral-800 shrink-0">
                      {skill.icon}
                    </div>
                    <span className="font-medium tracking-tight truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
