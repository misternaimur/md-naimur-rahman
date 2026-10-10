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
    let isVisible = true;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let width = 0;
    let height = 0;
    let devicePixelRatio = 1;

    const resizeCanvas = () => {
      const bounds = canvas.getBoundingClientRect();
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      canvas.width = Math.floor(width * devicePixelRatio);
      canvas.height = Math.floor(height * devicePixelRatio);
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      initGrid();
    };

    // Mouse coordinate tracking with smooth damping
    const mouse = { x: -1000, y: -1000, radius: 220 };
    const handleMouseMove = (e) => {
      const bounds = canvas.getBoundingClientRect();
      mouse.x = e.clientX - bounds.left;
      mouse.y = e.clientY - bounds.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Grid Pixel Configuration
    const spacing = window.innerWidth < 640 ? 24 : 32;
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

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas);
    resizeCanvas();

    // Animation Loop
    let time = 0;
    const render = () => {
      if (!isVisible) return;

      // ডিপ ডার্ক গ্রিন ট্রেইল ইফেক্ট
      ctx.fillStyle = "rgba(5, 15, 10, 0.24)";
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

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !prefersReducedMotion) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.01 },
    );
    intersectionObserver.observe(canvas);
    render();

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 z-10 h-full w-full pointer-events-none"
    />
  );
}
