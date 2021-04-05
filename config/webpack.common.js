const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')

module.exports = {
  entry: paths.src + '/index.tsx',

  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx', '.md', ".css", ".scss"],
    alias: {
      src: paths.src,
    },
  },

  plugins: [
    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: paths.src + '/index.html', // template file
      filename: 'index.html', // output file
    }),

  ],

  module: {
    rules: [
      { test: /\.ts|tsx$/, use: ['ts-loader'] },
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
}
