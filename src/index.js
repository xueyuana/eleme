
import Vue from 'vue'
//引入css文件，文件转成style标签添加到head中
import './base.css'
import {cube} from './print.js'
import another from './another.js'

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  template: '<div class="font" @click="btn">333</div>',
  methods: {
    btn: () => {
      cube()
      another()
    }
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