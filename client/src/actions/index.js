import axios from 'axios';

export const INPUT_SUBMITTED = 'INPUT_SUBMITTED';

export function submitInput(feeling, location) {
  console.log('HERE IS THE INPUT', feeling, location)

  const request = axios.post('/yelp', {
    feeling,
    location
  });

  return {
    type: INPUT_SUBMITTED,
    payload: request
  }
};

