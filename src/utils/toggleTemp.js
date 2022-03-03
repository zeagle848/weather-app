export function toggleTemp({ event, toggleTempButton }) {
  const toggleTo = event.target.textContent;

  const feelsLikeTempElem = document.getElementById('feels-like-temp');
  const metricFeelsLikeTemp =
    feelsLikeTempElem.getAttribute('data-metric-temp');
  const imperialFeelsLikeTemp =
    feelsLikeTempElem.getAttribute('data-imperial-temp');

  const maxTempElem = document.getElementById('max-temp');
  const metricMaxTemp = maxTempElem.getAttribute('data-metric-temp');
  const imperialMaxTemp = maxTempElem.getAttribute('data-imperial-temp');

  const minTempElem = document.getElementById('min-temp');
  const metricMinTemp = minTempElem.getAttribute('data-metric-temp');
  const imperialMinTemp = minTempElem.getAttribute('data-imperial-temp');

  const allAvgTempElems = [...document.querySelectorAll('.average-temp')];
  const metricAvgTempsArray = allAvgTempElems.map((elem) =>
    elem.getAttribute('data-metric-temp')
  );
  const imperialAvgTempsArray = allAvgTempElems.map((elem) =>
    elem.getAttribute('data-imperial-temp')
  );

  const allMinTempElems = [...document.querySelectorAll('.min-temp-forecast')];
  const metricMinTempsArray = allMinTempElems.map((elem) =>
    elem.getAttribute('data-metric-temp')
  );
  const imperialMinTempsArray = allMinTempElems.map((elem) =>
    elem.getAttribute('data-imperial-temp')
  );

  if (toggleTo === '℉') {
    feelsLikeTempElem.textContent = `${imperialFeelsLikeTemp}℉`;

    maxTempElem.textContent = `${imperialMaxTemp}℉`;

    minTempElem.textContent = `${imperialMinTemp}℉`;

    for (let index = 0; index < 7; index += 1) {
      const avgElem = allAvgTempElems[index];
      avgElem.textContent = `${imperialAvgTempsArray[index]}℉`;
      const minElem = allMinTempElems[index];
      minElem.textContent = `${imperialMinTempsArray[index]}℉`;
    }
    toggleTempButton.textContent = '℃';
  }

  if (toggleTo === '℃') {
    feelsLikeTempElem.textContent = `${metricFeelsLikeTemp}℃`;

    maxTempElem.textContent = `${metricMaxTemp}℃`;

    minTempElem.textContent = `${metricMinTemp}℃`;

    for (let index = 0; index < 7; index += 1) {
      const avgElem = allAvgTempElems[index];
      avgElem.textContent = `${metricAvgTempsArray[index]}℃`;
      const minElem = allMinTempElems[index];
      minElem.textContent = `${metricMinTempsArray[index]}℃`;
    }
    toggleTempButton.textContent = '℉';
  }
}
