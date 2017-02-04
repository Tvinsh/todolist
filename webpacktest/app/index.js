
//这是一种形式，cmd
// var str = require('./app.js');
// document.body.innerHTML = "<div>"+ str +"</div>"

//还支持amd，依赖后置
// define(['./app.js'],function(str) {
// 	document.body.innerHTML = "<div>"+ str +"</div>"
// })

var str = require('./app');

require('./css/style');
//不能写反，处理顺序是从右往左的，先处理css，再处理style
document.body.innerHTML = "<div>"+ str +"</div>"