import axios from 'axios';
export const INPUT_SUBMITTED = 'INPUT_SUBMITTED';

export function submitInput(feeling, location) {
  console.log('HERE IS THE INPUT', location)
  const test = location.coords.latitude

  const request = axios.post('/yelp', {
    feeling,
    location: test
  });

  return {
    type: INPUT_SUBMITTED,
    payload: request
  }
};

