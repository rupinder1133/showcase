const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(path.join(__dirname, '../src/index.html'))
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(path.join(__dirname, '../.nojekyll')), to: path.join(__dirname, '../docs') },
      ],
    }),
  ],
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(path.join(__dirname, '../docs')),
  },
};
