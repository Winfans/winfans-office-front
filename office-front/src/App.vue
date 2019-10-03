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

    // Login页面
    .el-card.el-card-login {
        .el-card__header {
            background: transparent;
        }
        .el-card__body {
            .el-input__inner {
                background: transparent;
                border: 1px solid rgba(255,255,255,.2);
                color: #fff;
                &:hover {
                    transition: all .1s ease;
                    border: 1px solid #fff;
                }

            }
            .el-button--primary {
                background: transparent;
                border: 1px solid rgba(255,255,255,.2);
                &:hover {
                    transition: all .1s ease;
                    border: 1px solid #fff;
                }
            }
        }
    }

    // CRM
    .el-card.el-card-client {
        .el-card__header {
            background: #F6F6F6;
            /*height: 60px;*/
            padding: 10px 20px;

        }
        .el-input__inner {
            height: 35px;
            line-height: 35px;
        }
        .el-table {
            .el-table__header {
                .cell {
                    color: #000;
                }
            }
            .el-table__body {
                .cell {
                    font-size: 14px;
                    line-height: 14px;
                    height: 10px;
                    overflow: visible;
                }
            }
        }
    }


</style>
