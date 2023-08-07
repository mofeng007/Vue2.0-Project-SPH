// 当前这个模块，API进行统一管理

import request from "./request";
import mockRequest from "./mockAjax";

// 服务器：http://gmall-h5-api.atguigu.cn

// 三级联动接口：/api/product/getBaseCategoryList  get  无参数
export const reqCategoryList = () =>{
    // 发送请求
    return request({url:'/product/getBaseCategoryList',method:'get'})
}

// 获取banner数据
export const reqGetBannerList = () =>{
    return mockRequest({url:'/banner',method:'get'})
}

// 获取floor数据
export const reqGetFloorList = () =>{
    return mockRequest({url:'/floor',method:'get'})
}
