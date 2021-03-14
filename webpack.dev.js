/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();

const { merge } = require("webpack-merge");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const common = require("./webpack.common.js")();

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    publicPath: "/",
    host: process.env.LOCAL_FRONTEND_HOST_NAME || "localhost",
    port: process.env.LOCAL_FRONTEND_PORT || "8181",
    watchOptions: {
      ignored: /node_modules/,
      poll: 800,
    },
  },
  plugins: [new Dotenv({ systemvars: true })],
});
