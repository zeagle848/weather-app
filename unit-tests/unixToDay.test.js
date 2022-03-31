import { unixToDay } from '../src/utils/unixToDay';

test('Can convert unix timestamp to day of the week', () => {
  expect(unixToDay(1560350645)).toBe('Wednesday');
});
