import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4 select-none">
      <div className="w-full max-w-[320px] sm:max-w-[360px] mx-auto flex flex-col items-center text-center">
        {/* Main Display Headline: In three lines to fit the plane window frame */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-[34px] font-semibold tracking-tight leading-[1.14] select-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          <span className="block">Experience</span>
          <span className="block mt-0.5 sm:mt-1">Paris Like</span>
          <span className="block mt-0.5 sm:mt-1">Never Before</span>
        </h1>

        {/* Subtitle: Compact width so it never touches or overlaps the plane window frame */}
        <p className="text-white/90 text-xs sm:text-[12px] md:text-[12.5px] font-normal leading-relaxed mt-2.5 max-w-[270px] sm:max-w-[300px] text-center select-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          Every corner of Paris has a story to tell. Discover its iconic attractions,
          historic architecture, and unforgettable experiences.
        </p>

        {/* CTA Button: Explore Tour - centered with touch lift & light aura */}
        <div className="mt-3.5 sm:mt-4">
          <button
            onClick={onCtaClick}
            className="group touch-lift relative inline-flex items-center gap-2.5 bg-white text-neutral-900 font-medium text-xs sm:text-[12.5px] pl-4 pr-1.5 py-1.5 rounded-full shadow-[0_6px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(255,255,255,0.8),0_10px_30px_rgba(0,102,255,0.45)] hover:bg-neutral-50 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none"
            aria-label="Explore Tour"
          >
            <span className="tracking-tight select-none font-semibold">
              Explore Tour
            </span>
            <span className="w-6 h-6 rounded-full bg-[#0066FF] text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45 group-hover:scale-110 shadow-xs group-hover:shadow-[0_0_15px_rgba(0,102,255,0.8)]">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.4]" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
