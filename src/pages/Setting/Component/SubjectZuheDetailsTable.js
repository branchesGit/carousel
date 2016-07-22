import React from 'react'
import {Table, Icon} from 'antd'

"use strict";

const columns = [{
        title: '采用组合',
        dataIndex: 'zuhe',
        key: 'zuhe',
    },{
        title: '学号',
        dataIndex: 'stuID',
        key: 'stuID',
    },{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },{
        title: '第一志愿',
        dataIndex: 'firstVolunteer',
        key: 'firstVolunteer',
    },{
        title: '第二志愿',
        dataIndex: 'secondVolunteer',
        key: 'secondVolunteer',
    },{
        title: '第三志愿',
        dataIndex: 'thirdVolunteer',
        key: 'thirdVolunteer',
    },{
        title: '7选3个人报告',
        dataIndex: 'seven_choose3Report',
        key: 'seven_choose3Report',
    },{
        title: '成绩年级排名',
        dataIndex: 'gradeRank',
        key: 'gradeRank',
    }
];

const SubjectZuheDetailsTable = React.createClass({
    getInitialState(){
        return {
            data: {}
        };
    },
    componentWillMount(){
        this.setStateByData(this.props.data);
    },
    componentWillReceiveProps: function(nextProps) {
        this.setStateByData(nextProps.data);
    },
    
    setStateByData(datas){
        var data = this.transFromData(datas);
        this.setState({
            data: data
        });
    },

    transFromData(items){
        var data = [];
        for(var i=0; i<20; i++){
            data.push(items);
        }
        return data;
    },

    render(){
        return (
            <div>
                <div className="blue-table-header">
                    <Table dataSource={this.state.data}
                           columns={columns} pagination={false} shape="circle" />
                </div>
            </div>
        );
    }
})

module.exports = SubjectZuheDetailsTable;