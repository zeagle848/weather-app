import { unixToUtc } from '../utils/unixToUTC';

export function fetchCurrentWeather({ location, units }) {
  const baseURL = 'http://api.openweathermap.org';
  const apiKey = 'a85f685e3bf5af827565536f35c9fc33';

  const locationURL = `${baseURL}/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`;

  const locReq = new Request(locationURL);

  const returnPromise = fetch(locReq)
    .then((response) => response.json())
    .then((responseBody) => {
      const { lat } = responseBody[0];
      const { lon } = responseBody[0];

      const returnURL = `${baseURL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
      return fetch(returnURL);
    })
    .then((response) => response.json())
    .then((responseBody) => ({
      weatherIcon: responseBody.weather[0].icon,
      currentTemp: Math.floor(responseBody.main.feels_like),
      maxTemp: Math.floor(responseBody.main.temp_max),
      minTemp: Math.floor(responseBody.main.temp_min),
      humidity: responseBody.main.humidity,
      sunrise: unixToUtc(responseBody.sys.sunrise),
      sunset: unixToUtc(responseBody.sys.sunset),
    }))
    .catch((err) => console.log(err));

  return returnPromise;
}
