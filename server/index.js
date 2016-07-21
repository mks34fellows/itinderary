const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

require('dotenv').config({silent: true});

require('./config/middleware')(app, express);
require('./routes')(app);

app.listen(port, function() {
  console.log('Listening on 8000...')
});
