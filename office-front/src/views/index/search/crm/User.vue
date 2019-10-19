<template>
    <div id="user">

        <el-card class="box-card el-card-user">
            <div slot="header" class="clearfix">
                <div class="client-logo"
                     style="vertical-align:top;background: #E26D15;display: inline-block;width: 28px;height: 28px;border-radius: 4px;line-height: 28px;text-align: center;;">
                    <i class="iconfont icon-CRM"></i>
                </div>
                <span class="font-weight-bold font-size-20" style="padding-left: 10px;">用户</span>
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
        name: "User"
    }
</script>

<style scoped lang="less">
    @import "../../../../assets/less/initial";

    #user {
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
