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
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
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
    hot: true,
    historyApiFallback: true,
    contentBase: './'
  }
};
