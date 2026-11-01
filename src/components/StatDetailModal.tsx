import React from 'react';
import { X, Zap, Users, TrendingUp, ShieldCheck } from 'lucide-react';

interface StatDetailModalProps {
  cardType: 'energy' | 'impact' | null;
  onClose: () => void;
  onOpenSolarModal: () => void;
}

export const StatDetailModal: React.FC<StatDetailModalProps> = ({
  cardType,
  onClose,
  onOpenSolarModal,
}) => {
  if (!cardType) return null;

  const isEnergy = cardType === 'energy';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={isEnergy ? 'Clean energy generated details' : 'Impact statistics details'}
    >
      <div className="relative w-full max-w-lg bg-[#0d0d0d] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-md">
          {isEnergy ? (
            <Zap className="w-5 h-5 text-[#0066FF] fill-[#0066FF]" />
          ) : (
            <Users className="w-5 h-5 text-[#0066FF]" />
          )}
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-white mb-2">
          {isEnergy ? 'Clean energy generated' : 'Community & Environmental Impact'}
        </h3>

        <div className="text-3xl font-bold text-white mb-3">
          {isEnergy ? '946+ GWh' : '525,555+ People'}
        </div>

        <p className="text-white/80 text-sm leading-relaxed mb-6">
          {isEnergy
            ? "Since 2019, Sunrock has pioneered large-scale commercial rooftop solar installations across Europe. Generating 946 GWh represents not just power, but a commitment to a greener, healthier future for industry and cities alike."
            : "Our clean energy solutions currently benefit over 525,555 people. That's thousands of homes, local businesses, and interconnected communities powered by renewable energy generated right on European rooftops."}
        </p>

        {/* Milestone Breakdown */}
        <div className="space-y-3 mb-6 bg-white/[0.04] border border-white/10 rounded-2xl p-4 text-xs">
          <div className="flex items-center justify-between py-1 border-b border-white/10">
            <span className="text-white/60 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#0066FF]" />
              {isEnergy ? 'Annual Growth Rate' : 'Annual Beneficiary Growth'}
            </span>
            <span className="font-semibold text-white">+48% YoY</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-white/10">
            <span className="text-white/60 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0066FF]" />
              Reliability & Uptime
            </span>
            <span className="font-semibold text-white">99.8% Grid Uptime</span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-white/60">Deployment Model</span>
            <span className="font-semibold text-white">Tailor-made for Europe</span>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-white/70 hover:text-white text-sm"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenSolarModal();
            }}
            className="px-5 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200"
          >
            Explore Solutions
          </button>
        </div>
      </div>
    </div>
  );
};
