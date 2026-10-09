/** @format */

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  RiDiscordFill,
  RiTwitterXFill,
  RiLinkedinFill,
  RiYoutubeFill,
  RiArrowRightUpLine,
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";

const navLinks = [
  { name: "About Me", href: "#Skil", active: false },
  { name: "Skills", href: "#pricing", active: false },
  { name: "Projects", href: "#Edu", active: false },
  { name: "Experience", href: "#about", active: false },
  { name: "Education", href: "#about", active: false },
  { name: "Contact Me", href: "#about", active: false },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // স্ক্রল হ্যান্ডলার ডিটেক্ট করার জন্য
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50  px-4 sm:px-6 lg:px-8 py-4 pointer-events-none">
      <motion.div
        animate={{
          maxWidth: isScrolled ? "900px" : "1000px", // max-w-7xl হলো 1280px
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="mx-auto border border-neutral-200/80 rounded-xl bg-white/90 backdrop-blur-md shadow-sm pointer-events-auto transition-all"
      >
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center pl-6 pr-6 py-3 lg:border-r border-neutral-200 shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold text-sm tracking-tighter">
                M.
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links (স্ক্রল করলে হাইড বা মিনিমাইজ হয়ে যাবে) */}
          <nav
            className={`hidden lg:flex items-center space-x-8 px-8 flex-1 transition-all duration-300 overflow-hidden ${
              isScrolled
                ? "max-w-0 opacity-0 scale-95 pointer-events-none px-0"
                : "max-w-xl opacity-100 scale-100"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors py-2 whitespace-nowrap ${
                  link.active
                    ? "text-neutral-900 font-semibold"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {link.name}
                {link.active && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Actions & Socials (Desktop) */}
          <div className="flex items-center shrink-0">
            {/* Social Icons Group (স্ক্রল করলে এটিও হাইড হয়ে যাবে যাতে শুধু লোগো আর গেট এ ডেমো থাকে) */}
            <div
              className={`hidden lg:flex items-center space-x-4 px-6 border-r border-neutral-200 text-neutral-500 transition-all duration-300 overflow-hidden ${
                isScrolled
                  ? "max-w-0 opacity-0 px-0 border-r-0"
                  : "max-w-xs opacity-100"
              }`}
            >
              <Link
                href="https://twitter.com/misternaimur"
                target="_blank"
                aria-label="Twitter / X"
                className="hover:text-neutral-900 transition-colors"
              >
                <RiTwitterXFill size={16} />
              </Link>
              <Link
                href="https://linkedin.com/in/misternaimur"
                target="_blank"
                aria-label="LinkedIn"
                className="hover:text-neutral-900 transition-colors"
              >
                <RiLinkedinFill size={18} />
              </Link>
              <Link
                href="https://youtube.com/@misternaimur"
                target="_blank"
                aria-label="YouTube"
                className="hover:text-neutral-900 transition-colors"
              >
                <RiYoutubeFill size={18} />
              </Link>
            </div>

            {/* Contact Sales & CTA */}
            <div className="hidden lg:flex items-center space-x-6 pl-6 pr-4">
              <Link
                href="#contact"
                className={`text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-all duration-300 ${
                  isScrolled ? "hidden xl:block" : "block"
                }`}
              >
                |
              </Link>
              <Link
                href="#demo"
                className="inline-flex items-center justify-center rounded-b-sm bg-black px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-neutral-800 transition-all gap-1.5 group"
              >
                Hire Me
                <RiArrowRightUpLine
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden pr-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-black focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <RiCloseLine size={24} />
              ) : (
                <RiMenu3Line size={24} />
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden max-w-7xl mx-auto mt-3 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-xl shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium py-1 ${
                      link.active
                        ? "text-black font-semibold"
                        : "text-neutral-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-neutral-200 flex flex-col space-y-4">
                <div className="flex items-center space-x-5 text-neutral-600 pt-2">
                  <Link href="https://discord.com" target="_blank">
                    <RiDiscordFill size={20} />
                  </Link>
                  <Link href="https://twitter.com/" target="_blank">
                    <RiTwitterXFill size={18} />
                  </Link>
                  <Link href="https://linkedin.com/in/misternaimur" target="_blank">
                    <RiLinkedinFill size={20} />
                  </Link>
                  <Link href="https://youtube.com" target="_blank">
                    <RiYoutubeFill size={20} />
                  </Link>
                </div>

                <Link
                  href="#demo"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white gap-2 w-full"
                >
                  Get a Demo <RiArrowRightUpLine size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
