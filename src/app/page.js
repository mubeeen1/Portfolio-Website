import React from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] px-12 py-4">
    <NavBar />
    <div className="container mx-auto mt-24">
     <HeroSection />
     <AboutSection />
</div>


    </main>
  );
}