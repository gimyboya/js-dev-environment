module.exports = {
  entry: './app.js',
  output: {
    filename: './public/js/bundle.js'
  },

  module: {

    loaders: [
      {
        test: /\.(es6|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },

  resolve: {
    extentions: ['', '.js', '.es6']
  }
}
