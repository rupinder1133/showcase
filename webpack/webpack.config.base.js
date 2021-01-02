const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(path.join(__dirname, '../src/index.html'))
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(path.join(__dirname, '../.nojekyll')),
          to: path.join(__dirname, '../docs')
        }, {
          from: path.resolve(path.join(__dirname, '../src/assets/favicon.ico')),
          to: path.join(__dirname, '../docs')
        },
      ],
    }),
  ],
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[chunkhash].bundle.js',
    path: path.resolve(path.join(__dirname, '../docs')),
    assetModuleFilename: 'assets/[hash][ext][query]'
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
        test: /\.css$/i,
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
