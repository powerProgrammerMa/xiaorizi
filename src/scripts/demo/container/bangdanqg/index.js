
import React,{Component} from "react";

import {connect} from "react-redux";
import {get_bangdanqgtop10} from "../../actions";
@connect(
    (state)=>({
        bangdanqgtop10:state.bangdanqgtop10
        
    })
)

export default class Bangdanqg extends Component{

    componentWillMount(){
        const {dispatch} =this.props;
        dispatch(get_bangdanqgtop10("/getbangdanqgtop10",dispatch))

    }
    gobacks=()=>{
        this.props.router.go(-1)
    }

    render(){

        const {bangdanqgtop10}=this.props;
     
        var html=null;

        if(bangdanqgtop10.length>0){
            html=(


                bangdanqgtop10.map((item,idx)=>{

                    return(

                        <li key={idx}>
                        <dl>
                               <dt>
                                   <a href={item.m_url}>
                               <img src={item.img}/>
                                   </a>
                               </dt>
                               <dd>
                                   <h2>TOP{idx+1} {item.name}</h2>
                                   <p>{item.title}</p>
                                   <p>地址：{item.address}</p>
                                   <p>
                                       <i className="iconfont icon-shoucang"></i>
                                       <span>{item.likenum}人想去</span>
                                   </p>
                               </dd>
                           </dl>
       
                           <div>
                           {item.recommend_reason}
                           </div>
       
                       </li>
   

                    )

                  
                })
               

            )
        }

    
        return(
            <div className="bangdancd">

                <div className="bangdancd-head">

                <i className="iconfont icon-arrow-right" onClick={this.gobacks}></i>
                <p>榜单</p>
                <i className="iconfont icon-fenxiang"></i>

                </div>

                <div className="bangdancd-content">

                    <div className="banner">
                       <img src="http://img1.xiaorizi.me/new_dj_deploy/image/2017/08/28/d4dcb4ce2da54e91824185ac656ea3f2.jpg"/>
                    </div>

                    <div className="content">
                        <ul>
                            {/* <li>
                            <dl>
                                    <dt>
                                    <img src={require("../../../../assets/images/3.png")}/>
                                    </dt>
                                    <dd>
                                        <h2>TOP1 童话镇fairy-town</h2>
                                        <p>童话镇萌物集中营</p>
                                        <p>地址：级大师大快速打开撒打客服的时间分</p>
                                        <p>
                                            <i className="iconfont icon-shoucang"></i>
                                            <span>272人想去</span>
                                        </p>
                                    </dd>
                                </dl>

                                <div>
                                级大师大快速打开撒打客服的时间分级大师大快速打开撒打客服的时间分级大师大快速打开撒打客服的时间分级大师大快速打开撒打客服的时间分
                                </div>

                            </li> */}

                            {html}


                        </ul>

                    </div>


                </div>
               
            </div>
        )
    }
}

