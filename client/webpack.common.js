const path = require('path')

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/js/app.jsx'),
    path.resolve(__dirname, 'src/css/app.scss')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    host: '0.0.0.0',
    port: 7324,
    compress: true,
    stats: 'errors-only',
    historyApiFallback: { index: 'index.html' }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/js/components')
    }
  }
}