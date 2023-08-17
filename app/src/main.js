import Vue from 'vue'
import App from './App.vue'

// 三级联动组件，全局组件
import TypeNav from '@/components/TypeNav'
// 轮播图组件，全局组件
import Carousel from '@/components/Carousel'
// 分页器组件，全局组件
import Pagination from '@/components/Pagination'

// 第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
// 第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(Carousel.name, Carousel);
// 第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(Pagination.name, Pagination);

// 引入路由器
import router from "@/router";

// 引入store
import store from '@/store';

//引入Swiper样式
import 'swiper/swiper-bundle.min.css';


// 引入mock
import "@/mock/mockServe";

// 统一接收api里面的全部请求函数
import * as API from "@/api";


// 关闭vue的生产提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  store
}).$mount('#app')
