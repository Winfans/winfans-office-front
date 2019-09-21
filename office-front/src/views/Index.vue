<template>
    <el-container id="index">
        <el-aside width="68px"
                  class="aside">
            <el-menu router
                     :default-active="this.$route.path"
                     class="menu"
                     @open="handleOpen"
                     @close="handleClose"
                     background-color="#303133"
                     text-color="#fff"
                     active-text-color="#409EFF">


                <el-menu-item index="/index/home">
                    <i class="el-icon-house i-font-size-22 i-hover-409EFF"></i>
                </el-menu-item>
                <!--<el-popover-->
                <!--placement="right-end"-->
                <!--trigger="hover"-->
                <!--popper-class="menu-el-popover"-->
                <!--content="首页">-->
                <!--<el-menu-item index="/index/me" slot="reference">-->
                <!--<i class="el-icon-user i-font-size-22 i-hover"></i>-->
                <!--</el-menu-item>-->
                <!--</el-popover>-->

                <el-menu-item index="/index/search">
                    <i class="el-icon-search i-font-size-22 i-hover-409EFF"></i>
                </el-menu-item>


                <el-menu-item index="/index/help">
                    <i class="el-icon-headset i-font-size-22 i-hover-409EFF"></i>
                </el-menu-item>

            </el-menu>
            <div class="logo-box">
                <div class="logo">
                    WF
                </div>
            </div>
            <div class="back-box">
                <i class="iconfont icon-gongxiangtubiaozhuangtaileicaozuolei59 i-font-size-30 i-hover-C0C4CC"></i>
            </div>
            <div class="heading-box">
                <el-popover
                        placement="right-end"
                        width="250"
                        trigger="hover"
                        popper-class="heading-box-el-popover">
                    <slot>
                        <ul class="heading-show">
                            <li>用户名</li>
                            <li>退出登录</li>
                        </ul>
                    </slot>
                    <div class="heading" slot="reference">
                        <img src="../assets/img/test.png" alt="">
                    </div>
                </el-popover>
            </div>
        </el-aside>
        <el-container class="right" style="transition: all .5s ease">
            <el-header style="border-bottom: 1px solid #eee;height: 50px;line-height: 58px;">
                <!--<i class="el-icon-s-fold" @click="showClickHandle"-->
                <!--style="transition: all .5s ease;font-size: 25px;"></i>-->
                <el-container style="float: right;">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px;font-size: 20px;"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>开发中</el-dropdown-item>
                            <el-dropdown-item>开发中</el-dropdown-item>
                            <el-dropdown-item>开发中</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span style="font-size: 16px;margin-top: -3px;">管理员</span>
                </el-container>
            </el-header>
            <el-main>
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
                count: 0,
                show: true,
                drawer: true,
                direction: 'ltl',
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
            },
            showClickHandle() {
                this.show = !this.show;
                this.count++;
                if (this.count % 2 === 0) {
                    this.$('.aside').css({
                        left: 0
                    });
                    this.$('.right').css({
                        paddingLeft: 250
                    });
                    this.$('.el-icon-s-fold').css({
                        transform: 'rotate(0deg)'
                    });

                } else {
                    this.$('.aside').css({
                        left: -250
                    });
                    this.$('.right').css({
                        paddingLeft: 0
                    });
                    this.$('.el-icon-s-fold').css({
                        transform: 'rotate(180deg)'
                    });
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .i-font-size-22 {
        font-size: 22px;
    }

    .i-font-size-30 {
        font-size: 30px;
    }

    .i-hover-409EFF {
        &:hover {
            color: #409EFF;
        }
    }

    .i-hover-C0C4CC {
        &:hover {
            color: #C0C4CC;
        }
    }

    #index {
        overflow-y: hidden;
        height: 100%;
        .aside {
            transition: all .5s ease;
            position: relative;
            overflow-y: hidden;
            height: 100%;
            background-color: rgb(84, 92, 100);
            .menu {
                padding-top: 200px;
                height: 100%;
            }
            .logo-box {
                position: absolute;
                top: 2%;
                left: calc(50% - 25px);
                color: #fff;
                .logo {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: #F56C6C;
                    text-align: center;
                    line-height: 50px;
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
                left: calc(50% - 18px);
                .heading {
                    cursor: pointer;
                    width: 36px;
                    height: 36px;
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
