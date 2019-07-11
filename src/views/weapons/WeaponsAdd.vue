<template>
  <div
    calss="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"
    style="margin-left: 250px; margin-right: 40px;"
  >
    <h2 class="sub-header">添加武器</h2>

    <form>
      <div class="form-group">
        <label for="txtName">名称</label>
        <input type="text" class="form-control" id="txtName" placeholder="武器名称" v-model="formData.name">
      </div>

      <div class="form-group">
        <label for="zbtype">类型</label>
        <input class="form-control" id="zbtype" placeholder="武器类型" v-model="formData.type">
      </div>

      <button type="submit" class="btn btn-success" @click="add">添加</button>
    </form>
  </div>
</template>

<script>
//引入axios
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        name: '',
        type: ''
      }
    };
  },
  methods: {
    add() {
      //发送请求
      axios
        .post("http://localhost:3000/weapons", this.formData)
        .then(respons => {
            const status = respons.status
            if (status === 201) {
                //添加成功 跳转到上级路由
                this.$router.push({name: 'weapons'})
            } else {
                alert('添加失败')
            }
        })
        .catch( (err) => {
            alert('服务器异常' + err)
        })
    }
  }
};
</script>

<style >
</style>
