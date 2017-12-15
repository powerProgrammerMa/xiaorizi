import React,{Component} from "react";

export default class Mymessage extends Component{

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
            <div className="mymessage">

                <div className="mymessage-head">
                    <i className="iconfont icon-arrow-right" onClick={this.gobacks}></i>
                    <p>我的消息</p>
                </div>

            </div>
        )
    }
}