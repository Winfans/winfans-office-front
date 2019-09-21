import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/index/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            redirect(to) {
                if (to.path === '/') {
                    return '/index/home'
                }
            }
        },
        // 首页导航
        {
            path: '/index',
            name: 'index',
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
                // 发现
                {
                    path: 'search',
                    name: 'search',
                    component: () => import('./views/index/Search'),
                },
                // 帮助
                {
                    path: 'help',
                    name: 'help',
                    component: () => import('./views/index/Help'),
                },
            ]
        },
        // 没有找到
        {
            path: '/notFound',
            name: 'notFound',
            component: () => import('./views/NotFound'),
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})
