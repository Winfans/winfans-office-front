import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            redirect(to) {
                if (to.path === '/') {
                    return '/login'
                }
            }
        },
        // 首页导航
        {
            path: '/index',
            name: 'index',
            meta:  {
                login: true
            },
            redirect: '/index/home',
            component: () => import('./views/Index'),
            children: [
                // 首页
                {
                    path: 'home',
                    name: 'home',
                    component: () => import('./views/index/Home'),
                },
                // 我
                {
                    path: 'me',
                    name: 'me',
                    component: () => import('./views/index/Me'),
                },
                // 团队
                {
                    path: 'team',
                    name: 'team',
                    component: () => import('./views/index/Team'),
                },
                // 发现
                {
                    path: 'search',
                    name: 'search',
                    component: () => import('./views/index/Search'),
                },
                // 创建团队
                {
                    path: 'attend/:submenuId',
                    name: 'attend',
                    component: () => import('./views/index/search/Attend'),
                },
                // crm
                {
                    path: 'crm',
                    name: 'crm',
                    component: () => import('./views/index/search/Crm'),
                    redirect: 'crm/client',
                    children: [
                        // 客户
                        {
                            path: 'client',
                            name: 'client',
                            component: () => import('./views/index/search/crm/Client'),
                        },
                    ]
                },
                // 帮助
                {
                    path: 'help',
                    name: 'help',
                    component: () => import('./views/index/Help'),
                },
            ]
        },

        // 登录
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login'),
        },

        // 没有找到
        {
            path: '/notFound',
            name: 'notFound',
            component: () => import('./views/NotFound'),
        },
    ]
})
