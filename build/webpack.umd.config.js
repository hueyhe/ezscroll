const path = require('path');

const webpackBaseConfig = require('./webpack.base.config');

const packageInfo = require('../package.json');

module.exports = Object.assign({}, webpackBaseConfig, {
  entry: {
    [packageInfo.name]: './src/index',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/umd'),
    library: packageInfo.name,
    libraryTarget: 'umd',
  },
});
