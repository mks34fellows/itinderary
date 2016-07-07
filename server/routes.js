const path = require('path');
const yelpSearch = require('./api/yelp');
const reverseLoc = require('./api/google');

module.exports = function (app) {
  app.post('/yelp', (req, res) => {
    const term = req.body.searchTerm;

    reverseLoc(req.body.latitude, req.body.longitude).then((data) => {
      const location = data.data.results[0].formatted_address;

      yelpSearch(location, term).then((data) => {
        res.send(data);
      })
      
    });
  });

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
  });
};
