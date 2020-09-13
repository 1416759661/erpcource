/*此文件就没有按照AMD规范定义模块，但是又想在主模块里面调用*/

var  myCustomMod = {};      // 很重要，和shim中exports值必须一致
myCustomMod.add = function(num1, num2) {
    return num1 + num2;
};

myCustomMod.max = function(a,b) {
    if(a>b)
    {
    	return a;
    }
    else
    {
    	return b;
    }
}