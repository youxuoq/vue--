//程序的入口文件

//导入模块( es6语法  import 浏览器提供的语法) 类似 const Vue = require()
import Vue from 'vue'
import App from './App.vue'

//引入样式

//不提示开发环境
Vue.config.productionTip = false


new Vue({
  //渲染 导入的app模块
  render: h => h(App),
}).$mount('#app')
// 挂载到 #app 这个容器中
