// vue插件一定暴露一个对象
let myPlugins = {};
myPlugins.install = function(Vue,options){
    Vue.directive(options.name,(element,params)=>{
        // 变成大写
        element.innerHTML = params.value.toUpperCase();
    });
    // console.log("调用自定义插件！",options)
}

export default myPlugins;