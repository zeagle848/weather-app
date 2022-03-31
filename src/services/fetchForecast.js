export function fetchForecast({ lat, lon, units }) {
  const baseURL = 'http://api.openweathermap.org';
  const apiKey = 'a85f685e3bf5af827565536f35c9fc33';

  const weatherForecastURL = `${baseURL}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=current,minutely,hourly,alerts&appid=${apiKey}`;

  const weatherForecastRequest = new Request(weatherForecastURL);

  return fetch(weatherForecastRequest)
    .then((response) => response.json())
    .then((responseBody) => responseBody)
    .catch((err) => console.log(err));
}
