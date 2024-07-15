import React from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] px-12 py-4">
    <NavBar />
    <div className="container mx-auto mt-24">
     <HeroSection />
</div>


    </main>
  );
}