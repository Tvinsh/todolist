
var React = require("react"); //会在node_modules里找
var ReactDOM = require("react-dom");

import App from './app.jsx'; //es6语法，从当前目录引入app.jsx

var Hello = React.createClass({
	render : function() {
		return (
			
			<div>
				1111
				<App />
			</div>
			
		)
	}
});

var div1 = document.createElement('div');

document.body.appendChild(div1);

ReactDOM.render(<Hello />,div1);
