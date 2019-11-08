<template>
    <div id="home">
        <el-card class="box-card" v-if="hasTeam">
            <p>
                <span class="title font-size-22 font-weight-bold">
                您现在还未加入任何团队!
            </span>
            </p>
            <p>
                <span>我们提供人、财、物、事、业务管理系统，可按需使用，自由搭配</span>
            </p>
            <router-link tag="p" :to="toSearch" style="cursor:pointer;">
                <span class="font-weight-bold" @click="createNewTeam">前往选择</span>
                <i class="el-icon-arrow-right"></i>
            </router-link>
        </el-card>
        <div class="team-list" v-else>
            <el-row :gutter="20">
                <el-col :span="6" style="padding-bottom: 15px;" v-for="team in teams" :key="team.teamId"
                        @click.native="goToHomePath(team.homePath, team.subPath, team.teamId)">
                    <el-card class="team-card" @mouseenter.native="isShowClose = true" @mouseleave.native="isShowClose = false">
                        <i class="el-icon-close font-color-409EFF" v-show="isShowClose" @click.stop="leaveTeamClick"></i>
                        <div class="logo" :style="{backgroundColor: team.submenuIconBgColor}">
                            {{team.submenuName}}
                        </div>
                        <span class="logo-title">{{team.teamName}}</span>
                    </el-card>
                    <el-dialog title="退出团队" :visible.sync="isShowDialog" >
                        <span>团队编号：</span>
                        <el-divider></el-divider>
                        <span>团队名称：</span>
                        <el-divider></el-divider>
                        <span>创建日期：</span>
                        <el-divider></el-divider>
                        <span>管理员：</span>
                        <el-divider></el-divider>
                    </el-dialog>
                </el-col>
                <el-col :span="6" style="padding-bottom: 15px;" @click.native="createNewTeam">
                    <el-card class="team-card">
                        <div class="add-team">
                            +
                        </div>
                        <span class="logo-title">创建新团队</span>
                    </el-card>
                </el-col>
            </el-row>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                toSearch: '/index/search', // 跳转路径
                hasTeam: false, // 是否有团队
                teams: [], // 团队
                isShowClose: false, // 是否显示关闭图标
                isShowDialog: false, // 是否显示退出团队的对话框

            }
        },
        methods: {
            createNewTeam() {
                this.$router.push({
                    name: 'Search',
                });
            },
            // 点击团队跳转相对应的页面
            goToHomePath(homePath, subPath, teamId) {
                if (homePath === '') {
                    homePath = 'NotFound'
                }
                this.$router.push({
                    path: '/index/' + homePath + '/' + teamId + '/' + subPath ,
                })
            },
            // 点击退出团队
            leaveTeamClick () {

            },

        },
        created() {

            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.2)',
            });

            this.$axios.get(this.API_URL +'/auth/verify', {withCredentials: true}).then(() => {
            }).catch(() => {
                this.$message({
                    showClose: true,
                    message: '您的身份已过期，请重新登录',
                    type: 'error',
                    center: true
                });
            });

            this.$axios.get(this.API_URL +'/team/findAllTeam').then(res => {
                this.hasTeam = res.data.data.length === 0;
                this.teams = res.data.data;
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

        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/less/initial";

    #home {

        .box-card {
            margin: 40px auto;
            width: 400px;
            height: 200px;
            p {
                padding: 8px 0;
            }
        }
        .team-list {
            width: 95%;
            margin: 20px auto 0;
            .team-card {
                height: 85px;
                position: relative;
                cursor: pointer;
                .el-icon-close {
                    position: absolute;
                    right: 4px;
                    top: 2px;
                    font-size: 12px;
                }
                .logo {
                    display: inline-block;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 45px;
                    color: #fff;

                }
                .logo-title {
                    padding-left: 10px;
                }
                .add-team {
                    display: inline-block;
                    width: 45px;
                    height: 45px;
                    text-align: center;
                    line-height: 45px;
                    color: rgba(0, 0, 0, .5);
                    font-size: 20px;
                }

            }

        }
    }
</style>
