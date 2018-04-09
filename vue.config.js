const path = require('path');

module.exports = {
  configureWebpack: {
    entry: {
      app: './src/demo.js',
      plugin: './src/plugin.js'
    },
    output: {
      path: path.resolve(__dirname, './docs'),
      filename: '[name].js'
    }
  }
}