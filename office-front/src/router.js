import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [

        // 用户首页导航
        {
            path: '/index',
            name: 'Index',
            meta: {
                login: true
            },
            redirect: '/index/home',
            component: () => import('./views/Index'),
            children: [
                // 首页
                {
                    path: 'home',
                    name: 'Home',
                    component: () => import('./views/index/Home'),
                },
                // 我
                {
                    path: 'me',
                    name: 'Me',
                    component: () => import('./views/index/Me'),
                },
                // 团队
                {
                    path: 'team',
                    name: 'Team',
                    component: () => import('./views/index/Team'),
                },
                // 发现
                {
                    path: 'search',
                    name: 'Search',
                    component: () => import('./views/index/Search'),
                },
                // 创建团队
                {
                    path: 'attend/:submenuId',
                    name: 'Attend',
                    component: () => import('./views/index/search/Attend'),
                },
                // crm
                {
                    path: 'crm/:id',
                    name: 'Crm',
                    component: () => import('./views/index/search/Crm'),
                    children: [
                        // 客户
                        {
                            path: 'client',
                            name: 'Client',
                            component: () => import('./views/index/search/crm/Client'),
                        },
                        // 签单记录
                        {
                            path: 'writtenRecords',
                            name: 'WrittenRecords',
                            component: () => import('./views/index/search/crm/WrittenRecords'),
                        },
                        // 联系记录
                        {
                            path: 'contactRecords',
                            name: 'ContactRecords',
                            component: () => import('./views/index/search/crm/ContactRecords'),
                        },
                        // 提醒
                        {
                            path: 'remind',
                            name: 'Remind',
                            component: () => import('./views/index/search/crm/Remind'),
                        },
                        // 报表
                        {
                            path: 'reportForm',
                            name: 'RportForm',
                            component: () => import('./views/index/search/crm/ReportForm'),
                        },
                        // 用户
                        {
                            path: 'user',
                            name: 'User',
                            component: () => import('./views/index/search/crm/User'),
                        },
                        // 设置
                        {
                            path: 'setting',
                            name: 'Setting',
                            component: () => import('./views/index/search/crm/Setting'),
                        },
                    ]
                },
                // 帮助
                {
                    path: 'help',
                    name: 'Help',
                    component: () => import('./views/index/Help'),
                },
            ]
        },

        // 登录
        {
            path: '/login',
            name: 'Login',
            component: () => import('./views/Login'),
        },
        // 新用户注册
        {
            path: '/register',
            name: 'Register',
            component: () => import('./views/Register'),
        },

        // 富文本编辑测试
        {
            path: '/test',
            name: 'test',
            component: () => import('./views/index/Test'),
        },

        // office主页面
        {
            path: '/officeHome',
            name: 'OfficeHome',
            redirect: '/officeHome/main',
            component: () => import('./views/OfficeHome'),
            children: [
                // 首页
                {
                    path: 'main',
                    name: 'Main',
                    component: () => import('./views/office_home/Main'),
                },
                // 关于
                {
                    path: 'about',
                    name: 'About',
                    component: () => import('./views/office_home/About'),
                },
            ]
        },

        // 没有找到
        {
            path: '/notFound',
            name: 'NotFound',
            component: () => import('./views/NotFound'),
        },
        // url拦截处理
        {
            path: '*',
            redirect(to) {
                if (to.path === '/') {
                    return '/officeHome'
                } else {
                    return '/notFound'
                }
            }
        },
    ]
})
