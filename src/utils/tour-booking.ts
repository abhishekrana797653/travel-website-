/**
 * Utility functions and calculations for Paris tour experiences
 */

export interface TourPackage {
  id: string;
  name: string;
  durationHours: number;
  basePricePerPerson: number;
}

export const PARIS_TOURS: TourPackage[] = [
  { id: 'monuments', name: 'Iconic Monuments & Eiffel Summit', durationHours: 4, basePricePerPerson: 85 },
  { id: 'louvre', name: 'Louvre & Masterpieces Guided Walk', durationHours: 3.5, basePricePerPerson: 75 },
  { id: 'montmartre', name: 'Montmartre Secret Alleys & Artists', durationHours: 3, basePricePerPerson: 55 },
  { id: 'seine-cruise', name: 'Seine River Sunset Gourmet Cruise', durationHours: 2.5, basePricePerPerson: 110 },
  { id: 'versailles', name: 'Palace of Versailles Royal Day Trip', durationHours: 7, basePricePerPerson: 135 },
];

/**
 * Calculates total tour cost with tiered group discount
 */
export function calculateTourTotal(tourId: string, guestsCount: number, isVipUpgrade = false): number {
  const safeGuests = Math.max(1, guestsCount);
  const tour = PARIS_TOURS.find((t) => t.id === tourId) || PARIS_TOURS[0];
  let price = tour.basePricePerPerson * safeGuests;

  // Group discounts: 3+ guests = 10% off, 6+ guests = 15% off
  if (safeGuests >= 6) {
    price *= 0.85;
  } else if (safeGuests >= 3) {
    price *= 0.90;
  }

  if (isVipUpgrade) {
    price += safeGuests * 30; // VIP skip-the-line pass
  }

  return Math.round(price);
}

/**
 * Validates tour inquiry input
 */
export function validateTourInquiry(input: {
  fullName: string;
  email: string;
  guestsCount: number;
}): { isValid: boolean; error?: string } {
  if (!input.fullName.trim()) {
    return { isValid: false, error: 'Full name is required' };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(input.email.trim())) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  if (!input.guestsCount || input.guestsCount < 1 || input.guestsCount > 25) {
    return { isValid: false, error: 'Number of guests must be between 1 and 25' };
  }
  return { isValid: true };
}
