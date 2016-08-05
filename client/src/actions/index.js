import axios from 'axios';
export const INPUT_SUBMITTED = 'INPUT_SUBMITTED';
export const BACK_CLICKED = 'BACK_CLICKED';

const searchTerms = {
  adventurous: ['hiking', 'beach', 'playground', 'amusement park'],
  classy: ['wine bar', 'museum', 'horse back riding', 'opera', 'ballet'],
  competitive: ['bowling', 'billiards', 'darts', 'arcade'],
  creative: ['pottery class', 'art class', 'cooking class', 'build-a-bear', 'thrift store'],
  frugal: ['free'],
  lazy: ['movie', 'bookstore', 'cafe', 'hookah bar', 'library'],
  playful: ['arcade', 'trampoline park', 'playground'],
  ratchet: ['bar', 'clubs', 'hookah bar']
}

export function submitInput(feeling, location) {
  // Grabs a random searchTerm from searchTerms based on feeling parameter
  function getTerm(feeling){
    let maxIndex = searchTerms[feeling].length;
    let randIndex = Math.floor(Math.random() * maxIndex);

    return searchTerms[feeling][randIndex];
  }

  // Grabs a random feeling from searchTerms if feeling === 'spontaneous'
  function forSpontaneous() {
    let maxIndex = Object.keys(searchTerms).length;
    let randIndex = Math.floor(Math.random() * maxIndex);

    return Object.keys(searchTerms)[randIndex];
  }

  // Sets feeling to random feeling if feeling === 'spontaneous'
  if(feeling === 'spontaneous'){
    feeling = forSpontaneous();
  }

  // Invoke getTerm to get a random activity
  var searchTerm = getTerm(feeling);

  // Makes request to express server with appropriate search term and geolocation
  const request = axios.post('/yelp', {
    searchTerm: searchTerm,
    latitude: location.coords.latitude,
    longitude: location.coords.longitude
  });

  return {
    type: INPUT_SUBMITTED,
    payload: request
  }
};

export function backClicked() {
  return {
    type: BACK_CLICKED,
    payload: {}
  }
}
