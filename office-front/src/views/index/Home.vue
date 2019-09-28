<template>
    <div id="home">
        <el-card class="box-card">
            <p>
                <span class="title font-size-22 font-weight-bold">
                您现在还未加入任何团队!
            </span>
            </p>
            <p>
                <span>我们提供人、财、物、事、业务管理系统，可按需使用，自由搭配</span>
            </p>
            <router-link tag="p" :to="toSearch" style="cursor:pointer;">
                <span class="font-weight-bold">前往选择</span>
                <i class="el-icon-arrow-right"></i>
            </router-link>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data () {
            return {
                toSearch: '/index/search'
            }
        },
        created() {
            this.$axios.get('/auth/verify', {withCredentials: true}).then(() => {
            }).catch(() => {
                this.$message({
                    showClose: true,
                    message: '您的身份已过期，请重新登录',
                    type: 'error',
                    center: true
                });
            });
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/less/initial";

    #home {

        .box-card {
            margin: 40px auto;
            width: 400px;
            height: 200px;
            p {
                padding: 8px 0;
            }
        }
    }
</style>
