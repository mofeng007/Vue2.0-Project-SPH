// 对axios进行二次封装
import axios from "axios";

// 引入进度条
import nprogress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";

import store from "@/store";

// start:进度条开始，done:进度条结束

const request = axios.create({
    //基础路径，requests发出的请求在端口号后面会跟改baseURl
    baseURL: "/api",
    // 请求不超过5s
    timeout: 5000,
});

// 请求拦截器.发请求之前
request.interceptors.request.use(
    //config内主要是对请求头Header配置
    //比如添加token
    config => {
        if(store.state.detail.uuid_token){
            // 请求头添加字段,(和后端商量一致，userTempId)
            config.headers.userTempId = store.state.detail.uuid_token;
        }
        // 需要携带token带给服务器
        if(store.state.user.token){
            config.headers.token = store.state.user.token;
        }
        // 进度条开始
        nprogress.start();
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器,服务器数据回来以后，响应拦截器可以检测到，做一些事情
request.interceptors.response.use(
    response => {
        nprogress.done();
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);


// 对外暴露
export default request;