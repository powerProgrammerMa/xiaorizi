import React,{Component} from "react";
import Head from "../../components/head";
import {Link} from "react-router";

import {connect} from "react-redux";
import {get_bangdancdtop3,get_bangdanqgtop3,get_bangdansort} from "../../actions"
@connect(
    (state)=>({
        bangdancdtop3:state.bangdancdtop3,
        bangdanqgtop3:state.bangdanqgtop3,
        bangdansort:state.bangdansort
    })

)





export default class Bangdan extends Component{

    componentWillMount(){
        const {dispatch} =this.props;
        dispatch(get_bangdancdtop3("/getbangdancdtop3",dispatch))
        dispatch(get_bangdanqgtop3("/getbangdanqgtop3",dispatch))
        dispatch(get_bangdansort("/getbangdansort",dispatch))
    }

    gotoqgtop=()=>{
        this.props.router.push("/bangdanqg")
    }
    gochengdu=()=>{
        this.props.router.push("/bangdancd")
    }

   
    render(){

        const {bangdancdtop3,bangdanqgtop3,bangdansort} =this.props;


        

        var html=null;
        var html1=null;
        var html2=null;

        if(bangdancdtop3.length>0){
            html=(
                bangdancdtop3.map((item,idx)=>{
                    return(

                        <dl key={idx}>
                        <dt>
                       <a href={item.m_url}>
                        <img src={item.img}/>
                      
                        </a>
                        </dt>
                       
                        <dd>
                            <h3>{item.name}</h3>
                            <p>{item.title}</p>
                            <p>{item.address}</p>
                            <p><i className="iconfont icon-shoucang"></i><span>{item.likenum}人想去</span></p>
                        </dd>
                    </dl>

                    )
                })
            )
        }

        if(bangdansort.length>0){
            html1=(
                bangdansort.map((item,idx)=>{
                    return(

                 <li key={idx}>
                    <p>
                <span>{item.name}</span>
                        <i className="iconfont icon-arrow-right"></i>
                    </p>
                    <div>

                {item.sortedshop.map((items,i)=>{

                    return(
                        <a key={i} href={items.m_url}>
                        <img src={items.img}/>
                        <h3>{items.name}</h3>
                        
                        </a>

                    )

                })}
               

                
                </div>
                </li> 
                        
                    )
                })

            )
        }

        if(bangdanqgtop3.length>0){
            html2=(
                bangdanqgtop3.map((item,idx)=>{
                    return(

                        
                        <dl key={idx}>
                        <dt>
                       <a href={item.m_url}>
                        <img src={item.img}/>
                       </a>
                        </dt>
                       
                        <dd>
                            <h3>{item.name}</h3>
                            <p>{item.title}</p>
                            <p>{item.address}</p>
                            <p><i className="iconfont icon-shoucang"></i><span>{item.likenum}人想去</span></p>
                        </dd>
                    </dl>



                    )
                })
            )
        }

        


        
        return(
            <div className="bangdan">
                <Head/>
                <div className="bangdan-content">
                
                <div className="banner">
                <img src="http://img1.xiaorizi.me/new_dj_deploy/image/2017/08/28/9cb0d68b8f0e42498ceafefd7388d9ff.jpg"/>
                </div>
                <div className="chengdu">
                    <div className="top">
                        <h2>成都小店TOP10</h2>
                        <p>24小时惊喜探索 每日24点更新</p>
                    </div>

                    <div className="bottom">
                      
                       
                        {html}

                     
                    </div>
                
                </div>

                <div className="chengdutopmore" onClick={this.gochengdu}>
                            <span>查看成都小店TOP10</span>
                            <i className="iconfont icon-arrow-right"></i>
                </div>
                <div className="renqi">

                    <div className="top">
                     <h2>人气小店集结</h2>
                    </div>

                    <div className="bottom">
                         <ul>
                         
                             {html1}

                         </ul>
                    </div>


                </div>
                <div className="quanguo">
                   <div className="top">
                        <h2>全国小店TOP10</h2>
                        <p>那些让人流连忘返的心头好店</p>
                    </div>

                    <div className="bottom">

                        {html2}

                    

                    </div>


                </div>

                <div className="quanguotopmore" onClick={this.gotoqgtop}>
                            <span>查看全国小店TOP10</span>
                            <i className="iconfont icon-arrow-right"></i>
                </div>

                </div>
            </div>
        )
    }
}