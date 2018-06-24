const CleanPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = {
  entry: {
    index: './src/index.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env'],
          },
        }],
      },
      {
        test: /\.s?css$/,
        use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|gif|png|eot|svg|ttf|woff2?)$/,
        use: ['file-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanPlugin(['dist']),
    new HtmlPlugin({
      template: './src/index.ejs',
      favicon: './static/favicon.ico',
    }),
    new MiniCssExtractPlugin(),
  ],
};
