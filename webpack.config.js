const path = require('path');
const merge = require('./src/core/webpack/merge');
const vue = require('./src/core/webpack/webpack.vue');
const url = require('./src/core/webpack/webpack.url');
const es6 = require('./src/core/webpack/webpack.es6');

const base = {
  mode: 'none',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
};

const config = merge(base, [vue, url, es6]);
module.exports = config;
