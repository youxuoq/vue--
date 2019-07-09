<template>
  <div id="app">
    <!-- 头部 组件 -->
    <app-header></app-header>

    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏 组件 -->
        <app-sidebar></app-sidebar>

        <!-- 路由组件对应的位置 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 导入组件
// 导入 AppHeader.vue (头部)
import AppHeader from "./components/AppHeader.vue"

// 导入 AppSidebar.vue (侧边栏)
import AppSidebar from './components/AppSidebar.vue'

export default {
  name: "app",
  //注册组件
  components: {
    AppHeader, //头部
    AppSidebar //侧边栏
  }
};
</script>

<style>
</style>
