const bodyParser = require('body-parser');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const compiler = webpack(webpackConfig);

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// require('dotenv').config({silent: true});

module.exports = function (app, express) {
  app.use(webpackDevMiddleware(compiler, {
    quiet: true,
    noInfo: true,
    stats: {
      colors: true,
      reasons: true
    }
  }));

  app.use(webpackHotMiddleware(compiler));

  app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname, '../../client/dist')));
};
