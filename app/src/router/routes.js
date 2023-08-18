// 路由配置信息

// 引入路由组件
// 路由懒加载方式
// import Home from '@/pages/Home';
// import Search from '@/pages/Search';

// 引入二级路由组件
// import MyOrder from '@/pages/Center/MyOrder'
// import GroupOrder from '@/pages/Center/GroupOrder'

// 路由懒加载


export default [
    {
        name: "home",
        path: "/home",
        // 路由懒加载
        component: () => import('@/pages/Home'),
        // 控制Footer组件的显示和隐藏
        meta: { show: true }
    },
    {
        name: "search",
        path: "/search/:keyword?",
        component: ()=> import('@/pages/Search'),
        meta: { show: true },
        props: ($route) => ({
            keyword: $route.params.keyword,
            big: $route.query.big,
        }),
    },
    {
        name: "login",
        path: "/login",
        component: ()=> import('@/pages/Login'),
        meta: { show: false }
    },
    {
        name: "register",
        path: "/register",
        component: ()=> import('@/pages/Register'),
        meta: { show: false }
    },
    // 详情页面
    {
        name: "detail",
        path: "/detail/:skuId",
        component: ()=> import('@/pages/Detail'),
        meta: { show: true }
    },
    // 加入购物车成功
    {
        name: "addCartSuccess",
        path: "/addCartSuccess",
        component:()=> import('@/pages/AddCartSuccess') ,
        // 控制Footer组件的显示和隐藏
        meta: { show: true }
    },
    // 购物车页面
    {
        name: "shopCart",
        path: "/shopCart",
        component:()=> import('@/pages/ShopCart') ,
        // 控制Footer组件的显示和隐藏
        meta: { show: true }
    },
    // 结算页面
    {
        name: "trade",
        path: "/trade",
        component: ()=> import('@/pages/Trade'),
        // 控制Footer组件的显示和隐藏
        meta: { show: true },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // 去交易页面必须由购物车页面过来
            if (from.path == '/shopCart') {
                next();
            } else {
                // 中断路由导航，停留当前页
                next(false);
            }
        }
    },
    // 支付页面
    {
        name: "pay",
        path: "/pay",
        component: ()=> import('@/pages/Pay'),
        // 控制Footer组件的显示和隐藏
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next();
            } else {
                next(false);
            }
        }
    },
    // 支付成功页面
    {
        name: "paysuccess",
        path: "/paysuccess",
        component:()=> import('@/pages/PaySuccess') ,
        // 控制Footer组件的显示和隐藏
        meta: { show: true }
    },
    // 个人中心
    {
        name: "center",
        path: "/center",
        component:()=> import('@/pages/Center') ,
        // 控制Footer组件的显示和隐藏
        meta: { show: true },
        // 二级路由组件
        children: [
            {
                // 我的订单
                name: 'myorder',
                path: 'myorder',
                component:()=> import('@/pages/Center/MyOrder') ,
            },
            {
                // 团购
                name: 'grouporder',
                path: 'grouporder',
                component:()=> import('@/pages/Center/GroupOrder') ,
            },
            // 重定向
            {
                path: "/center",
                redirect: "/center/myorder"
            }
        ]
    },

    // 重定向，在项目跑起来时，访问/，立马定位到首页
    {
        path: '*',
        redirect: "/home"
    }
]