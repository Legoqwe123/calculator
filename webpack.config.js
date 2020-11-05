const HtmlWebpackPlugin = require("html-webpack-plugin") // Require  html-webpack-plugin plugin
const WebpackBar = require("webpackbar")
const ESLintPlugin = require("eslint-webpack-plugin")

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: __dirname + "/src/main.ts", // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + "/dist", // Folder to store generated bundle
    filename: "bundle.js", // Name of generated bundle after build
    publicPath: "/", // public URL of the output directory when referenced in a browser
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  plugins: [
    // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html",
      inject: "body",
    }),
    new WebpackBar(),
    new ESLintPlugin({
      context: './src',
      extensions: ['ts']
    }),
  ],
}
