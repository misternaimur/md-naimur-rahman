/** @format */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

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

export function TimelineAnimate({ data, className = "" }) {
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
  }, [data.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const totalHeight = segments.at(-1)?.end ?? 0;
  const revealed = useTransform(scrollYProgress, [0, 1], [0, totalHeight]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <div ref={contentRef} className="relative">
        <div className="h-10 sm:h-16" />

        {data.map((item, itemIndex) => (
          <TimelineRow
            key={itemIndex}
            {...item}
            isLast={itemIndex === data.length - 1}
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
  );
}
