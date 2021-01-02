const baseConfig = require('./webpack.config.base')
const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'inline-source-map',
  plugins: [
    // new BundleAnalyzerPlugin()
  ]
});
