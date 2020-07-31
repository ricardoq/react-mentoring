const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build"),
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: require.resolve('lodash'),
        loader: 'expose-loader?lodash'
      },
      {
        test: /\.(ttf|eot|svg|woff|png)$/,
        loader: "file-loader",
        options: {
          name: '[path][name].[ext]?[hash]'
        }
      }
    ],
  },
  watch: false,
};
