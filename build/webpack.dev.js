const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const Webpack = require('webpack')

module.exports = env => {
  console.log('env.development',env.development)
  console.log('env.NODE_ENV',env.NODE_ENV)
  return  merge(common,{
      devtool: 'inline-source-map',
      mode: 'none',
      devServer: {
        contentBase: '../dist'
      },
      plugins: [
        new Webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('devlopment')
        })
        // new Webpack.optimize.SplitChunksPlugin()
      ],
      optimization: {
        splitChunks: {
          chunks: 'all'
          // cacheGroups: {
          //   commons: {
          //     name: 'commons',
          //     chunks: 'initial',
          //     minChunks: 2
          //   },
          //   vendor: {
          //     test: /node_modules\//,
          //     name: 'vendor',
          //     priority: 10,
          //     enforce: true
          //   }
          // }
        },
        runtimeChunk: true
      }
    }
  )
}
console.log('process.env.NODE_ENV(webpack.dev.js)',process.env.NODE_ENV)