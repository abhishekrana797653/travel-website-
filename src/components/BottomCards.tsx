import React from 'react';
import { Compass, Sparkles } from 'lucide-react';

interface BottomCardsProps {
  onCardClick?: (cardType: 'beauty' | 'luxury') => void;
}

export const BottomCards: React.FC<BottomCardsProps> = ({ onCardClick }) => {
  return (
    <footer className="relative z-20 w-full px-6 md:px-10 pb-3 pt-1 mt-1 sm:mt-2">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-stretch sm:items-end gap-3 md:gap-4">
        {/* Card 1: Discover the Beauty of Paris */}
        <div
          onClick={() => onCardClick?.('beauty')}
          className="group touch-light-card animate-float-a relative bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-cyan-400/50 backdrop-blur-xl rounded-2xl p-3 sm:p-3.5 w-full sm:w-[260px] max-w-[260px] shadow-[0_8px_30px_rgba(0,0,0,0.5)] cursor-pointer select-none"
          role="button"
          tabIndex={0}
          aria-label="Discover the Beauty of Paris"
        >
          {/* Top-left Icon Badge: White square with blue compass */}
          <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center mb-2 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,102,255,0.6)]">
            <Compass className="w-3.5 h-3.5 text-[#0066FF]" />
          </div>

          {/* Heading */}
          <h2 className="text-white text-[13px] sm:text-[14px] font-semibold tracking-tight mb-1 select-none">
            Discover the Beauty of Paris
          </h2>

          {/* Description */}
          <p className="text-white/85 text-[10.5px] sm:text-[11px] font-normal leading-snug line-clamp-3 select-none">
            From the Eiffel Tower to historic Montmartre, immerse yourself in world-class art, culture, and Parisian charm.
          </p>
        </div>

        {/* Card 2: Make Every Moment Unforgettable */}
        <div
          onClick={() => onCardClick?.('luxury')}
          className="group touch-light-card animate-float-b relative bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-cyan-400/50 backdrop-blur-xl rounded-2xl p-3 sm:p-3.5 w-full sm:w-[260px] max-w-[260px] shadow-[0_8px_30px_rgba(0,0,0,0.5)] cursor-pointer select-none"
          role="button"
          tabIndex={0}
          aria-label="Make Every Moment Unforgettable"
        >
          {/* Top-left Icon Badge: White square with blue sparkles */}
          <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center mb-2 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,102,255,0.6)]">
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
          </div>

          {/* Heading */}
          <h2 className="text-white text-[13px] sm:text-[14px] font-semibold tracking-tight mb-1 select-none">
            Make Every Moment Unforgettable
          </h2>

          {/* Description */}
          <p className="text-white/85 text-[10.5px] sm:text-[11px] font-normal leading-snug line-clamp-3 select-none">
            From romantic escapes to luxury adventures, experience Paris with comfort, style, and elegance.
          </p>
        </div>
      </div>
    </footer>
  );
};
