import Vue from 'vue'
import App from './App.vue'

// 三级联动组件，全局组件
import TypeNav from '@/components/TypeNav'
// 第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav);

// 轮播图组件，全局组件
import Carousel from '@/components/Carousel'
// 第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(Carousel.name,Carousel);

// 引入路由器
import router from "@/router";

// 引入store
import store from '@/store';

//引入Swiper样式
import 'swiper/swiper-bundle.min.css';




// 引入mock
import "@/mock/mockServe";

// 测试
// import {reqCategoryList} from '@/api'
// console.log("xxxxxx",reqCategoryList());


// 关闭vue的生产提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
