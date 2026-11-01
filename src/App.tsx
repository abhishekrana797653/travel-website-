/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BottomCards } from './components/BottomCards';
import { TrustedBrandsSection } from './components/TrustedBrandsSection';
import { KineticStudioSection, StudioCardItem } from './components/KineticStudioSection';
import { ClientCaseStudySection } from './components/ClientCaseStudySection';
import { SplitCardsSection } from './components/SplitCardsSection';
import { TourModal } from './components/TourModal';
import { MenuDrawer } from './components/MenuDrawer';
import { CompareModal } from './components/CompareModal';
import { ScrollAnimationCanvas } from './components/ScrollAnimationCanvas';
import { Eye, MapPin, ChevronDown } from 'lucide-react';

export default function App() {
  const [activeNav, setActiveNav] = useState<string>('Home');
  const [isTourModalOpen, setIsTourModalOpen] = useState<boolean>(false);
  const [, setSelectedStudioCard] = useState<StudioCardItem | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);
  const [showHelperPill, setShowHelperPill] = useState<boolean>(true);

  // Dynamic Touch Light & Cursor Spotlight Tracking
  useEffect(() => {
    const updatePointerLight = (e: PointerEvent) => {
      const card = (e.target as HTMLElement)?.closest<HTMLElement>('.touch-light-card');
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      }
    };

    window.addEventListener('pointermove', updatePointerLight, { passive: true });
    window.addEventListener('pointerdown', updatePointerLight, { passive: true });
    return () => {
      window.removeEventListener('pointermove', updatePointerLight);
      window.removeEventListener('pointerdown', updatePointerLight);
    };
  }, []);

  const handleNavClick = (item: string) => {
    setActiveNav(item);
    if (item === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item === 'Tours') {
      setIsTourModalOpen(true);
    } else if (item === 'Attractions') {
      const el = document.getElementById('split-cards');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (item === 'Stories') {
      const el = document.getElementById('case-study');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (item === 'Contact') {
      setIsTourModalOpen(true);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-transparent text-white font-['DM_Sans',sans-serif] flex flex-col items-center justify-start selection:bg-white selection:text-black py-4 sm:py-6 px-3 sm:px-6 overflow-x-hidden gap-12 sm:gap-16">
      {/* 300-Frame Paris Cinematic Scroll Animation Canvas */}
      <ScrollAnimationCanvas totalFrames={300} lerpFactor={0.08} />

      {/* 1st Section: Hero Banner Section */}
      <section
        id="hero-banner"
        className="w-full min-h-screen max-w-[1440px] mx-auto flex flex-col justify-between relative bg-transparent shrink-0 z-10 py-3 sm:py-5"
        aria-label="Experience Paris Hero Banner"
      >
        {/* Top Navigation: Position unchanged */}
        <Navbar
          activeNav={activeNav}
          onNavClick={handleNavClick}
          onOpenMenu={() => setIsMenuOpen(true)}
        />

        {/* Main Center Banner: Exactly centered in the plane window without touching frame edges */}
        <main className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[360px] sm:max-w-[400px] px-4 z-20 pointer-events-auto flex flex-col items-center justify-center">
          <HeroSection onCtaClick={() => setIsTourModalOpen(true)} />
        </main>

        {/* Bottom Area: Both cards in their original position */}
        <div className="w-full flex flex-col gap-2 z-20">
          <BottomCards onCardClick={() => setIsTourModalOpen(true)} />

          {/* Subtle scroll cue indicator */}
          <div
            onClick={() => {
              const el = document.getElementById('trusted-brands');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mx-auto pb-1 pt-1 flex items-center gap-1.5 text-white/50 hover:text-white/80 transition-colors text-[11px] tracking-wider uppercase font-medium cursor-pointer select-none group"
          >
            <span>Scroll down to explore</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce group-hover:text-white" />
          </div>
        </div>
      </section>

      {/* 2nd Section: Proudly Trusted by Leading Brands Across Industries */}
      <div className="w-full max-w-[1300px] mx-auto relative z-10">
        <TrustedBrandsSection />
      </div>

      {/* 3rd Section: Kinetic Studio Agency & 4 Staggered Cards with Banner Cards Style */}
      <div className="w-full max-w-[1300px] mx-auto relative z-10">
        <KineticStudioSection
          onCardClick={(card) => setSelectedStudioCard(card)}
          onVisitSite={() => setIsTourModalOpen(true)}
        />
      </div>

      {/* 4th Section: Client Case Study (Bernice Tay / Bright Culture) with Radiant Blue Gradient */}
      <div className="w-full max-w-[1300px] mx-auto relative z-10">
        <ClientCaseStudySection />
      </div>

      {/* 5th Section: 4 Banner-style Cards Split (2 on Left, Empty Center for Future Visual, 2 on Right) */}
      <div className="w-full max-w-[1300px] mx-auto relative z-10">
        <SplitCardsSection onCardClick={() => setIsTourModalOpen(true)} />
      </div>

      {/* Footer Branding & Navigation */}
      <footer className="w-full max-w-[1300px] mx-auto py-8 text-center text-xs text-white/50 border-t border-white/10 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-extrabold tracking-widest text-white/80">PARIS</span>
          <span>— Experience Paris Like Never Before</span>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsTourModalOpen(true)}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Book a Tour
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>Back to Top</span>
            <span>↑</span>
          </button>
        </div>
      </footer>

      {/* Discreet floating helper pill */}
      {showHelperPill && (
        <aside
          aria-label="Experience tools"
          className="fixed bottom-3 right-4 z-40 hidden sm:flex items-center gap-2 bg-neutral-900/90 border border-white/20 backdrop-blur-md rounded-full px-3 py-1.5 shadow-xl text-xs"
        >
          <button
            onClick={() => setIsTourModalOpen(true)}
            className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors cursor-pointer"
            aria-label="Explore Paris Tours"
          >
            <MapPin className="w-3.5 h-3.5 text-[#0066FF]" />
            <span className="font-medium">Explore Tours</span>
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={() => setIsCompareOpen(true)}
            className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors cursor-pointer"
            title="Compare with original reference layout"
            aria-label="Compare layout"
          >
            <Eye className="w-3.5 h-3.5 text-white/80" />
            <span>Layout Check</span>
          </button>
          <button
            onClick={() => setShowHelperPill(false)}
            className="text-white/40 hover:text-white/80 ml-1 text-[11px]"
            title="Hide helper bar"
            aria-label="Hide helper bar"
          >
            ✕
          </button>
        </aside>
      )}

      {/* Modals & Drawers */}
      <TourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeNav={activeNav}
        onSelectNav={handleNavClick}
        onOpenSolarModal={() => setIsTourModalOpen(true)}
      />

      <CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
      />
    </div>
  );
}
