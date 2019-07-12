//程序的入口文件

//导入模块( es6语法  import 浏览器提供的语法) 类似 const Vue = require()
import Vue from 'vue'
import App from './App.vue'
import router from './router'

//不提示开发环境
Vue.config.productionTip = false

//引入样式
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

//引入axios
import axios from 'axios'
//给Vue的原型增加axios成员， 将axios设置为的axios
Vue.prototype.axios = axios

new Vue({
  //渲染 导入的app模块
  render: h => h(App),
  //配置路由对象
  router
}).$mount('#app')
// 挂载到 #app 这个容器中
