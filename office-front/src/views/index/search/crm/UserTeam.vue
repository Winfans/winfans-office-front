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
                        <el-button type="primary" plain><span style="font-size:15px;">+</span> 添加成员 </el-button>
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
                                prop="userRole"
                                label="用户角色">
                        </el-table-column>
                        <el-table-column label="操作" width="145">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        type="danger"
                                        @click="handleDelete(scope.$index, scope.row)">移除
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </el-card>

    </div>
</template>

<script>
    export default {
        name: "UserTeam",
        data() {
            return {
                tableData: [
                    {
                        userName: '用户1',
                        userRole: '管理员',
                    }
                ]
            }
        },
        methods: {
            handleDelete() {

            }
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
