export function unixToUtc(unixTimeStamp) {
  let returnDate = '';
  const date = new Date(unixTimeStamp * 1000);
  const hours = date.getHours();
  const minutes = `0${date.getMinutes()}`;

  returnDate = `${hours}:${minutes.substr(-2)}`;

  return returnDate;
}
