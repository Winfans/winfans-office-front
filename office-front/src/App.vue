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
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
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


</style>
