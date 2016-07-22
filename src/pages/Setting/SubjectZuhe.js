import React from 'react'

import {Table, Modal, Button, Row, Col, Icon} from 'antd'

import SliderZuhe from './Component/SliderZuhe'
import SubjectZuheDetailsTable from './Component/SubjectZuheDetailsTable'
import * as context from './SubjectZuheContext'

"use strict"


var SubjectZuhe = React.createClass({



	getInitialState(){
		return {
			studata: {}
		}
	},

	componentWillMount(){
		this.setState({
			studata: context.getWulihuaxueshengwu()[0]
		})
	},

	handleClick(event){
		alert("hello, 我是弹窗哦");
	},

	handleZuheCLick(event){
		let curID = $(event.target).attr("id");
		if(curID === undefined){
			curID=$(event.target).parent().attr("id");
		}
		let i_curID = Number(curID);
		alert("ID:"+ curID);
		const data = context.getWulihuaxueshengwu();
		const index = i_curID % data.length;
		this.setState({
			studata:data[index]
		});
	},

	render(){
		var t = this;
		var tabs = context.getTabs();
		return (
			<div width="500px">
				<SliderZuhe zuhes={tabs} onClick={t.handleZuheCLick}/>

				<SubjectZuheDetailsTable data={this.state.studata} />
				<Row>
					<Col span={18} offset={21}>
							<Button type="primary" onClick={t.handleClick}>走班模式选择</Button>
					</Col>
				</Row>
			</div>
		)
	}

})

module.exports = SubjectZuhe;