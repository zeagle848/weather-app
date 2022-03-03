export function unixToDay(unixTimeStamp) {
  const i = 0;
  const data = { list: [{ dt: unixTimeStamp }] };

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayNum = new Date(data.list[i].dt * 1000).getDay();
  const result = days[dayNum];
  return result;
}
