// 当前这个模块，API进行统一管理

import request from "./request"

// 服务器：http://gmall-h5-api.atguigu.cn

// 三级联动接口：/api/product/getBaseCategoryList  get  无参数
export const reqCategoryList = () =>{
    // 发送请求
    return request({url:'/product/getBaseCategoryList',method:'get'})
}
