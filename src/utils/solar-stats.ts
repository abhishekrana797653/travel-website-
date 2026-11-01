/**
 * Utility functions and calculations for Sunrock solar energy statistics and calculators
 */

export interface SolarImpactEstimate {
  annualGWh: number;
  peopleBenefited: number;
  co2OffsetTons: number;
  commercialSavingsEuro: number;
}

/**
 * Calculates solar impact and financial return based on commercial roof area (in square meters)
 */
export function calculateSolarImpact(roofAreaM2: number): SolarImpactEstimate {
  const safeArea = Math.max(0, roofAreaM2);
  // Average solar yield: ~180 Wp/m2, European average ~950 kWh/kWp -> ~0.171 MWh/m2/year = 0.000171 GWh/m2/year
  const annualGWh = parseFloat((safeArea * 0.000171).toFixed(4));
  // 1 GWh powers ~280 European households (~550 people)
  const peopleBenefited = Math.round(annualGWh * 550);
  // Average European grid factor ~300g CO2/kWh -> 300 tons/GWh
  const co2OffsetTons = Math.round(annualGWh * 300);
  // Commercial electricity savings (~€0.16/kWh = €160,000/GWh)
  const commercialSavingsEuro = Math.round(annualGWh * 160000);

  return {
    annualGWh,
    peopleBenefited,
    co2OffsetTons,
    commercialSavingsEuro,
  };
}

/**
 * Formats large numbers with localized commas (e.g., 525555 -> "525,555")
 */
export function formatNumberWithCommas(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Validates inquiry form submission
 */
export function validateInquiry(input: {
  companyName: string;
  email: string;
  roofSizeM2: number;
}): { isValid: boolean; error?: string } {
  if (!input.companyName.trim()) {
    return { isValid: false, error: 'Company name is required' };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(input.email.trim())) {
    return { isValid: false, error: 'Please enter a valid business email address' };
  }
  if (isNaN(input.roofSizeM2) || input.roofSizeM2 <= 0) {
    return { isValid: false, error: 'Roof area must be greater than 0 m²' };
  }
  return { isValid: true };
}
