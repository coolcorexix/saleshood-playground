// @ts-nocheck
import isNullOrEmpty from './check-null-or-empty';

describe('isNullOrEmpty', () => {
  it('should check null or empty', () => {
    expect(isNullOrEmpty(null)).toEqual(true);
    expect(isNullOrEmpty('')).toEqual(true);
    expect(isNullOrEmpty(' ')).toEqual(false);
  });
});
