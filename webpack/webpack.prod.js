const CleanPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanPlugin(['dist'], { root: path.resolve(__dirname, '..') }),
    new OptimizeCssAssetsPlugin(),
  ],
});
