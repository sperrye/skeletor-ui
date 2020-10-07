const path = require('path');

module.exports = {
  mode: 'production',
  devtool: false,
  stats: 'errors-only',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },

  externals: ['react', 'styled-components'],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          rootMode: 'upward',
        },
      },
      {
        test: /\.sass$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(jpg)$/,
        loader: 'file-loader',
      },
    ],
  },
};
