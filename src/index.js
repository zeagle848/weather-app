import './style.css';
import renderWeatherCard from './components/renderWeatherCard';
import renderForecast from './components/renderForecast';
import { toggleTemp } from './utils/toggleTemp';
import { fetchCurrentWeather } from './services/fetchCurrentWeather';
import { fetchForecast } from './services/fetchForecast';

const toggleTempButton = document.querySelector('.toggle-sign');

toggleTempButton.addEventListener('click', (event) => {
  toggleTemp({ event, toggleTempButton });
});

const locationInput = document.getElementById('search-box');

locationInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    let currentUnit;
    const location = event.target.value.trim();
    if (toggleTempButton.textContent === '℉') {
      currentUnit = 'metric';
    } else {
      currentUnit = 'imperial';
    }

    if (location) {
      document.getElementById('weather-card').remove();

      fetchCurrentWeather({ location, units: currentUnit }).then((response) => {
        renderWeatherCard({
          location,
          weatherIconURL: `http://openweathermap.org/img/wn/${response.weatherIcon}@2x.png`,
          feelsLikeTemp: response.currentTemp,
          maxTemp: response.maxTemp,
          minTemp: response.minTemp,
          humidity: response.humidity,
          sunrise: response.sunrise,
          sunset: response.sunset,
          unit: currentUnit,
        });
      });

      const foreCastContainer = document.getElementById(
        'seven-day-forecast-container'
      );
      while (foreCastContainer.firstChild) {
        foreCastContainer.removeChild(foreCastContainer.firstChild);
      }

      fetchForecast({ location, units: currentUnit }).then((response) => {
        const foreCastArray = response;
        foreCastArray.shift();
        renderForecast({
          listOfForecastItems: foreCastArray,
          unit: currentUnit,
        });
      });
    } else {
      alert('Please input a valid location');
    }
  }
});

function init() {
  locationInput.value = 'Cape Town';
  fetchCurrentWeather({ location: 'Cape Town', units: 'metric' }).then(
    (response) => {
      renderWeatherCard({
        location: 'Cape Town',
        weatherIconURL: `http://openweathermap.org/img/wn/${response.weatherIcon}@2x.png`,
        feelsLikeTemp: response.currentTemp,
        maxTemp: response.maxTemp,
        minTemp: response.minTemp,
        humidity: response.humidity,
        sunrise: response.sunrise,
        sunset: response.sunset,
        unit: 'metric',
      });
    }
  );

  fetchForecast({ location: 'Cape Town', units: 'metric' }).then((response) => {
    const foreCastArray = response;
    foreCastArray.shift();
    renderForecast({
      listOfForecastItems: foreCastArray,
      unit: 'metric',
    });
  });
}

init();
