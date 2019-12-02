<template>
    <div id="register">
        <ShootingStar></ShootingStar>
        <el-card class="box-card el-card-register">
            <div slot="header" class="clearfix">
                <span class="font-color-fff bg_color_transparent">用户注册</span>
            </div>
            <el-form ref="form" :model="form">
                <el-upload
                        v-model="form.headImg"
                        style="overflow:hidden;width: 100px;height: 100px;margin:0 auto 20px;border-radius: 50%;"
                        class="avatar-uploader"
                        :action="API_URL + '/upload/image'"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <el-form-item>
                    <el-input v-model="form.userName" placeholder="用户名" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.userPasswd" placeholder="密码" show-password
                              prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.ConfirmUserPasswd" placeholder="确认密码" show-password
                              prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.identifyCode" placeholder="验证码" prefix-icon="el-icon-mobile"
                              style="width: 50%;"></el-input>

                    <div class="identifybox">
                        <div @click="refreshCode">
                            <SIdentify :identifyCode="identifyCode"></SIdentify>
                        </div>
                        <!--<el-button @click="refreshCode" type='text' class="textbtn">看不清，换一张</el-button>-->
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width: 100%;" @click="registerClick">注册</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import ShootingStar from "../components/ShootingStar";
    import SIdentify from "../components/SIdentify";


    export default {
        name: "Login",
        components: {SIdentify, ShootingStar},
        data() {
            return {
                imageUrl: '',
                identifyCodes: '1234567890',
                identifyCode: '',
                form: {
                    userName: '',
                    userPasswd: '',
                    ConfirmUserPasswd: '',
                    identifyCode: '',
                    headImg: '',
                },
                API_URL: this.API_URL,
            }
        },
        mounted() {

            // 验证码初始化
            this.identifyCode = '';
            this.makeCode(this.identifyCodes, 4)
        },
        methods: {

            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                this.form.headImg = res.data;
            },

            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$alert('上传头像图片只能是 JPG 格式!', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                }
                if (!isLt2M) {
                    this.$alert('上传头像图片大小不能超过 2MB!', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                }
                return isJPG && isLt2M;
            },

            // 点击注册
            registerClick() {
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
                } else if (this.form.userPasswd !== this.form.ConfirmUserPasswd) {
                    this.$alert('两次输入的密码不一致，请重新输入', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                } else if (this.form.identifyCode === '') {
                    this.$alert('验证码不能为空', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                } else if (this.form.identifyCode !== this.identifyCode) {
                    this.$alert('验证码错误', '', {
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
                        userPasswd: this.form.userPasswd,
                        headImg: this.form.headImg,
                    };
                    this.$axios.post(this.API_URL +'/user/register', this.$qs.stringify(data)).then(() => {
                        loading.close();
                        this.$alert('注册成功', '', {
                            type: 'success',
                            confirmButtonText: '确定',
                        }).then(() => {
                            this.$router.push({
                                name: 'Login',
                            })
                        });
                        this.form = '';
                    }).catch(() => {
                        loading.close();
                        this.$alert('注册失败', '', {
                            type: 'error',
                            confirmButtonText: '确定',
                        });
                    })
                }
            },

            // 生成随机数
            randomNum(min, max) {
                return Math.floor(Math.random() * (max - min) + min)
            },

            // 切换验证码
            refreshCode() {
                this.identifyCode = '';
                this.makeCode(this.identifyCodes, 4)
            },

            // 生成四位随机验证码
            makeCode(o, l) {
                for (let i = 0; i < l; i++) {
                    this.identifyCode += this.identifyCodes[
                        this.randomNum(0, this.identifyCodes.length)
                        ]
                }
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/less/initial";


    #register {
        background-image: url("../assets/img/bg/bg1.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        overflow: hidden;
        /*background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);*/
        .box-card {
            background-color: transparent;
            border: none;
            width: 400px;
            position: absolute;
            top: calc(50% - 250px);
            left: calc(50% - 200px);
            .identifybox {
                float: right;
                cursor: pointer;
            }
        }

        .avatar-uploader-icon {
            font-size: 28px;
            color: rgba(255, 255, 255, .3);
            width: 100px;
            height: 100px;
            line-height: 100px;
            text-align: center;
            &:hover {
                color: #fff;;
                transition: all .1s ease;
            }
        }
        .avatar {
            width: 100px;
            height: 100px;
            display: block;
        }
    }
</style>
