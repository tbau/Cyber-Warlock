const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  entry: "./components/index.js",
  output: {
    filename: "index.js",
    path: path.resolve("dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      /*Choose only one of the following two: if you're using 
      plain CSS, use the first one, and if you're using a
      preprocessor, in this case SASS, use the second one*/
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        type: 'asset/resource'
      },
    //   {
    //     test:/\.(svg|jpg|png|gif)$/,
    //     use: [{
    //         loader:'file-loader',
    //         options: {
    //             publicPath: path.resolve(__dirname, '/assets/img'),
    //             outputPath: 'assets/img',
    //             name: '[name].[ext]',
    //             esModule: false
    //         }
    //     }],
    // },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "index.html"
    }),
    new NodemonPlugin({
      script: './server/app.js',
      // What to watch.
      watch: './dist',
      // Extensions to watch.
      ext: 'js,json,html,css',
      // Unlike the cli option, delay here is in milliseconds (also note that it's a string).
      // Here's 1 second delay:
      delay: '1000',
      // Detailed log.
      verbose: true,
      // Environment variables to pass to the script to be restarted
      env: {
        NODE_ENV: 'development',
      },
    })
  ]
}   