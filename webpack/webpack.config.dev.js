const baseConfig = require('./webpack.config.base')
const { merge } = require('webpack-merge');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true,
    useLocalIp: true,
    contentBase: './docs',
    historyApiFallback: true,
  },
});
