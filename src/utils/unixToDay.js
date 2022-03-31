const DAY_NAMES = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export function unixToDay(unixTimeStamp) {
  const dayIndex = new Date(unixTimeStamp * 1000).getDay();
  return DAY_NAMES[dayIndex];
}
