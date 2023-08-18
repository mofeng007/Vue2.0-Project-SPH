import Vue from 'vue'
import App from './App.vue'

// 三级联动组件，全局组件
import TypeNav from '@/components/TypeNav'
// 轮播图组件，全局组件
import Carousel from '@/components/Carousel'
// 分页器组件，全局组件
import Pagination from '@/components/Pagination'

// 按需引入element-ui
import {Button,MessageBox} from 'element-ui';

// 第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
// 第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(Carousel.name, Carousel);
// 第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(Pagination.name, Pagination);
// element-ui button
Vue.component(Button.name, Button);

// 挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

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

// 引入图片懒加载插件
import VueLazyLoad from 'vue-lazyload'
import atm from '@/assets/1.gif';

Vue.use(VueLazyLoad,{
  // 懒加载默认图片
  loading:atm,
});

// 引入自定义插件
import myPlugins from '@/plugins/myPlugins';
Vue.use(myPlugins,{
  name:'myPlugins',
});

// 引入表单校验插件
import '@/plugins/validate';

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
