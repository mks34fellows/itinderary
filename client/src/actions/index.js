import axios from 'axios';
export const INPUT_SUBMITTED = 'INPUT_SUBMITTED';

export function submitInput(feeling, location) {

  const request = axios.post('/yelp', {
    feeling: feeling,
    latitude: location.coords.latitude,
    longitude: location.coords.longitude
  });

  return {
    type: INPUT_SUBMITTED,
    payload: request
  }
};
