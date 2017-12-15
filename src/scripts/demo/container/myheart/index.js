import React,{Component} from "react";
import Swiper from "../../../../assets/utils/swiper-3.3.1.min.js"
import $ from "../../../../assets/utils/jquery-1.10.1.min.js";

import {get_myheart} from "../../actions";
import {connect} from "react-redux";
@connect(
    (state)=>({
        myheart:state.myheart

    })
)

export default class Myheart extends Component{

    componentWillMount(){
        const {dispatch} =this.props;
        var username=localStorage.username;
        if(username){
            dispatch(get_myheart("/getmyheart?username="+username,dispatch))
        }else{
            this.props.router.push("/login")
        }
       
    }

    componentDidMount(){

        var navSwiper = new Swiper("#nav-swiper",{
            slidesPerView:'auto',
            watchSlidesProgress : true,
             watchSlidesVisibility : true,    // 相当于给  添加  swiper-slide-visible  当前slide可见 
            onTap(swiper){
                 var clickedIndex = swiper.clickedIndex;
                
                 contentSwiper.slideTo(clickedIndex);
            }
        })
        var contentSwiper = new Swiper("#content-swiper",{
            onSlideChangeEnd(swiper){
                var activeIndex = swiper.activeIndex;
            
 
               var navSlide =  $("#nav-swiper .swiper-slide ").removeClass("active").eq(activeIndex).addClass("active");
 
               if(!navSlide.hasClass("swiper-slide-visible")){
                
                     if(contentSwiper.activeIndex>navSwiper.activeIndex){
 
                         var num = Math.floor(navSwiper.width/navSlide.width()-1);
                         navSwiper.slideTo(contentSwiper.activeIndex-num);
                     }else{
                         navSwiper.slideTo(activeIndex);
                     }
               }
 
 
            }
        })

    }


    gobacks=()=>{
        this.props.router.go(-1)
    }




    render(){

        const {myheart} =this.props;
        var html=null;

        if(myheart.length>=1){
            html=(
                myheart.map((item,idx)=>{
                    return(
                        <li key={idx}>
                        <a href={item.m_url}>
                        <img src={item.img}/>
                        </a>
                        <h2>{item.name}</h2>
                        <p>{item.title}</p>
                       </li>

                    )
                })

            )

        }

        return(
            <div className="myheart">
                <div className="myheart-head">
                    <i className="iconfont icon-arrow-right" onClick={this.gobacks}></i>
                    <p>收藏</p>
                </div>
                <div className="myheart-content">


            <div className="swiper-container" id="nav-swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide active">好店</div>
                    <div className="swiper-slide">匠人</div>
                    <div className="swiper-slide">专题</div>
                    <div className="swiper-slide">乐活</div>
                    
                 </div>
            </div>



            <div className="swiper-container" id="content-swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide haodian">
                       <ul>
                           {/* <li>
                               <img src={require("../../../../assets/images/4.png")}/>
                               <h2>Mrs玫瑰夫人花艺生活馆</h2>
                               <p>成都最大的空中私人花园 </p>
                           </li> */}
                           {html}

                       </ul>
                    </div>
                    <div className="swiper-slide"></div>
                    <div className="swiper-slide"></div>
                    <div className="swiper-slide"></div>
                    
                </div>
            </div>



                </div>
            </div>
         )
    }
}