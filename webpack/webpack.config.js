const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin") // Require  html-webpack-plugin plugin
const WebpackBar = require("webpackbar")
const ESLintPlugin = require("eslint-webpack-plugin")
const FriendlyErrorsWebpackPlugin =  require('friendly-errors-webpack-plugin') 
const { path: ROOT_PATH } = require("app-root-path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MODE = process.env.mode

module.exports = {
  mode: MODE,
  devtool: MODE === 'development' ? "eval-cheap-source-map" : false ,
  entry: [path.join(ROOT_PATH, "/src/main.ts"), path.join(ROOT_PATH, "style.css")], // webpack entry point. Module to start building dependency graph
  output: {
    path: path.join(ROOT_PATH, '/dist'), // Folder to store generated bundle
    filename: "bundle.js", // Name of generated bundle after build
    publicPath: "./", // public URL of the output directory when referenced in a browser
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
        use: [MiniCssExtractPlugin.loader, 'css-loader',],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  plugins: [
    // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      template: path.join(ROOT_PATH, "/index.html"),
      inject: "body",
    }),
    new WebpackBar(),
    new FriendlyErrorsWebpackPlugin(),
    new ESLintPlugin({
      context: './src',
      extensions: ['ts']
    }),
    new MiniCssExtractPlugin(
      {
        filename: "css/[contenthash:5].[id].css",
        chunkFilename: "css/[contenthash:5].[id].css",
      }
    )
  ],
}
