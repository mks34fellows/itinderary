const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;
var __dirname = '/Users/Liminator/Desktop/itinderary';

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function() {
  console.log('Listening on 8000...')
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});
