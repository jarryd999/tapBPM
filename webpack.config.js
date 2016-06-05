var path = require('path');
var webpack = require('webpack');
 
var PROD = (process.env.NODE_ENV === 'production')

module.exports = {
  entry: './src/tapBPM.jsx',
  output: { 
    path: path.join(__dirname, 'dist'), 
    filename: PROD ? 'tapBPM.min.js' : 'tapBPM.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true
      },
      comments: false,
      sourceMap: false
    }),
  ] : []
};