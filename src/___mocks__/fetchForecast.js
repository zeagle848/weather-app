export function fetchForecast({ lat, lon, units }) {
  return Promise.resolve({
    lat: -33.929,
    lon: 18.4174,
    timezone: 'Africa/Johannesburg',
    timezone_offset: 7200,
    daily: [
      {
        dt: 1648202400,
        sunrise: 1648183983,
        sunset: 1648227091,
        moonrise: 0,
        moonset: 1648211460,
        moon_phase: 0.75,
        temp: {
          day: 23.18,
          min: 17.07,
          max: 23.69,
          night: 17.53,
          eve: 20.42,
          morn: 17.14,
        },
        feels_like: {
          day: 22.91,
          night: 17.24,
          eve: 20.03,
          morn: 16.82,
        },
        pressure: 1014,
        humidity: 52,
        dew_point: 12.79,
        wind_speed: 10.52,
        wind_deg: 147,
        wind_gust: 14.7,
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02d',
          },
        ],
        clouds: 17,
        pop: 0.17,
        uvi: 8.36,
      },
      {
        dt: 1648288800,
        sunrise: 1648270428,
        sunset: 1648313409,
        moonrise: 1648246740,
        moonset: 1648301400,
        moon_phase: 0.79,
        temp: {
          day: 21.76,
          min: 16.01,
          max: 23.24,
          night: 18.51,
          eve: 21.24,
          morn: 16.24,
        },
        feels_like: {
          day: 21.4,
          night: 18.32,
          eve: 21.01,
          morn: 15.96,
        },
        pressure: 1014,
        humidity: 54,
        dew_point: 11.84,
        wind_speed: 6.85,
        wind_deg: 166,
        wind_gust: 9.67,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: 9,
        pop: 0,
        uvi: 7.96,
      },
      {
        dt: 1648375200,
        sunrise: 1648356872,
        sunset: 1648399727,
        moonrise: 1648337160,
        moonset: 1648390680,
        moon_phase: 0.83,
        temp: {
          day: 23.8,
          min: 16.43,
          max: 24.32,
          night: 19.77,
          eve: 22.36,
          morn: 16.57,
        },
        feels_like: {
          day: 23.49,
          night: 19.45,
          eve: 22.09,
          morn: 16.37,
        },
        pressure: 1013,
        humidity: 48,
        dew_point: 11.42,
        wind_speed: 3.97,
        wind_deg: 136,
        wind_gust: 5.31,
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d',
          },
        ],
        clouds: 71,
        pop: 0,
        uvi: 7.68,
      },
      {
        dt: 1648461600,
        sunrise: 1648443316,
        sunset: 1648486045,
        moonrise: 1648427700,
        moonset: 1648479600,
        moon_phase: 0.87,
        temp: {
          day: 20.32,
          min: 17.33,
          max: 20.32,
          night: 17.33,
          eve: 19.19,
          morn: 17.46,
        },
        feels_like: {
          day: 20.05,
          night: 17.23,
          eve: 19.07,
          morn: 17.09,
        },
        pressure: 1010,
        humidity: 63,
        dew_point: 12.23,
        wind_speed: 6.27,
        wind_deg: 327,
        wind_gust: 9.86,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: 0,
        pop: 0,
        uvi: 8.07,
      },
      {
        dt: 1648548000,
        sunrise: 1648529761,
        sunset: 1648572363,
        moonrise: 1648518240,
        moonset: 1648568160,
        moon_phase: 0.9,
        temp: {
          day: 16.95,
          min: 16.33,
          max: 18.5,
          night: 17.83,
          eve: 18.5,
          morn: 16.33,
        },
        feels_like: {
          day: 17,
          night: 17.5,
          eve: 18.36,
          morn: 16.32,
        },
        pressure: 1012,
        humidity: 88,
        dew_point: 14.89,
        wind_speed: 8.95,
        wind_deg: 355,
        wind_gust: 15.36,
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: 100,
        pop: 0.96,
        rain: 3.53,
        uvi: 2.71,
      },
      {
        dt: 1648634400,
        sunrise: 1648616205,
        sunset: 1648658681,
        moonrise: 1648608600,
        moonset: 1648656420,
        moon_phase: 0.94,
        temp: {
          day: 19.19,
          min: 16.9,
          max: 19.71,
          night: 17.16,
          eve: 18.92,
          morn: 16.9,
        },
        feels_like: {
          day: 18.73,
          night: 16.79,
          eve: 18.46,
          morn: 16.68,
        },
        pressure: 1019,
        humidity: 60,
        dew_point: 11.15,
        wind_speed: 5.79,
        wind_deg: 183,
        wind_gust: 8.37,
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: 54,
        pop: 0.53,
        rain: 1.28,
        uvi: 3,
      },
      {
        dt: 1648720800,
        sunrise: 1648702649,
        sunset: 1648744999,
        moonrise: 1648698840,
        moonset: 1648744500,
        moon_phase: 0.97,
        temp: {
          day: 19.61,
          min: 16.16,
          max: 20.2,
          night: 17.45,
          eve: 19.03,
          morn: 16.16,
        },
        feels_like: {
          day: 19.25,
          night: 17.18,
          eve: 18.74,
          morn: 15.89,
        },
        pressure: 1016,
        humidity: 62,
        dew_point: 12,
        wind_speed: 8.92,
        wind_deg: 169,
        wind_gust: 12.06,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: 0,
        pop: 0,
        uvi: 3,
      },
      {
        dt: 1648807200,
        sunrise: 1648789093,
        sunset: 1648831318,
        moonrise: 1648788960,
        moonset: 1648832580,
        moon_phase: 0,
        temp: {
          day: 19.99,
          min: 17.23,
          max: 21.41,
          night: 17.59,
          eve: 20.26,
          morn: 17.23,
        },
        feels_like: {
          day: 19.43,
          night: 17.34,
          eve: 19.91,
          morn: 16.78,
        },
        pressure: 1020,
        humidity: 53,
        dew_point: 10.04,
        wind_speed: 9.65,
        wind_deg: 162,
        wind_gust: 13.52,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: 0,
        pop: 0,
        uvi: 3,
      },
    ],
  });
}
