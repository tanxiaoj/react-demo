import React from 'react';
import ReactDOM from 'react-dom';

require('./common/style/main.css');

let w1 = 'hello' ,
	w2 = 'world' ;

ReactDOM.render(
	<div style={ {color :"#999"} }>{w1} <span className="welcome" data-abc = '9'>{w2}</span></div>,
	document.getElementById('app')
);

if(module.hot){
	module.hot.accept();
}