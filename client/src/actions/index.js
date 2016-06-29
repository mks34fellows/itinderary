import axios from 'axios';

export const INPUT_SUBMITTED = 'INPUT_SUBMITTED';

export function submitInput(input) {
  console.log('HERE IS THE INPUT', input)

  const request = axios.post('/yelp', input);

  return {
    type: INPUT_SUBMITTED,
    payload: request
  }
};
