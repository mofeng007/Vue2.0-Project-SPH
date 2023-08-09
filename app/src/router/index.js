// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';
// 使用插件
Vue.use(VueRouter);



export default new VueRouter({
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        return {
            // y代表滚动条在最上方
            y: 0
        }
    }
})