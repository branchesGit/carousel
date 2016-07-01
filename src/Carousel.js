import React from 'react'
import ReactDOM from 'react-dom'

var _extend = Object.assign || function(){}
let classnames = require('classnames');

class Carousel extends React.Component{
	constructor( props ){
		super( props );
	}

	renderItem( idx, item){
		console.log( idx, item );
	}

	render(){
		let t = this,
			props = t.props,
			children = props.children,
			classes = {
				'branche-carousel': true
			};
		
		var baseProps = {
			className: classnames( classes )
		};

		var reactDiv = React.createElement('div',{className:"append-div"});
		var childs = Array.prototype.concat.apply( children, [reactDiv] );

		return React.createElement('div', baseProps, 
			React.Children.map(childs, t.renderItem.bind(t)) );
	}

}

module.exports = Carousel;