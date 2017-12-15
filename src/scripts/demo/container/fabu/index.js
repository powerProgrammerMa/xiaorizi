import React,{Component} from "react";

export default class Yijian extends Component{

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
            <div className="fabu">

                <div className="fabu-head">
                    <i className="iconfont icon-arrow-right" onClick={this.gobacks}></i>
                    <p>发布小店</p>
                </div>

            </div>
        )
    }
}