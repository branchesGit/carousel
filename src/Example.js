import React from 'react'
import ReactDOM from 'react-dom'

var Carousel = require('./Carousel');

class Example extends React.Component{
	constructor( props ){
		super( props );
	}

  render(){   
    return (<Carousel>  
    <div style={{"width":"100%"}}><img
src="src/images/beautiful_nature.jpg" /></div> 
<div style={{"width":"100%"}}
><img src="src/images/city_night.jpg"/></div>
</Carousel>)   } }


module.exports = Example;