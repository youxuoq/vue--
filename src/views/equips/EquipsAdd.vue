<template>
<div calss="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" style="margin-left: 300px; margin-right: 40px;">
    <h2 class="sub-header">添加装备</h2>

    <form>
      <div class="form-group">
        <label for="txtName">名称</label>
        <input type="text" class="form-control" id="txtName" placeholder="装备名称" v-model="formData.name">  <!--将数据进行双向绑定 -->
      </div>

      <div class="form-group">
        <label for="zbtype">类型</label>
        <input class="form-control" id="zbtype" placeholder="装备类型" v-model="formData.type">  <!--将数据进行双向绑定 -->
      </div>
                        <!-- 给添加按钮注册点击事件 -->
      <button class="btn btn-success" @click="add">添加</button>
    </form>
</div>
</template>

<script>

export default {
    data () {
        return {
            //定义formData获取表单input中的数据
            formData: {
                name: '',
                type: '',
            }
        }
    },
    methods: {
        //定义一个方法发送请求
        add() {
            //发送请求
            this.axios
                .post('http://localhost:3000/equips', this.formData) // 将formData中的数据一起发送
                //接收返回的数据
                .then( (response) => {
                    //处理返回的数据 (获取返回的数据中的状态码)
                    const status = response.status
                    //判断状态码
                    if (status === 201) {
                        //添加成功 跳转到上级路由
                        this.$router.push( {name: 'equips'} )

                    } else {
                        alert('添加失败')
                    }
                })
                .catch( (err) => {
                    alert('服务器异常' + err)
                })
        }
    }
}
</script>

<style >

</style>
