<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄管理</h2>
    <!-- <a  href="add.html">Add</a> -->

    <router-link to="/heroes/add" class="btn btn-success">添加</router-link>

    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="item.id">
            <td>{{index + 1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <router-link :to="{name: 'heroesedit', params: {id: item.id}}">编辑</router-link>
              &nbsp;&nbsp;
              <a href="javascript:" @click="del(item.id)" >删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      //存储英雄列表数据
      list: []
    }
  },
  //组件加载完毕后执行
  mounted() {
    //发送请求, 获取数据 调用
    this.loadData()
  },
  methods: {
    //发送请求 获取数据
    loadData() {
      this.axios
        .get('http://localhost:3000/heroes')
        .then( (response) => {
          const {data, status} = response
          if (status === 200) {
            //把数据存储到data中
            this.list = data
          } else {
            alert('获取数据失败')
          }
        })
        .catch( (err)=> {
          alert('服务器异常' + err)
        })
    },
    // 添加删除功能
    del(id) {
      //提示删除
      if ( !confirm('确定删除')) {
        return false
      }
      //删除
      this.axios
        .delete(`http://localhost:3000/heroes/${id}`)
        .then( (response) => {
            const {status} = response
            if (status === 200) {
              //删除成功
              //重新加载数据
              this.loadData()
            } else {
              alert("删除失败")
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
