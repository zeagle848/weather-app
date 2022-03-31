export function fetchCurrentWeather({ lat, lon, units }) {
  const baseURL = 'http://api.openweathermap.org';
  const apiKey = 'a85f685e3bf5af827565536f35c9fc33';

  const currentWeatherURL = `${baseURL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

  const currentWeatherReqest = new Request(currentWeatherURL);

  return fetch(currentWeatherReqest)
    .then((response) => response.json())
    .then((responseBody) => responseBody)
    .catch((err) => console.log(err));
}
