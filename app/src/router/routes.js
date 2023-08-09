// 路由配置信息

// 引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';

export default [
    {
        name: "home",
        path: "/home",
        component: Home,
        // 控制Footer组件的显示和隐藏
        meta: { show: true }
    },
    {
        name: "search",
        path: "/search/:keyword?",
        component: Search,
        meta: { show: true },
        props: ($route) => ({
            keyword: $route.params.keyword,
            big: $route.query.big,
        }),
    },
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: { show: false }
    },
    {
        name: "register",
        path: "/register",
        component: Register,
        meta: { show: false }
    },
    // 详情页面
    {
        name: "detail",
        path: "/detail/:skuId",
        component: Detail,
        meta: { show: true }
    },

    // 重定向，在项目跑起来时，访问/，立马定位到首页
    {
        path: '*',
        redirect: "/home"

    }
]