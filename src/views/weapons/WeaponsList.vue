<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">武器管理</h2>
    <!-- <a class="btn btn-success" href="add.html">Add</a> -->

    <router-link to="/weapons/add" class="btn btn-success">添加</router-link>
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
              <router-link :to="{name: 'weaponsedit', params: {id: item.id}}">编辑</router-link>
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
    //发送请求获取数据
    loadData(){
      //发送this.axios请求
      this.axios
        .get('weapons')
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
    },

    //发送请求删除指定数据
    del(id) {
      //提示信息
      if ( !confirm('确定要删除吗')) {
        return false
      }
      //发送请求
      this.axios
        .delete(`weapons/${id}`)
        .then( (response)=> {
          const { status} = response
          if (status === 200) {
            //删除成功 重新加载页面
            this.loadData();
          }
          else {
            alert('删除失败')
          }
        })
        .catch( (err) => {
          alert('服务器发生错误' + err)
        })
    }
  }
};

</script>

<style>
</style>
