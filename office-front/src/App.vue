<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>


    export default {
        name: 'app',
    }
</script>

<style lang="less">
    .router-link-exact-active {
        color: #F56C6C;
        border-bottom: 4px solid #F56C6C;
    }

    // 初始化
    #app {
        font-family: "Hiragino Sans GB";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
    }

    * {
        padding: 0;
        margin: 0;
    }

    html, body {
        height: 100%;
    }

    ul, li {
        list-style: none;
    }

    // Index页面
    .menu-el-popover.el-popover.el-popper {
        background: #303133;
        border: 1px solid #303133;
        color: #fff;
        min-width: 20px;
        font-size: 12px;
        .popper__arrow {
            filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 1))
        }
    }

    .heading-box-el-popover.el-popover.el-popper {
        margin-left: 20px;
        background: #303133;
        border: 1px solid #303133;
        .popper__arrow {
            display: none;
        }
        .heading-show {
            color: #fff;
            li {
                padding: 8px 0;
                cursor: pointer;
                &:hover {
                    color: #409EFF;
                }
            }
        }
    }

    // Search页面
    .el-card.el-card-search {
        .el-card__header {
            background: #F2F6FC;
        }
    }

    // 帮助页面

    .el-card.el-card-help {
        .el-card__header {
            background: #F2F6FC;
        }
    }

    // Login页面
    .el-card.el-card-login {
        .el-card__header {
            background: transparent;
        }
        .el-card__body {
            .el-input__inner {
                background: transparent;
                border: 1px solid rgba(255, 255, 255, .2);
                color: #fff;
                &:hover {
                    transition: all .1s ease;
                    border: 1px solid #fff;
                }

            }
            .el-button--primary {
                background: transparent;
                border: 1px solid rgba(255, 255, 255, .2);
                &:hover {
                    transition: all .1s ease;
                    border: 1px solid #fff;
                }
            }
            .bottom {
                span {
                    &:hover {
                        color: #fff;
                        transition: all .1s ease;
                    }
                }
            }
        }
    }

    // register页面
    .el-card.el-card-register {
        .el-card__header {
            background: transparent;
        }
        .el-card__body {
            .el-input__inner {
                background: transparent;
                border: 1px solid rgba(255, 255, 255, .2);
                color: #fff;
                &:hover {
                    transition: all .1s ease;
                    border: 1px solid #fff;
                }

            }
            .el-button--primary {
                background: transparent;
                border: 1px solid rgba(255, 255, 255, .2);
                &:hover {
                    transition: all .1s ease;
                    border: 1px solid #fff;
                }
            }
        }
    }

    // CRM
    #crm {
        .el-crm {
            .el-menu--horizontal > .el-submenu .el-submenu__title {
                line-height: 64px;
            }
        }
    }

    // 客户
    #client {
        .el-card.el-card-client {
            .el-card__header {
                background: #F6F6F6;
                /*height: 60px;*/
                /*padding: 5px 20px;*/
            }
            .main {
                .main-top {
                    .search {
                        .el-input__inner {
                            border-bottom-right-radius: 0;
                            border-top-right-radius: 0;
                        }
                    }
                }
                .main-middle {
                    .el-table {
                        .el-table__header {
                            .cell {
                                color: #000;
                            }
                        }
                        .el-table__body {
                            .cell {
                                font-size: 14px;
                                /*line-height: 14px;*/
                                /*height: 10px;*/
                                overflow: visible;
                            }
                        }
                    }
                    .demo-table-expand {
                        font-size: 0;
                    }
                    .demo-table-expand label {
                        width: 120px;
                        color: #99a9bf;
                    }
                    .demo-table-expand .el-form-item {
                        margin-right: 0;
                        margin-bottom: 0;
                        width: 50%;
                    }
                }
            }
        }
    }

    // 签单记录
    #written-records {
        .el-card.el-card-written-records {
            .el-card__header {
                background: #F6F6F6;
            }
            .main {
                .main-top {
                    .search {
                        .el-input__inner {
                            border-bottom-right-radius: 0;
                            border-top-right-radius: 0;
                        }
                    }

                }
                .main-middle {
                    .el-table {
                        .el-table__header {
                            .cell {
                                color: #000;
                            }
                        }
                        .el-table__body {
                            .cell {
                                font-size: 14px;
                                /*line-height: 14px;*/
                                /*height: 10px;*/
                                overflow: visible;
                            }
                        }
                    }
                }
            }
        }
    }

    // 报表
    #report-form {
        .el-card.el-card-report-form {
            .el-card__header {
                background: #F6F6F6;

            }
            .main {

            }
        }
    }

    // 团队
    #user-team {
        .el-card.el-card-user-team {
            .el-card__header {
                background: #F6F6F6;
                /*height: 60px;*/
                /*padding: 5px 20px;*/
            }
            .main {

                .el-table {
                    .el-table__header {
                        .cell {
                            color: #000;
                        }
                    }
                    .el-table__body {
                        .cell {
                            font-size: 14px;
                            /*line-height: 14px;*/
                            /*height: 10px;*/
                            overflow: visible;
                        }
                    }
                }
            }
        }
    }

    // 设置
    #setting {
        .el-card.el-card-setting {
            .el-card__header {
                background: #F6F6F6;
                /*height: 60px;*/
                /*padding: 5px 20px;*/
            }
            .main {
                .demo-table-expand {
                    font-size: 0;
                }
                .demo-table-expand label {
                    width: 120px;
                    color: #606266;
                }
                .demo-table-expand .el-form-item {
                    margin-right: 0;
                    margin-bottom: 0;
                    width: 100%;
                }
            }
        }
    }

    // office主页面
    #office-home {
        .el-carousel__container {
            overflow: hidden;
            height: 500px;
        }
    }

    // 联系记录
    #contact-records {
        .el-card.el-card-client {
            .el-card__header {
                background: #F6F6F6;
                /*height: 60px;*/
                /*padding: 5px 20px;*/
            }

            .main {
                .main-top {
                    .search {
                        .el-input__inner {
                            border-bottom-right-radius: 0;
                            border-top-right-radius: 0;
                        }
                    }
                }

                .main-middle {
                    .el-table {
                        .el-table__header {
                            .cell {
                                color: #000;
                            }
                        }

                        .el-table__body {
                            .cell {
                                font-size: 14px;
                                /*line-height: 14px;*/
                                /*height: 10px;*/
                                overflow: visible;
                            }
                        }
                    }

                    .demo-table-expand {
                        font-size: 0;
                    }

                    .demo-table-expand label {
                        width: 120px;
                        color: #99a9bf;
                    }

                    .demo-table-expand .el-form-item {
                        margin-right: 0;
                        margin-bottom: 0;
                        width: 50%;
                    }
                }
            }
        }
    }


</style>
