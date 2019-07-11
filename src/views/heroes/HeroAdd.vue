<template>
<div calss="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" style="margin-left: 300px; margin-right: 40px;">
    <h2 class="sub-header">添加英雄</h2>

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

      <button class="btn btn-success" @click="add">添加</button>
    </form>
</div>
</template>

<script>
//导入axios
import axios from 'axios'
export default {
    data() {
        return {
            //绑定文本框
            formData: {
                name: '',
                gender: '男'
            }
        }
    },
    methods: {
        //2. 点击提交按钮 发送请求
        add () {
            axios
                .post('http://localhost:3000/heroes', this.formData)
                .then( (response) => {
                    const status = response.status
                    if (status === 201) {
                        // 添加成功
                        this.$router.push( {name: 'heroes'} )
                    } else {
                        alert('添加失败')
                    }
                })
                .catch( (err)=> {
                    alert('服务器异常' + err)
                })
        }
    }

}
</script>

<style >

</style>
