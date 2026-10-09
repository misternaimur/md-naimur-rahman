/** @format */

import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/layout/HeroSection";
import AboutSection from "@/components/layout/Aboutus";
import SkillsSection from "@/components/layout/SkillsSection";

export default function Home() {
  return (
    <div className="dark:bg-black min-h-screen ">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </div>
  );
}
