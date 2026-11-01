import React from 'react';
import { X, ArrowRight, ExternalLink, Globe, Phone, Mail } from 'lucide-react';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeNav: string;
  onSelectNav: (item: string) => void;
  onOpenSolarModal: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  activeNav,
  onSelectNav,
  onOpenSolarModal,
}) => {
  if (!isOpen) return null;

  const links = [
    { name: 'Home', desc: 'Experience Paris like never before' },
    { name: 'Tours', desc: 'Curated monument walks & Seine sunset cruises' },
    { name: 'Attractions', desc: 'Eiffel Tower, Louvre, Montmartre & hidden gems' },
    { name: 'Stories', desc: 'Artistic streets, architecture & local gastronomy' },
    { name: 'Contact', desc: 'Connect with local Parisian guides & concierges' },
  ];

  const highlights = ['Eiffel Tower', 'Louvre Museum', 'Montmartre', 'Seine Cruises', 'Versailles Palace'];

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      <div className="w-full max-w-md bg-[#0a0a0a] border-l border-white/15 h-full p-6 sm:p-8 flex flex-col justify-between text-white overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="text-xl font-extrabold uppercase tracking-wider text-white">
              PARIS
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-6 space-y-2">
            {links.map((link) => {
              const isActive = activeNav === link.name;
              return (
                <button
                  key={link.name}
                  onClick={() => {
                    onSelectNav(link.name);
                    onClose();
                  }}
                  className={`w-full text-left p-3 rounded-2xl transition-all flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? 'bg-white text-black font-semibold'
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  <div>
                    <div className="text-base font-medium tracking-tight">
                      {link.name}
                    </div>
                    <div className={`text-xs mt-0.5 line-clamp-1 ${isActive ? 'text-black/70' : 'text-white/60'}`}>
                      {link.desc}
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                      isActive ? 'text-black' : 'text-white/60'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Highlights */}
          <div className="pt-4 border-t border-white/10">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              Iconic Paris Highlights
            </div>
            <div className="flex flex-wrap gap-2">
              {highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA & Contact */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <button
            onClick={() => {
              onClose();
              onOpenSolarModal();
            }}
            className="w-full py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Explore Tour Itineraries</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center justify-between text-xs text-white/60 pt-2">
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" /> concierge@paris-tours.fr
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> +33 (0)1 42 68 55 00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
