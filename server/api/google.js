const axios = require('axios');
const API_KEY = 'AIzaSyB2HN_YkAef4fr4siw57pultQDWkATI2L0';
const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';

module.exports = function(lat, long) {
  return axios.get(`${BASE_URL}${lat},${long}&key=${API_KEY}`)
  .then((data) => {
    return data;
  }).catch((err) => {
    console.error(err);
  })
};