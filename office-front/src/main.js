import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import './plugins/element.js'
import './assets/iconfont/iconfont.css'
import qs from 'qs'
import moment from 'moment'
import VueCookies from 'vue-cookies'
import JQuery from 'jquery';


Vue.use(VueCookies);


Vue.config.productionTip = false;

Vue.prototype.BASE_URL = "http://localhost:12649";
Vue.prototype.$qs = qs;
Vue.prototype.$moment = moment;
Vue.prototype.$ = JQuery;

router.beforeEach((to, from, next) => {
    const needLogin = to.matched.some(route => route.meta && route.meta.login);
    if (needLogin) {
        const isLogin = document.cookie.includes('b0ad13e59c636ca3709e2622089f7718=aba56d95f20f3726d74cd5e37da00efd');
        if (isLogin) {
            next();
            return;
        }
        ElementUI.MessageBox({
            message: '该页面需要登录后才能访问，是否登录？',
            title: '提示',
            showConfirmButton: true,
            showCancelButton: true,
            type: 'warning'
        }).then(() => {
            next('/login');
        }).catch(() => {
        });
        return;
    }
    next();
});


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
