import { unixToDay } from '../utils/unixToDay';

export function fetchForecast({ location, units }) {
  const baseURL = 'http://api.openweathermap.org';
  const apiKey = 'a85f685e3bf5af827565536f35c9fc33';

  const locationURL = `${baseURL}/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`;

  const locReq = new Request(locationURL);

  const returnPromise = fetch(locReq)
    .then((response) => response.json())
    .then((responseBody) => {
      const { lat } = responseBody[0];
      const { lon } = responseBody[0];

      const returnURL = `${baseURL}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=current,minutely,hourly,alerts&appid=${apiKey}`;
      return fetch(returnURL);
    })
    .then((response) => response.json())
    .then((responseBody) => {
      const returnArray = [];
      responseBody.daily.forEach((dailyItem) => {
        const dailyObj = {
          day: unixToDay(dailyItem.dt),
          avgTemp: Math.floor(dailyItem.temp.day),
          minTemp: Math.floor(dailyItem.temp.min),
          imgURL: `http://openweathermap.org/img/wn/${dailyItem.weather[0].icon}@2x.png`,
        };
        returnArray.push(dailyObj);
      });
      return returnArray;
    });

  return returnPromise;
}
