/** @format */

import Image from "next/image";
import Navbar from "@/component/layout/Navbar";
import HeroSection from "@/component/layout/HeroSection";

export default function Home() {
  return (
    <div  className="dark:bg-black min-h-screen forn ">
      <Navbar />
      <HeroSection />
      
    </div>
  );  
}
