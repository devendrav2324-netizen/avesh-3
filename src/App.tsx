import React from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { EventShowcase } from "./components/EventShowcase";
import { ExploreExperience } from "./components/ExploreExperience";
import { ScheduleSection } from "./components/ScheduleSection";
import { SponsorsSection } from "./components/SponsorsSection";
import { RegistrationCTA } from "./components/RegistrationCTA";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  const handleOpenRegister = () => {
    document.getElementById("events")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0d0e11] font-sans text-[#f2f4f8] selection:bg-[#FF642E] selection:text-white">
      
      {/* ======================================================== */}
      {/* MAIN APPLICATION SECTIONS */}
      {/* ======================================================== */}
      <Header />

      <main>
        <HeroSection 
          onOpenRegister={() => handleOpenRegister()} 
        />

        <AboutSection />

        <EventShowcase />

        <ExploreExperience />

        <ScheduleSection />

        <SponsorsSection />

        <RegistrationCTA 
          onOpenRegister={() => handleOpenRegister()}
        />
      </main>

      <Footer />

    </div>
  );
};

export default App;
