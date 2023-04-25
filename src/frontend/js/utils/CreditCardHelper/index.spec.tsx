import { faker } from '@faker-js/faker';
import { CreditCardExpirationStatus, CreditCardHelper } from 'utils/CreditCardHelper/index';
import { CreditCardFactory } from 'utils/test/factories/joanie';

describe('CreditCardHelper', () => {
  it('handles falsy values', () => {
    expect(
      CreditCardHelper.isExpiredSoon(
        CreditCardFactory({ expiration_month: undefined, expiration_year: undefined }).one(),
      ),
    ).toBe(false);
  });
  it('is not soon expired', () => {
    const limit = new Date();
    limit.setMonth(limit.getMonth() + 4);
    const date = faker.date.future(0.2, limit);
    expect(
      CreditCardHelper.getExpirationState({
        ...CreditCardFactory().one(),
        expiration_month: date.getMonth() + 1,
        expiration_year: date.getFullYear(),
      }),
    ).toBe(CreditCardExpirationStatus.FINE);
  });
  it('is soon expired', () => {
    const offset = new Date();
    offset.setMonth(offset.getMonth() + 1);
    offset.setDate(1);
    const date = faker.date.future(2 / 12, offset);
    expect(
      CreditCardHelper.getExpirationState({
        ...CreditCardFactory().one(),
        expiration_month: date.getMonth() + 1,
        expiration_year: date.getFullYear(),
      }),
    ).toBe(CreditCardExpirationStatus.SOON);
  });
  it('is expired', () => {
    const date = faker.date.past(0.2);
    expect(
      CreditCardHelper.getExpirationState({
        ...CreditCardFactory().one(),
        expiration_month: date.getMonth() + 1,
        expiration_year: date.getFullYear(),
      }),
    ).toBe(CreditCardExpirationStatus.EXPIRED);
  });
});
