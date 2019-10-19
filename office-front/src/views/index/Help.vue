<template>
    <div id="help">
        <el-card class="box-card el-card-help">
            <div slot="header" class="clearfix">
                <span class="font-size-16 font-weight-bold">帮助文档</span>
            </div>
            <el-row :gutter="20">
                <el-col :span="8" style="padding-bottom: 20px;" v-for="menu in menus" :key="menu.mainMenuId">
                    <el-card shadow="hover" body-style="padding:0">
                        <div slot="header" class="clearfix">
                            <span class="font-size-14 font-weight-bold">{{menu.mainMenuName}}</span>
                        </div>
                        <div class="card hover-background-409EFF" v-for="submenu in menu.submenus"
                             :key="menu.submenuId">
                            <div class="card-left">
                                <i class="iconfont" :class="submenu.submenuIcon" style=""></i>
                            </div>
                            <div class="card-right">
                                <p>
                                    <span class="font-size-16 font-weight-bold">{{submenu.submenuName}}</span>
                                </p>
                                <p>
                                    <span class="font-color-999 font-size-12">{{submenu.submenuDescription}}</span>
                                </p>

                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-card>
    </div>

</template>

<script>
    export default {
        name: "Help",
        data() {
            return {
                menus: [],
                submenu: {}
            }
        },
        created() {


            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.2)',
            });

            this.axios.get('/menu/findAllMenu').then(res => {
                this.menus = res.data.data;
                loading.close();
            }).catch(() => {
                loading.close();
                this.$message({
                    showClose: true,
                    message: '网络不通，请检查网络设置',
                    type: 'error',
                    center: true
                });
            });
        },
        methods: {

        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/less/initial";

    #help {
        width: 95%;
        margin: 25px auto;
        .box-card {
            width: 100%;
            .card {
                padding: 0 18px;
                height: 60px;

                .card-left {
                    display: inline-block;
                    vertical-align: middle;
                    i {
                        position: relative;
                        top: -6px;
                        font-size: 25px;
                        color: #dd1313;
                    }
                }
                .card-right {
                    display: inline-block;
                    padding-left: 12px;
                    position: relative;
                    top: 10px;
                }
                &:nth-of-type(2) {
                    border-bottom: 1px solid rgba(0, 0, 0, .1);
                    border-top: 1px solid rgba(0, 0, 0, .1);
                }
            }
        }
    }
</style>
