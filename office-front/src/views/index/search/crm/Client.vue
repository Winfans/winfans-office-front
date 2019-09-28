<template>
    <div id="client">
        <el-card class="box-card el-card-client">
            <div slot="header" class="clearfix">
                <div class="client-logo"
                     style="vertical-align:top;background: #E26D15;display: inline-block;width: 28px;height: 28px;border-radius: 4px;line-height: 28px;text-align: center;;">
                    <i class="iconfont icon-CRM"></i>
                </div>
                <span class="font-weight-bold font-size-20" style="padding-left: 10px;">客户</span>
            </div>

            <div class="main-client">
                <!--<div class="main-client-top">-->
                <!--<el-input v-model="client" placeholder="客户" style="width: 200px;height: 30px;line-height: 20px;padding: 0;"></el-input>-->
                <!--</div>-->
                <div class="main-client-middle">
                    <!--<div class="status">-->
                    <!--<ul>-->
                    <!--<li>全部状态</li>-->
                    <!--<li>失败</li>-->
                    <!--<li>成功</li>-->
                    <!--<li>潜在</li>-->
                    <!--</ul>-->
                    <!--</div>-->
                    <div class="table" style="border: 1px solid #EBEEF5;">
                        <el-table
                                stripe
                                border
                                ref="multipleTable"
                                :data="tableData"
                                tooltip-effect="dark"
                                style="width: 100%"
                                :default-sort = "{prop: 'date', order: 'descending'}"
                                @selection-change="handleSelectionChange">
                            <el-table-column
                                    type="selection"
                                    sortable
                                    width="55">
                            </el-table-column>
                            <el-table-column
                                    label="客户编号"
                                    sortable
                                    width="120">
                                <template slot-scope="scope">{{ scope.row.date }}</template>
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="客户名称"
                                    sortable
                                    width="120">
                            </el-table-column>
                            <el-table-column
                                    prop="address"
                                    label="状态"
                                    sortable>
                            </el-table-column>
                            <el-table-column
                                    prop="address"
                                    label="业务员"
                                    sortable>
                            </el-table-column>
                            <el-table-column
                                    prop="address"
                                    label="最近联系内容"
                                    sortable
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                    prop="address"
                                    label="最近联系日期"
                                    sortable
                                    show-overflow-tooltip>
                            </el-table-column>
                        </el-table>

                    </div>
                </div>

                <div class="main-client-footer"></div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "Client",
        data() {
            return {
                tableData: [
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市'
                    },
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市'
                    },
                    {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市'
                    },
                    {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市'
                    },

                ],
                multipleSelection: []
            }
        },
    }
</script>

<style scoped lang="less">
    @import "../../../../assets/less/initial";

    #client {
        background: transparent;
        .box-card {
            i {
                font-size: 23px;
                color: #fff;
            }
        }

    }
</style>
