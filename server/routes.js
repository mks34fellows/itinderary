const path = require('path');
const yelpSearch = require('./api/yelp');

module.exports = function (app) {
  var term
  app.post('/yelp', (req, res) => {
    console.log('this is the req.body', req.body);
    if(req.body.hungry === true && req.body.timeOfDay === 'Morning'){
      term = 'brunch';
    }
    yelpSearch(req.body.location, 'bourgie').then((data) => {
      console.log('this is my search term',term);
      res.send(data);
    })
  });

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
  });
};
