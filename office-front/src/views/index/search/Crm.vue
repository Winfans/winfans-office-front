<template>
    <div id="crm">
        <el-container>
            <el-header>
                <el-menu
                        :default-active="activeIndex"
                        class="el-menu"
                        mode="horizontal"
                        background-color="#303133"
                        text-color="#fff"
                        active-text-color="#409EFF">
                    <el-menu-item index="1">
                        <span class="hover-color-409EFF">客户</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <span class="hover-color-409EFF">线索</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <span class="hover-color-409EFF">签单记录</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <span class="hover-color-409EFF">联系记录</span>
                    </el-menu-item>
                    <el-submenu index="5">
                        <template slot="title">待办提醒</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项1</el-menu-item>
                            <el-menu-item index="2-4-2">选项2</el-menu-item>
                            <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="6">
                        <span class="hover-color-409EFF">报表</span>
                    </el-menu-item>
                    <el-submenu index="7">
                        <template slot="title">基础设置</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项1</el-menu-item>
                            <el-menu-item index="2-4-2">选项2</el-menu-item>
                            <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="8">
                        <span class="hover-color-409EFF">用户</span>
                    </el-menu-item>
                    <el-menu-item index="9">
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
                activeIndex: '1',
            };
        },
        methods: {
        }
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
