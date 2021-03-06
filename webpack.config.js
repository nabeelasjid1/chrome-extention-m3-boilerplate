const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const dotenv = require("dotenv").config({ path: __dirname + "/.env" });
const { manifestTransform } = require("./scripts/transform");

module.exports = (env, options) => {
  return {
    devtool: 'source-map',
    entry: {
      content_script: "./src/content-scripts/index.js",
      background: "./src/background.js",
      popup: "./src/pages/popup/index.js",
      option: "./src/pages/options/index.js",
      devtool: "./src/pages/devtools/index.js",
      panel: "./src/pages/panel/index.js"
    },
    module: {
      rules: [
        {
          test: /\.worker\.js$/,
          use: { loader: "worker-loader" }
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader'
          ]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            "file-loader",
            {
              loader: "image-webpack-loader",
              options: {
                bypassOnDebug: true, // webpack@1.x
                disable: true // webpack@2.x and newer
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.mjs', '*', '.js', '.jsx', '.css', '.json'],
    },
    output: {
      path: __dirname + "/dist",
      publicPath: "/",
      filename: "[name].bundle.js"
    },
    optimization: {
      minimize: options.mode === "production",
    },
    plugins: [
      new CopyWebpackPlugin(
        [
          { from: "./src/pages/popup/popup.html", force: true },
          { from: "./src/pages/options/option.html", force: true },
          { from: "./src/pages/devtools/devtool.html", force: true },
          { from: "./src/pages/panel/panel.html", force: true },
          { from: "./src/app/", force: true }
        ],
        {}
      ),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify({ ...options, ...dotenv.parsed })
      }),
      new CopyWebpackPlugin([
        {
          from: "./src/app/manifest.json",
          force: true,
          transform(content, path) {
            return manifestTransform(content, path, options);
          }
        }
      ])
    ],
    devServer: {
      contentBase: "./dist",
      hot: true
    },
  };
};
