import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateSolarImpact, formatNumberWithCommas, validateInquiry } from './solar-stats.ts';

test('formatNumberWithCommas formats correctly', () => {
  assert.equal(formatNumberWithCommas(525555), '525,555');
  assert.equal(formatNumberWithCommas(946), '946');
  assert.equal(formatNumberWithCommas(1000000), '1,000,000');
});

test('calculateSolarImpact calculates realistic energy yields for commercial roofs', () => {
  const result = calculateSolarImpact(10000); // 10,000 m2 warehouse roof
  assert.ok(result.annualGWh > 1.5 && result.annualGWh < 2.0);
  assert.ok(result.peopleBenefited > 800);
  assert.ok(result.co2OffsetTons > 400);
  assert.ok(result.commercialSavingsEuro > 200000);
});

test('calculateSolarImpact handles 0 or negative values gracefully', () => {
  const result = calculateSolarImpact(-500);
  assert.equal(result.annualGWh, 0);
  assert.equal(result.peopleBenefited, 0);
  assert.equal(result.co2OffsetTons, 0);
});

test('validateInquiry validates required fields and valid email format', () => {
  const valid = validateInquiry({
    companyName: 'Euro Logistics B.V.',
    email: 'contact@eurologistics.eu',
    roofSizeM2: 5000,
  });
  assert.equal(valid.isValid, true);
  assert.equal(valid.error, undefined);

  const missingName = validateInquiry({
    companyName: '',
    email: 'contact@eurologistics.eu',
    roofSizeM2: 5000,
  });
  assert.equal(missingName.isValid, false);
  assert.equal(missingName.error, 'Company name is required');

  const invalidEmail = validateInquiry({
    companyName: 'Acme Corp',
    email: 'not-an-email',
    roofSizeM2: 5000,
  });
  assert.equal(invalidEmail.isValid, false);
  assert.equal(invalidEmail.error, 'Please enter a valid business email address');

  const invalidRoof = validateInquiry({
    companyName: 'Acme Corp',
    email: 'contact@acme.com',
    roofSizeM2: -10,
  });
  assert.equal(invalidRoof.isValid, false);
});
