<template>
  <div class="app-container">
    <el-table
      stripe
      border
      ref="multipleTable"
      :data="list"
      tooltip-effect="dark"
      style="width: 100%">
      <el-table-column
        prop="userId"
        label="用户编号">
      </el-table-column>
      <el-table-column
        prop="userName"
        label="用户名">
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button
            size="mini" @click="editUserShowClick(scope.row)">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger" @click="deleteUser(scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="编辑用户"
      :visible.sync="editUserShow"
      width="30%"
      center>
      <el-form ref="form" label-width="70px" :model="form">
        <el-form-item label="用户名">
          <el-input v-model="form.userName" placeholder="用户名" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="editUsser">添加</el-button>
        <el-button @click="cancelEditUsser">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        editUserShow: false,
        list: [],
        form: {
          userName: ''
        }
      }
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.2)'
        })
        this.$axios.get(this.API_URL + '/user/findAllUserByPage').then(res => {
          loading.close()
          this.list = res.data.data
        }).catch(() => {
          loading.close()
          this.$alert('当前网络不通......', '', {
            type: 'error',
            confirmButtonText: '确定'
          })
        })
      },
      editUserShowClick(row) {
        this.editUserShow = true;

        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.2)',
        });
        this.$axios.get(this.API_URL + '/user/findUserByUserId/' + row.userId).then(res => {
          loading.close();
          this.form = res.data.data;
        }).catch(() => {
          loading.close();
          this.$alert('当前网络不通......', '', {
            type: 'error',
            confirmButtonText: '确定',
          });
        });
      },
      editUsser() {
        if (this.form.userName === '') {
          this.$alert('用户名不能为空', '', {
            type: 'error',
            confirmButtonText: '确定'
          })
        } else {
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.2)',
          });
          const data = {
            userName: this.form.userName,
          };
          this.$axios.post(this.API_URL +'/user/updateUserByUserId/' + this.form.userId, this.$qs.stringify(data)).then(() => {
            loading.close();
            this.$alert('修改成功 ', '', {
              type: 'success',
              confirmButtonText: '确定',
            }).then(() => {
              this.editUserShow = false;
              this.form = '';
              this.init();
            });
          }).catch(() => {
            loading.close();
            this.$alert('修改失败', '', {
              type: 'error',
              confirmButtonText: '确定',
            });
          })
        }
      },
      cancelEditUsser() {
        this.editUserShow = false
        this.form = ''
      },
      deleteUser(row) {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.2)',
        });

        this.$confirm('此操作将永久删除该客户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.delete(this.API_URL + '/user/deleteUserByUserId/' + row.userId).then(() => {
            loading.close();
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.init();
          }).catch(() => {
            loading.close();
            this.$alert('删除失败', '', {
              type: 'error',
              confirmButtonText: '确定',
            });
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
          loading.close();
        });
      }
    }
  }
</script>
