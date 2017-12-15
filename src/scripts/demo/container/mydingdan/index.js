import React,{Component} from "react";

export default class Mydingdan extends Component{

    componentWillMount(){
        if(!localStorage.username){
          this.props.router.push("/login")
        }
    }

    gobacks=()=>{
        this.props.router.go(-1)
    }
    render(){
        return(
            <div className="mydingdan">

                <div className="mydingdan-head">
                    <i className="iconfont icon-arrow-right" onClick={this.gobacks}></i>
                    <p>我的订单</p>
                </div>

            </div>
        )
    }
}