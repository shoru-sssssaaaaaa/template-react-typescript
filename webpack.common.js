/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require("webpack");
const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const { loadableTransformer } = require("loadable-ts-transformer");

module.exports = () => {
  return {
    entry: {
      index: "./src/index.tsx",
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "awesome-typescript-loader",
              options: {
                getCustomTransformers: () => ({
                  before: [loadableTransformer],
                }),
                silent: true,
              },
            },
          ],
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|gif|ico|svg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "img/",
              },
            },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/",
              },
            },
          ],
        },
      ],
    },

    resolve: {
      alias: {
        src: path.resolve(__dirname, "src"),
      },
      extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    },

    output: {
      chunkFilename: "[name].bundle.js",
      filename: "[name].bundle.js",
      path: path.join(__dirname, "dist"),
      publicPath: "/",
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebPackPlugin({
        template: path.join(__dirname, "src", "index.html"),
        filename: "./index.html",
      }),
    ],
  };
};
