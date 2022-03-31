import { loadCurrentWeather } from '../src/utils/loadCurrentWeatherData';
import { locationService } from '../src/services/fetchLocation';

jest.mock('../src/services/fetchCurrentWeather', () => ({
  fetchCurrentWeather: ({ lat, lon, units }) => {
    return Promise.resolve({
      coord: {
        lon: -122.08,
        lat: 37.39,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      base: 'stations',
      main: {
        temp: 282.55,
        feels_like: 281.86,
        temp_min: 280.37,
        temp_max: 284.26,
        pressure: 1023,
        humidity: 100,
      },
      visibility: 10000,
      wind: {
        speed: 1.5,
        deg: 350,
      },
      clouds: {
        all: 1,
      },
      dt: 1560350645,
      sys: {
        type: 1,
        id: 5122,
        message: 0.0139,
        country: 'US',
        sunrise: 1560343627,
        sunset: 1560396563,
      },
      timezone: -25200,
      id: 420006353,
      name: 'Mountain View',
      cod: 200,
    });
  },
}));
test('Can use data returned from OpenWeatherAPI for getting current weather', async () => {
  jest
    .spyOn(locationService, 'fetchLocation')
    .mockImplementation(async (location) => {
      return Promise.resolve({
        lon: -122.08,
        lat: 37.39,
      });
    });
  expect(
    await loadCurrentWeather({ location: 'Mountain View', units: 'imperial' })
  ).toEqual({
    weatherIcon: '01d',
    currentTemp: 281,
    maxTemp: 284,
    minTemp: 280,
    humidity: 100,
    sunrise: '14:47',
    sunset: '5:29',
  });
});
