
import Vue from 'vue'
//引入css文件，文件转成style标签添加到head中
import './base.css'
import {cube} from './print.js'
import another from './another.js'
import App from './app.vue'

var app = new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})

console.log('process.env.NODE_ENV(app.js)',process.env.NODE_ENV)

class point {
  constructor() {

  }
  toString() {

  }
}
console.log(Object.getOwnPropertyNames(point.prototype))
console.log(Object.keys(point.prototype))