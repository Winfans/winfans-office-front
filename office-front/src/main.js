import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/element.js'
import './assets/iconfont/iconfont.css'
import qs from 'qs'



Vue.config.productionTip = false;

Vue.prototype.BASE_URL = "http://localhost:12649";
Vue.prototype.$qs = qs;


router.beforeEach((to, from, next) => {
    const needLogin = to.matched.some(route => route.meta && route.meta.login);
    if (needLogin) {
        const isLogin = document.cookie.includes('login=true');
        if (isLogin) {
            next();
            return;
        }
        const toLoginFlag = window.confirm('该页面需要登录后才能访问，是否登录？')
        if (toLoginFlag) {
            next('/login');
        }
        return;
    }
    next();
});



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
