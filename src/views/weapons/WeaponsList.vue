<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">武器管理</h2>
    <a class="btn btn-success" href="add.html">Add</a>
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
              <a href="edit.html">edit</a>
              &nbsp;&nbsp;
              <a href="javascript:window.confirm('Are you sure?')">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
//导入axios
import axios from 'axios'

export default {
  data(){
    return {
      //存储接收到的数据
      list: []
    }
  },
  mounted() {
    //调用
    this.loadData()
  },
  methods: {
    loadData(){
      //发送axios请求
      axios
        .get('http://localhost:3000/weapons')
        .then( (response) => { //获取数据
          const {data, status} = response // 对数据进行处理
          if (status === 200) {
            //把数据存储到data中
            this.list = data
          } else {
            alert('获取数据失败')
          }
        })
        .catch( (err) => {
          alert('服务器异常' + err)
        })
    }
  }
};

</script>

<style>
</style>
