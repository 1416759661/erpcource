require.config({
		　　　　baseUrl: "js",
		　　　　paths: {
		　　　　　　"jquery": "jquery-1.11.0",
		　　　　}
});

require(['moduleA', 'moduleB'], function (moduleA, moduleB){
　　　　var c=moduleA.add(1,2);
		moduleB.show(c);
});
