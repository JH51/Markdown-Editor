const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  devServer: {
    // proxy: {
    //   "/": "http://localhost:3000",
    // },
    static: {
      directory: path.resolve(__dirname, "./build"),
    },
    port: 8080,
    open: true,
  },
  entry: path.resolve(__dirname, "./client/main.js"),
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
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
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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
