const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[hash:base64:8]'
              }
            }
          },
          'less-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 8080,
    open: true
  }
})
