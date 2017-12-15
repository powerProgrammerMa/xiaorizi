import React,{Component} from "react";

export default class Head extends Component{
    render(){
        return(
            <div className="head">
                <div className="left">
                    <i className="iconfont icon-location"></i>
                    <span>成都</span>
                </div>
                <div className="center">小日子</div>
                <div className="right">
                    <i className="iconfont icon-sousuo"></i>
                </div>
                
            </div>
        )
    }
}
