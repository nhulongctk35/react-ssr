const path = require('path');

module.exports = {
  mode: 'production',
  resolve: {
    modules: [
      path.resolve('./components'),
      path.resolve('./services'),
      path.resolve('node_modules'),
    ],
  },
  entry: {
    vendor: ['react', 'react-dom', 'axios'],
    app: './components/app.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/public',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
