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
                        <el-button type="primary" plain @click.native="addWrittenRecordsShowClick"><span
                                style="font-size:15px;">+</span> 签单记录</el-button>
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
                                style="width: 100%">
                            <el-table-column
                                    label="日期"
                                    width="180">
                                <template slot-scope="scope">
                                    <i class="el-icon-time" style="font-size: 13px;color: #000;"></i>
                                    <span style="margin-left: 6px">{{$moment(scope.row.createTime).format('YYYY-MM-DD')}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="customerName"
                                    label="客户">
                            </el-table-column>
                            <el-table-column
                                    prop="userName"
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
                                            @click="editWrittenRecordsShowClick(scope.row)">编辑
                                    </el-button>
                                    <el-button
                                            size="mini"
                                            type="danger"
                                            @click="deleteWrittenRecordsClick(scope.row)">删除
                                    </el-button>
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
                            :page-size="size"
                            :total="total">
                    </el-pagination>
                </div>


                <el-dialog
                        title="添加签单记录"
                        :visible.sync="addWrittenRecordsShow"
                        width="30%"
                        center>
                    <el-form ref="form" label-width="70px" :model="form">
                        <el-form-item label="客户">
                            <el-input v-model="form.customerName" placeholder="客户名称"></el-input>
                        </el-form-item>
                        <el-form-item label="业务员">
                            <el-input v-model="form.userName" placeholder="业务员" disabled></el-input>
                        </el-form-item>
                        <el-form-item label="详情">
                            <el-input v-model="form.detail" placeholder="详情"></el-input>
                        </el-form-item>
                        <el-form-item label="金额">
                            <el-input v-model="form.money" placeholder="金额"></el-input>
                        </el-form-item>

                    </el-form>
                    <span slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="addWrittenRecords">添加</el-button>
                        <el-button @click="cancelAddWrittenRecordsShow">取消</el-button>
                    </span>
                </el-dialog>

                <el-dialog
                        title="修改签单记录"
                        :visible.sync="editWrittenRecordsShow"
                        width="30%"
                        center>
                    <el-form ref="form" label-width="70px" :model="form2">
                        <el-form-item label="客户">
                            <el-input v-model="form2.customerName" placeholder="客户名称"></el-input>
                        </el-form-item>
                        <el-form-item label="业务员">
                            <el-input v-model="form2.userName" placeholder="业务员" disabled></el-input>
                        </el-form-item>
                        <el-form-item label="详情">
                            <el-input v-model="form2.detail" placeholder="详情"></el-input>
                        </el-form-item>
                        <el-form-item label="金额">
                            <el-input v-model="form2.money" placeholder="金额"></el-input>
                        </el-form-item>

                    </el-form>
                    <span slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="editWrittenRecordsClick">确定</el-button>
                        <el-button @click="cancelEditWrittenRecordsShow">取消</el-button>
                    </span>
                </el-dialog>

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
                addWrittenRecordsShow: false,
                editWrittenRecordsShow: false,
                page: 1,
                size: 10,
                total: 10,
                // 当前被选中行的writtenId
                currentSelectedWrittenId: '',
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
                form: {},
                form2: {},
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
                this.$axios.get('/written/findAllWrittenByPage/' + this.$route.params.id + '/' + this.page + '/' + this.size).then(res => {
                    loading.close();
                    this.tableData = res.data.data.content;
                    this.total = res.data.data.totalElements;
                }).catch(() => {
                    loading.close();
                    this.$alert('当前网络不通......', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                });
            },
            // 每页显示数量改变
            handleSizeChange(val) {
                this.size = val;
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.2)',
                });
                this.$axios.get('/written/findAllWrittenByPage/' + this.$route.params.id + '/' + this.page + '/' + this.size).then(res => {
                    loading.close();
                    this.tableData = res.data.data.content;
                    this.total = res.data.data.totalElements;
                }).catch(() => {
                    loading.close();
                    this.$alert('当前网络不通......', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                });
            },

            // 翻页
            handleCurrentChange(val) {
                this.page = val;
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.2)',
                });
                this.$axios.get('/written/findAllWrittenByPage/' + this.$route.params.id + '/' + this.page + '/' + this.size).then(res => {
                    loading.close();
                    this.tableData = res.data.data.content;
                    this.total = res.data.data.totalElements;
                }).catch(() => {
                    loading.close();
                    this.$alert('当前网络不通......', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                });
            },
            // 添加签单记录点击显示对话框
            addWrittenRecordsShowClick() {

                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.2)',
                });

                this.$axios.get('/user/getUserDTO', {withCredentials: true}).then(res => {
                    loading.close();
                    this.form.userName = res.data.data.userName;
                    this.addWrittenRecordsShow = true
                }).catch(() => {
                    loading.close();
                    this.$alert('当前网络不通......', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                });
            },
            cancelAddWrittenRecordsShow() {
                this.addWrittenRecordsShow = false;
                this.form.customerName = '';
                this.form.userName = '';
                this.form.detail = '';
                this.form.money = null;
            },
            addWrittenRecords() {
                if (this.form.customerName === '') {
                    this.$alert('客户名称不能为空', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                } else if (this.form.detail === '') {
                    this.$alert('详情不能为空', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                } else if (this.form.money === '') {
                    this.$alert('金额不能为空', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                } else {
                    const loading = this.$loading({
                        lock: true,
                        text: 'Loading',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.2)',
                    });
                    const data = {
                        customerName: this.form.customerName,
                        userName: this.form.userName,
                        detail: this.form.detail,
                        money: parseFloat(this.form.money),
                    };
                    this.$axios.post('/written/addWritten', this.$qs.stringify(data)).then(() => {
                        loading.close();
                        this.$alert('添加成功 ', '', {
                            type: 'success',
                            confirmButtonText: '确定',
                        }).then(() => {
                            this.addWrittenRecordsShow = false;
                            this.form.userName = '';
                            this.form.customerName = '';
                            this.form.detail = '';
                            this.form.money = '';
                            this.init();
                        });
                    }).catch(() => {
                        loading.close();
                        this.$alert('添加失败', '', {
                            type: 'error',
                            confirmButtonText: '确定',
                        });
                        this.addWrittenRecordsShow = false;
                        this.form.userName = '';
                        this.form.customerName = '';
                        this.form.detail = '';
                        this.form.money = '';
                    })
                }
            },
            editWrittenRecordsShowClick(row) {

                this.editWrittenRecordsShow = true;

                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.2)',
                });
                this.currentSelectedWrittenId = row.writtenId;
                this.$axios.get('/written/findWrittenByWrittenId/' + row.writtenId).then(res => {
                    loading.close();
                    this.form2 = res.data.data;
                    this.form2.userName = res.data.data.userName;
                    this.editWrittenRecordsShow = true
                }).catch(() => {
                    loading.close();
                    this.currentSelectedWrittenId = '';
                    this.$alert('当前网络不通......', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                });
            },
            editWrittenRecordsClick() {
                if (this.form2.customerName === '') {
                    this.$alert('客户名称不能为空', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                } else if (this.form2.detail === '') {
                    this.$alert('详情不能为空', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                } else if (this.form2.money === '') {
                    this.$alert('金额不能为空', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                } else {
                    const loading = this.$loading({
                        lock: true,
                        text: 'Loading',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.2)',
                    });
                    const data = {
                        customerName: this.form2.customerName,
                        userName: this.form2.userName,
                        detail: this.form2.detail,
                        money: parseFloat(this.form2.money),
                    };
                    this.$axios.post('/written/updateWrittenByWrittenId/' +this.currentSelectedWrittenId, this.$qs.stringify(data)).then(() => {
                        loading.close();
                        this.$alert('修改成功 ', '', {
                            type: 'success',
                            confirmButtonText: '确定',
                        }).then(() => {
                            this.editWrittenRecordsShow = false;
                            this.form2.customerName = '';
                            this.form2.userName = '';
                            this.form2.detail = '';
                            this.form2.money = '';
                            this.currentSelectedWrittenId = '';
                            this.init();
                        });
                    }).catch(() => {
                        loading.close();
                        this.$alert('修改失败', '', {
                            type: 'error',
                            confirmButtonText: '确定',
                        });
                    })
                }
            },
            cancelEditWrittenRecordsShow() {
                this.editWrittenRecordsShow = false;
                this.form2.customerName = '';
                this.form2.userName = '';
                this.form2.detail = '';
                this.form2.money = '';
                this.currentSelectedWrittenId = '';
            },
            deleteWrittenRecordsClick(row) {

                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.2)',
                });


                this.$confirm('此操作将永久删除该客户, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.delete('/written/deleteWrittenByWrittenId/' + row.writtenId).then(() => {
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

            .main {
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
