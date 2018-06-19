//使用webpack-dev-middle，他可以将webpack处理后的文件传递给一个服务器
//下一步自定义express服务
const webpack = require('webpack')
const config = require('./webpack.config.js')
const webapckDevMiddleware = require('webpack-dev-middleware')
const express = require('express')

const app = express()
const compiler = webpack(config)


app.use(webapckDevMiddleware(compiler))

app.listen(8082,function() {
  console.log('example app listening on port 8082')
})