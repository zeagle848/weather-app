import { unixToUtc } from './unixToUtc';
import { fetchCurrentWeather } from '../services/fetchCurrentWeather';
import { locationService } from '../services/fetchLocation';

export async function loadCurrentWeather({ location, units }) {
  return locationService.fetchLocation(location).then(({ lat, lon }) =>
    fetchCurrentWeather({ lat, lon, units }).then((responseBody) => {
      return {
        weatherIcon: responseBody.weather[0].icon,
        currentTemp: Math.floor(responseBody.main.feels_like),
        maxTemp: Math.floor(responseBody.main.temp_max),
        minTemp: Math.floor(responseBody.main.temp_min),
        humidity: responseBody.main.humidity,
        sunrise: unixToUtc(responseBody.sys.sunrise),
        sunset: unixToUtc(responseBody.sys.sunset),
      };
    })
  );
}
