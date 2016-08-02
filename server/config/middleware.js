const bodyParser = require('body-parser');
const path = require('path');
const sslRedirect = require('heroku-ssl-redirect');

module.exports = function (app, express) {

  if(process.env.NODE_ENV !== 'production'){  
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('../../webpack.config');
    const compiler = webpack(webpackConfig);
    
    // Middleware for webpackDevServer
    app.use(webpackDevMiddleware(compiler, {
      quiet: true,
      noInfo: true,
      stats: {
        colors: true,
        reasons: true
      }
    }));

    // Middleware for HMR
    app.use(webpackHotMiddleware(compiler));    
  }

  app.use(bodyParser.json());
  
  if(process.env.NODE_ENV === 'production'){
    app.use(sslRedirect());
  };

  app.use(express.static(path.join(__dirname, '../../client/dist')));

};
