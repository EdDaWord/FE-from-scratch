const path = require('path');

module.exports = {
  entry: './src/index.js',
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
