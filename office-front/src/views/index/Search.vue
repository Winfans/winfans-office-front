<template>
    <div id="search">
        <el-card class="box-card el-card-search">
            <div slot="header" class="clearfix">
                <span class="font-size-20 font-weight-bold font-color-F56C6C">发现</span>
            </div>
            <el-row :gutter="20">
                <el-col :span="8" style="padding-bottom: 20px;" v-for="menu in menus" :key="menu.mainMenuId">
                    <el-card shadow="hover" body-style="padding:0">
                        <div slot="header" class="clearfix">
                            <span class="font-size-14 font-weight-bold">{{menu.mainMenuName}}</span>
                        </div>
                        <div class="card hover-background-409EFF" v-for="submenu in menu.submenus"
                             :key="menu.submenuId">
                            <div class="card-left" :style="{backgroundColor: submenu.submenuIconBgColor}">
                                <i class="iconfont" :class="submenu.submenuIcon"></i>
                            </div>
                            <div class="card-right">
                                <p>
                                    <span class="font-size-18 font-weight-bold">{{submenu.submenuName}}</span>
                                </p>
                                <p>
                                    <span class="font-color-999 font-size-14">{{submenu.submenuDescription}}</span>
                                </p>
                                <p>
                                    <span class="border-DCDFE6 font-color-606266 btn"
                                          @click="createTeam(submenu.submenuId)">
                                        <i class="iconfont icon-tianjiajiahaowubiankuang font-size-14"></i>
                                        <span class="font-size-14 create-team">创建团队</span>
                                    </span>
                                    <span class="font-size-14 font-color-409EFF more">了解详情</span>
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
    import {Loading} from 'element-ui';

    export default {
        name: "Search",
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
            createTeam(submenuId) {
                this.$router.push({
                    name: 'attend',
                    params: {
                        submenuId: submenuId
                    },
                });
            }
        }

    }
</script>

<style scoped lang="less">
    @import "../../assets/less/initial";

    #search {
        .box-card {
            width: 100%;
            .card {
                padding: 15px 18px;

                .card-left {
                    display: inline-block;
                    border-radius: 50%;
                    width: 36px;
                    height: 36px;
                    line-height: 36px;
                    text-align: center;
                    vertical-align: top;
                    i {
                        font-size: 23px;
                        color: #fff;
                    }
                }
                .card-right {
                    display: inline-block;
                    padding-left: 10px;
                    p {
                        padding: 0 0 10px;
                        .btn {
                            cursor: pointer;
                            border-radius: 3px;
                            padding: 5px 12px;
                            &:hover {
                                color: #409EFF;
                                background: rgba(64, 158, 255, .1);
                            }
                        }
                        .create-team {
                            padding-left: 8px;
                        }
                        .more {
                            cursor: pointer;
                            padding-left: 10px;
                        }

                    }
                }
                &:nth-of-type(2) {
                    border-bottom: 1px solid rgba(0, 0, 0, .1);
                    border-top: 1px solid rgba(0, 0, 0, .1);
                }
            }
        }
    }
</style>
