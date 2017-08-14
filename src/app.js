import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'nav/Nav.js';
import CardWrap from 'cardWrap/CardWrap.js';

require('./common/style/main.css');

let data = [
    {
        number :1,
        name :"tan",
        url : require('img/1.1.2.2_2..png')
    },
    {
        number :2,
        name :"xiao",
        url : require('img/1.1.2.2_2..png')
    },
    {
        number :3,
        name :"jian",
        url : require('img/1.1.2.2_2..png')
    }
]

ReactDOM.render(
	<div className="ui container">
        <Nav></Nav>
        <CardWrap data = { data }></CardWrap>
    </div>,
	document.getElementById('app')
);

if(module.hot){
	module.hot.accept();
}