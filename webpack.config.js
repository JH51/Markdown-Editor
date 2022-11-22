const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./client/main.js"),
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    // ?  '.' or '/build'
    publicPath: "/build",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/env", "@babel/preset-react"] },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "bundle.html",
      template: path.join(__dirname, "./template.html"),
    }),
  ],
};
