import React, { useState } from 'react';
import { Compass, Sparkles, Headphones, Route, X, ArrowRight } from 'lucide-react';

export interface SplitCardData {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  details?: string[];
}

const LEFT_CARDS: SplitCardData[] = [
  {
    id: 'expert-guides',
    icon: Compass,
    title: 'Expert Guides',
    description: 'Explore with passionate locals who share insider knowledge and hidden gems.',
    details: [
      'Passionate bilingual guides born and raised in Paris',
      'Exclusive access to secret courtyards and private collections',
      'Fascinating storytelling bringing centuries of history to life',
    ],
  },
  {
    id: 'tailored-experiences',
    icon: Sparkles,
    title: 'Tailored Experiences',
    description: 'Every detail is customized to match your unique preferences and style of travel.',
    details: [
      'Fully personalized daily schedules tailored to your pace',
      'Curated gastronomy, private viewings, and boutique hotels',
      'Flexible itineraries that adapt to your spontaneous wishes',
    ],
  },
];

const RIGHT_CARDS: SplitCardData[] = [
  {
    id: '24-7-support',
    icon: Headphones,
    title: '24/7 Support',
    description: "We're always available to ensure your journey is smooth and worry-free.",
    details: [
      'Dedicated Parisian lifestyle concierge reachable at all hours',
      'Real-time WhatsApp & phone assistance for instant changes',
      'Comprehensive on-the-ground support and reservations assistance',
    ],
  },
  {
    id: 'seamless-logistics',
    icon: Route,
    title: 'Seamless Logistics',
    description: 'From transport to ticketing, we handle everything so you can relax and enjoy.',
    details: [
      'Chauffeured luxury airport and intercity transfers',
      'Pre-arranged VIP priority skip-the-line museum tickets',
      'Flawless coordination from your arrival until your farewell',
    ],
  },
];

interface SplitCardsSectionProps {
  onCardClick?: (card: SplitCardData) => void;
}

export const SplitCardsSection: React.FC<SplitCardsSectionProps> = ({ onCardClick }) => {
  const [selectedCard, setSelectedCard] = useState<SplitCardData | null>(null);

  const handleSelect = (card: SplitCardData) => {
    setSelectedCard(card);
    onCardClick?.(card);
  };

  return (
    <section
      id="split-cards"
      className="w-full relative bg-transparent text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 flex flex-col items-center justify-center overflow-hidden"
      aria-label="Experience Highlights"
    >
      {/* Main Container: 2 Cards on Left, Empty Space in Centre, 2 Cards on Right */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        {/* Left Column: Two Cards */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full sm:w-auto items-center sm:items-start shrink-0">
          {LEFT_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => handleSelect(card)}
                className={`group touch-light-card ${idx % 2 === 0 ? 'animate-float-a' : 'animate-float-b'} relative bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-cyan-400/50 backdrop-blur-xl rounded-2xl p-4 sm:p-5 w-full sm:w-[280px] md:w-[300px] shadow-[0_8px_30px_rgba(0,0,0,0.4)] cursor-pointer select-none`}
                role="button"
                tabIndex={0}
                aria-label={card.title}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelect(card);
                  }
                }}
              >
                {/* Top-left Icon Badge: White square with blue icon */}
                <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center mb-2.5 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,102,255,0.7)]">
                  <Icon className="w-4 h-4 text-[#0066FF]" />
                </div>

                {/* Heading */}
                <h3 className="text-white text-[14px] sm:text-[15px] font-semibold tracking-tight mb-1 select-none font-['DM_Sans',sans-serif]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-white/85 text-[11px] sm:text-[12px] font-normal leading-snug line-clamp-3 select-none font-['DM_Sans',sans-serif]">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Empty Centre Space - strictly reserved for future visual asset as requested */}
        <div
          className="flex-1 w-full min-h-[200px] sm:min-h-[280px] lg:min-h-[400px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Right Column: Two Cards */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full sm:w-auto items-center sm:items-end shrink-0">
          {RIGHT_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => handleSelect(card)}
                className={`group touch-light-card ${idx % 2 === 0 ? 'animate-float-b' : 'animate-float-a'} relative bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-cyan-400/50 backdrop-blur-xl rounded-2xl p-4 sm:p-5 w-full sm:w-[280px] md:w-[300px] shadow-[0_8px_30px_rgba(0,0,0,0.4)] cursor-pointer select-none`}
                role="button"
                tabIndex={0}
                aria-label={card.title}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelect(card);
                  }
                }}
              >
                {/* Top-left Icon Badge: White square with blue icon */}
                <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center mb-2.5 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,102,255,0.7)]">
                  <Icon className="w-4 h-4 text-[#0066FF]" />
                </div>

                {/* Heading */}
                <h3 className="text-white text-[14px] sm:text-[15px] font-semibold tracking-tight mb-1 select-none font-['DM_Sans',sans-serif]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-white/85 text-[11px] sm:text-[12px] font-normal leading-snug line-clamp-3 select-none font-['DM_Sans',sans-serif]">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Card Detail Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="split-modal-title"
        >
          <div className="relative w-full max-w-md bg-[#0e0e0e] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
              <selectedCard.icon className="w-5 h-5 text-[#0066FF]" />
            </div>

            <h2 id="split-modal-title" className="text-2xl font-bold tracking-tight text-white mb-2">
              {selectedCard.title}
            </h2>
            <p className="text-white/75 text-sm leading-relaxed mb-6">
              {selectedCard.description}
            </p>

            {selectedCard.details && (
              <div className="mb-6 space-y-2.5">
                <h4 className="text-xs uppercase font-semibold text-white/50 tracking-wider">
                  Included Privileges
                </h4>
                {selectedCard.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1.5 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => setSelectedCard(null)}
              className="w-full py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Explore Exclusive Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
