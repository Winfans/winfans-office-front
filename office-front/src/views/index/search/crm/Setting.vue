<template>
    <div id="setting">
            <el-card class="box-card el-card-setting">
                <div slot="header" class="clearfix">
                    <div class="client-logo"
                         style="vertical-align:top;background: #E26D15;display: inline-block;width: 28px;height: 28px;border-radius: 4px;line-height: 28px;text-align: center;;">
                        <i class="iconfont icon-CRM"></i>
                    </div>
                    <span class="font-weight-bold font-size-20" style="padding-left: 10px;">团队设置</span>
                </div>
                <div class="main">
                    <el-card shadow="hover">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="团队名称" style="border-bottom:1px solid rgba(0,0,0,.1)">
                                <span>{{teamName}}</span><i class="el-icon-edit" style="margin-left:6px;color: #409EFF;cursor:pointer;
                                font-size: 13px;"></i>
                            </el-form-item>
                            <el-form-item label="团队编号" style="border-bottom:1px solid rgba(0,0,0,.1)">
                                <span>TEAM{{teamId}}</span>
                            </el-form-item>
                        </el-form>

                    </el-card>
                </div>
            </el-card>
    </div>
</template>

<script>
    export default {
        name: "Setting",
        data() {
            return {
                teamName: '',
                teamId: this.$route.params.id,
            }
        },
        created() {
            this.init();
        },
        methods: {
            init() {
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.2)',
                });

                this.$axios.get('/team/findTeamByTeamId/' + this.$route.params.id).then(res => {
                    this.teamName = res.data.data.teamName;
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
        }

    }
</script>

<style scoped lang="less">
    @import "../../../../assets/less/initial";

    #setting {
        background: transparent;
        .box-card {
            i {
                font-size: 23px;
                color: #fff;
            }
            .main {
                .cell-left {
                }
            }
        }

    }
</style>
