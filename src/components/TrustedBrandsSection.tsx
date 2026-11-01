import React from 'react';

export const TrustedBrandsSection: React.FC = () => {
  return (
    <section
      id="trusted-brands"
      className="w-full relative bg-transparent text-white pt-16 sm:pt-20 md:pt-24 pb-14 sm:pb-18 px-4 sm:px-8 md:px-12 flex flex-col items-center justify-center overflow-hidden border-t border-white/10"
      aria-label="Proudly Trusted Brands"
    >
      {/* Ambient warm diffuse glow behind text */}
      <div
        className="absolute top-[38%] left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-full h-[360px] bg-[radial-gradient(ellipse_60%_50%_at_55%_45%,rgba(215,70,25,0.22)_0%,rgba(165,45,15,0.13)_38%,rgba(90,25,10,0.05)_65%,transparent_80%)] blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Headline Container: Left-aligned and max-w-6xl to match KineticStudioSection */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
        <h2 className="leading-[1.12] select-none text-center tracking-tight" style={{ textAlign: "center" }}>
          {/* Line 1: Proudly Trusted - Elegant Italic Serif */}
          <span className="block font-['Playfair_Display',serif] italic font-normal text-3xl sm:text-5xl md:text-[64px] text-white tracking-normal text-center">
            Proudly Trusted
          </span>

          {/* Line 2: by Leading Brands - Modern Italic Sans */}
          <span className="block font-['DM_Sans',sans-serif] italic font-medium text-3xl sm:text-5xl md:text-[62px] text-white tracking-tight mt-1 sm:mt-1.5 text-center">
            by Leading Brands
          </span>

          {/* Line 3: Across Industries with Red Registered Trademark Symbol */}
          <span className="inline-flex items-baseline justify-center font-['DM_Sans',sans-serif] italic font-medium text-3xl sm:text-5xl md:text-[62px] text-white tracking-tight mt-1 sm:mt-1.5">
            <span>Across Industries</span>
            <span className="text-[#E03131] not-italic font-bold text-lg sm:text-2xl md:text-3xl ml-1 sm:ml-1.5 align-super select-none drop-shadow-[0_0_8px_rgba(224,49,49,0.4)]">
              ®
            </span>
          </span>
        </h2>

        {/* Subtext: DM Sans font, white color, left-aligned matching headline */}
        <p className="font-['DM_Sans',sans-serif] text-white/85 text-xs sm:text-[13px] md:text-sm leading-relaxed mt-6 sm:mt-7 max-w-lg text-center select-none font-normal">
          <span className="block italic text-white/90">We&apos;ve partnered with leading</span>
          <span className="block mt-0.5">brands to deliver innovative and impactful</span>
          <span className="block mt-0.5">architectural solutions</span>
        </p>
      </div>

      {/* Brand Logos Row: max-w-6xl matching headline and sections */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mt-14 sm:mt-20 pt-8 border-t border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8 md:gap-12 px-2 sm:px-6">
          {/* Logo 1: Far Left - High-Rise Architectural Structure Silhouette */}
          <div
            className="touch-lift flex items-center justify-center opacity-75 hover:opacity-100 transition-all cursor-pointer hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.9)]"
            title="Metropolitan Architecture"
            aria-label="Metropolitan Architecture Brand"
          >
            <svg viewBox="0 0 32 40" className="w-7 h-9 fill-white" aria-hidden="true">
              <path d="M4 40h24V14l-5-5h-3V5l-4-4-4 4v4H9l-5 5v30zm4-2V16h4v22H8zm6 0V11h4v27h-4zm6 0V16h4v22h-4z" />
            </svg>
          </div>

          {/* Logo 2: CONDON CONSTRUCTION - Stacked C icon with dual line text */}
          <div
            className="touch-lift flex flex-col items-center justify-center opacity-85 hover:opacity-100 transition-all cursor-pointer font-['DM_Sans',sans-serif] hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.9)]"
            title="Condon Construction"
            aria-label="Condon Construction Brand"
          >
            {/* Geometric stylized C mark */}
            <svg viewBox="0 0 28 24" className="w-6 h-5 fill-none stroke-white stroke-[2.2]" aria-hidden="true">
              <rect x="2" y="2" width="24" height="20" rx="3" strokeWidth="2" />
              <path d="M19 7h-9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h9" strokeLinecap="round" />
              <path d="M14 12h5" strokeLinecap="round" />
            </svg>
            <span className="text-[11px] sm:text-[12px] font-extrabold tracking-wider text-white uppercase leading-tight mt-1.5">
              CONDON
            </span>
            <span className="text-[6.5px] sm:text-[7.5px] font-semibold tracking-widest text-white/70 uppercase -mt-0.5">
              CONSTRUCTION
            </span>
          </div>

          {/* Logo 3: Center - Morrison Construction with distinctive red emblem */}
          <div
            className="touch-lift flex flex-col items-center justify-center opacity-90 hover:opacity-100 transition-all cursor-pointer font-['DM_Sans',sans-serif] hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.9)]"
            title="Morrison Construction"
            aria-label="Morrison Construction Brand"
          >
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-[13px] sm:text-[14px] font-bold text-white tracking-tight">
                Morrison
              </span>
              {/* Morrison red crescent / leaf swoosh icon */}
              <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none" aria-hidden="true">
                <circle cx="10" cy="10" r="9" stroke="#FFFFFF" strokeWidth="1.5" />
                <path d="M5 10c2-3 5-3 8 0" stroke="#E03131" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M5 10c2 3 5 3 8 0" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[9px] sm:text-[10px] font-medium text-white/75 tracking-wide mt-0.5">
              Construction
            </span>
          </div>

          {/* Logo 4: Cityscape & Bridge Skyline Crest Emblem */}
          <div
            className="touch-lift flex items-center justify-center opacity-80 hover:opacity-100 transition-all cursor-pointer hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.9)]"
            title="Skyline Developments"
            aria-label="Skyline Developments Brand"
          >
            <svg viewBox="0 0 44 36" className="w-9 h-7 fill-white" aria-hidden="true">
              {/* Base curved suspension horizon */}
              <path d="M2 32c10-5 30-5 40 0v2H2v-2z" opacity="0.6" />
              {/* Skyline towers */}
              <path d="M12 28V12h4v16h-4zm6 0V6h5v22h-5zm7 0V15h4v13h-4zm6 0V20h3v8h-3z" />
              <path d="M8 28V22h3v6H8z" opacity="0.75" />
              {/* Crown / spire accents */}
              <polygon points="20.5,3 19,6 22,6" />
            </svg>
          </div>

          {/* Logo 5: Far Right - Architectural Gateway / Pillars Facade */}
          <div
            className="touch-lift flex items-center justify-center opacity-75 hover:opacity-100 transition-all cursor-pointer hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.9)]"
            title="Atelier Portals"
            aria-label="Atelier Portals Brand"
          >
            <svg viewBox="0 0 32 38" className="w-6 h-8 fill-none stroke-white stroke-[2]" aria-hidden="true">
              <rect x="3" y="4" width="26" height="30" rx="1.5" />
              <line x1="12" y1="4" x2="12" y2="34" />
              <line x1="20" y1="4" x2="20" y2="34" />
              <rect x="5" y="10" width="5" height="18" fill="white" fillOpacity="0.3" stroke="none" />
              <rect x="14" y="8" width="4" height="22" fill="white" stroke="none" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

