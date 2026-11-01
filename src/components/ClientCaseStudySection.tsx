import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, CheckCircle, Award, Sparkles, X } from 'lucide-react';
import portraitImg from '../assets/images/bernice_tay_portrait_1793359796407.jpg';

interface MetricItem {
  value: string;
  label: string;
  detail: string;
}

const METRICS: MetricItem[] = [
  {
    value: '$15-25',
    label: 'CPL',
    detail: 'Average cost per student lead down 68% compared to prior agency benchmarks.',
  },
  {
    value: '263',
    label: 'STUDENTS ENROLLED',
    detail: 'Verified enrollments secured within the initial 90-day campaign cycle.',
  },
  {
    value: '11.11X',
    label: 'AVERAGE ROAS',
    detail: 'Consistently sustained return on ad spend across omnichannel media spend.',
  },
];

export const ClientCaseStudySection: React.FC = () => {
  const [isCaseModalOpen, setIsCaseModalOpen] = useState<boolean>(false);
  const [activeMetric, setActiveMetric] = useState<MetricItem | null>(null);

  return (
    <section
      id="case-study"
      className="w-full relative bg-transparent text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 flex flex-col items-center justify-center overflow-hidden"
      aria-label="Client Testimonial and Case Study"
    >
      {/* Container: Max width matching first three sections */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch gap-5 sm:gap-6 md:gap-7">
        {/* Left Side: Portrait of Bernice Tay with matching rounded card border style */}
        <div className="w-full lg:w-[340px] xl:w-[380px] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 bg-white/[0.04] backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative group flex flex-col justify-end touch-light-card">
          {/* Portrait Image */}
          <div className="relative w-full h-[360px] sm:h-[420px] lg:h-full min-h-[380px] overflow-hidden">
            <img
              src={portraitImg}
              alt="Bernice Tay, Founder of Bright Culture"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle bottom vignette to ensure seamless blending with the dark theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 pointer-events-none" />

            {/* Quick Badge at Top Left */}
            <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 border border-white/20 backdrop-blur-md text-[11px] font-medium text-white/90 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
              <span>Founder & Director</span>
            </div>

            {/* Mobile Author Caption overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-10 lg:hidden flex items-center justify-between">
              <div>
                <p className="text-white text-sm font-bold tracking-tight">Bernice Tay</p>
                <p className="text-white/60 text-xs">Bright Culture</p>
              </div>
              <button
                onClick={() => setIsCaseModalOpen(true)}
                className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-white backdrop-blur-md"
              >
                Case Study ↗
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Large Testimonial Card with Blue Color Gradient instead of Orange */}
        <div className="touch-light-card flex-1 relative bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-xl border border-white/20 hover:border-cyan-400/50 rounded-2xl sm:rounded-3xl p-6 sm:p-9 md:p-12 flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Custom Radiant Blue Color Gradient (Replacing Orange Gradient as instructed) */}
          <div
            className="absolute inset-0 pointer-events-none opacity-90 transition-opacity duration-500"
            style={{
              background:
                'radial-gradient(circle at 15% 90%, rgba(0, 102, 255, 0.45) 0%, rgba(0, 68, 204, 0.28) 35%, rgba(0, 30, 90, 0.12) 65%, transparent 85%)',
            }}
          />
          {/* Top-Right Secondary Soft Blue Ambient Glow */}
          <div
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none blur-3xl opacity-35"
            style={{
              background: 'radial-gradient(circle, rgba(0, 140, 255, 0.4) 0%, transparent 70%)',
            }}
          />

          {/* Card Content (Relative z-10) */}
          <div className="relative z-10 flex flex-col h-full justify-between gap-8 sm:gap-10">
            {/* Top Quote - Exact reference wording in uppercase typography */}
            <div className="flex flex-col">
              <div className="text-[#0088FF] text-2xl sm:text-3xl font-serif font-black leading-none mb-3 select-none">
                “
              </div>
              <blockquote className="text-white text-[17px] sm:text-[22px] md:text-[25px] lg:text-[27px] font-semibold tracking-tight uppercase leading-[1.3] sm:leading-[1.28] font-['DM_Sans',sans-serif]">
                «I wasted my time with other agencies, but with Omni, we increased our revenue and got more students with low CPL and high ROAS»
              </blockquote>
            </div>

            {/* Middle: 3 Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-8 pt-2 sm:pt-4 border-t border-white/15">
              {METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveMetric(metric);
                    setIsCaseModalOpen(true);
                  }}
                  className="flex flex-col text-left group/metric cursor-pointer select-none"
                  role="button"
                  tabIndex={0}
                  aria-label={`${metric.label}: ${metric.value}`}
                >
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-none group-hover/metric:text-[#4CA2FF] transition-colors">
                      {metric.value}
                    </span>
                  </div>
                  <span className="text-white/60 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mt-2 font-['DM_Sans',sans-serif]">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom: Author attribution & Explore CTA */}
            <div className="flex items-end justify-between pt-4 border-t border-white/10">
              <div className="flex flex-col text-left">
                <p className="text-white text-sm sm:text-base font-bold tracking-tight uppercase font-['DM_Sans',sans-serif]">
                  — BERNICE TAY
                </p>
                <p className="text-[#64B5F6] text-xs sm:text-sm font-medium tracking-wide mt-0.5 font-['DM_Sans',sans-serif]">
                  Bright Culture
                </p>
              </div>

              {/* Action Button: View Full Case Breakdown */}
              <button
                onClick={() => setIsCaseModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs sm:text-[13px] font-medium backdrop-blur-md transition-all duration-200 cursor-pointer shadow-sm group-hover:border-white/40"
                aria-label="View Bright Culture Case Breakdown"
              >
                <span>Case Breakdown</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {isCaseModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-modal-title"
        >
          <div className="relative w-full max-w-lg bg-[#0e0e0e] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => {
                setIsCaseModalOpen(false);
                setActiveMetric(null);
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Top Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/40 text-xs font-semibold text-[#80BFFF]">
                <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
                Client Success Story
              </span>
              <span className="text-white/40 text-xs">Education & Coaching</span>
            </div>

            {/* Title */}
            <h2 id="case-modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Bright Culture × Omni Scale
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-6 font-normal">
              How Bernice Tay reduced lead acquisition costs while scaling qualified tuition enrollments with automated funnels and performance creative.
            </p>

            {/* 3 Metrics in Modal */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 p-4 rounded-2xl bg-white/[0.06] border border-white/15">
              {METRICS.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center p-2 rounded-xl transition-colors ${
                    activeMetric?.label === item.label ? 'bg-[#0066FF]/25 border border-[#0066FF]/40' : ''
                  }`}
                >
                  <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">{item.value}</span>
                  <span className="text-[10px] text-white/60 uppercase tracking-wider mt-1">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Strategy Highlights */}
            <div className="mb-6 space-y-3">
              <h4 className="text-xs uppercase font-semibold text-white/60 tracking-wider">
                Execution Strategy
              </h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                  <CheckCircle className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                  <span>Targeted hyper-local parent personas across high-intent channels.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                  <CheckCircle className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                  <span>Iterative video hooks highlighting student academic transformations.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                  <CheckCircle className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                  <span>Automated WhatsApp qualification funnel achieving $15 CPL consistency.</span>
                </div>
              </div>
            </div>

            {/* Close / Action Button */}
            <button
              onClick={() => {
                setIsCaseModalOpen(false);
                setActiveMetric(null);
              }}
              className="w-full py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Back to Overview</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
