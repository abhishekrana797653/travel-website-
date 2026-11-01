import React, { useState } from 'react';
import { Star, ArrowUpRight } from 'lucide-react';

export interface DestinationCardData {
  id: string;
  rating: string;
  title: string;
  subtitle: string;
  price: string;
  numericPrice: number;
  highlight: string;
}

export const DESTINATION_CARDS: DestinationCardData[] = [
  {
    id: 'banff',
    rating: '4.8',
    title: 'Banff, Canada',
    subtitle: 'Majestic Lakes & Mountains',
    price: '$699',
    numericPrice: 699,
    highlight: 'Glacial lakes, soaring peaks, and alpine serenity.',
  },
  {
    id: 'maldives',
    rating: '4.7',
    title: 'Maldives',
    subtitle: 'Tropical Paradise',
    price: '$899',
    numericPrice: 899,
    highlight: 'Overwater villas, crystalline lagoons, and reef life.',
  },
  {
    id: 'kyoto',
    rating: '4.9',
    title: 'Kyoto, Japan',
    subtitle: 'Timeless Culture',
    price: '$799',
    numericPrice: 799,
    highlight: 'Ancient pagodas, serene zen gardens, and cherry blossoms.',
  },
  {
    id: 'iceland',
    rating: '4.6',
    title: 'Iceland',
    subtitle: 'Land of Fire & Ice',
    price: '$749',
    numericPrice: 749,
    highlight: 'Vivid aurora borealis, thermal springs, and glaciers.',
  },
];

interface DestinationCardsSectionProps {
  onSelectDestination?: (dest: DestinationCardData) => void;
}

export const DestinationCardsSection: React.FC<DestinationCardsSectionProps> = ({
  onSelectDestination,
}) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      id="destinations"
      className="w-full relative bg-black text-white py-8 sm:py-12 px-4 sm:px-8 md:px-12 flex flex-col items-center justify-center overflow-hidden border-t border-white/10"
      aria-label="Featured Destinations"
    >
      {/* 4 Cards Container - Responsive Grid matching reference layout */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {DESTINATION_CARDS.map((card) => {
            const isHovered = hoveredCard === card.id;

            return (
              <div
                key={card.id}
                onClick={() => onSelectDestination?.(card)}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-white/[0.08] hover:bg-white/[0.13] border border-white/20 hover:border-white/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 h-[330px] sm:h-[350px] md:h-[370px] flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300 cursor-pointer select-none"
                role="button"
                tabIndex={0}
                aria-label={`${card.title} - ${card.subtitle}, ${card.price}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectDestination?.(card);
                  }
                }}
              >
                {/* Top Row: Rating Badge positioned at Top-Left (matching reference) */}
                <div className="flex items-center justify-between w-full">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 border border-white/20 backdrop-blur-md shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                    <span className="text-white text-xs sm:text-[13px] font-semibold tracking-tight font-['DM_Sans',sans-serif]">
                      {card.rating}
                    </span>
                  </div>

                  {/* Subtle hover explore arrow indicator */}
                  <div
                    className={`w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-200 ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Middle spacing - clean minimal backdrop matching banner cards without photo visuals */}
                <div className="flex-1" />

                {/* Bottom Row: Text Placement matching reference exactly */}
                {/* Bottom Left: Title & Subtitle | Bottom Right: Price */}
                <div className="flex items-end justify-between w-full gap-2 pt-4">
                  {/* Bottom Left: Title & Subtitle */}
                  <div className="flex flex-col text-left font-['DM_Sans',sans-serif] min-w-0 pr-1">
                    <h3 className="text-white text-[17px] sm:text-[18px] md:text-[19px] font-bold tracking-tight leading-snug group-hover:text-white transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-[13px] font-normal leading-snug mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Bottom Right: Price matching reference */}
                  <div className="shrink-0 text-right font-['DM_Sans',sans-serif] pb-0.5">
                    <span className="text-[20px] sm:text-[22px] md:text-[23px] font-bold text-[#F59E0B] tracking-tight leading-none block">
                      {card.price}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
