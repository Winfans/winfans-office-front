<template>
    <div id="nav-page">
        <full-page :options="options">
            <div class="section" style="background: url('../assets/img/bg/bg1.jpg') 100% 100%">
                <div class="box1">
                    <div class="title-container">
                        <h3 class="title">二狗云办公导航一</h3>
                    </div>
                    <ul>
                        <router-link tag="li" to="/officeHome/main">
                            <i class="iconfont icon-youxi  btn-top"></i>
                            <div class="btn-box">
                                <span>平台首页</span>
                                <i class="iconfont icon-youjiantou"></i>
                            </div>
                        </router-link>
                        <router-link tag="li" to="/login">
                            <i class="iconfont icon-feiji btn-top"></i>
                            <div class="btn-box">
                                <span>用户登录</span>
                                <i class="iconfont icon-youjiantou"></i>
                            </div>
                        </router-link>
                        <router-link tag="li" to="/register">
                            <i class="iconfont icon-huojian btn-top"></i>
                            <div class="btn-box">
                                <span>新用户注册</span>
                                <i class="iconfont icon-youjiantou"></i>
                            </div>
                        </router-link>
                    </ul>
                </div>
            </div>
            <div class="section">

                <div class="box2">
                    <div class="title-container">
                        <h3 class="title">二狗云办公导航二</h3>
                    </div>
                    <ul>
                        <router-link tag="li" to="/index/home">
                            <i class="iconfont icon-youxi  btn-top"></i>
                            <div class="btn-box">
                                <span>用户主页</span>
                                <i class="iconfont icon-youjiantou"></i>
                            </div>
                        </router-link>
                        <router-link tag="li" to="/index/search">
                            <i class="iconfont icon-feiji btn-top"></i>
                            <div class="btn-box">
                                <span>发现</span>
                                <i class="iconfont icon-youjiantou"></i>
                            </div>
                        </router-link>
                        <router-link tag="li" to="/index/help">
                            <i class="iconfont icon-huojian btn-top"></i>
                            <div class="btn-box">
                                <span>帮助文档</span>
                                <i class="iconfont icon-youjiantou"></i>
                            </div>
                        </router-link>
                    </ul>
                </div>
            </div>
            <div class="section">
                <div class="box3">
                    <div class="title-container">
                        <h3 class="title">二狗云办公导航三</h3>
                    </div>
                    <ul>
                        <a href="http://localhost:9528/officeAdmin/#/login">
                            <li>
                                <i class="iconfont icon-youxi  btn-top"></i>
                                <div class="btn-box">
                                    <span>后台管理登录</span>
                                    <i class="iconfont icon-youjiantou"></i>
                                </div>
                            </li>
                        </a>
                        <a href="http://localhost:9528/officeAdmin/#/example/table">

                            <li>
                                <i class="iconfont icon-feiji btn-top"></i>
                                <div class="btn-box">
                                    <span>用户列表</span>
                                    <i class="iconfont icon-youjiantou"></i>
                                </div>
                            </li>
                        </a>
                        <a href="http://localhost:9528/officeAdmin/#/form/index">

                            <li>
                                <i class="iconfont icon-huojian btn-top"></i>
                                <div class="btn-box">
                                    <span>添加用户</span>
                                    <i class="iconfont icon-youjiantou"></i>
                                </div>
                            </li>
                        </a>
                    </ul>

                </div>
            </div>
        </full-page>
    </div>
</template>

<script>
    export default {
        name: "NavPage",
        data() {
            return {
                options: {
                    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                    afterLoad: this.afterLoad,
                    scrollOverflow: true,
                    scrollBar: false,
                    navigation: true,
                    navigationPosition: 'right',
                    navigationTooltips: ['page1', 'page2', 'page3'], //设置它的提示
                    menu: '#menu',
                    slidesNavPosition: 'top',
                    anchors: ['page1', 'page2', 'page3'],
                    sectionsColor: ['#333', '#333', '#333']
                }

            }
        }
    }
</script>

<style scoped lang="less">
    #nav-page {

        .section {
            .box1, .box2, .box3 {
                position: relative;
                height: 100%;

                .title-container {
                    position: relative;
                    top: 40px;

                    .title {
                        font-size: 36px;
                        color: #eee;
                        margin: 0px auto 40px auto;
                        text-align: center;
                        font-weight: bold;
                    }
                }

                ul {
                    display: flex;
                    justify-content: space-around;
                    color: #58A56B;
                    position: absolute;
                    top: calc(50% - 150px);
                    left: calc(50% - 400px);
                    width: 800px;
                    height: 300px;

                    a {
                        text-decoration: none;
                        color: #58A56B;
                    }

                    li {
                        cursor: pointer;
                        width: 150px;
                        height: 30px;

                        .btn-top {
                            position: relative;
                            left: 30px;
                            font-size: 120px;
                            color: #fff;
                        }

                        .btn-box {
                            margin-top: 20px;
                            text-align: center;
                            border: 2px solid rgba(255, 255, 255, .6);
                            width: 150px;
                            height: 30px;
                            position: relative;
                            line-height: 30px;
                            padding: 10px;
                        }

                        .icon-youjiantou {
                            position: absolute;
                            right: 10%;
                            font-size: 18px;
                        }

                        &:hover {
                            .btn-top {
                                display: inline-block;
                                transform: rotate(360deg);
                                transition: all .7s ease;
                            }

                            .btn-box {
                                font-size: 18px;
                                transition: all .2s ease;
                                border: 2px solid rgba(255, 255, 255, 1);
                            }

                            .icon-youjiantou {
                                transition: all .4s ease;
                                right: 2%;
                            }
                        }
                    }
                }
            }
        }

        .page-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
    }

</style>
