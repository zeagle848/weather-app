import { unixToDay } from './unixToDay';
import { fetchForecast } from '../services/fetchForecast';
import { locationService } from '../services/fetchLocation';

export async function loadWeatherForecast({ location, units }) {
  return locationService.fetchLocation(location).then(({ lat, lon }) =>
    fetchForecast({ lat, lon, units }).then((responseBody) => {
      return responseBody.daily.map(({ dt: date, temp, weather }) => {
        return {
          day: unixToDay(date),
          avgTemp: Math.floor(temp.day),
          minTemp: Math.floor(temp.min),
          imgURL: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
        };
      });
    })
  );
}
