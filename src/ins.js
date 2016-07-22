import React from 'react'
import ReactDOM from 'react-dom'

let Nav = require('./Nav');

class Ins extends React.Component{
	constructor( props ){
		super( props );
	}

	render(){
		return <Nav listData={[{"subjectName": "物化生", "num": 150}, {"subjectName": "物化生", "num": 100},{"subjectName": "物化生", "num": 150}
		,{"subjectName": "物化生", "num": 150},{"subjectName": "物化生", "num": 150},{"subjectName": "物化生", "num": 150},{"subjectName": "物化生", "num": 150},{"subjectName": "物化生", "num": 150}]}></Nav>
	}
}


module.exports = Ins;