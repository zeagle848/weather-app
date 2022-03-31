export function unixToUtc(unixTimeStamp) {
  const date = new Date(unixTimeStamp * 1000);
  const hours = date.getHours();
  const minutesNumber = date.getMinutes();
  const minutes = `${minutesNumber > 9 ? '' : '0'}${minutesNumber}`;
  return `${hours}:${minutes}`;
}
