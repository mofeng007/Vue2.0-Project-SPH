// 登陆注册模块仓库
import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from '@/api';
import { setToken, getToken, removeToken } from "@/utils/token";
// search模块的小仓库
const state = {
    code: '',
    token: getToken(),
    userInfo: {},
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
        } else {
            return Promise.reject(new Error('注册失败'));
        }
    },

    // 用户登录
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        if (result.code == 200) {
            // 拿到token
            commit('USERLOGIN', result.data.token);
            // 本地持久化存储
            setToken(result.data.token);
            return 'ok';
        }
        else {
            return Promise.reject(new Error('登陆失败！'));
        }
    },

    // 获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        if (result.code == 200) {
            commit('GETUSERINFO', result.data);
            return 'ok';
        } else {
            return Promise.reject(new Error('获取用户信息失败'));
        }
    },

    // 退出登录
    async userLogout({ commit }) {
        let result = await reqLogout();
        if (result.code == 200) {
            commit('CLEAR');
            return 'ok';
        } else {
            return Promise.reject(new Error('退出登录失败'));
        }
    },



};
const mutations = {
    // 存储验证码
    GETCODE(state, code) {
        state.code = code;
    },
    // 存储token
    USERLOGIN(state, token) {
        state.token = token;
    },
    // 获取用户信息
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    // 清除本地数据
    CLEAR(state) {
        state.token = '';
        state.userInfo = {};
        removeToken();
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