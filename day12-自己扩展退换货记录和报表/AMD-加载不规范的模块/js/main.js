/*
 加载自定义的不规范的模块
 
 注意：require.config配置shim中exports的值，一定要与相关文件中暴露出全局变量名称一致。
 如果暴露出多个全局变量，那么exports可以指定其中任何一个，作为模块的返回结果。
 建议只使用一个全局变量，已减少冲突的可能性。

*/

require.config({
    waitSeconds: 0,
    baseUrl: 'js/',
    paths: {
        myCustomMod: "myCustomMod"
    },
    shim: {
        "myCustomMod": {
            deps: [],
            exports: "myCustomMod"
        }
    }
});
//调用了一个不规范的模块（即没有按照AMD规范写的模块）；

define(["myCustomMod"], function(myCustomMod) {
    console.log(myCustomMod.max(1, 2));
});