// export function fetchLocation(location) {
//   return Promise.resolve({
//     lon: -122.08,
//     lat: 37.39,
//   });
// }

export const locationServiceMock = {
  fetchLocation: async (location) => {
    return Promise.resolve({
      lon: -122.08,
      lat: 37.39,
    });
  },
};
