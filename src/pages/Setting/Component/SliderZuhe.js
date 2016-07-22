import React from 'react'
import {Icon, Button, Tabs} from 'antd'
import Slider from 'react-slick'

"use strict"

/*
var SamplePrevArrow = React.createClass({
    render: function() {
        return (
            <button {...this.props} style={{display: 'block'}}></button>
        );
    }
});

var SampleNextArrow = React.createClass({
    render: function() {
        return <button {...this.props} style={{display: 'block'}}></button>
    }
});
*/
var SliderZuhe = React.createClass({
    propTypes:{
        zuhes: React.PropTypes.array.isRequired
    },

    renderZuhes: function(){
        var tmp = [];
        var data = this.props.zuhes;
        for(var i=0; i<data.length; i++){
            tmp.push(
                <div key={""+i} id={i} onClick={this.props.onClick}>
                     <h3 id={i}>{data[i].name}<br/>{data[i].score}</h3>
                </div>
            )
        }
        return tmp;
    },

    render: function () {
        var settings = {
            arrows:true,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
            //prevArrow: <SamplePrevArrow />,
            //nextArrow: <SampleNextArrow />
        };
        var innerSlider = this.renderZuhes();
        return (
            <div>
                <h3> Image slider with one item at a time</h3>
                <Slider {...settings}>
                    {innerSlider}
                </Slider>
            </div>
        );
    }
});

module.exports=SliderZuhe;

