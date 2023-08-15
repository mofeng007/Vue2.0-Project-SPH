// 登陆注册模块仓库
import { reqGetCode, reqUserRegister } from '@/api';
// search模块的小仓库
const state = {
    code: '',
};
const actions = {
    // 获取验证码
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit('GETCODE', result.data);
            return 'ok';
        }
    },

    // 用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            return 'ok';
        }else{
            return Promise.reject(new Error('注册失败'));
        }
    },
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
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