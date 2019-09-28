<template>
    <div class="login">
        <el-card class="box-card el-card-login">
            <div slot="header" class="clearfix">
                <span class="font-color-fff">用户登录</span>
            </div>
            <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input v-model="form.userName" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.userPasswd" placeholder="密码" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width: 100%;" @click="onLogin">登录</el-button>
                </el-form-item>

            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    userName: '',
                    userPasswd: '',
                }
            }
        },
        methods: {
            onLogin() {
                if (this.form.userName === '') {
                    this.$alert('用户名不能为空', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                } else if (this.form.userPasswd === '') {
                    this.$alert('密码不能为空', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                } else {
                    const loading = this.$loading({
                        lock: true,
                        text: 'Loading',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.2)',
                    });

                    const data = {
                        userName: this.form.userName,
                        userPasswd: this.form.userPasswd
                    };
                    this.$axios.post('/auth/auth', this.$qs.stringify(data)).then(() => {
                        loading.close();
                        this.$router.push({
                            name: 'index',
                        })
                    }).catch(() => {
                        loading.close();
                        this.$alert('用户名或密码不正确', '', {
                            type: 'error',
                            confirmButtonText: '确定',
                        });
                    })
                }

            },
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/less/initial";

    .login {
        .box-card {
            width: 400px;
            position: absolute;
            top: calc(50% - 200px);
            left: calc(50% - 200px);
        }
    }
</style>
