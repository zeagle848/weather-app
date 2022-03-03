function renderForecast({ listOfForecastItems, unit }) {
  // CREATE ROOT ELEMENTS
  const forecastContainer = document.getElementById(
    'seven-day-forecast-container'
  );
  const fragment = document.createDocumentFragment();

  listOfForecastItems.forEach((forecastItem) => {
    let metricAverageTemp;
    let imperialAverageTemp;

    let metricMinTemp;
    let imperialMinTemp;

    if (unit === 'metric') {
      metricAverageTemp = forecastItem.avgTemp;
      metricMinTemp = forecastItem.minTemp;

      imperialAverageTemp = Math.floor(
        parseInt(forecastItem.avgTemp, 10) * (9 / 5) + 32
      );
      imperialMinTemp = Math.floor(
        parseInt(forecastItem.minTemp, 10) * (9 / 5) + 32
      );
    } else {
      imperialAverageTemp = forecastItem.avgTemp;
      imperialMinTemp = forecastItem.minTemp;

      metricAverageTemp = Math.floor(
        (parseInt(forecastItem.avgTemp, 10) - 32) * (5 / 9)
      );
      metricMinTemp = Math.floor(
        (parseInt(forecastItem.minTemp, 10) - 32) * (5 / 9)
      );
    }

    const forecastCard = document.createElement('div');
    forecastCard.classList.add('forecast-card');

    const day = document.createElement('span');
    day.classList.add('day-of-the-week');
    day.textContent = forecastItem.day;

    forecastCard.append(day);

    const tempContainer = document.createElement('div');
    tempContainer.classList.add('temperature-forecast-container');

    const avgTemp = document.createElement('span');
    avgTemp.classList.add('average-temp');
    avgTemp.setAttribute('data-metric-temp', `${metricAverageTemp}`);
    avgTemp.setAttribute('data-imperial-temp', `${imperialAverageTemp}`);
    if (unit === 'metric') {
      avgTemp.textContent = `${forecastItem.avgTemp}℃`;
    } else {
      avgTemp.textContent = `${forecastItem.avgTemp}℉`;
    }

    tempContainer.append(avgTemp);

    const minTemp = document.createElement('span');
    minTemp.classList.add('min-temp-forecast');
    minTemp.setAttribute('data-metric-temp', `${metricMinTemp}`);
    minTemp.setAttribute('data-imperial-temp', `${imperialMinTemp}`);

    if (unit === 'metric') {
      minTemp.textContent = `${forecastItem.minTemp}℃`;
    } else {
      minTemp.textContent = `${forecastItem.minTemp}℉`;
    }
    tempContainer.append(minTemp);

    forecastCard.append(tempContainer);

    const weatherIcon = document.createElement('img');
    weatherIcon.classList.add('weather-icon');
    weatherIcon.setAttribute('src', forecastItem.imgURL);

    forecastCard.append(weatherIcon);

    fragment.append(forecastCard);
  });

  forecastContainer.append(fragment);
}

export default renderForecast;
