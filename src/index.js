import './style.css';
import renderWeatherCard from './components/renderWeatherCard';
import renderForecast from './components/renderForecast';
import { toggleTemp } from './utils/toggleTemp';
import { fetchCurrentWeather } from './services/fetchCurrentWeather';
import { fetchForecast } from './services/fetchForecast';
import { loadCurrentWeather } from './utils/loadCurrentWeatherData';
import { loadWeatherForecast } from './utils/loadWeatherForecast';

const toggleTempButton = document.querySelector('.toggle-sign'); // Change to temperature

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

      loadCurrentWeather({ location, units: currentUnit }).then(
        ({
          currentTemp,
          maxTemp,
          minTemp,
          humidity,
          sunrise,
          sunset,
          weatherIcon,
        }) => {
          renderWeatherCard({
            location,
            weatherIconURL: `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`,
            feelsLikeTemp: currentTemp,
            maxTemp,
            minTemp,
            humidity,
            sunrise,
            sunset,
            unit: currentUnit,
          });
        }
      );

      const foreCastContainer = document.getElementById(
        'seven-day-forecast-container'
      );
      while (foreCastContainer.firstChild) {
        foreCastContainer.removeChild(foreCastContainer.firstChild);
      }

      loadWeatherForecast({ location, units: currentUnit }).then((response) => {
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
  loadCurrentWeather({ location: 'Cape Town', units: 'metric' }).then(
    ({
      weatherIcon,
      currentTemp,
      maxTemp,
      minTemp,
      humidity,
      sunrise,
      sunset,
    }) => {
      renderWeatherCard({
        location: 'Cape Town',
        weatherIconURL: `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`,
        feelsLikeTemp: currentTemp,
        maxTemp,
        minTemp,
        humidity,
        sunrise,
        sunset,
        unit: 'metric',
      });
    }
  );

  loadWeatherForecast({ location: 'Cape Town', units: 'metric' }).then(
    (response) => {
      const foreCastArray = response;
      console.log(foreCastArray);
      foreCastArray.shift();
      renderForecast({
        listOfForecastItems: foreCastArray,
        unit: 'metric',
      });
    }
  );
}

init();
