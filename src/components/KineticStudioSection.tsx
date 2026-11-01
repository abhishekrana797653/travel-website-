import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2, ChevronRight, X } from 'lucide-react';

export interface StudioCardItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  hasCta?: boolean;
  ctaText?: string;
  isStaggered?: boolean;
  metrics?: { label: string; value: string }[];
  deliverables?: string[];
}

export const STUDIO_CARDS: StudioCardItem[] = [
  {
    id: 'expert-guides',
    badge: 'Expert Guides',
    title: 'Bold strategies that shape identities,',
    description: 'We craft concepts that define unique brands and strengthen their presence.',
    hasCta: true,
    ctaText: 'Meet Guides',
    isStaggered: false,
    metrics: [
      { label: 'Local Guides', value: '45+' },
      { label: 'Guest Rating', value: '4.98 ★' },
      { label: 'Hidden Spots', value: '120+' },
    ],
    deliverables: [
      'Certified Parisian Historians & Art Docents',
      'Exclusive Access to Private Courtyards & Ateliers',
      'Personalized Storytelling & Neighborhood Walks',
      'Bilingual Support in English, French & Spanish',
    ],
  },
  {
    id: 'tailored-experiences',
    badge: 'Tailored Experiences',
    title: 'Driving measurable growth through impact,',
    description: 'Focused on reach, engagement, and real sales — not empty noise.',
    hasCta: false,
    isStaggered: true,
    metrics: [
      { label: 'Custom Itineraries', value: '100%' },
      { label: 'Guest Satisfaction', value: '99.4%' },
      { label: 'Pace Flexibility', value: 'On Demand' },
    ],
    deliverables: [
      'Personalized Day-by-Day Itinerary Planning',
      'Handpicked Palace Hotels & Boutique Stays',
      'Private Chef Dinners & Michelin Reservations',
      'Custom Pace for Solo, Couples or Family Travel',
    ],
  },
  {
    id: '24-7-support',
    badge: '24/7 Support',
    title: 'Creative processes with rapid delivery,',
    description: 'Ideas turn into results fast, without losing quality or relevance.',
    hasCta: false,
    isStaggered: false,
    metrics: [
      { label: 'Response Time', value: '< 2 Mins' },
      { label: 'Availability', value: '24/7/365' },
      { label: 'On-Ground Support', value: 'Paris Team' },
    ],
    deliverables: [
      'Dedicated Lifestyle Concierge on WhatsApp & Call',
      'Instant Itinerary Adjustments & Bookings',
      'Flight & Train Real-Time Tracking & Assistance',
      'Local Emergency & Medical Support Coordination',
    ],
  },
  {
    id: 'seamless-logistics',
    badge: 'Seamless Logistics',
    title: 'A dedicated team behind success,',
    description: 'Our experts guide every step, from launch to scale.',
    hasCta: false,
    isStaggered: true,
    metrics: [
      { label: 'VIP Fast Track', value: 'Guaranteed' },
      { label: 'Fleet Quality', value: 'Mercedes EQS' },
      { label: 'Punctuality', value: '99.9%' },
    ],
    deliverables: [
      'Private Airport & Intercity Chauffeured Transfers',
      'Priority Skip-the-Line Museum & Monument Passes',
      'Luggage Forwarding & Direct Hotel Delivery',
      'All Taxes, Gratuities & Admissions Handled',
    ],
  },
];

interface KineticStudioSectionProps {
  onCardClick?: (card: StudioCardItem) => void;
  onVisitSite?: () => void;
}

export const KineticStudioSection: React.FC<KineticStudioSectionProps> = ({
  onCardClick,
  onVisitSite,
}) => {
  const [selectedCard, setSelectedCard] = useState<StudioCardItem | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const handleCardSelect = (card: StudioCardItem) => {
    setSelectedCard(card);
    onCardClick?.(card);
  };

  return (
    <section
      id="about-studio"
      className="w-full relative bg-transparent text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 flex flex-col items-center justify-center overflow-hidden"
      aria-label="About Kinetic Studio"
    >
      {/* Top Header Section: max-w-6xl to match cards grid and TrustedBrandsSection */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center mb-12 sm:mb-16 text-center">
        {/* Top Tag: Orange Asterisk/Star & "About studio" */}
        <div className="flex items-center gap-2 mb-4 sm:mb-5">
          {/* Orange 8-point Asterisk / Star */}
          <span
            className="text-[#FF4D26] text-lg sm:text-xl font-black leading-none select-none inline-block animate-pulse"
            aria-hidden="true"
          >
            ✳
          </span>
          <span className="text-[#FF4D26] text-xs sm:text-[13px] font-semibold tracking-wide uppercase font-['DM_Sans',sans-serif]">
            About studio
          </span>
        </div>

        {/* Main Headline – styled like TrustedBrandsSection */}
        <h2 className="leading-[1.12] select-none text-center tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
          {/* Line 1: Kinetic Studio - Elegant Italic Serif */}
          <span className="block font-['Playfair_Display',serif] italic font-normal text-3xl sm:text-5xl md:text-[64px] text-white tracking-normal text-center">
            Kinetic Studio
          </span>

          {/* Line 2 */}
          <span className="block font-['DM_Sans',sans-serif] italic font-medium text-3xl sm:text-5xl md:text-[62px] text-white tracking-tight mt-1 sm:mt-1.5 text-center">
            is an SMM agency of
          </span>

          {/* Line 3 */}
          <span className="block font-['DM_Sans',sans-serif] italic font-medium text-3xl sm:text-5xl md:text-[62px] text-white tracking-tight mt-1 sm:mt-1.5 text-center">
            bold creators that delivers
          </span>

          {/* Line 4 */}
          <span className="block font-['DM_Sans',sans-serif] italic font-medium text-3xl sm:text-5xl md:text-[62px] text-white tracking-tight mt-1 sm:mt-1.5 text-center">
            the power of social media
          </span>

          {/* Line 5 */}
          <span className="inline-flex items-baseline justify-center font-['DM_Sans',sans-serif] italic font-medium text-3xl sm:text-5xl md:text-[62px] text-white tracking-tight mt-1 sm:mt-1.5">
            <span>with cutting-edge strategy</span>
            <span className="text-[#E03131] not-italic font-bold text-lg sm:text-2xl md:text-3xl ml-1 sm:ml-1.5 align-super select-none drop-shadow-[0_0_8px_rgba(224,49,49,0.4)]">
              ®
            </span>
          </span>
        </h2>

        {/* Supporting Subtitle */}
        <p className="text-white/60 text-xs sm:text-sm font-normal max-w-2xl mx-auto mt-4 sm:mt-5 leading-relaxed font-['DM_Sans',sans-serif] text-center">
          The cinderfox breezes through neon twilight with adjustable pancake logic orfox breezes through neon —
          orchestrating cultural movements and measurable growth for ambitious brands worldwide.
        </p>
      </div>

      {/* 4 Cards Grid with Staggered Alignment matching reference */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 items-start">
          {STUDIO_CARDS.map((card) => {
            const isHovered = hoveredCardId === card.id;

            return (
              <div
                key={card.id}
                onClick={() => handleCardSelect(card)}
                onMouseEnter={() => setHoveredCardId(card.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className={`group touch-light-card relative bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-cyan-400/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.4)] cursor-pointer select-none ${
                  card.isStaggered
                    ? 'h-[360px] sm:h-[370px] lg:mt-12'
                    : 'h-[420px] sm:h-[440px]'
                }`}
                role="button"
                tabIndex={0}
                aria-label={`${card.badge}: ${card.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardSelect(card);
                  }
                }}
              >
                {/* Top-Left Pill Badge: Exactly as in reference */}
                <div className="flex items-center justify-between w-full">
                  <div className="inline-flex items-center px-3.5 py-1 rounded-full border border-white/25 bg-white/5 backdrop-blur-md shadow-sm transition-colors duration-200 group-hover:border-white/40 group-hover:bg-white/10">
                    <span className="text-white text-xs sm:text-[13px] font-medium tracking-wide font-['DM_Sans',sans-serif]">
                      {card.badge}
                    </span>
                  </div>

                  {/* Subtle top-right hover indicator */}
                  <div
                    className={`w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-200 ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                {/* Middle empty space: cleanly matching banner cards with zero visual photos */}
                <div className="flex-1" />

                {/* Bottom Content Area: Placement matches reference image */}
                <div className="flex flex-col text-left font-['DM_Sans',sans-serif] w-full pt-4">
                  {/* Gemini Sparkle Logo before title */}
                  <div className="mb-2.5 flex items-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-current text-[#4E82EE] drop-shadow-[0_0_8px_rgba(78,130,238,0.8)] animate-pulse"
                      aria-hidden="true"
                    >
                      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
                    </svg>
                  </div>

                  {/* Bold Title */}
                  <h3 className="text-white text-[17px] sm:text-[18px] md:text-[19px] font-semibold tracking-tight leading-snug group-hover:text-white transition-colors mb-2">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/75 text-xs sm:text-[12.5px] font-normal leading-relaxed line-clamp-3">
                    {card.description}
                  </p>

                  {/* Card 1 Specific: Visit Site CTA Pill overlay at bottom */}
                  {card.hasCta && (
                    <div className="mt-4 pt-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onVisitSite) {
                            onVisitSite();
                          } else {
                            handleCardSelect(card);
                          }
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white text-xs sm:text-[13px] font-medium backdrop-blur-md shadow-md transition-all duration-200 group-hover:border-white/50 cursor-pointer"
                        aria-label="Visit site"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        <span>{card.ctaText || 'Visit site'}</span>
                      </button>
                    </div>
                  )}

                  {/* Card 4 Specific: Subtle sparkle accent on bottom-right */}
                  {card.id === 'powerful' && (
                    <div className="flex justify-end w-full -mt-2">
                      <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shadow-sm">
                        <Sparkles className="w-4 h-4 text-white/80" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal for Selected Card */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="studio-modal-title"
        >
          <div className="relative w-full max-w-lg bg-[#0e0e0e] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Pill & Orange Indicator */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full border border-white/30 bg-white/10 text-xs font-semibold">
                {selectedCard.badge}
              </span>
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 fill-current text-[#4E82EE] drop-shadow-[0_0_6px_rgba(78,130,238,0.8)] inline-block"
                aria-hidden="true"
              >
                <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
              </svg>
              <span className="text-white/50 text-xs uppercase tracking-wider font-semibold">
                Kinetic Studio Capability
              </span>
            </div>

            {/* Title */}
            <h2 id="studio-modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              {selectedCard.title}
            </h2>

            {/* Description */}
            <p className="text-white/80 text-sm leading-relaxed mb-6 font-normal">
              {selectedCard.description}
            </p>

            {/* Metrics Grid */}
            {selectedCard.metrics && (
              <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-white/[0.06] border border-white/15">
                {selectedCard.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {metric.value}
                    </span>
                    <span className="text-[11px] text-white/60 mt-0.5">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Deliverables List */}
            {selectedCard.deliverables && (
              <div className="mb-6">
                <h4 className="text-xs uppercase font-semibold text-white/60 tracking-wider mb-3">
                  Key Deliverables
                </h4>
                <ul className="space-y-2">
                  {selectedCard.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                      <CheckCircle2 className="w-4 h-4 text-[#FF4D26] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Modal Action CTA */}
            <div className="pt-2">
              <button
                onClick={() => setSelectedCard(null)}
                className="w-full py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Inquire About {selectedCard.badge}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
