const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  entry: {
    js: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [
        /node_modules/,
      ],
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
      },
    }, {
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /flow-typed/,
        /coverage/,
      ],
      loader: 'eslint-loader',
      enforce: 'pre',
    }, {
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    }],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
  ],
}

module.exports = config
