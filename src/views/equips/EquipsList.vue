<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">装备管理</h2>
    <!-- <a class="btn btn-success" href="add.html">Add</a> -->
    <router-link to="/equips/add" class="btn btn-success">添加</router-link>

    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>名称</th>
            <th>类型</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="item.id">
            <td>{{index + 1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.type}}</td>
            <td>
              <a href="edit.html">编辑</a>
              &nbsp;&nbsp;
              <a href="javascript:" @click="del(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
//引入axios
import axios from "axios"

export default {
  //保存接收的数据
  data () {
    return {
      list: []
    }
  },

//mounted会在组件加载完后自动触发
  mounted () {
    // 调用loadData方法
    this.loadData()
  },

  methods: {
    //定义一个发送请求的方法
    loadData() {
      //发送请求
      axios
        .get('http://localhost:3000/equips')
        //接收数据
        .then( (response)=> {
          //使用结构解析 处理数据
          const {data, status} = response
          //判断状态码, 根据状态码进行提示
          if (status === 200) {
            //将数据保存到data中
            this.list = data
          } else {
            alert('获取数据失败')
          }
        })
        .catch( (err) => {
          alert('服务器异常' + err)
        })
    },

    del (id) {
      //提示是否删除
      if (!confirm('确定删除吗')) {
        return false
      }
      axios
        .delete(`http://localhost:3000/equips/${id}`)
        .then( (response) => {
          const {status} = response
          if (status === 200) {
            //删除成功 调用loadData方法重新加载数据
            this.loadData()
          }
          else {
            // 删除失败
            alert('删除失败')
          }
        })
        .catch( (err) => {
          alert('服务器发生错误' + err)
        })
    }
  }
}
</script>

<style>
</style>
