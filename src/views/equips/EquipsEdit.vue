<template>
  <div
    calss="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"
    style="margin-left: 300px; margin-right: 40px;"
  >
    <h2 class="sub-header">修改装备</h2>

    <form>
      <div class="form-group">
        <label for="txtName">名称</label>
        <input
          v-model="formData.name"
          type="text"
          class="form-control"
          id="txtName"
          placeholder="装备名称"
        />
        <!--将数据进行双向绑定 -->
      </div>

      <div class="form-group">
        <label for="zbtype">类型</label>
        <input class="form-control" id="zbtype" placeholder="装备类型" v-model="formData.type" />
        <!--将数据进行双向绑定 -->
      </div>
      <!-- 给添加按钮注册点击事件 -->
      <button class="btn btn-success" @click.prevent="update">提交</button>
    </form>
  </div>
</template>

<script>

export default {
    //接收外部传递的参数
  props: ['id'],
  data() {
    return {
      //绑定文本框
      formData: {
        name: "",
        type: "",
      }
    };
  },

  //组件加载完毕
  mounted() {
      this.loadDataById()

  },

  methods: {
      //根据id加载英雄数据
      loadDataById (id) {
          //发送请求
           this.axios
                .get(`equips/${this.id}`)
                .then( (response) => {
                    const {data, status} = response
                    if (status === 200) {
                        //储存数据
                        this.formData = data
                    } else {
                        alert('获取数据失败')
                    }
                })
                .catch( (err) => {
                    alert('服务器异常' + err)
                })
      },

      //修改数据的方法
      update() {
          //发送请求
          this.axios
            .put(`equips/${this.id}`, this.formData)
            .then( (response) => {
                const status = response.status
                if (status === 200) {
                    //修改成功 跳转回列表页面
                    this.$router.push({name: 'equips'})
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
