<template>

    <div id="contact-records">
        <el-card class="box-card el-card-written-records">
            <div slot="header" class="clearfix">
                <div class="client-logo"
                     style="vertical-align:top;background: #E26D15;display: inline-block;width: 28px;height: 28px;border-radius: 4px;line-height: 28px;text-align: center;;">
                    <i class="iconfont icon-CRM"></i>
                </div>
                <span class="font-weight-bold font-size-20" style="padding-left: 10px;">联系记录</span>
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
                        <el-button type="primary" plain><span style="font-size:15px;">+</span> 新增</el-button>
                    </span>
                </div>
                <div class="main-middle">
                    <div class="table" style="border: 1px solid #EBEEF5;">

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
        name: "ContactRecords"
    }
</script>

<style scoped lang="less">
    @import "../../../../assets/less/initial";

    #contact-records {
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
