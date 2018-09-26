const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/index.jsx'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|gif|png|eot|svg|ttf|woff2?)$/,
        use: 'file-loader',
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin()],
    splitChunks: { chunks: 'all' },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, '../src/index.ejs'),
      favicon: path.resolve(__dirname, '../static/favicon.ico'),
    }),
    new MiniCssExtractPlugin(),
  ],
};
