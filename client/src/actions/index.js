import axios from 'axios';
export const INPUT_SUBMITTED = 'INPUT_SUBMITTED';

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
  function getTerm(feeling){
    let maxIndex = searchTerms[feeling].length;
    let randIndex = Math.floor(Math.random() * maxIndex);

    return searchTerms[feeling][randIndex];
  }

  function forSpontaneous() {
    let maxIndex = Object.keys(searchTerms).length;
    let randIndex = Math.floor(Math.random() * maxIndex);

    return Object.keys(searchTerms)[randIndex];
  }

  if(feeling === 'spontaneous'){
    feeling = forSpontaneous();
  }

  var searchTerm = getTerm(feeling);

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
