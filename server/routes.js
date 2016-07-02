const path = require('path');
const yelpSearch = require('./api/yelp');

module.exports = function (app) {
  app.post('/yelp', (req, res) => {
    console.log('this is the req.body', req.body);
    
    const term = req.body.feeling;
    
    yelpSearch('San Francisco', term).then((data) => {
      res.send(data);
    })
  });

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
  });
};
