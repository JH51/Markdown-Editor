const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./client/main.js"),
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    // publicPath: path.resolve(__dirname, "./build")
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
};
