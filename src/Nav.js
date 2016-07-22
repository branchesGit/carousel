/*
这里写个移动的导航块
*/

import React from 'react'
import ReactDOM from 'react-dom'
let $ = require('./jquery-1.7.min');

class Nav extends React.Component{
	constructor( props ){
		super( props );

		this.state = {
			data: props.listData,
			index: props.index || 0,
			maxW: props.w || 600,
			paddingL: props.left || 16,
			paddingR: props.right || 16,
			marginD: props.marginD || 10,
			sideW: props.sideW || 20
		}
	}

	//在这里测量元素的长度, 
	//这里并没有获取到padding的值和margin的值
	compulatedDomWidth(){
		let t = this;
		let root = ReactDOM.findDOMNode(t);
		let $ul = $(root).find("ul");
		let $lis = $ul.find('li');

		let sideW = t.state.sideW;
		let marginD = t.state.marginD;
		let dis = t.state.paddingL + t.state.paddingR + t.state.marginD;
		let maxW = t.state.maxW;

		let w = 0;
		let ws = [];

		$lis.each(function(){
			let itemW = $(this).width() + dis;
			ws.push(itemW);
			w += itemW;
		});

		$ul.css({"width": w + 'px'})
		//需要添加导航按钮，
		//需要计算出起始项的下标
		let idx = t.state.index;

		if( w > maxW ){

			maxW -= 2 * sideW;
			maxW -= marginD;

		}
	}

	componentDidUpdate(){
		this.compulatedDomWidth();
	}

	componentDidMount(){
		this.compulatedDomWidth();
	}

	moveNavItem(dir){
		console.log( dir );

	}

	render(){
		var t = this;
		let listData = t.state.data;
		let len = listData.length; 
		let idx = t.state.index;

		return (
			<div style={{"position":'relative', "overflow":"hidden", maxWidth: t.state.maxW + 'px'}}>
				<ul className="branches-nav">
				{
					listData.map(function(info, idx){
						let cls = "branches-item";
						cls += idx === t.state.index ? ' cur' : '';

						return <li className={cls} key={idx}>
							<h1>{info.subjectName}</h1>
							<h1>{info.num}</h1>
						</li>
					})
				}
				</ul> 
				<div className="branches-aside leftN" style={{"display":"none"}} onClick={t.moveNavItem.bind(t,-1)}></div>
				<div className="branches-aside rightN" style={{"display":"none"}} onClick={t.moveNavItem.bind(t,1)}></div>
			</div>
		);
	}
} 
 
module.exports = Nav;