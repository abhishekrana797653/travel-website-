import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Compass, Users, Calendar, Sparkles } from 'lucide-react';
import { PARIS_TOURS, calculateTourTotal, validateTourInquiry } from '../utils/tour-booking';

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TourModal: React.FC<TourModalProps> = ({ isOpen, onClose }) => {
  const [selectedTour, setSelectedTour] = useState<string>('monuments');
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [isVip, setIsVip] = useState<boolean>(true);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  if (!isOpen) return null;

  const totalPrice = calculateTourTotal(selectedTour, guestsCount, isVip);
  const currentTour = PARIS_TOURS.find((t) => t.id === selectedTour) || PARIS_TOURS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateTourInquiry({ fullName, email, guestsCount });
    if (!validation.isValid) {
      setErrorMsg(validation.error || 'Please fill in required fields');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tour-modal-title"
    >
      <div className="relative w-full max-w-xl bg-[#0a0a0a] border border-white/20 rounded-3xl p-6 sm:p-7 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#0066FF]/20 border border-[#0066FF] flex items-center justify-center mb-4 text-[#0066FF]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Tour Reserved
            </h3>
            <p className="text-white/80 max-w-md text-sm leading-relaxed mb-6">
              Merci, <span className="text-white font-medium">{fullName}</span>! Your customized Parisian itinerary for <span className="text-white font-medium">{currentTour.name}</span> ({guestsCount} {guestsCount === 1 ? 'Guest' : 'Guests'}) has been sent to {email}.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[#0066FF]">
                <Compass className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
                Curated Paris Escapes
              </span>
            </div>

            <h2 id="tour-modal-title" className="text-2xl font-medium tracking-tight mb-1">
              Explore Paris Tour Itinerary
            </h2>
            <p className="text-white/75 text-xs mb-5">
              Customize your private or small-group tour experience with licensed Parisian curators.
            </p>

            {/* Tour Selection */}
            <div className="space-y-2 mb-4">
              <label className="block text-xs font-medium text-white/70">
                Select Tour Experience
              </label>
              <div className="grid grid-cols-1 gap-2">
                {PARIS_TOURS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTour(t.id)}
                    className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-xs ${
                      selectedTour === t.id
                        ? 'bg-white/15 border-white text-white font-medium'
                        : 'bg-white/[0.04] border-white/10 text-white/80 hover:bg-white/[0.08]'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-white">{t.name}</div>
                      <div className="text-white/50 text-[11px]">Duration: {t.durationHours} hours</div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-white">€{t.basePricePerPerson}</span>
                      <span className="text-[10px] text-white/50">/person</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Guests & VIP Upgrade */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 p-3.5 bg-white/[0.04] border border-white/10 rounded-2xl text-xs">
              <div>
                <label className="block text-white/70 mb-1 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#0066FF]" />
                  Number of Guests
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 4, 6].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuestsCount(num)}
                      className={`px-3 py-1 rounded-lg border text-xs cursor-pointer transition-all ${
                        guestsCount === num
                          ? 'bg-white text-black font-semibold border-white'
                          : 'border-white/20 text-white/80 hover:bg-white/10'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-white/70 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  VIP Skip-The-Line
                </label>
                <button
                  type="button"
                  onClick={() => setIsVip(!isVip)}
                  className={`w-full py-1.5 px-3 rounded-lg border text-left text-xs cursor-pointer transition-all flex items-center justify-between ${
                    isVip
                      ? 'bg-white/15 border-white text-white font-medium'
                      : 'border-white/20 text-white/60'
                  }`}
                >
                  <span>Fast-track entrance</span>
                  <span className="font-bold">{isVip ? 'Included' : '+€30/pp'}</span>
                </button>
              </div>
            </div>

            {/* Price Preview */}
            <div className="flex items-center justify-between p-3 bg-white/[0.06] border border-white/15 rounded-xl mb-5">
              <span className="text-xs text-white/70">Estimated Total ({guestsCount} {guestsCount === 1 ? 'Guest' : 'Guests'})</span>
              <span className="text-lg font-bold text-white">€{totalPrice}</span>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              {errorMsg && (
                <div className="p-2.5 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="full-name" className="block text-[11px] font-medium text-white/70 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    required
                    placeholder="e.g. Amélie Laurent"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white/[0.06] border border-white/20 focus:border-white focus:outline-none rounded-xl px-3.5 py-2 text-white text-xs placeholder:text-white/40"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-[11px] font-medium text-white/70 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/[0.06] border border-white/20 focus:border-white focus:outline-none rounded-xl px-3.5 py-2 text-white text-xs placeholder:text-white/40"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2.5 items-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-full text-white/70 hover:text-white text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
                >
                  <span>Request Custom Itinerary</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
