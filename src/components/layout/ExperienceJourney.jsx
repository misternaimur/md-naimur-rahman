/** @format */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Sparkles,
  Award,
  ExternalLink,
  Image as ImageIcon,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

// Achievement & Certification Timeline Data with Image Preview Options
const timelineData = [
  {
    id: "01",
    company: "Programming Hero",
    role: "Complete Web Development Course",
    period: "Issued Jul 2026",
    status: { text: "Credential ID: WEB13-0705", tone: "positive" },
    credentialLink: "#", // Add your credential verification link here
    certificateImage:
      "https://media.licdn.com/dms/image/v2/D562DAQE0lRNQlhhH8g/profile-treasury-document-cover-images_1920/B56aDezYtvKQBE-/0/1790444408874?e=1792180800&v=beta&t=VIAwaMWvMYqihY6c0FbMWlt2YyVkXFSLjl3Lo95RaFk", // Replace with your certificate image URL
    stack: [
      {
        name: "Next.js",
        icon: <SiNextdotjs className="w-3.5 h-3.5 text-white" />,
      },
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
        name: "JavaScript",
        icon: <SiJavascript className="w-3.5 h-3.5 text-yellow-400" />,
      },
    ],
    achievement:
      "Successfully completed hands-on software engineering practices & capstone projects",
    description:
      "Successfully completed the Complete Web Development Course with Programming Hero, gaining hands-on experience in modern web development and professional software engineering practices. Worked with HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, and MongoDB, while developing practical problem-solving and development skills. 🚀",
  },
  {
    id: "02",
    company: "Enhancing Digital Government & Economy Project",
    role: "Front-End Development (React / NodeJS / VueJS / AngularJS)",
    period: "Issued Apr 2025",
    status: { text: "Credential ID: EDGE-DSTS-119-7050-00010", tone: "accent" },
    credentialLink: "#", // Add your credential verification link here
    certificateImage:
      "https://media.licdn.com/dms/image/v2/D562DAQEF9iV1ZTwkcg/profile-treasury-document-cover-images_480/B56ZZg9WrFHgA0-/0/1745383420794?e=1792180800&v=beta&t=lWxUoOsra8q8rfYcGugbFmOR910VINcvmPWRktZd6L8", // Replace with your certificate image URL
    stack: [
      {
        name: "React.js",
        icon: <FaReact className="w-3.5 h-3.5 text-cyan-400" />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-3.5 h-3.5 text-green-500" />,
      },
      {
        name: "HTML5",
        icon: <FaHtml5 className="w-3.5 h-3.5 text-orange-500" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="w-3.5 h-3.5 text-blue-500" />,
      },
    ],
    achievement:
      "Completed an intensive 80-hour hands-on training under Bangladesh Computer Council, ICT Division",
    description:
      "Completed an intensive 80-hour hands-on training under the EDGE Project by Bangladesh Computer Council, ICT Division. The program focused on building responsive and dynamic web applications using modern JavaScript frameworks.",
  },
];

const CONTENT_LIFT = 10;
const LINE_GAP = 28;

const TimelineRow = ({ index, content, isLast, rowRef, indexRef }) => {
  const localRowRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: localRowRef,
    offset: ["start 70%", "start 45%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });
  const opacity = useTransform(progress, [0, 1], [0, 1]);
  const y = useTransform(progress, [0, 1], [32, 0]);
  const contentY = useTransform(
    progress,
    [0, 1],
    [32 - CONTENT_LIFT, -CONTENT_LIFT],
  );

  return (
    <div
      ref={(node) => {
        localRowRef.current = node;
        rowRef(node);
      }}
      className={`relative ${!isLast ? "pb-12 sm:pb-20" : ""}`}
    >
      <motion.div
        ref={indexRef}
        style={{ opacity, y }}
        className="absolute left-6 w-fit -translate-x-1/2 px-1 text-center text-lg font-mono font-bold text-green-400 sm:left-8 sm:text-xl"
      >
        {index}
      </motion.div>
      <motion.div
        style={{ opacity, y: contentY }}
        className="min-w-0 pl-16 sm:pl-24"
      >
        {content}
      </motion.div>
    </div>
  );
};

const TimelineSegment = ({ start, end, revealed }) => {
  const height = useTransform(revealed, (value) =>
    Math.min(Math.max(value - start, 0), end - start),
  );

  return (
    <div
      style={{ top: start, height: end - start }}
      className="absolute left-6 w-0.5 -translate-x-1/2 overflow-hidden bg-transparent sm:left-8"
    >
      <motion.div
        style={{ height }}
        className="absolute inset-x-0 top-0 w-0.5 bg-green-500/40 rounded-none"
      />
    </div>
  );
};

const ExperienceCard = ({
  company,
  role,
  period,
  status,
  credentialLink,
  certificateImage,
  stack,
  achievement,
  description,
}) => {
  return (
    <div className="group p-6 sm:p-8 bg-neutral-900/50 border border-neutral-800 shadow-xl hover:border-green-500/50 transition-all duration-300 rounded-none">
      {/* Certificate Image Preview Box */}
      {certificateImage && (
        <div className="w-full h-48 sm:h-56 bg-neutral-950 border border-neutral-800 mb-6 relative overflow-hidden group-hover:border-green-500/40 transition-colors">
          <img
            src={certificateImage}
            alt={`${role} Certificate`}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b07] via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/70 border border-neutral-800 text-xs font-mono text-green-400">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Verified Certificate</span>
          </div>
        </div>
      )}

      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <p className="text-sm font-mono text-neutral-400">{company}</p>
        <span className="px-3 py-1 bg-green-950/80 border border-green-800 text-green-400 text-xs font-mono font-medium rounded-none">
          {period} {status && `• ${status.text}`}
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
          {role}
        </h3>
        {credentialLink && (
          <a
            href={credentialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-green-400 transition-colors"
          >
            <span>Show Credential</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {/* Stack Tags with Icons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {stack.map((tech, tIdx) => (
          <div
            key={tIdx}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#141414] border border-neutral-800 text-xs text-neutral-300 font-mono rounded-none"
          >
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>

      {/* Achievement Highlight */}
      <div className="mb-4 p-3.5 bg-[#141414] border border-neutral-800 rounded-none">
        <p className="text-xs sm:text-sm font-medium text-green-400 font-sans">
          🚀 {achievement}
        </p>
      </div>

      {/* Description */}
      <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans">
        {description}
      </p>
    </div>
  );
};

export default function ExperienceJourney() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const rowNodes = useRef([]);
  const indexNodes = useRef([]);
  const [segments, setSegments] = useState([]);

  useEffect(() => {
    if (!contentRef.current) return;

    const measure = () => {
      const containerTop = contentRef.current.getBoundingClientRect().top;

      const bounds = rowNodes.current
        .map((rowNode, nodeIndex) =>
          rowNode
            ? { rowNode, indexNode: indexNodes.current[nodeIndex] }
            : null,
        )
        .filter((entry) => !!entry?.indexNode)
        .map(({ rowNode, indexNode }) => {
          const top = rowNode.getBoundingClientRect().top - containerTop;
          const height = indexNode.getBoundingClientRect().height;
          return { top, bottom: top + height };
        });

      if (!bounds.length) return;

      let cursor = 0;
      const nextSegments = [];

      bounds.forEach((bound) => {
        nextSegments.push({
          start: cursor,
          end: Math.max(cursor, bound.top - LINE_GAP),
        });
        cursor = bound.bottom + LINE_GAP;
      });

      setSegments(nextSegments);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const totalHeight = segments.at(-1)?.end ?? 0;
  const revealed = useTransform(scrollYProgress, [0, 1], [0, totalHeight]);

  const formattedData = timelineData.map(({ id, ...step }) => ({
    index: id,
    content: <ExperienceCard {...step} />,
  }));

  return (
    <section
      id="achievement-certification"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050b07] text-white"
    >
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-green-500/10 rounded-none blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-none blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-4 py-1.5 rounded-none backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-green-400" />
            <span className="text-xs uppercase tracking-wider text-neutral-300 font-mono">
              Credentials &amp; Milestones
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Achievement &amp;{" "}
            <span className="text-green-400">Certification</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-mono">
            Professional certifications and accredited technical training
            programs validating my engineering expertise.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative w-full">
          <div ref={contentRef} className="relative">
            <div className="h-10 sm:h-16" />

            {formattedData.map((item, itemIndex) => (
              <TimelineRow
                key={itemIndex}
                {...item}
                isLast={itemIndex === formattedData.length - 1}
                rowRef={(node) => (rowNodes.current[itemIndex] = node)}
                indexRef={(node) => (indexNodes.current[itemIndex] = node)}
              />
            ))}

            {segments.map((segment, segmentIndex) => (
              <TimelineSegment
                key={segmentIndex}
                start={segment.start}
                end={segment.end}
                revealed={revealed}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
