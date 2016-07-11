const Yelp = require('yelp');

const yelp = new Yelp({
  consumer_key: process.env.YELP_CONSUMER_KEY,
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET
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