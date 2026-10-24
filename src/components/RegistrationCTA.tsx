import React from "react";
import { soundFx } from "../utils/audio";
import { Terminal, Shield, ArrowRight } from "lucide-react";
import { useSectionScrollFade } from "../hooks/useSectionScrollFade";

interface RegistrationCTAProps {
  onOpenRegister: () => void;
}

export const RegistrationCTA: React.FC<RegistrationCTAProps> = ({ onOpenRegister }) => {
  const { sectionRef, isVisible } = useSectionScrollFade();
  return (
    <section ref={sectionRef} className="registration-cta-section relative py-24 sm:py-32 bg-[#0d0e11] border-t border-white/5 overflow-hidden">
      <img
        src="/assets/registration-cta-background.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-[#0d0e11]/10" />

      <div className={`section-scroll-fade max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${isVisible ? "is-visible" : ""}`}>
        
        {/* Main Banner Box with Signature Diagonal Slashes */}
        <div className="relative p-8 sm:p-14 lg:p-16 rounded-sm bg-[#171717]/65 border border-sunset/30 shadow-[0_20px_60px_-15px_rgba(255,100,46,0.3)] clip-diagonal-card overflow-hidden text-center">
          
          {/* Diagonal architectural accent stripe */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sunset/20 to-transparent pointer-events-none clip-diagonal-btn" />
          
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-[1.05] uppercase max-w-3xl mx-auto mb-4">
            THE MORE YOU LEARN, <span className="text-sunset">THE MORE YOU CAN.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-silver-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Join collegiate innovators at CGIT Raipur. Showcase your robotics, build 8-hour Hack4Community prototypes, pitch at Founder's Forge, and celebrate across 4 days of technical and cultural excellence.
          </p>

          {/* Registration Trigger Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenRegister();
              }}
              className="w-full sm:w-auto px-8 py-4 bg-sunset hover:bg-sunset-hover text-white font-mono text-sm font-bold tracking-[0.22em] rounded-sm clip-diagonal-btn shadow-[0_0_35px_rgba(255,100,46,0.6)] transition-all flex items-center justify-center gap-2"
            >
              <span>CLAIM YOUR PASS NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#schedule"
              onClick={() => soundFx.playClick()}
              className="w-full sm:w-auto px-6 py-4 bg-white/5 hover:bg-white/10 text-silver-300 hover:text-white border border-white/10 font-mono text-sm font-medium tracking-wider rounded-sm transition-all"
            >
              VIEW FULL SCHEDULE
            </a>
          </div>

          {/* Fine print reassurance */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 font-mono text-[11px] text-silver-500">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-sunset" />
              Official CGIT Raipur Verified
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-amber" />
              Instant Digital Delegate Pass
            </span>
            <span>•</span>
            <span>Free Access to Tech Expo & Keynotes</span>
          </div>

        </div>

      </div>
    </section>
  );
};
