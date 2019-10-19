<template>
    <div id="written-records">
        <el-card class="box-card el-card-written-records">
            <div slot="header" class="clearfix">
                <div class="client-logo"
                     style="vertical-align:top;background: #E26D15;display: inline-block;width: 28px;height: 28px;border-radius: 4px;line-height: 28px;text-align: center;;">
                    <i class="iconfont icon-CRM"></i>
                </div>
                <span class="font-weight-bold font-size-20" style="padding-left: 10px;">签单记录</span>
            </div>
            <div class="main">

                <div class="main-top">
                    <el-input style="width: 150px;" class="search"
                              placeholder="搜索客户"
                              prefix-icon="el-icon-search"
                              v-model="user">
                    </el-input>
                    <el-button type="primary" class="search-btn"
                               style="border-bottom-left-radius: 0;border-top-left-radius: 0;position: relative;top: 0.5px;">
                        搜索
                    </el-button>
                    <span style="float: right;">
                        <el-button type="primary" plain><span style="font-size:15px;">+</span> 签单记录</el-button>
                    </span>
                </div>
                <div class="main-middle">
                    <div class="table" style="border: 1px solid #EBEEF5;">
                        <el-table
                                show-summary
                                stripe
                                border
                                ref="multipleTable"
                                :data="tableData"
                                tooltip-effect="dark"
                                style="width: 100%"
                                :default-sort="{prop: 'date', order: 'descending'}">
                            <el-table-column
                                    label="日期"
                                    width="180">
                                <template slot-scope="scope">
                                    <i class="el-icon-time" style="font-size: 13px;color: #000;"></i>
                                    <span style="margin-left: 6px">{{ scope.row.createTime }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="customName"
                                    label="客户">
                            </el-table-column>
                            <el-table-column
                                    prop="user"
                                    label="业务员">
                            </el-table-column>
                            <el-table-column
                                    prop="detail"
                                    label="详情"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                    prop="money"
                                    label="金额（元）"
                                    width="100%"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column label="操作" width="145">
                                <template slot-scope="scope">
                                    <el-button
                                            size="mini"
                                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                    <el-button
                                            size="mini"
                                            type="danger"
                                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>

                    </div>
                </div>

                <div class="main-footer">
                    <div style="float: left;display: inline-block;position: relative;top: 5px;">
                        <i class="iconfont icon-excel" style="font-size: 14px;color: #409EFF;padding-right: 6px;"></i>
                        <span class="font-color-409EFF" style="cursor: pointer;">导出</span>
                    </div>
                    <el-pagination
                            show-summary
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            style="text-align: center"
                            background
                            layout="sizes, prev, pager, next, total"
                            :page-size="10"
                            :total="100">
                    </el-pagination>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "WrittenRecords",
        data() {
            return {
                user: '',
                status: '',
                options: [
                    {
                        value: '选项1',
                        label: '成交'
                    },
                    {
                        value: '选项2',
                        label: '失败'
                    },
                    {

                        value: '选项3',
                        label: '潜在'
                    }
                ],
                tableData: [
                    {
                        createTime: '2018-10-11',
                        user: '业务员1',
                        customName: '客户1',
                        detail: '测试',
                        money: 12.25,
                    },
                ],
                multipleSelection: []
            }
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleSelectionChange() {

            }
        },
    }
</script>

<style scoped lang="less">
    @import "../../../../assets/less/initial";

    #written-records {
        background: transparent;
        .box-card {
            i {
                font-size: 23px;
                color: #fff;
            }
            .main{
                .main-top {
                    padding-bottom: 10px;
                    .search-btn {
                        margin-right: 10px;
                    }
                }
                .main-footer {
                    margin-top: 20px;
                }
            }
        }

    }
</style>
