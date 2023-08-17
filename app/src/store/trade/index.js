import { reqAddressInfo,reqOrderInfo } from '@/api';
const state = {
    address:[],
    orderInfo:{},
};
const actions = {
    // 获取地址信息
    async getAddressInfo({commit}){
        let result = await reqAddressInfo();
        if(result.code === 200){
            commit('GETUSERADDRSEE',result.data);   
            return 'ok';
        }else{
            return Promise.reject(new Error('获取地址失败！'));
        }
    },

    // 获取商品清单
    async getOrderInfo({commit}){
        let result = await reqOrderInfo();
        if(result.code === 200){
            commit('GETORDERINFO',result.data);   
            return 'ok';
        }else{
            return Promise.reject(new Error('获取商品清单失败！'));
        }
    },
};
const mutations = {
    // 存储地址
    GETUSERADDRSEE(state,address){
        state.address = address;
    },
    // 存储商品清单
    GETORDERINFO(state,orderInfo){
        state.orderInfo = orderInfo;
    }
};
// 计算属性
// 项目中getters的主要作用是为了简化仓库中的数据
const getters = {

};

export default {
    state,
    actions,
    mutations,
    getters
};