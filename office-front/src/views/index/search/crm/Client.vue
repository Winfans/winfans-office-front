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
                    <el-select class="status" v-model="status" placeholder="请选择状态">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <span style="float: right;">
                        <el-button type="primary" plain @click="addCustomerShowClick"><span
                                style="font-size:15px;">+</span> 客户</el-button>
                    <el-button type="primary" plain> 编辑</el-button>
                    <el-button type="primary" plain>删除</el-button>
                    </span>
                    <!--<el-input v-model="client" placeholder="客户" style="width: 200px;height: 30px;line-height: 20px;padding: 0;"></el-input>-->
                </div>
                <div class="main-middle">
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
                                :default-sort="{prop: 'date', order: 'descending'}"
                                @selection-change="handleSelectionChange">
                            <el-table-column
                                    type="selection"
                                    sortable
                                    width="36">
                            </el-table-column>
                            <el-table-column type="expand">
                                <template slot-scope="scope">
                                    <el-form label-position="left" inline class="demo-table-expand">
                                        <el-form-item label="客户编号">
                                            <span>CRM{{ scope.row.customerId }}</span>
                                        </el-form-item>
                                        <el-form-item label="客户名称">
                                            <span>{{ scope.row.customerName }}</span>
                                        </el-form-item>
                                        <el-form-item label="状态">
                                            <span>{{ statusTransform(scope.row.status)}}</span>
                                        </el-form-item>
                                        <el-form-item label="业务员">
                                            <span>{{ scope.row.userName }}</span>
                                        </el-form-item>
                                        <el-form-item label="最近联系内容">
                                            <span>{{ scope.row.lastContactContent }}</span>
                                        </el-form-item>
                                        <el-form-item label="最近联系日期">
                                            <span>{{ scope.row.lastContactTime }}</span>
                                        </el-form-item>
                                        <el-form-item label="创建人">
                                            <span>{{ scope.row.creator }}</span>
                                        </el-form-item>
                                        <el-form-item label="创建日期">
                                            <span>{{ scope.row.createTime }}</span>
                                        </el-form-item>
                                    </el-form>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="客户编号"
                                    sortable>
                                <template slot-scope="scope">
                                    <span>CRM{{ scope.row.customerId }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="customerName"
                                    label="客户名称"
                                    sortable>
                            </el-table-column>
                            <el-table-column
                                    label="状态"
                                    sortable>
                                <template slot-scope="scope">
                                    <span>{{ statusTransform(scope.row.status)}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="userName"
                                    label="业务员"
                                    sortable>
                            </el-table-column>
                            <el-table-column
                                    prop="creator"
                                    label="创建人"
                                    sortable
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                    label="创建日期"
                                    sortable>
                                <template slot-scope="scope">
                                    <span>{{$moment(scope.row.createTime).format('YYYY-MM-DD')}}</span>
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
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            style="text-align: center"
                            background
                            layout="sizes, prev, pager, next, total"
                            :page-size="size"
                            :total="total">
                    </el-pagination>
                </div>
            </div>
        </el-card>
        <el-dialog
                title="添加客户"
                :visible.sync="addCustomerShow"
                width="30%"
                center>
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="客户名称">
                    <el-input v-model="form.customerName" placeholder="客户名称"></el-input>
                </el-form-item>
                <el-form-item label="业务员">
                    <el-input v-model="form.userName" placeholder="业务员" disabled></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-select v-model="form.status" placeholder="请选择">
                        <el-option label="成交" value="1"></el-option>
                        <el-option label="失败 " value="2"></el-option>
                        <el-option label="潜在  " value="3"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="addCustomerClick">添加客户</el-button>
                <el-button @click="addCustomerShow = false">取消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Client",
        data() {
            return {
                user: '',
                status: '',
                options: [
                    {
                        value: '1',
                        label: '成交'
                    },
                    {
                        value: '2',
                        label: '失败'
                    },
                    {
                        value: '3',
                        label: '潜在'
                    }
                ],
                page: 1,
                size: 10,
                total: 10,
                tableData: [
                    {
                        customerId: 1,
                        customerName: '用户1',
                        status: '成交',
                        user: '业务员1',
                        lastContactContent: '测试',
                        lastContactTime: '2018-10-19',
                        creator: '业务员1',
                        createTime: '2018-10-19'
                    }
                ],
                multipleSelection: [],
                addCustomerShow: false, // 是否显示添加客户的对话框
                form: {
                    customerName: '',
                    userName: '',
                    status: '',
                }
            }
        },
        created() {
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.2)',
            });
            this.$axios.get('/customer/findAllCustomerTeamIdAndByPage/' + this.$route.params.id + '/' + this.page + '/' + this.size).then(res => {
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
        methods: {
            statusTransform(status) {
                if (status === 1) {
                    return '成交';
                } else if (status === 2) {
                    return '失败';
                } else if (status === 3) {
                    return '潜在';
                }
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
                this.$axios.get('/customer/findAllCustomerTeamIdAndByPage/' + this.$route.params.id + '/' + this.page + '/' + this.size).then(res => {
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
                this.$axios.get('/customer/findAllCustomerTeamIdAndByPage/' + this.$route.params.id + '/' + this.page + '/' + this.size).then(res => {
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
            handleSelectionChange() {

            },

            // 添加客户点击显示对话框
            addCustomerShowClick() {

                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.2)',
                });

                this.$axios.get('/user/getUserDTO', {withCredentials: true}).then(res => {
                    loading.close();
                    this.form.userName = res.data.data.userName;
                    this.addCustomerShow = true
                }).catch(() => {
                    loading.close();
                    this.$alert('当前网络不通......', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                });
            },

            // 添加客户点击事件
            addCustomerClick() {
                if (this.form.customerName === '') {
                    this.$alert('客户名称不能为空', '', {
                        type: 'error',
                        confirmButtonText: '确定',
                    });
                } else if (this.form.status === '') {
                    this.$alert('状态不能为空', '', {
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
                        status: parseInt(this.form.status),
                        teamId: this.$route.params.id
                    };
                    this.$axios.post('/customer/addCustomer', this.$qs.stringify(data)).then(() => {
                        loading.close();
                        this.$alert('添加成功 ', '', {
                            type: 'success',
                            confirmButtonText: '确定',
                        }).then(() => {
                            this.addCustomerShow = false;
                            this.form.userName = '';
                            this.form.customerName = '';
                            this.form.status = '';
                            this.form.teamId = '';
                        });
                    }).catch(() => {
                        loading.close();
                        this.$alert('添加失败', '', {
                            type: 'error',
                            confirmButtonText: '确定',
                        });
                    })
                }
            },
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
            .main {
                .main-top {
                    padding-bottom: 10px;
                    .search-btn {
                        margin-right: 10px;
                    }
                }
                .main-middle {

                }
                .main-footer {
                    margin-top: 20px;
                }
            }
        }

    }
</style>
