import { unixToUtc } from '../src/utils/unixToUtc';

test('Can convert unix timestamp to UTC format time', () => {
  expect(unixToUtc(1560350645)).toBe('16:44');
});
