const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
const port = process.env.PORT || 8000;

require('./config/middleware')(app, express);
require('./routes')(app);

app.listen(port, function() {
  console.log('Listening on 8000...')
});
