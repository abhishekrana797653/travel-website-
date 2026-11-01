import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, SunMedium, Building2 } from 'lucide-react';
import { calculateSolarImpact, formatNumberWithCommas, validateInquiry } from '../utils/solar-stats';

interface SolarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SolarModal: React.FC<SolarModalProps> = ({ isOpen, onClose }) => {
  const [roofArea, setRoofArea] = useState<number>(8500);
  const [companyName, setCompanyName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  if (!isOpen) return null;

  const stats = calculateSolarImpact(roofArea);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateInquiry({
      companyName,
      email,
      roofSizeM2: roofArea,
    });

    if (!validation.isValid) {
      setErrorMsg(validation.error || 'Please fill in required fields');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setCompanyName('');
    setEmail('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="solar-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#0066FF]/20 border border-[#0066FF] flex items-center justify-center mb-5 text-[#0066FF]">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
              Inquiry Received
            </h3>
            <p className="text-white/80 max-w-md text-sm sm:text-base leading-relaxed mb-6">
              Thank you, <span className="text-white font-medium">{companyName}</span>. A Sunrock solar engineer has prepared your initial feasibility model for {formatNumberWithCommas(roofArea)} m² and will contact {email} within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#0066FF]">
                <SunMedium className="w-5 h-5" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                Sunrock Commercial Solutions
              </span>
            </div>

            <h2 id="solar-modal-title" className="text-2xl sm:text-3xl font-medium tracking-tight mb-2">
              Let&apos;s Talk Solar Solutions
            </h2>
            <p className="text-white/80 text-sm sm:text-base mb-6">
              Estimate your business rooftop solar output, clean energy yield, and carbon abatement in real time.
            </p>

            {/* Roof Size Estimator Slider */}
            <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-5 mb-6">
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="roof-slider" className="text-sm font-medium text-white flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-white/70" />
                  Rooftop / Facility Area
                </label>
                <span className="text-lg font-semibold text-white bg-white/10 px-3 py-1 rounded-lg">
                  {formatNumberWithCommas(roofArea)} m²
                </span>
              </div>
              <input
                id="roof-slider"
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
              />
              <div className="flex justify-between text-xs text-white/50 mt-1">
                <span>1,000 m² (Small warehouse)</span>
                <span>25,000 m²</span>
                <span>50,000 m² (Logistics hub)</span>
              </div>

              {/* Dynamic Impact Yields */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-white/10">
                <div className="p-3 rounded-xl bg-white/[0.04]">
                  <div className="text-xs text-white/60">Annual Clean Yield</div>
                  <div className="text-lg font-bold text-white mt-0.5">{stats.annualGWh} <span className="text-xs font-normal text-white/70">GWh</span></div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04]">
                  <div className="text-xs text-white/60">People Benefited</div>
                  <div className="text-lg font-bold text-white mt-0.5">+{formatNumberWithCommas(stats.peopleBenefited)}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04]">
                  <div className="text-xs text-white/60">CO₂ Avoided</div>
                  <div className="text-lg font-bold text-white mt-0.5">{formatNumberWithCommas(stats.co2OffsetTons)} <span className="text-xs font-normal text-white/70">t/yr</span></div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04]">
                  <div className="text-xs text-white/60">Est. Energy Value</div>
                  <div className="text-lg font-bold text-white mt-0.5">€{formatNumberWithCommas(stats.commercialSavingsEuro)}</div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-sm">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company-name" className="block text-xs font-medium text-white/70 mb-1.5">
                    Company / Organization Name *
                  </label>
                  <input
                    id="company-name"
                    type="text"
                    required
                    placeholder="e.g. Pan-European Logistics Corp"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-white/[0.06] border border-white/20 focus:border-white focus:outline-none rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/40"
                  />
                </div>
                <div>
                  <label htmlFor="business-email" className="block text-xs font-medium text-white/70 mb-1.5">
                    Business Email *
                  </label>
                  <input
                    id="business-email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/[0.06] border border-white/20 focus:border-white focus:outline-none rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/40"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-3 items-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full text-white/70 hover:text-white text-sm font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 active:scale-95 transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Request Feasibility Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
