const path = require('path');

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'resources', 'assets', 'js', 'app', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'public', 'bundles'),
    publicPath: 'bundles',
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
      {
        test: /\.jsx$|\.js$/,
        exclude: /node_modules\/(?!(react-particles)\/).*/,
        loaders: 'babel'
      }
    ],
  },
  devServer: {
    inline: true
  }
};
