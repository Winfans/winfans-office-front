<template>
    <div id="login">
        <ShootingStar></ShootingStar>
        <el-card class="box-card el-card-login">
            <div slot="header" class="clearfix">
                <span class="font-color-fff bg_color_transparent">用户登录</span>
            </div>
            <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input v-model="form.userName" placeholder="用户名" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.userPasswd" placeholder="密码" show-password
                              prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width: 100%;" @click="loginClick">登录</el-button>
                </el-form-item>
            </el-form>
            <div class="bottom" style="float: right;">
                <el-button type="text"  style="color:#999;">忘记密码？</el-button>
                <el-button type="text"  style="color:#999;" @click="goToRegisterClick">新用户</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
    import ShootingStar from "../components/ShootingStar";


    export default {
        name: "Login",
        components: {ShootingStar},
        data() {
            return {
                form: {
                    userName: '',
                    userPasswd: '',
                }
            }
        },
        methods: {
            loginClick() {
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
                    this.$axios.post(this.API_URL +'/auth/auth', this.$qs.stringify(data)).then(() => {
                        loading.close();
                        this.$router.push({
                            name: 'Index',
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
            goToRegisterClick() {
                this.$router.push('/register');
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/less/initial";

    #login {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
        .box-card {
            background-color: transparent;
            border: none;
            width: 400px;
            position: absolute;
            top: calc(50% - 200px);
            left: calc(50% - 200px);
        }
    }
</style>
