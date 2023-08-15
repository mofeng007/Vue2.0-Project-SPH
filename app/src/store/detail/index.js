import { reqGetGoodsInfo,reqAddOrUpdateShopCart } from '@/api';
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
    },

    // 添加到购物车
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result = await  reqAddOrUpdateShopCart(skuId,skuNum);
        // 加入购物车后(发请求)，前台将参数带给服务器，服务器写入数据成功，并没有返回其他数据，
        // 只是返回code==200，代表操作成功，因为没有返回数据，所以不需要三连环存储数据
        if(result.code === 200){
            return "ok"
        }else{
            // 加入失败
            return Promise.reject(new Error('请求失败'))
            console.log("dasdasdasd",result);
        }
        console.log("dasdasdasd",result);
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