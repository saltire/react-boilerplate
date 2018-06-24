const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new OptimizeCssAssetsPlugin(),
    new UglifyJSPlugin(),
  ],
});
