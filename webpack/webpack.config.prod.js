const baseConfig = require('./webpack.config.base')
const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin()
  ]
});
