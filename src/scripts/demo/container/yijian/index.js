import React,{Component} from "react";
import axios from "axios"


export default class Yijian extends Component{

    componentWillMount(){
        if(!localStorage.username){
          this.props.router.push("/login")
        }

        axios.get("http://www.hulusaas.com/api/search/users",{
            params:{
                name:"查",
                start:0,
                take:10
            }
        })
        .then(res=>{
            console.log(res.data)
        })

       
    }

    gobacks=()=>{
        this.props.router.go(-1)
    }
    render(){
        return(
            <div className="yijian">

                <div className="yijian-head">
                    <i className="iconfont icon-arrow-right" onClick={this.gobacks}></i>
                    <p>意见反馈</p>
                </div>

            </div>
        )
    }
}