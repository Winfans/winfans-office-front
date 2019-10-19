<template>
    <div id="attend">
        <el-card class="box-card horizontal-center"  style="margin-top: 100px;">
            <div slot="header" class="clearfix">

                <div class="submenu-name-logo bg-color-logo inline-block font-size-18">{{submenu.submenuName}}
                </div>
                <div class="submenu-content inline-block" style="width:400px">
                    <p>
                        <span class="font-size-18 font-weight-bold ">{{submenu.submenuName}}</span>
                    </p>
                    <p>
                        <span class="font-size-12 font-color-999">{{submenu.submenuDescription}}</span>
                    </p>
                </div>
            </div>
            <div class="team">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="团队名称">
                        <el-input v-model="form.teamName"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSave">保存</el-button>
                        <el-button @click="onCancel">取消</el-button>
                    </el-form-item>
                </el-form>

            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "Attend",
        data() {
            return {
                form: {
                    submenuName: '',
                    submenuDescription: '',
                    teamName: '',
                },
                submenus: [],
                submenu: {},
            }
        },
        created() {

            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.2)',
            });

            this.axios.get('/menu/findAllSubmenu').then(res => {
                loading.close();
                this.submenus = res.data.data;
            }).then(() => {
                const submenuId = parseInt(this.$route.params.submenuId);
                const index = this.submenus.findIndex(item => item.submenuId === submenuId);
                this.submenu = this.submenus[index];
            })
                .catch(() => {
                    loading.close();
                    this.$message({
                        showClose: true,
                        message: '网络不通，请检查网络设置',
                        type: 'error',
                        center: true
                    });
                });
        },
        methods: {
            onSave() {

                if (this.form.teamName === '') {
                    this.$alert('团队名称不能为空', '', {
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
                        submenuId: this.$route.params.submenuId,
                        teamName: this.form.teamName,
                    };
                    if (this.submenu.homePath) {
                        this.$axios.post('/team/createTeam', this.$qs.stringify(data)).then(() => {
                            loading.close();
                            this.$alert('创建成功', '', {
                                type: 'success',
                                confirmButtonText: '确定',
                            });
                            this.$router.push({
                                name: 'Home'
                            });

                        }).catch(() => {
                            loading.close();
                            this.$alert('创建失败', '', {
                                type: 'error',
                                confirmButtonText: '确定',
                            });
                        });
                    } else {
                        loading.close();
                        this.$alert('创建失败', '', {
                            type: 'error',
                            confirmButtonText: '确定',
                        });
                    }
                }
            },
            onCancel() {
                this.$router.back();
            }

        }
    }
</script>

<style scoped lang="less">
    @import "../../../assets/less/initial";

    #attend {
        .box-card {
            width: 500px;
            .submenu-name-logo {
                width: 50px;
                height: 50px;
                color: #fff;
                text-align: center;
                line-height: 50px;

            }
            .submenu-content {
                vertical-align: top;
                padding-left: 10px;
            }
        }
    }
</style>
