const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const OUTPUT_DIR = path.join(__dirname, '../dist');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(path.join(__dirname, '../src/index.html'))
    }),
    new CopyPlugin({
      patterns: [
       {
          from: path.resolve(path.join(__dirname, '../src/assets/favicon.ico')),
          to: OUTPUT_DIR
        },
      ],
    }),
  ],
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[chunkhash].bundle.js',
    path: path.resolve(OUTPUT_DIR),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset'
      },
      {
        test: /^((?!\.module).)*css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.module.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader', options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          }],
      },
    ]
  }
};
