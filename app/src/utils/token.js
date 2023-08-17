// 对外暴露一个函数
// 持久化token
export const setToken = (token) =>{
    localStorage.setItem('TOKEN',token);
}

// 获取token
export const getToken = () =>{
    return localStorage.getItem('TOKEN');
}

// 清除token
export const removeToken = () =>{
    localStorage.removeItem('TOKEN');
}