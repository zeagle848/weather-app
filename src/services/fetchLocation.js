export const locationService = {
  fetchLocation: async (location) => {
    const baseURL = 'http://api.openweathermap.org';
    const apiKey = 'a85f685e3bf5af827565536f35c9fc33';

    const locationURL = `${baseURL}/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`;

    const locReq = new Request(locationURL);

    return fetch(locReq)
      .then((response) => response.json())
      .then((responseBody) => {
        const { lat } = responseBody[0];
        const { lon } = responseBody[0];
        return { lat, lon };
      });
  },
};
