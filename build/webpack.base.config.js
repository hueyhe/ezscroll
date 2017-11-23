const path = require('path');
const webpack = require('webpack');

const resolve = path.resolve;

module.exports = {
  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [resolve('src')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
          },
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
    ],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
      },
      sourceMap: true,
    }),
  ],
};
