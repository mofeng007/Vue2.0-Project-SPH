// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

// 使用插件
Vue.use(VueRouter);

// 引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';


export default new VueRouter({
    routes:[
        {
            name:"home",
            path:"/home",
            component:Home,
            // 控制Footer组件的显示和隐藏
            meta:{show:true}
        },
        {
            name:"search",
            path:"/search/:keyWord?",
            component:Search,
            meta:{show:true},
            props:($route) =>{
                    return {
                        keyWord: $route.params.keyWord,
                        k: $route.query.k,
                    }
                }
        },
        {
            name:"login",
            path:"/login",
            component:Login,
            meta:{show:false}
        },
        {
            name:"register",
            path:"/register",
            component:Register,
            meta:{show:false}
        },

        // 重定向，在项目跑起来时，访问/，立马定位到首页
        {
            path:'*',
            redirect:"/home"

        }
    ]
})