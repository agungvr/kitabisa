const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const srcPath = path.resolve(__dirname, '../src')
const outputPath = path.resolve(__dirname, '../dist')

module.exports = {
  entry: ['./src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(bmp|gif|jpe?g|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/image/[ext]/[name].[ext]',
          esModule: false,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
          esModule: false,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: [srcPath, 'node_modules'],
    alias: {
      '@kitabisa': srcPath,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Kitabisa',
      template: './public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV !== 'production',
    }),
  ],
  output: {
    path: outputPath,
    publicPath: '/',
    filename: 'js/app.js',
    chunkFilename: 'js/[name]-[contenthash].js',
  },
}
