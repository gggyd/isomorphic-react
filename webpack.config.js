
module.exports = {
  entry: [
    './browser.js'
  ],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: [
          './node_modules'
        ]
      }
    ]
  },
  devtool: 'eval-source-map'
};