const axios = require('axios');

module.exports = function(lat, long) {
  return axios.get(`${process.env.GOOGLE_BASE_URL}${lat},${long}&key=${process.env.GOOGLE_API_KEY}`)
  .then((data) => {
    return data;
  }).catch((err) => {
    console.error(err);
  })
};