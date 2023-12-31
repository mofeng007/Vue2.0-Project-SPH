// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

import store from '@/store';
// 使用插件
Vue.use(VueRouter);



let router = new VueRouter({
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        return {
            // y代表滚动条在最上方
            y: 0
        }
    }
});

// 全局守卫，前置守卫
router.beforeEach(async (to, from, next) => {

    // next();
    let token = store.state.user.token;
    // 用户信息
    let name = store.state.user.userInfo.name;
    if (token) {
        // 已经登陆了就不能去登录页
        if (to.name == 'login') {
            next({ name: 'home' });
        } else {
            // 登录了，去的不是login
            // 如果用户名已有
            if (name) {
                next();
            } else {
                // 没有用户信息,派发action
                try{
                    // 获取成功
                    await store.dispatch("getUserInfo");
                    next();
                }catch(err){
                    // token失效了,获取不到用户信息
                    // 清除token
                   await store.dispatch('userLogout');
                   next({ name: 'login' });
                }
            }
        }
    } else {
        // 未登录,不能去支付相关，个人中心等
        let toPath = to.path;
        if(toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay')!=-1 || toPath.indexOf('/center')!=-1){
            // 把未登录时想要去的地址信息存储于路由中，此时登录后会直接跳到相应页面
            next('/login?redirect='+toPath);
        }else{
            next();
        }
    }
});


export default router;