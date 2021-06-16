const path = require('path');

const webpackBaseConfig = require('./webpack.base.config');

const packageInfo = require('../package.json');

module.exports = Object.assign({}, webpackBaseConfig, {
  mode: 'production',

  entry: {
    [packageInfo.name]: './src/index',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs2',
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    'detect-browser': 'detect-browser',
    raf: 'raf',
  },
});
