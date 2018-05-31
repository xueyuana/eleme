const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  //单个入口文件
  entry: './src/index.js',
  //多个入口文件
  // entry: {
  //   index: './src/index.js',
  //   print: './src/print.js'
  // },

  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname,'../dist')
  // },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'../dist')
  },

  mode: 'none',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../dist'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    //自动生成HTML文件
    new HtmlWebpackPlugin({
      title: 'output html',
      template: './index.html',
      inject: 'true'
    }),
    new CleanWebpackPlugin(['dist'],{
    root: path.resolve(__dirname,'../')
    })
  ]
}