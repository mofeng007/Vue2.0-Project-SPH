import { reqCategoryList } from '@/api';
import { reqGetBannerList } from "@/api";
import { reqGetFloorList } from "@/api";

// home模块的小仓库
const state = {
    // 三级菜单数据
    categoryList: [],
    //轮播图数据
    bannerList: [],
    // floor数据
    floorList:[],
};

const actions = {
    // 通过api里面的接口函数调用，向服务器发送请求，获取服务器数据
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        // console.log(result);

        if (result.code === 200) {
            commit("CATEGORYLIST", result.data);
        }
    },
    // 获取首页轮播图数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code === 200) {
            commit("BANNERLIST", result.data);
        }
    },

    // 获取floor数据
    async getFloorList({commit}){
        let result = await reqGetFloorList();
        if(result.code === 200){
            commit("FLOORLIST", result.data);
        }
    }
};

// 修改仓库
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    FLOORLIST(state,floorList){
        state.floorList = floorList;
    }
};

// 计算属性
const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
};