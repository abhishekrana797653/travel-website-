import React, { useState } from 'react';
import { X, CheckCircle, Star, Calendar, Users, Shield, ArrowRight } from 'lucide-react';
import { DestinationCardData } from './DestinationCardsSection';

interface DestinationModalProps {
  destination: DestinationCardData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  isOpen,
  onClose,
}) => {
  const [travelers, setTravelers] = useState<number>(2);
  const [date, setDate] = useState<string>('2026-11-15');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isBooked, setIsBooked] = useState<boolean>(false);

  if (!isOpen || !destination) return null;

  const total = destination.numericPrice * travelers;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="destination-modal-title"
    >
      <div className="relative w-full max-w-lg bg-[#0e0e0e] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {isBooked ? (
          <div className="py-6 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Reservation Request Received</h3>
            <p className="text-white/70 text-sm max-w-sm mb-6">
              Thank you, {name}! Your curated trip request to{' '}
              <span className="text-white font-semibold">{destination.title}</span> for {travelers}{' '}
              {travelers === 1 ? 'guest' : 'guests'} has been reserved at {destination.price}/person.
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
            {/* Header with Rating Badge */}
            <div className="flex items-center gap-2 mb-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 border border-white/20 text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                <span>{destination.rating} Rating</span>
              </div>
              <span className="text-white/40 text-xs">Curated Escape</span>
            </div>

            <h2 id="destination-modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
              {destination.title}
            </h2>
            <p className="text-[#F59E0B] text-sm font-medium mb-3">{destination.subtitle}</p>
            <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-5">{destination.highlight}</p>

            {/* Price Banner */}
            <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/15 flex items-center justify-between mb-5">
              <div>
                <span className="text-xs text-white/60 block">Price per guest</span>
                <span className="text-2xl font-bold text-white tracking-tight">{destination.price}</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-white/60 block">Estimated Total</span>
                <span className="text-xl font-bold text-[#F59E0B]">${total.toLocaleString()}</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1.5 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    Travelers
                  </label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-white/50"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num} className="bg-neutral-900 text-white">
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-white/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/70 mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/70 mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Book Destination</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-white/50 pt-1">
                <Shield className="w-3 h-3 text-emerald-400" />
                <span>Complimentary flexible cancellation & bespoke support</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
