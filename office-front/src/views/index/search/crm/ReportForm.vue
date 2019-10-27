<template>
    <div id="report-form">
            <el-card class="box-card el-card-report-form">
                <div slot="header" class="clearfix">
                    <div class="client-logo"
                         style="vertical-align:top;background: #E26D15;display: inline-block;width: 28px;height: 28px;border-radius: 4px;line-height: 28px;text-align: center;;">
                        <i class="iconfont icon-CRM"></i>
                    </div>
                    <span class="font-weight-bold font-size-20" style="padding-left: 10px;">报表</span>
                </div>
                <div class="main">

                    <div class="main-top">


                    </div>
                    <div class="main-middle">

                    </div>

                    <div class="main-footer">

                    </div>
                </div>
            </el-card>

    </div>
</template>

<script>
    export default {
        name: "ReportForm"
    }
</script>

<style scoped lang="less">
    @import "../../../../assets/less/initial";

    #report-form {
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
