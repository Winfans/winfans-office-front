<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="form.userName" placeholder="用户名" prefix-icon="el-icon-user"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.userPasswd" placeholder="密码" show-password
                  prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form.ConfirmUserPasswd" placeholder="确认密码" show-password
                  prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
        <el-button @click="onCancel">清除</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        form: {
          name: '',
          userPasswd: '',
          ConfirmUserPasswd: ''
        }
      }
    },
    mounted() {
      this.$axios.get(this.API_URL + '/user/findAllUserByPage').then(res => {
        loading.close();
        this.list = res.data.data;
      }).catch(() => {
        loading.close()
        this.$alert('当前网络不通......', '', {
          type: 'error',
          confirmButtonText: '确定'
        })
      })
    },
    methods: {
      onSubmit() {
        if (this.form.userName === '') {
          this.$alert('用户名不能为空', '', {
            type: 'error',
            confirmButtonText: '确定'
          })
        } else if (this.form.userPasswd === '') {
          this.$alert('密码不能为空', '', {
            type: 'error',
            confirmButtonText: '确定'
          })
        } else if (this.form.userPasswd !== this.form.ConfirmUserPasswd) {
          this.$alert('两次输入的密码不一致，请重新输入', '', {
            type: 'error',
            confirmButtonText: '确定'
          })
        } else {
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.2)'
          })
          const data = {
            userName: this.form.userName,
            userPasswd: this.form.userPasswd
          }
          this.$axios.post(this.API_URL + '/user/register', this.$qs.stringify(data)).then(() => {
            loading.close()
            this.$alert('添加成功', '', {
              type: 'success',
              confirmButtonText: '确定'
            }).then(() => {
              this.$router.push({
                path: '/example'
              })
            })
            this.form = ''
          }).catch(() => {
            loading.close()
            this.$alert('添加失败', '', {
              type: 'error',
              confirmButtonText: '确定'
            })
          })
        }
      },
      onCancel() {
        this.form.userName = ''
        this.$message({
          message: '已清除!',
          type: 'warning'
        })
      }
    }
  }
</script>

<style scoped>
  .line {
    text-align: center;
  }
</style>

