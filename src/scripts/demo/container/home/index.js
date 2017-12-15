import React,{Component} from "react";
import ReactSwipe from "../../components/reactswipe";
import Head from "../../components/head";
import {Link} from "react-router";
import { Carousel } from 'antd';
import axios from "axios";


import layer from "../../../../assets/utils/layer/mobile/layer.js";


import {get_homebanner,get_homeshangquan,get_homecontent,changemyheart} from "../../actions"
import {connect} from "react-redux";
@connect(
    (state)=>({
        imgList:state.imgList,
        shangquan:state.shangquan,
        homecontent:state.homecontent,
        hearts:state.hearts
    })
)
export default class Home extends Component{

    


    componentWillMount(){
        const {dispatch} =this.props;
        dispatch(get_homebanner("/gethomebanner",dispatch))
        dispatch(get_homeshangquan("/gethomeshangquan",dispatch))
        dispatch(get_homecontent("/gethomecontent",dispatch))

       
    }

    joinmyheart=(e,i,id,m_url,title,name,img)=>{

        const {dispatch,hearts} =this.props;
        var bStop=false;
       
        if(localStorage.username){

            var username=localStorage.username;
            axios.get("/changeheart",{
                params:{
                    id,
                    username,
                    m_url,
                    title,
                    name,
                    img

                }
            })
              .then(res=>{
                 

                  dispatch(get_homecontent("/gethomecontent",dispatch));
                  if(res.data=="yesheart"){
                      
                    layer.open({
                        content: '收藏成功'
                        ,style: 'background-color:#09C1FF; color:#fff; border:none;' //自定风格
                        ,time: 1
                      });
                    document.querySelectorAll(".noheart")[i].style.fontWeight="bolder"
                    document.querySelectorAll(".noheart")[i].style.color="red"
                   
                    
                }else if(res.data=="noheart"){
                   
                    
                    layer.open({
                        content: '取消收藏成功'
                        ,style: 'background-color:#09C1FF; color:#fff; border:none;' //自定风格
                        ,time: 1
                      }); 
                    document.querySelectorAll(".noheart")[i].style.fontWeight=""
                    document.querySelectorAll(".noheart")[i].style.color="#999999"
                }


              })
        
            }else{
                 this.props.router.push("/login")
              }




        

    }


    render(){

        const {imgList,shangquan,homecontent,hearts} =this.props;
       
        var html,html1,html2=null;
        if(imgList.length>0){
            html=(
                
                <Carousel autoplay>
                {
                    imgList.map((item,idx)=>{
                            return (
                               
                                <img src={item.img} key={idx}/>
                            )
                        })
                    }
                </Carousel>

            )
        }

        if(shangquan.length>0){
            html1=(

                shangquan.map((item,idx)=>{
                    return(

                        <li key={idx}>
                        <Link to={"/homesqcunxilu?title="+item.name}><img src={item.img}/></Link>
                         <p>{item.name}</p>
                         <p>{item.intro}</p>
                       </li>
                    )
                })
                
            )
        }



        if(homecontent.length>0){
            html2=(

                homecontent.map((item,idx)=>{
                    return(

                        <div className="bottom" key={idx}>
                         <a href={item.m_url}>
                         <img src={item.img}/>
                         </a>
                        
                         <p>
                             <span>{item.title}</span>
                             <span><i>{item.likenum}</i>人想去</span>
                         </p>

                         <p>
                             <span> {item.name}</span>
                           
                            <i className={"iconfont icon-shoucang noheart"} onClick={(e)=>this.joinmyheart(e,idx,item.id,item.m_url,item.title,item.name,item.img)}></i>
                            
                         </p>


                     </div>


                    )
                })
                
            )
        }




        return(
            <div className="home">
                <Head/>
                <div className="home-content">
                 <div className="banner">

                {html}

                 </div>

                 <div className="nav">
                     <Link to="/">
                      <i className="iconfont icon-VIP"></i>
                      <span>PASS卡</span>
                     </Link>

                     <Link to="/homefj">
                      <i className="iconfont icon-fujin"></i>
                      <span>附近好店</span>
                     </Link>

                     

                     <Link to="/homejx">
                      <i className="iconfont icon-zhuantigrey"></i>
                      <span>精选专题</span>
                     </Link>

                     <Link to="/homegp">
                      <i className="iconfont icon-haoren"></i>
                      <span>匠人匠心</span>
                     </Link>
                 </div>
                 <div className="shangquan">

                     <div className="top">
                         <p>商圈</p>
                         <i className="iconfont icon-arrow-right"></i>
                     </div>
                     <div className="bottom">
                     <h4>小日子陪你捕捉城市惊喜</h4>
                        
                        <ul>
                           
                            {html1}
                        </ul>
                        
                        

                 </div>
                 </div>
               
                 <div className="haodian">
                     <div className="top">
                         <h2>好店</h2>
                         <p>去了解美 从日出到日落</p>
                     </div>

                     {html2}


                 </div>
                </div>
                
            </div>
        )
    }
}