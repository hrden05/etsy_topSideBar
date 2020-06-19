webpack.config.js
const path = require('path');

const SRC_DIR = path.join(__dirname, 'client/src');
const DIST_DIR = path.join(__dirname, 'client/dist');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [SRC_DIR],
        use: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        }
      },
    ],
  },
};
