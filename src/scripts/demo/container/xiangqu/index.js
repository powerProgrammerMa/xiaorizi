import React,{Component} from "react";

export default class Xiangqu extends Component{

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
            <div className="xiangqu">

                <div className="xiangqu-head">
                    <i className="iconfont icon-arrow-right" onClick={this.gobacks}></i>
                    <p>想去</p>
                </div>

            </div>
        )
    }
}