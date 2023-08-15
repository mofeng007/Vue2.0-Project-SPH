// 当前这个模块，API进行统一管理

import request from "./request";
import mockRequest from "./mockAjax";

// 服务器：http://gmall-h5-api.atguigu.cn

// 三级联动接口：/api/product/getBaseCategoryList  get  无参数
export const reqCategoryList = () => {
    // 发送请求
    return request({ url: '/product/getBaseCategoryList', method: 'get' })
};

// 获取banner数据
export const reqGetBannerList = () => {
    return mockRequest({ url: '/banner', method: 'get' })
};

// 获取floor数据
export const reqGetFloorList = () => mockRequest.get("/floor");


// 获取搜索模块数据
// 当前接口，给服务器传默认参数（至少是一个空对象）
export const reqGetSearchInfo = (params) => {
    return request({ url: "/list", method: "post", data: params })
};

// 获取详情接口
export const reqGetGoodsInfo = (skuId) => request({ url: `/item/${skuId}`, method: 'get' });

// 将产品添加到购物车，更新购物车
export const reqAddOrUpdateShopCart = (skuId, skuNum) => request({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' });

// 获取购物车列表
export const reqCartList = () => request({ url: '/cart/cartList', method: 'get' });

// 删除购物车商品
export const reqDeleteCartById = (skuId) => request({ url: `/cart/deleteCart/${skuId}`, method: 'delete' });

// 修改商品选中状态
export const reqUpdateCheckedById = (skuId, isChecked) => request({ url: `cart/checkCart/${skuId}/${isChecked}`, method: 'get' });

// 获取验证码
export const reqGetCode = (phone) => request({ url: `/user/passport/sendCode/${phone}`, method: 'get' });

// 注册
export const reqUserRegister = (data) => request({ url: `/user/passport/register`, data, method: 'post', });
