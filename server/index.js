const express = require('express');
const bodyParser = require ('body-parser');
const port = process.env.PORT || 8000;
const app = express();

require('./config/middleware')(app, express);
require('./routes')(app);

app.listen(port, function() {
  console.log('Listening on 8000...')
});

app.post('/yelp', (req, res) => {

  res.send('this is a test');
})
