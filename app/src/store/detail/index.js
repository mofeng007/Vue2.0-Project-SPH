import { reqGetGoodsInfo } from '@/api';
// detail模块的小仓库
const state = {
    goodInfo: {}
};
const actions = {
    // 获取产品详情
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGetGoodsInfo(skuId);
        if (result.code === 200) {
            commit('GETGOODINFO', result.data);
        }
    }
};
const mutations = {
    GETGOODINFO(state, goodInfo){
        state.goodInfo = goodInfo;
    }
};
// 计算属性
// 项目中getters的主要作用是为了简化仓库中的数据
const getters = {
    // 路径导航数据
    categoryView(state){
        return state.goodInfo.categoryView || {};
    },
    // 商品详情
    skuInfo(state){
        return state.goodInfo.skuInfo || {};
    },
    // 产品售卖信息
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || [];
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};