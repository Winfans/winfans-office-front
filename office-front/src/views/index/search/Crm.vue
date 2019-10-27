<template>
    <div id="crm">
        <el-container>
            <el-header class="el-crm">
                <el-menu
                        router
                        :default-active="this.$route.path"
                        class="el-menu"
                        mode="horizontal"
                        background-color="#303133"
                        text-color="#fff"
                        active-text-color="#409EFF">
                    <el-menu-item :index="prefixPath +'/client'">
                        <span class="hover-color-409EFF">客户</span>
                    </el-menu-item>
                    <el-menu-item :index="prefixPath +'/writtenRecords'">
                        <span class="hover-color-409EFF">签单记录</span>
                    </el-menu-item>
                    <el-menu-item :index="prefixPath +'/contactRecords'">
                        <span class="hover-color-409EFF">联系记录</span>
                    </el-menu-item>
                    <el-submenu index="1">
                        <template slot="title">待办提醒</template>
                        <!--<el-menu-item index="/index/crm/remind">选项1</el-menu-item>-->
                        <!--<el-menu-item index="/index/crm/remind">选项2</el-menu-item>-->
                        <!--<el-menu-item index="/index/crm/remind">选项3</el-menu-item>-->
                    </el-submenu>
                    <el-menu-item :index="prefixPath +'/reportForm'">
                        <span class="hover-color-409EFF">报表</span>
                    </el-menu-item>
                    <el-menu-item :index="prefixPath +'/userTeam'">
                        <span class="hover-color-409EFF">团队  </span>
                    </el-menu-item>
                    <el-menu-item :index="prefixPath +'/setting'">
                        <span class="hover-color-409EFF">设置</span>
                    </el-menu-item>
                </el-menu>
                <div class="crm-logo">CRM</div>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Crm",
        data() {
            return {
                prefixPath: '/index/crm/' + this.$route.params.id,
                activeIndex: '/index/crm/client',
            };
        },
        methods: {}
    }
</script>

<style scoped lang="less">
    @import "../../../assets/less/initial";

    #crm {
        .el-header {
            padding: 0;
            background-color: #303133;
            color: #fff;
            text-align: center;
            line-height: 60px;
            position: relative;
            .el-menu {
                width: 85%;
                margin: 0 auto;
            }
            .crm-logo {
                background: rgba(153, 51, 102, .7);
                border-radius: 4px;
                position: absolute;
                left: 2%;
                top: calc(50% - 15px);
                font-size: 13px;
                color: #C0C4CC;
                height: 30px;
                line-height: 30px;
                padding: 0 5px;
            }
        }

        .el-main {
            background-color: #f5f5f5;
            color: #fff;
            padding: 30px;
        }
    }
</style>
