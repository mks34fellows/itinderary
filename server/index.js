const express = require('express');
const bodyParser = require ('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function() {
  console.log('Listening on 8000...')
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../index.html'));
});
