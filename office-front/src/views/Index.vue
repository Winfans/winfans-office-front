<template>
    <el-container id="index">
        <el-aside width="68px"
                  class="aside">
            <el-menu router
                     :default-active="this.$route.path"
                     class="menu"
                     background-color="#303133"
                     text-color="#fff"
                     active-text-color="#409EFF">
                <el-menu-item index="/index/home">
                    <i class="el-icon-house font-size-22 hover-color-409EFF"></i>
                </el-menu-item>

                <el-menu-item index="/index/search">
                    <i class="el-icon-search font-size-22 hover-color-409EFF"></i>
                </el-menu-item>

                <el-menu-item index="/index/help">
                    <i class="el-icon-headset font-size-22 hover-color-409EFF"></i>
                </el-menu-item>

            </el-menu>
            <router-link  tag="div"  to="/officeHome"  class="logo-box">
                <div class="logo">
                    WF
                </div>
            </router-link>
            <div class="back-box" @click="onBackClick">
                <i class="iconfont icon-gongxiangtubiaozhuangtaileicaozuolei59 font-size-30 hover-color-C0C4CC"></i>
            </div>
            <div class="heading-box">
                <el-popover
                        placement="right-end"
                        width="250"
                        trigger="hover"
                        popper-class="heading-box-el-popover">
                    <slot>
                        <ul class="heading-show">
                            <li>{{user.userName }}</li>
                            <li @click="logoutClick">退出登录</li>
                        </ul>
                    </slot>
                    <div class="heading" slot="reference">
                        <el-avatar v-if="user.headImg"   :size="40">
                            <img  :src="user.headImg"/>
                        </el-avatar>
                        <el-avatar v-else icon="el-icon-user-solid"  :size="40">
                        </el-avatar>+
                    </div>
                </el-popover>
            </div>
        </el-aside>
        <el-container class="right" style="transition: all .5s ease">
            <el-main style="background: #f5f5f5;padding: 0;">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                user: '',
            }
        },
        created(){
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.2)',
            });
            this.$axios.get('/user/getUserDTO').then(res => {
                this.user = res.data.data;
                loading.close();

            }).catch(() => {
                loading.close();
                this.$alert('当前网络不通......', '', {
                    type: 'error',
                    confirmButtonText: '确定',
                });
            });

        },
        methods: {
            onBackClick() {
                this.$router.back();
            },
            logoutClick() {
                this.$cookies.remove('b0ad13e59c636ca3709e2622089f7718');
                this.$router.push({
                    name: 'Login'
                })

            }
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/less/initial";

    #index {
        overflow-y: hidden;
        height: 100%;
        .aside {
            transition: all .5s ease;
            position: relative;
            overflow-y: hidden;
            height: 100%;
            background-color: rgb(84, 92, 100);

            .menu.el-menu {
                padding-top: 200px;
                height: 100%;
                border-right: none;
            }
            .logo-box {
                position: absolute;
                top: 1.8%;
                left: calc(50% - 20px);
                color: #fff;
                .logo {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: #F56C6C;
                    text-align: center;
                    line-height: 40px;
                    cursor: pointer;
                }
            }
            .back-box {
                position: absolute;
                top: 18%;
                left: calc(50% - 15px);
                cursor: pointer;
                color: #909399;
            }
            .heading-box {
                position: absolute;
                bottom: 3%;
                left: calc(50% - 20px);
                .heading {
                    cursor: pointer;
                    overflow: hidden;
                    border-radius: 50%;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

            }
        }
    }
</style>
