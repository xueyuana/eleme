
import Vue from 'vue'
//引入css文件，文件转成style标签添加到head中
import './base.css'

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  template: '<div class="font">111</div>'
})
