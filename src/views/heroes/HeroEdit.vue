<template>
  <div
    calss="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"
    style="margin-left: 300px; margin-right: 40px;"
  >
    <h2 class="sub-header">修改英雄</h2>

    <form>
      <div class="form-group">
        <label for="txtName">姓名</label>
        <input type="text" class="form-control" id="txtName" placeholder="姓名" v-model="formData.name">
      </div>

      <div class="form-group">
        <label for="sex">性别</label>
        <select class="form-control" v-model="formData.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>

      <button class="btn btn-success" @click.prevent="update">提交</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    //接收外部传递的参数
  props: ['id'],
  data() {
    return {
      //绑定文本框
      formData: {
        name: "",
        gender: "男"
      }
    };
  },

  //组件加载完毕
  mounted() {
      this.loadDataById()
  },

  methods: {
      //根据id加载英雄数据
      loadDataById(id) {
          //发送请求
          axios
            .get(`http://localhost:3000/heroes/${this.id}`)
            .then( (resopns) => {
                const {data, status} = resopns
                if (status === 200) {
                    //存储数据 {name: '', gender: '', id: ''}
                    this.formData = data
                } else {
                    alert('获取数据失败')
                }
            })
            .catch( (err) =>{
                alert('服务器异常' + err)
            })
      },
      //修改数据的方法
      update() {
          //发送请求
          axios
            .put(`http://localhost:3000/heroes/${this.id}`, this.formData)
            .then( (response) => {
                const status = response.status
                if (status === 200) {
                    //修改成功 跳转回列表组件
                    this.$router.push({name: "heroes"})
                } else {
                    alert('修改失败')
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
