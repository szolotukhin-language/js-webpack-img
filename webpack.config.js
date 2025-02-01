const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
        generator: {
          filename: './img/[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
