import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from '@/api';
import { reject } from 'lodash';
// search模块的小仓库
const state = {
    cartList: []
};
const actions = {
    // 获取购物车列表
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code === 200) {
            commit('GETCARTLIST', result.data);
        }
    },

    // 删除购物车产品
    async deleteCartListBySkuId({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code === 200) {
            return 'ok';
        } else {
            return Promise, reject(new Error('删除失败'));
        }
    },

    // 修改勾选状态
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedById(skuId, isChecked);
        if (result.code === 200) {
            return 'ok';
        } else {
            return Promise, reject(new Error('修改失败'));
        }
    },

    // 删除全部勾选的商品
    deleteAllCheckedCart({ dispatch, getters }) {
        // context可以理解为一个小仓库
        // 获取购物车中全部产品
        let promiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId', item.skuId) : "";
            // 将每一次返回的promise添加到数组当中
            promiseAll.push(promise);
        });
        // Promise.all[p1,p2,p3]。p1,p2,p3是一个个的promise对象，全部的promise成功，返回成功，如果有一个失败，则返回失败
        return Promise.all(promiseAll);
    },

    // 修改全部产品勾选状态
    updateAllCartsChecked({ dispatch, state }, isChecked) {
        let promiseAll = [];
        state.cartList[0].cartInfoList.forEach(item => {
            let promise = dispatch('updateCheckedById', { skuId: item.skuId, isChecked });
            promiseAll.push(promise);
        });
        return Promise.all(promiseAll);
    }
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    }
};
// 计算属性
// 项目中getters的主要作用是为了简化仓库中的数据
const getters = {
    // 简化
    cartList(state) {
        return state.cartList[0] || {};
    },


};

export default {
    state,
    actions,
    mutations,
    getters
};