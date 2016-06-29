const Yelp = require('yelp');
const CONSUMER_KEY = 'OlRlVfzdc4AAaWp_Cw0DRA';
const CONSUMER_SECRET = 'Bl52VvEr8-aFZnp0WN--qbFL1es';
const TOKEN = '8apJ5uO3bsCwY94fxo-I1NRVp2sUAq4Z';
const TOKEN_SECRET = '5zOdoxH_PLBJJ-9lPN-VQsVGnVE';

const yelp = new Yelp({
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECRET,
  token: TOKEN,
  token_secret: TOKEN_SECRET
});

module.exports = function (location, term) {
  return yelp.search({
    location,
    term
  }).then((data) => {
    return data;
  }).catch((err) => {
    console.error(err);
  })  
};
