/** @format */
"use client";
import React, { useEffect, useRef } from "react";
import {
  SiFigma,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiGooglemeet,
  SiNotion,
  SiGithub,
  SiTailwindcss,
} from "react-icons/si";

const innerRingItems = [
  { icon: <SiFigma className="text-[#F24E1E]" size={22} />, badge: "99+" },
  { icon: <SiNextdotjs className="text-white" size={22} />, badge: "1M+" },
  { icon: <SiReact className="text-[#61DAFB]" size={22} /> },
  { icon: <SiTypescript className="text-[#3178C6]" size={22} /> },
];

const outerRingItems = [
  { icon: <SiGooglemeet className="text-[#00897B]" size={22} /> },
  { icon: <SiNotion className="text-white" size={22} />, badge: "100" },
  { icon: <SiGithub className="text-white" size={22} /> },
  { icon: <SiTailwindcss className="text-[#38BDF8]" size={22} /> },
];

const getItemsWithCoords = (items, radius, baseOffsetAngle) => {
  return items.map((item, index) => {
    const angle = baseOffsetAngle + index * (360 / items.length);
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;
    return { ...item, x, y };
  });
};

export default function OrbitAnimation() {
  const stageRef = useRef(null);
  const rotatorRef = useRef(null);

  const innerElements = getItemsWithCoords(innerRingItems, 130, 0);
  const outerElements = getItemsWithCoords(outerRingItems, 210, 25);
  const allElements = [...innerElements, ...outerElements];

  useEffect(() => {
    const stage = stageRef.current;
    const rotator = rotatorRef.current;
    if (!stage || !rotator) return;

    let isDragging = false;
    let startAngle = 0;
    let currentRotation = 0;
    let autoRotateSpeed = 0.035;
    let animationFrameId;

    const getAngle = (e, center) => {
      const x = e.clientX - center.x;
      const y = e.clientY - center.y;
      return Math.atan2(y, x) * (180 / Math.PI);
    };

    const dragStart = (e) => {
      isDragging = true;
      const rect = stage.getBoundingClientRect();
      const center = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      startAngle = getAngle({ clientX, clientY }, center) - currentRotation;
    };

    const dragMove = (e) => {
      if (!isDragging) return;
      const rect = stage.getBoundingClientRect();
      const center = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      currentRotation = getAngle({ clientX, clientY }, center) - startAngle;
      rotator.style.transform = `rotate(${currentRotation}deg)`;
    };

    const dragEnd = () => {
      isDragging = false;
    };

    const animate = () => {
      if (!isDragging) {
        currentRotation += autoRotateSpeed;
        rotator.style.transform = `rotate(${currentRotation}deg)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    stage.addEventListener("mousedown", dragStart);
    window.addEventListener("mousemove", dragMove);
    window.addEventListener("mouseup", dragEnd);

    stage.addEventListener("touchstart", dragStart);
    window.addEventListener("touchmove", dragMove);
    window.addEventListener("touchend", dragEnd);

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      stage.removeEventListener("mousedown", dragStart);
      window.removeEventListener("mousemove", dragMove);
      window.removeEventListener("mouseup", dragEnd);
      stage.removeEventListener("touchstart", dragStart);
      window.removeEventListener("touchmove", dragMove);
      window.removeEventListener("touchend", dragEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="orbit-stage relative w-[480px] h-[480px] md:w-[540px] md:h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
    >
      {/* Growing & Glowing Orbit Rings */}
      <div className="absolute w-[260px] h-[260px] border border-dashed border-green-500/30 rounded-full pointer-events-none animate-[spin_30s_linear_infinite] shadow-[0_0_15px_rgba(34,197,94,0.1)]"></div>
      <div className="absolute w-[420px] h-[420px] border border-dashed border-green-500/20 rounded-full pointer-events-none animate-[spin_45s_linear_infinite_reverse] shadow-[0_0_20px_rgba(34,197,94,0.08)]"></div>

      {/* Rotatable Container for Icons */}
      <div
        ref={rotatorRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        {allElements.map((item, index) => (
          <div
            key={index}
            className="absolute pointer-events-auto transition-transform duration-300 hover:scale-125"
            style={{
              left: `calc(50% + ${item.x}px)`,
              top: `calc(50% + ${item.y}px)`,
              transform: `translate(-50%, -50%)`,
            }}
          >
            <div className="w-13 h-13 w-14 h-14 bg-[#121212]/90 border border-green-500/30 hover:border-green-400 rounded-2xl flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] relative group backdrop-blur-md transition-all">
              {item.icon}
              {item.badge && (
                <span
                  className={`absolute -top-2 -right-2 text-[9px] font-bold px-2 py-0.5 rounded-full text-white shadow-md ${
                    item.badge === "100"
                      ? "bg-neutral-800 border border-neutral-700"
                      : "bg-red-500"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Center Profile Image with Glowing Ring */}
      <div className="absolute z-20 w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-green-500 via-green-400 to-neutral-800 shadow-[0_0_30px_rgba(34,197,94,0.3)] overflow-hidden pointer-events-none flex items-center justify-center animate-pulse">
        <img
          src="asset/mister-naimur.jpg"
          alt="Profile"
          className="w-full h-full object-cover rounded-full bg-neutral-900"
        />
      </div>
    </div>
  );
}
