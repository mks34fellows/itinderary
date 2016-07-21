const path = require('path');
const yelpSearch = require('./api/yelp');
const reverseLoc = require('./api/google');

module.exports = function (app) {
  // Handles post request from action
  app.post('/yelp', (req, res) => {
    const term = req.body.searchTerm;

    // Converts Lat/Long to string version of city
    reverseLoc(req.body.latitude, req.body.longitude).then((data) => {
      const location = data.data.results[0].formatted_address;

      // Sends yelpSearch results to client
      yelpSearch(location, term).then((data) => {
        res.send(data);
      })
    });
  });
 
};
