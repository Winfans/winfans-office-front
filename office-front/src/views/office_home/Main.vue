<template>
    <div id="main">
        <div style="text-align: center;width: 100%;font-size: 35px;padding-top: 30px;">二狗办公能给你带来什么</div>
        <div class="tab">
            <ul>
                <li v-for="(tab, index) in tabs" :key="index" @mouseenter="mouseEnterTab(index + 1)">
                    <i class="iconfont" :class="tab.icon"></i>
                    <div class="tab-title" >{{tab.title}}</div>
                </li>
            </ul>
            <div class="tab-item">

                    <div v-for="(menu, index) in menus" :key="index" v-show="menu.isShow">
                        <ul>
                            <li v-for="(submenu, index) in menu.submenus" :key="index">
                                <i class="iconfont" :class="submenu.icon"></i>
                                <p style="padding: 10px;font-weight: bold;font-size:28px;">{{submenu.title}}</p>
                                <p style="font-size: 15px;padding-bottom: 10px;">{{submenu.description}}</p>
                                <el-button size="small" type="danger" round>了解 更多
                                </el-button>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data() {
            return {
                menus: [
                    {
                        id: 1,
                        isShow: true,
                        submenus: [
                            {
                                icon: 'icon-kaoqinbaogao',
                                title: '考勤',
                                description: '打卡、请假申请、审批',
                            },
                            {
                                icon: 'icon-xiaohonghua',
                                title: '小红花',
                                description: '一朵小红花塑造企业核心文化',
                            },
                            {
                                icon: 'icon-baogao',
                                title: '工作报告',
                                description: '写报告，报告统计数据',
                            }
                        ]
                    },
                    {
                        id: 2,
                        isShow: false,
                        submenus: [
                            {
                                icon: 'icon-huiji',
                                title: '会计',
                                description: '移动会计，做账不一定要在电脑上',
                            },
                            {
                                icon: 'icon-zu-',
                                title: '记帐',
                                description: '记账、查账；账本在“手”',
                            },
                            {
                                icon: 'icon-gongzibiaoshenhe',
                                title: '工资表',
                                description: '自动计算个税，推送工资单',
                            }
                        ]
                    },
                    {
                        id: 3,
                        isShow: false,
                        submenus: [
                            {
                                icon: 'icon-wangpan',
                                title: '网盘',
                                description: '实时共享网盘',
                            },
                            {
                                icon: 'icon-wupinjieyong',
                                title: '物品借用',
                                description: '一键申请物品借用',
                            },
                            {
                                icon: 'icon-kuguan',
                                title: '库管',
                                description: '出入库，查库存',
                            }
                        ]

                    },
                    {
                        id: 4,
                        isShow: false,
                        submenus: [
                            {
                                icon: 'icon-shenpi',
                                title: '审批',
                                description: '日常审批流程，一键申请、一键审批',
                            },
                            {
                                icon: 'icon-xunjian',
                                title: '巡检',
                                description: '移动巡检整体解决方案',
                            },
                            {
                                icon: 'icon-xiangmu',
                                title: '项目',
                                description: '板式项目管理软件',
                            }
                        ]
                    },
                    {
                        id: 5,
                        isShow: false,
                        submenus: [
                            {
                                icon: 'icon-CRM',
                                title: 'CRM',
                                description: '管理客户',
                            },
                            {
                                icon: 'icon-jinxiaocun',
                                title: '进销存',
                                description: '全方位管控销售、采购、库存',
                            },
                            {
                                icon: 'icon-shangcheng',
                                title: '商城',
                                description: '电商解决方案',
                            }
                        ]
                    }
                ],
                tabs: [
                    {
                        icon: 'icon-kaoqinbaogao',
                        title: '管人',
                        tabActive: 'tab-active',
                    },
                    {
                        icon: 'icon-zu-',
                        title: '管财',
                        tabActive: '',
                    },
                    {
                        icon: 'icon-wupinjieyong',
                        title: '管物',
                        tabActive: '',
                    },
                    {
                        icon: 'icon-shenpi',
                        title: '管事',
                        tabActive: '',
                    },
                    {
                        icon: 'icon-jinxiaocun',
                        title: '管业务',
                        tabActive: '',
                    },
                ],
            }
        },
        methods: {
            mouseEnterTab: function (index) {


                this.menus.forEach(ele => {
                    if (ele.id === index) {
                        ele.isShow = true;
                        this.$('.tab ul li .tab-title')
                            .eq(ele.id - 1)
                            .addClass('tab-active');
                        // this.$set(ele, 'tabActive', 'tab-active');
                        // tabTitleDiv.color = "#F56C6C";
                        // tabTitleDiv.borderBottom = "";
                    } else {
                        ele.isShow = false;
                        ele.tabActive = '';
                        this.$('.tab ul li .tab-title')
                            .eq(ele.id - 1).removeClass('tab-active');
                        // tabTitleDiv.color = "#000";
                        // tabTitleDiv.borderBottom = "none";
                    }
                })
            },
            mouseLeaveTab: function (index) {
                this.menus.forEach(ele => {
                    if (ele.id === index) {
                        ele.isShow = false;
                    }
                })
            },
        }
    }
</script>

<style scoped lang="less">
    #main {
        overflow-x: hidden;
        .tab {
            padding-top: 50px;
            ul {
                height: 120px;
                width: 1000px;
                margin: 0 auto;
                li {
                    cursor: pointer;
                    text-align: center;
                    width: 200px;
                    display: inline-block;
                    color: rgba(0, 0, 0, .7);
                    i {
                        font-size: 60px;
                        color: rgba(0, 0, 0, .5);
                    }

                    div {
                        padding: 15px 0;
                        width: 50px;
                        margin: 0 auto;
                        text-align: center;
                        /*&:hover {*/
                            /*color: #F56C6C;*/
                            /*border-bottom: 4px solid #F56C6C;*/
                        /*}*/
                    }
                    div.tab-active {
                        transition: all .2s ease;
                        color: #F56C6C;
                        border-bottom: 4px solid #F56C6C;
                    }
                }
            }
            .tab-item {
                padding: 20px 0;
                width: 100%;
                height: 300px;
                background-color: whitesmoke;
                position: absolute;
                ul {
                    width: 90%;
                    height: 210px;
                    position: absolute;
                    top: calc(50%  - 100px);
                    left: 0;
                    right: 0;
                    bottom: 0;
                    margin: 0 auto;
                    li {
                        padding-top: 15px;
                        border-radius: 5px;
                        width: 28%;
                        background-color: #fff;
                        margin: 0 29px;
                        height: 100%;
                    }
                }
            }
        }

    }
</style>
