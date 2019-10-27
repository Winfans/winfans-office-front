<template>
    <el-container id="office-home">
        <el-header class="header" style="width: 100%;height: 75px;">
            <div class="logo-box">
                <div class="logo">
                    WF
                </div>
                <span style="padding-left: 10px;font-size: 23px;font-family:-apple-system; ">二狗办公</span>
            </div>
            <nav>
                <ul>
                    <router-link tag="li" to="/officeHome/main">首页</router-link>
                    <router-link tag="li" to="/officeHome/about">关于</router-link>
                </ul>
            </nav>
            <el-button v-if="loginShow" style=" position: absolute;
                top: calc(50% - 19.8px);right: 5%;" type="danger" round @click="logoutClick">退出登录
            </el-button>
            <el-button v-else style=" position: absolute;
                top: calc(50% - 19.8px);right: 5%;" type="danger" round @click="goToLogin">登录
            </el-button>


        </el-header>
        <el-main class="main">
            <div class="banner">
                <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item>
                        <img src="@/assets/img/banner/banner1.png" alt=""
                             style="width:45%;height:85%;margin: 40px 100px;float: right;">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="@/assets/img/banner/banner2.png" alt=""
                             style="width:45%;height:70%;margin: 40px 100px;float: right;">
                    </el-carousel-item>
                </el-carousel>
                <div style="color: #fff;position: absolute;left: 10%;top: 15%;font-size:35px;z-index: 999;">二狗办公云平台
                </div>
                <el-button style=" position: absolute;left: 10%;top: 42%;z-index: 999;
                " type="danger" round @click="goToLogin">永久免费 • 立即开通
                </el-button>
            </div>
            <router-view></router-view>
        </el-main>
        <el-footer>
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "OfficeHome",
        data() {
            return {
                tabs: [
                    {
                        icon: 'icon-kaoqinbaogao',
                        title: '管人',
                    },
                    {
                        icon: 'icon-zu-',
                        title: '管财',
                    },
                    {
                        icon: 'icon-wupinjieyong',
                        title: '管物',
                    },
                    {
                        icon: 'icon-shenpi',
                        title: '管事',
                    },
                    {
                        icon: 'icon-jinxiaocun',
                        title: '管业务',
                    },
                ],
                loginShow: false,
            }
        },
        created() {
            const isLogin = this.$cookies.isKey('b0ad13e59c636ca3709e2622089f7718');
            isLogin ? this.loginShow = true : this.loginShow = false;
        },
        methods: {
            goToLogin() {
                this.$router.push({
                    name: "Login"
                })
            },
            logoutClick() {
                this.loginShow = false;
                this.$cookies.remove('b0ad13e59c636ca3709e2622089f7718');
            }
        }
    }
</script>

<style scoped lang="less">
    #office-home {
        .header {
            position: relative;
            line-height: 75px;

            .logo-box {
                padding-left: 65px;
                display: inline-block;

                .logo {
                    display: inline-block;
                    color: #fff;
                    font-size: 24px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: #F56C6C;
                    text-align: center;
                    line-height: 50px;
                    cursor: pointer;
                }
            }

            nav {
                height: 100%;
                position: relative;
                top: -4px;
                display: inline-block;
                padding-left: 30px;

                ul {
                    display: inline-block;

                    li {
                        padding: 0 15px;
                        font-size: 16px;
                        display: inline-block;
                        cursor: pointer;

                        &:hover {
                            color: #F56C6C;
                        }
                    }
                }
            }
        }

        .main {
            padding: 0;

            .banner {
                position: relative;
                background: #273240;

                .el-carousel__item {
                    background: #273240;
                }
            }


        }
    }
</style>
