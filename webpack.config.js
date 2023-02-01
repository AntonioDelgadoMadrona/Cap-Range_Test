const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.tsx"),
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    hot: true,
    historyApiFallback: true,
  },
};
