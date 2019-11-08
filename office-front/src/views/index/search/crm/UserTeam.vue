<template>
    <div id="user-team">
        <el-card class="box-card el-card-user-team">
            <div slot="header" class="clearfix">
                <div class="client-logo"
                     style="vertical-align:top;background: #E26D15;display: inline-block;width: 28px;height: 28px;border-radius: 4px;line-height: 28px;text-align: center;;">
                    <i class="iconfont icon-CRM"></i>
                </div>
                <span class="font-weight-bold font-size-20" style="padding-left: 10px;">团队</span>
                <span style="float: right;">
                        <el-button type="primary" plain @click="addMemberShowClick"><span style="font-size:15px;">+</span> 添加成员 </el-button>
                    </span>
            </div>
            <div class="main">

                <div class="table" style="border: 1px solid #EBEEF5;">

                    <el-table
                            stripe
                            border
                            ref="multipleTable"
                            :data="tableData"
                            tooltip-effect="dark"
                            style="width: 100%">
                        <el-table-column
                                prop="userName"
                                label="姓名">
                        </el-table-column>
                        <el-table-column
                                prop="teamAdmin"
                                label="用户角色">
                            <template slot-scope="scope">
                                <span >{{transformTeamAdmin(scope.row.teamAdmin)}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" width="145">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        type="danger"
                                        @click="deleteMember(scope.row)">移除
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </el-card>

        <el-dialog
                title="添加成员"
                :visible.sync="addMemberShow"
                width="30%"
                center>
            <el-form ref="form" label-width="70px" :model="form">
                <el-form-item label="成员名称">
                    <el-input v-model="form.userName" placeholder="成员名称"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="addMember">添加</el-button>
                        <el-button @click="cancelAddMemberShow">取消</el-button>
                    </span>
        </el-dialog>


    </div>
</template>

<script>
    export default {
        name: "UserTeam",
        data() {
            return {
                tableData: [],
                form: {},
                addMemberShow: false
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
                this.$axios.get(this.API_URL +'/team/findAllUserTeamByTeamId/' + this.$route.params.id).then(res => {
                    loading.close();
                    this.tableData = res.data.data;
                }).catch(() => {
                    loading.close();
                    this.$alert('当前网络不通......', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                });
            },
            transformTeamAdmin(teamAdmin) {
                return teamAdmin ? "团队管理员" : "团队成员";
            },
            addMemberShowClick() {
                this.addMemberShow = true;


            },
            addMember() {
                if (this.form.userName === '') {
                    this.$alert('成员名称不能为空', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                }  else {
                    const loading = this.$loading({
                        lock: true,
                        text: 'Loading',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.2)',
                    });
                    const data = {
                        userName: this.form.userName,
                    };
                    this.$axios.post(this.API_URL +'/team/addTeamUserByTeamId/' + this.$route.params.id, this.$qs.stringify(data)).then(() => {
                        loading.close();
                        this.$alert('添加成功 ', '', {
                            type: 'success',
                            confirmButtonText: '确定',
                        }).then(() => {
                            this.addMemberShow = false;
                            this.form.userName = '';
                            this.init();
                        });
                    }).catch(() => {
                        loading.close();
                        this.$alert('添加失败', '', {
                            type: 'error',
                            confirmButtonText: '确定',
                        });
                        this.addMemberShow = false;
                        this.form.userName = '';

                    })
                }
            },
            cancelAddMemberShow () {
                this.addMemberShow = false;
                this.form.userName = '';
            },
            deleteMember(row) {

                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.2)',
                });

                const param = {
                    userId: row.userId
                };
                this.$confirm('此操作将永久删除该客户, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.delete(this.API_URL +'/team/deleteTeamUserByUserIdAndTeamId/' + this.$route.params.id, {params: param}).then(() => {
                        loading.close();
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.init();
                    }).catch(() => {
                        loading.close();
                        this.$alert('删除失败', '', {
                            type: 'error',
                            confirmButtonText: '确定',
                        });
                    });

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                    loading.close();
                });
            },

        }
    }
</script>

<style scoped lang="less">
    @import "../../../../assets/less/initial";

    #user-team {
        background: transparent;

        .box-card {
            i {
                font-size: 23px;
                color: #fff;
            }

            .main {

            }
        }

    }
</style>
