//控制层
//引入工具util 使用localStorage
import {store} from './util.js';

let app = {
	dataArr: [],
	info: function(){
		store("todo",app.dataArr);
	},
	addItem:function(value) {
		app.dataArr.push({
			id:Date.now(), //用于后面删除操作
			content:value,
			compile:false   //是否选中
		});
		app.info();
		app.render( app.dataArr );
	},
	toggleAll:function(bl) {
		app.dataArr.forEach((item)=>{
			item.compile = bl;
		})
		
		app.info();
		app.render( app.dataArr );
	},
	toggle: function(id) {
		app.dataArr.forEach((item)=>{
			if(item.id === id) {
				item.compile = !item.compile
			}
		});
		app.info();
		app.render( app.dataArr );
	},
	deleteItem: function(id) {
		var newarr = app.dataArr.filter((item)=>{
			return item.id !== id;
		})
		app.dataArr = newarr;
		app.info();
		app.render( app.dataArr );
	}
}

//取出存放的localStorage
app.dataArr = store("todo")||[];

//暴露模块
export default app;