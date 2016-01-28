require('es6-promise').polyfill()

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "output.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};
