const path = require('path');
const yelpSearch = require('./api/yelp');
const reverseLoc = require('./api/google');

module.exports = function (app) {
  app.post('/yelp', (req, res) => {
    // console.log('this is the req.body', req.body);

    const term = req.body.searchTerm;
    var location

    reverseLoc(req.body.latitude, req.body.longitude).then((data) => {
      location = data.data.results[1];
      console.log('THIS SHOULD BE SAN FRANCISCO', location)
      
    });


    yelpSearch('San Francisco', term).then((data) => {
      res.send(data);
    })
  });

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
  });
};
