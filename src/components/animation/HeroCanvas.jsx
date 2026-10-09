/** @format */
"use client";
import React, { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initGrid();
    };

    window.addEventListener("resize", handleResize);

    // Mouse coordinate tracking with smooth damping
    const mouse = { x: -1000, y: -1000, radius: 220 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Grid Pixel Configuration
    const spacing = 32;
    let pixels = [];

    const initGrid = () => {
      pixels = [];
      for (let x = spacing / 2; x < width + spacing; x += spacing) {
        for (let y = spacing / 2; y < height + spacing; y += spacing) {
          pixels.push({
            x,
            y,
            baseSize: 2,
            angle: Math.random() * Math.PI * 2, // প্রতিটা পিক্সেলের নিজস্ব ওয়েভ ফেজ
            speed: 0.02 + Math.random() * 0.03, // একেকটা একেক গতিতে গ্রো করবে
            isWhite: Math.random() > 0.82,
          });
        }
      }
    };

    initGrid();

    // Animation Loop
    let time = 0;
    const render = () => {
      // ডিপ ডার্ক গ্রিন ট্রেইল ইফেক্ট
      ctx.fillStyle = "rgba(5, 15, 10, 0.2)";
      ctx.fillRect(0, 0, width, height);

      time += 0.025;

      for (let i = 0; i < pixels.length; i++) {
        const p = pixels[i];
        p.angle += p.speed;

        // Mouse distance check
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let size = p.baseSize;
        let alpha = 0.35;
        let isHovered = false;

        // মাউসের কাছে আসলে পিক্সেলগুলো বড় ও উজ্জ্বল হবে (Interactive Grow)
        if (dist < mouse.radius) {
          const factor = 1 - dist / mouse.radius;
          size += factor * 5.5;
          alpha += factor * 0.65;
          isHovered = true;
        }

        // অর্গানিক এবং সুন্দর ওয়েভ সাইজ ক্যালকুলেশন (Smooth Wave & Grow)
        const wave = Math.sin(time + p.x * 0.008 + p.y * 0.008 + p.angle) * 1.5;
        const currentSize = Math.max(1, size + wave);

        ctx.beginPath();

        // কালার টোন ও গ্লোয়িং ফিক্স
        if (isHovered && p.isWhite) {
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, alpha + 0.4)})`;
        } else if (isHovered) {
          ctx.fillStyle = `rgba(34, 197, 94, ${Math.min(1, alpha + 0.5)})`; // Vibrant Green
        } else {
          ctx.fillStyle = `rgba(22, 101, 52, ${alpha})`; // Deep Rich Forest Green
        }

        // স্কয়ার পিক্সেল ব্লক রেন্ডার
        ctx.fillRect(
          p.x - currentSize / 2,
          p.y - currentSize / 2,
          currentSize,
          currentSize,
        );
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 bg-[#050b07]"
    />
  );
}
