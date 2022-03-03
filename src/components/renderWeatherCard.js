function renderWeatherCard({
  location,
  weatherIconURL,
  feelsLikeTemp,
  maxTemp,
  minTemp,
  unit,
  humidity,
  sunrise,
  sunset,
}) {
  let metricFeelsLikeTemp;
  let metricMaxTemp;
  let metricMinTemp;

  let imperialFeelsLikeTemp;
  let imperialMaxTemp;
  let imperialMinTemp;

  if (unit === 'metric') {
    metricFeelsLikeTemp = feelsLikeTemp;
    metricMaxTemp = maxTemp;
    metricMinTemp = minTemp;

    imperialFeelsLikeTemp = Math.floor(
      parseInt(feelsLikeTemp, 10) * (9 / 5) + 32
    );
    imperialMaxTemp = Math.floor(parseInt(maxTemp, 10) * (9 / 5) + 32);
    imperialMinTemp = Math.floor(parseInt(minTemp, 10) * (9 / 5) + 32);
  } else {
    imperialFeelsLikeTemp = feelsLikeTemp;
    imperialMaxTemp = maxTemp;
    imperialMinTemp = minTemp;

    metricFeelsLikeTemp = Math.floor(
      (parseInt(feelsLikeTemp, 10) - 32) * (5 / 9)
    );
    metricMaxTemp = Math.floor((parseInt(maxTemp, 10) - 32) * (5 / 9));
    metricMinTemp = Math.floor((parseInt(minTemp, 10) - 32) * (5 / 9));
  }

  // CREATE ROOT ELEMENTS
  const rootContainer = document.getElementById('weather-card-container');
  const fragment = document.createDocumentFragment();

  const weatherCard = document.createElement('div');
  weatherCard.classList.add('weather-card');
  weatherCard.id = 'weather-card';

  // CREATE HEADER ELEMENTS
  const weatherCardHeader = document.createElement('div');
  weatherCardHeader.classList.add('weather-card-header');

  const locationElement = document.createElement('h2');
  locationElement.classList.add('location');
  locationElement.textContent = location;

  weatherCardHeader.append(locationElement);

  const weatherIconElement = document.createElement('img');
  weatherIconElement.classList.add('weather-icon');
  weatherIconElement.setAttribute('src', `${weatherIconURL}`);

  weatherCardHeader.append(weatherIconElement);

  weatherCard.append(weatherCardHeader);

  // CREATE TEMPERATURE ELEMENTS

  const tempItemContainer = document.createElement('div');
  tempItemContainer.classList.add('temperature-item-container');

  const feelsLikeElement = document.createElement('span');
  feelsLikeElement.classList.add('feels-like-temp');
  feelsLikeElement.id = 'feels-like-temp';
  feelsLikeElement.setAttribute('data-metric-temp', `${metricFeelsLikeTemp}`);
  feelsLikeElement.setAttribute(
    'data-imperial-temp',
    `${imperialFeelsLikeTemp}`
  );
  if (unit === 'metric') {
    feelsLikeElement.textContent = `${feelsLikeTemp}℃`;
  } else {
    feelsLikeElement.textContent = `${feelsLikeTemp}℉`;
  }

  tempItemContainer.append(feelsLikeElement);

  const minMaxContainer = document.createElement('div');
  minMaxContainer.classList.add('min-max-container');

  const maxElement = document.createElement('span');
  maxElement.classList.add('max-temp');
  maxElement.id = 'max-temp';
  maxElement.setAttribute('data-metric-temp', `${metricMaxTemp}`);
  maxElement.setAttribute('data-imperial-temp', `${imperialMaxTemp}`);

  if (unit === 'metric') {
    maxElement.textContent = `${maxTemp}℃`;
  } else {
    maxElement.textContent = `${maxTemp}℉`;
  }

  minMaxContainer.append(maxElement);

  const minElement = document.createElement('span');
  minElement.classList.add('min-temp');
  minElement.id = 'min-temp';
  minElement.setAttribute('data-metric-temp', `${metricMinTemp}`);
  minElement.setAttribute('data-imperial-temp', `${imperialMinTemp}`);
  if (unit === 'metric') {
    minElement.textContent = `${minTemp}℃`;
  } else {
    minElement.textContent = `${minTemp}℉`;
  }

  minMaxContainer.append(minElement);

  tempItemContainer.append(minMaxContainer);

  weatherCard.append(tempItemContainer);

  // CREATE MISC WEATHER ELEMENTS
  const humidityContainer = document.createElement('div');
  humidityContainer.classList.add('weather-item-container');

  const humidityLabel = document.createElement('span');
  humidityLabel.textContent = 'Humidity: ';

  humidityContainer.append(humidityLabel);

  const humidityValue = document.createElement('span');
  humidityValue.classList.add('weather-data');
  humidityValue.textContent = `${humidity}%`;

  humidityContainer.append(humidityValue);

  weatherCard.append(humidityContainer);

  const sunriseContainer = document.createElement('div');
  sunriseContainer.classList.add('weather-item-container');

  const sunriseLabel = document.createElement('span');
  sunriseLabel.textContent = 'Sunrise: ';

  sunriseContainer.append(sunriseLabel);

  const sunriseValue = document.createElement('span');
  sunriseValue.classList.add('weather-data');
  sunriseValue.textContent = `${sunrise}`;

  sunriseContainer.append(sunriseValue);

  weatherCard.append(sunriseContainer);

  const sunsetContainer = document.createElement('div');
  sunsetContainer.classList.add('weather-item-container');

  const sunsetLabel = document.createElement('span');
  sunsetLabel.textContent = 'Sunset: ';

  sunsetContainer.append(sunsetLabel);

  const sunsetValue = document.createElement('span');
  sunsetValue.classList.add('weather-data');
  sunsetValue.textContent = `${sunset}`;

  sunsetContainer.append(sunsetValue);

  weatherCard.append(sunsetContainer);

  // APPEND TO ROOT ELEMENTS

  fragment.append(weatherCard);
  rootContainer.append(fragment);
}

export default renderWeatherCard;
