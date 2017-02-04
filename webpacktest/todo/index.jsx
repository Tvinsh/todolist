//view 层

import React from 'react';
import ReactDOM from 'react-dom';

//引入app.js
import app from './app.js';
//引入 Item 组件 
import Item from './item.jsx';
//引入css
require('./css/base.css');
require('./css/index.css');

class Main extends React.Component{
	render () {
		
		var dataArr = this.props.dataArr; //获取dataArr
		var content,footer,num=0;  //num表示没有被选中的item 用来判断是否全部被选中
		
		dataArr.reduce( (n,item)=>{
			num = item.compile? num : num+1;
		},0)
		console.log(num)
		if(dataArr.length !== 0) {
			content =  <section className="main">
		                <input 
		                	className="toggle-all" 
		                	type="checkbox" 
		                	checked={num === 0}
		                	onChange={this.toggleAll} 
		                />
		                <ul className="todo-list">
		                    {
		                    	dataArr.map(function(item,index){
		                    		return <Item key={index} {...item} 
		                    				toggle={app.toggle.bind(this,item.id)} 
		                    				deleteItem={app.deleteItem.bind(this,item.id)}
		                    			   />
		                    		//每个item都需要一个key值；每个item都是对象的形式，可以使用...这样的语法糖
		                    	}.bind(this))
		                    }
		                </ul>
		            </section>
		    
		    footer = <footer className="footer">
			            <span className="todo-count">
			            	<strong>{num}</strong>
			            	<span>条未选中</span>
			            </span>
		            </footer>
		}
		
		return (
			<div>
				<header className="header" >
                <h1>todos</h1>
                <input 
                	className="new-todo" 
                	placeholder="请输入内容" 
                	defaultValue="" 
                	onKeyDown={this.downHandle}
                />
            </header>
            {content}
            {footer}
			</div>
		)
	}
	
	downHandle(ev) {
		if( ev.keyCode === 13) {
			app.addItem(ev.target.value);
			ev.target.value = "";
		}
	}
	
	toggleAll(ev) {
		app.toggleAll(ev.target.checked)
	}
}
//用defaultValue 如果用value,需要配合onChange使用 ,checked 同样


//生成一个section
var section = document.createElement('section');

section.className = "todoapp";

document.body.appendChild(section);

//封装render 方法
function render(data) {
	//数据来源于app 中的dataArr
	ReactDOM.render(<Main dataArr={data}/>,section);
}

render(app.dataArr);

//将render方法赋给app,这样app.js里面就有了render
app.render = render;
