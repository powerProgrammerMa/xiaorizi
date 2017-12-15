import React,{Component} from "react";
import {Link} from "react-router";

export default class Minsu extends Component{
    constructor(props){
       super(props);
       this.state={
           footList:[
               {path:"/home",txt:"首页",icon:"icon-icon"},
               {path:"/minsu",txt:"民宿",icon:"icon-minsu"},
               {path:"/bangdan",txt:"榜单",icon:"icon-bangdan"},
               {path:"/my",txt:"我的",icon:"icon-wode"},
           ]
       }
    }

    render(){
        const {footList} =this.state;
        return(
            <div className="foot">
                {
                  footList.map((item,idx)=>{
                      return(
                          <Link to={item.path} key={idx} activeClassName="active">
                          <i className={"iconfont "+item.icon}></i>
                          <span>{item.txt}</span>
                          </Link>
                      )
                  })
                }

            </div>
        )
    }
}