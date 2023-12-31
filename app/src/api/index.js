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

// 登录
export const reqUserLogin = (data) => request({ url: `/user/passport/login`, data, method: 'post' });

// 获取用户信息，带token
export const reqUserInfo = () => request({ url: `/user/passport/auth/getUserInfo`, method: 'get' });

// 退出登录
export const reqLogout = () => request({ url: `/user/passport/logout`, method: 'get' });

// 获取用户地址信息
export const reqAddressInfo = () => request({ url: `/user/userAddress/auth/findUserAddressList`, method: 'get' });

// 获取商品清单
export const reqOrderInfo = () => request({ url: `/order/auth/trade`, method: 'get' });

// 提交订单
export const reqSubmitOrder = (tradeNo,data) => request({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' });

// 获取支付信息
export const reqPayInfo = (orderId) => request({ url: `/payment/weixin/createNative/${orderId}`,method:'get'});

// 获取支付订单状态
export const reqPayStatus = (orderId) => request({ url: `/payment/weixin/queryPayStatus/${orderId}`,method:'get'});

// 获取个人中心数据，我的订单列表
export const reqMyOrderList = (page,limit) => request({ url: `/order/auth/${page}/${limit}`, method: 'get' });




