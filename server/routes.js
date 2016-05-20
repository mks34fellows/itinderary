const path = require('path');

module.exports = function (app) {

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
  });

};
