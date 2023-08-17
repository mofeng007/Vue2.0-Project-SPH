// 路由配置信息

// 引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';

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
    // 加入购物车成功
    {
        name: "addCartSuccess",
        path: "/addCartSuccess",
        component: AddCartSuccess,
        // 控制Footer组件的显示和隐藏
        meta: { show: true }
    },
    // 购物车页面
    {
        name: "shopCart",
        path: "/shopCart",
        component: ShopCart,
        // 控制Footer组件的显示和隐藏
        meta: { show: true }
    },
    // 结算页面
    {
        name: "trade",
        path: "/trade",
        component: Trade,
        // 控制Footer组件的显示和隐藏
        meta: { show: true }
    },
    // 支付页面
    {
        name: "pay",
        path: "/pay",
        component: Pay,
        // 控制Footer组件的显示和隐藏
        meta: { show: true }
    },

    // 重定向，在项目跑起来时，访问/，立马定位到首页
    {
        path: '*',
        redirect: "/home"
    }
]