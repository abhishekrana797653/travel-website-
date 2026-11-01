import React from 'react';

interface NavbarProps {
  activeNav: string;
  onNavClick: (item: string) => void;
  onOpenMenu: () => void;
  onFlagClick?: () => void;
}

export const NAV_ITEMS = ['Home', 'Tours', 'Attractions', 'Stories', 'Contact'];

export const Navbar: React.FC<NavbarProps> = ({
  activeNav,
  onNavClick,
  onOpenMenu,
}) => {
  return (
    <header className="w-full relative z-30 pt-3.5 sm:pt-4 px-6 md:px-10 shrink-0">
      <div className="max-w-[1440px] mx-auto relative flex items-center justify-between">
        {/* Brand Logo: PARIS (Left aligned) */}
        <div className="flex items-center z-10">
          <button
            onClick={() => onNavClick('Home')}
            className="group touch-lift flex items-center gap-1.5 focus:outline-none cursor-pointer"
            aria-label="PARIS Home"
          >
            <span className="text-white font-extrabold text-lg sm:text-xl tracking-wider uppercase font-['DM_Sans',sans-serif] select-none transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.9)]">
              PARIS
            </span>
          </button>
        </div>

        {/* Center Pill Navigation: Exactly Center-Aligned */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-10 pointer-events-auto whitespace-nowrap">
          <nav
            className="flex items-center flex-nowrap whitespace-nowrap bg-white/[0.08] backdrop-blur-xl border border-white/20 hover:border-white/40 rounded-full p-1 shadow-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,102,255,0.25)]"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeNav === item;
              return (
                <button
                  key={item}
                  onClick={() => onNavClick(item)}
                  className={`touch-lift relative whitespace-nowrap shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50 ${
                    isActive
                      ? 'bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.5)]'
                      : 'text-white/85 hover:text-white hover:bg-white/10 hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Section: "Open menu" button */}
        <div className="flex items-center z-10">
          <button
            onClick={onOpenMenu}
            className="touch-lift bg-white/[0.08] hover:bg-white/[0.16] active:scale-[0.97] backdrop-blur-xl border border-white/20 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,180,216,0.35)] text-white px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer shadow-sm focus:outline-none"
            aria-label="Open menu drawer"
          >
            Open menu
          </button>
        </div>
      </div>
    </header>
  );
};
