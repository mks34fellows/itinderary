const webpack = require('webpack'); 

module.exports = {
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:8000/__webpack_hmr',
    'react-hot-loader/patch',
    './client/src/index.js'
  ],
  output: {
    path: __dirname + '/client/dist',
    filename: 'bundle.js'
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  reload: true,
  devServer: {
    historyApiFallback: true,
    inline: true,
    hot: true,
    progress: true,
    contentBase: './'
  }
};
