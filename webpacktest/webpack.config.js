
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//entry : "./app/index.js",//入口文件
	entry: {    //如果有多个文件，用大括号括起来
		build:"./app/index.js",
		second:"./app/second.js"
	},
	output:{
		path: "./build/",
		//filename: "build.js"
		filename: "[name].js" //多个文件，各自生成对应的文件
	},
	module : {  //定义了对模块的处理逻辑
		loaders: [ //定义了一系列的加载器
			{
				test:/\.css$/,
				//loader: "style!css!"
				loaders:['style','css'],
				exclude:"./node_modules"
			}
		]
	},
	devServer: {
		hot: true,
		inline: true
	},
	resolve: {
		extensions:['','.js','.css','.jsx'] //自动补全识别后缀
	},
	plugins: [
		new htmlWebpackPlugin({
			title:"欢迎",
			filename: "class.html", //如果不写，默认为index.html
			chunks:["second"]
		}),
		new htmlWebpackPlugin({
			title:"欢迎",
			chunks: ['build']   //规定用哪个js
		})

	]
}

