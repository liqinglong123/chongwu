import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
// vue 发请求的插件
import axios from 'axios'
import VueAxios from 'vue-axios'
// 懒加载
import VueLazyload from 'vue-lazyload'
// 移动端touch事件
// https://github.com/vuejs/vue-touch/tree/next
import VueTouch from 'vue-touch'
Vue.use(VueTouch, { name: 'v-touch' });
// 懒加载配置 https://www.cnblogs.com/xyyt/p/7650539.html
Vue.use(VueLazyload, {
    preLoad: 1.3,//预加载高度比例
    loading: '../assets/12345.gif',//预加载图片
    attempt: 3 //尝试加载图片数量
});
// 安装请求插件
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
const routes = [
    { path: '/jingxuan', "name": "精选", component: require("./views/jingxuan/index.vue").default },
    { path: '/shipin', "name": "视频", component: require("./views/shipin/index.vue").default },
    { path: '/duanzi', "name": "段子", component: require("./views/duanzi/index.vue").default },
    { path: '/faxian', "name": "发现", component: require("./views/faxian/index.vue").default },
    { path: '*', redirect: '/jingxuan' }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})
new Vue({
    el: '#app',
    router,
    render: h => h(app)
})
