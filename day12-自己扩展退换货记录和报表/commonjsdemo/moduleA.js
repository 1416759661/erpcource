function sayHi(){
    console.log("hi");
}

function sayHello(){
    console.log("hello");
}
//非常重要，导出模块功能（供外部使用）
exports.sayHi = sayHi;
exports.sayHello= sayHello;
