import React from 'react';
import { X, Check } from 'lucide-react';
import { UnionJackFlag } from './UnionJackFlag';

interface RegionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRegion: string;
  onSelectRegion: (code: string) => void;
}

export const REGIONS = [
  { code: 'UK', name: 'United Kingdom', lang: 'English', active: true },
  { code: 'NL', name: 'Netherlands', lang: 'Nederlands', active: false },
  { code: 'DE', name: 'Germany', lang: 'Deutsch', active: false },
  { code: 'FR', name: 'France', lang: 'Français', active: false },
  { code: 'BE', name: 'Belgium', lang: 'English / Français', active: false },
  { code: 'ES', name: 'Spain', lang: 'Español', active: false },
];

export const RegionModal: React.FC<RegionModalProps> = ({
  isOpen,
  onClose,
  selectedRegion,
  onSelectRegion,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Select Region and Language"
    >
      <div className="relative w-full max-w-md bg-[#0d0d0d] border border-white/20 rounded-3xl p-6 shadow-2xl text-white">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <UnionJackFlag size={26} />
            <h3 className="text-lg font-semibold text-white">Select Region & Language</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-white/70 py-3">
          Sunrock delivers bespoke clean solar energy solutions across key European markets.
        </p>

        <div className="space-y-1.5 mt-1">
          {REGIONS.map((r) => {
            const isSelected = selectedRegion === r.code;
            return (
              <button
                key={r.code}
                onClick={() => {
                  onSelectRegion(r.code);
                  onClose();
                }}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white text-black font-semibold'
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                <div className="text-left">
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className={`text-xs ${isSelected ? 'text-black/70' : 'text-white/50'}`}>
                    {r.lang}
                  </div>
                </div>
                {isSelected && <Check className="w-4 h-4 text-black" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
