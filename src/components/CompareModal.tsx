import React, { useState } from 'react';
import { X, Sliders, Eye } from 'lucide-react';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({ isOpen, onClose }) => {
  const [opacity, setOpacity] = useState<number>(50);
  const [viewMode, setViewMode] = useState<'overlay' | 'side-by-side'>('side-by-side');

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Reference Image Comparison"
    >
      <div className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/20 rounded-3xl p-6 shadow-2xl text-white max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-white" />
              <h3 className="text-lg font-semibold text-white">
                Reference Image Fidelity Comparison
              </h3>
            </div>
            <p className="text-xs text-white/60 mt-0.5">
              Compare this recreation against the original reference design (background removed, pure black color, DM Sans, pure white text).
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode(viewMode === 'side-by-side' ? 'overlay' : 'side-by-side')}
              className="text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center gap-1.5 transition-colors"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{viewMode === 'side-by-side' ? 'Switch to Overlay' : 'Switch to Side-by-Side'}</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Comparison Body */}
        <div className="flex-1 overflow-y-auto py-4">
          {viewMode === 'side-by-side' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Section 2 Reference (Brands) */}
              <div className="border border-white/15 rounded-2xl p-3 bg-black/40">
                <div className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Section 2 Reference</span>
                  <span className="text-[10px] text-white/40">Proudly Trusted</span>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10 aspect-[16/8] bg-black flex items-center justify-center">
                  <img
                    src="/assets/aistudio/image_61d5f6f8.png"
                    alt="Brands section reference"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[11px] text-white/50 mt-2 space-y-1">
                  <div>• &ldquo;Proudly Trusted&rdquo; in italic serif</div>
                  <div>• &ldquo;by Leading Brands Across Industries®&rdquo; in italic sans</div>
                  <div>• White brand logos row on black background</div>
                </div>
              </div>

              {/* Recreated Design */}
              <div className="border border-white/15 rounded-2xl p-3 bg-black">
                <div className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>2. Recreated Banner</span>
                  <span className="text-[10px] text-green-400">Plain black, DM Sans, pure white</span>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/20 aspect-[16/10] bg-black p-4 flex flex-col justify-between relative">
                  {/* Miniature banner preview */}
                  <div className="flex justify-between items-center text-[10px] text-white font-bold">
                    <span>SUNROCK</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded-full text-[9px] border border-white/20">Home · Solutions · Projects</span>
                    <span className="border border-white/20 px-2 py-0.5 rounded-full text-[9px]">Open menu</span>
                  </div>
                  <div className="text-center my-auto">
                    <div className="text-xs font-medium text-white leading-tight">
                      Clean and smart solar<br />energy for your business.
                    </div>
                    <div className="text-[8px] text-white/80 mt-1">
                      Sustainable energy solutions made easy,<br />reliable, and tailor-made for Europe.
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1 bg-white text-black text-[8px] px-2 py-0.5 rounded-full font-medium">
                      Let&apos;s Talk Solar Solutions <span className="w-2.5 h-2.5 bg-[#0066FF] rounded-full text-white inline-flex items-center justify-center text-[6px]">↗</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-2">
                    <div className="bg-white/10 border border-white/15 rounded p-1.5 flex-1 text-[7px] text-white">
                      <div className="font-semibold text-white">Clean energy generated</div>
                      <div className="text-white/70 line-clamp-2">Since 2019, 946 GWh...</div>
                    </div>
                    <div className="bg-white/10 border border-white/15 rounded p-1.5 flex-1 text-[7px] text-white">
                      <div className="font-semibold text-white">Impact</div>
                      <div className="text-white/70 line-clamp-2">Benefit over 525,555 people...</div>
                    </div>
                  </div>
                </div>
                <div className="text-[11px] text-white/50 mt-2 space-y-1">
                  <div className="text-green-300">✓ Removed background landscape and wind turbines</div>
                  <div className="text-green-300">✓ Plain black (#000000) backdrop</div>
                  <div className="text-green-300">✓ 100% DM Sans font applied</div>
                  <div className="text-green-300">✓ Pure white text &amp; identical layout positions</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-xs text-white/70">Original Reference Image Opacity</span>
                <span className="text-xs font-semibold text-white">{opacity}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={opacity}
                onChange={(e) => setOpacity(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#0066FF] mb-4"
              />
              <div className="relative w-full aspect-[16/10] max-h-[460px] rounded-2xl overflow-hidden border border-white/20 bg-black flex items-center justify-center">
                <img
                  src="/assets/aistudio/image_75e7dd5e.png"
                  alt="Reference comparison overlay"
                  style={{ opacity: opacity / 100 }}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-150"
                />
                <div className="relative z-10 text-center pointer-events-none p-6">
                  <h4 className="text-2xl font-medium text-white drop-shadow-md">
                    Clean and smart solar<br />energy for your business.
                  </h4>
                  <p className="text-xs text-white mt-2 drop-shadow">
                    Sustainable energy solutions made easy, reliable, and tailor-made for Europe.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
