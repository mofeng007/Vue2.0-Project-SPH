import { reqGetSearchInfo } from '@/api';
// search模块的小仓库
const state = {
    searchList: {}
};
const actions = {
    // 获取search模块数据
    async getSearchList({ commit }, params = {}) {
        // 至少传一个空对象
        let result = await reqGetSearchInfo(params);
        if (result.code === 200) {
            commit('GETSEARCHLIST', result.data);
        }
    }
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    }
};
// 计算属性
// 项目中getters的主要作用是为了简化仓库中的数据
const getters = {
    goodsList(state) {
        // 如果没数据就返回空数组
        return state.searchList.goodsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList || [];
    },
    attrsList(state) {
        return state.searchList.attrsList || [];
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};