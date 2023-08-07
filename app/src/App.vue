<template>
  <div>
    <Header />
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在home、search是显示的，在登录注册是隐藏的 -->
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 派发一个action，通知Vuex发送请求，获取数据，存储于仓库当中
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
