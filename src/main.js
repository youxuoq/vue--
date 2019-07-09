//程序的入口文件

//导入模块( es6语法  import 浏览器提供的语法) 类似 const Vue = require()
import Vue from 'vue'
import App from './App.vue'

//不提示开发环境
Vue.config.productionTip = false

//引入样式
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

//导入英雄列表的组件
import HeroList  from './views/heroes/HeroList.vue'

//导入 vue-router
import VueRouter from 'vue-router'
//如果在一个模块化工程中使用它, 必须要通过 Vue.use() ,明确地安装路由插件
Vue.use(VueRouter)

//创建路由对象
const router = new  VueRouter({
  //配置路由规则
  routes: [
    {name: 'home', path: '/', redirect: '/heroes' },
    {name: 'heroes', path: '/heroes', component: HeroList}
  ]
})

new Vue({
  //渲染 导入的app模块
  render: h => h(App),
  //配置路由对象
  router
}).$mount('#app')
// 挂载到 #app 这个容器中
