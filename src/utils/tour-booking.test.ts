import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateTourTotal, validateTourInquiry, PARIS_TOURS } from './tour-booking';

test('PARIS_TOURS contains valid tour packages', () => {
  assert.ok(PARIS_TOURS.length >= 4);
  assert.equal(PARIS_TOURS[0].id, 'monuments');
});

test('calculateTourTotal calculates standard single and group rates with discounts', () => {
  // 1 guest: 85 EUR
  assert.equal(calculateTourTotal('monuments', 1), 85);
  // 2 guests: 170 EUR
  assert.equal(calculateTourTotal('monuments', 2), 170);
  // 4 guests: 4 * 85 * 0.90 = 306 EUR
  assert.equal(calculateTourTotal('monuments', 4), 306);
  // 6 guests: 6 * 85 * 0.85 = 433.5 -> 434 EUR
  assert.equal(calculateTourTotal('monuments', 6), 434);
});

test('calculateTourTotal adds VIP skip-the-line upgrade', () => {
  // 2 guests + 2 * 30 VIP = 170 + 60 = 230 EUR
  assert.equal(calculateTourTotal('monuments', 2, true), 230);
});

test('validateTourInquiry validates name, email, and guest bounds', () => {
  assert.equal(
    validateTourInquiry({ fullName: 'Amélie Poulain', email: 'amelie@paris.fr', guestsCount: 2 }).isValid,
    true
  );
  assert.equal(
    validateTourInquiry({ fullName: '', email: 'amelie@paris.fr', guestsCount: 2 }).isValid,
    false
  );
  assert.equal(
    validateTourInquiry({ fullName: 'Amélie Poulain', email: 'not-an-email', guestsCount: 2 }).isValid,
    false
  );
  assert.equal(
    validateTourInquiry({ fullName: 'Amélie Poulain', email: 'amelie@paris.fr', guestsCount: 0 }).isValid,
    false
  );
  assert.equal(
    validateTourInquiry({ fullName: 'Amélie Poulain', email: 'amelie@paris.fr', guestsCount: 30 }).isValid,
    false
  );
});
