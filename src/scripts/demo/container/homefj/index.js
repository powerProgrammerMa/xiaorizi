import React,{Component} from "react";

import Swiper from "../../../../assets/utils/swiper-3.3.1.min.js"

import $ from "../../../../assets/utils/jquery-1.10.1.min.js";


import {get_homefj} from "../../actions"
import {connect} from "react-redux";
@connect(
    (state)=>({
        homefj:state.homefj
    })
)

export default class Zzz extends Component{

    componentWillMount(){
        var {dispatch} =this.props;
        dispatch(get_homefj("/gethomefj",dispatch))
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

        const {homefj} =this.props;
        var html=null;
        
        if(homefj.length>0){
            html=(
                homefj.map((item,idx)=>{
                    return(

                        <dl key={idx}>
                        <dt>
                            <a href={item.m_url}>
                            <img src={item.img}></img>
                            </a>
                        </dt>
                        <dd>
                            <h3>{item.title}</h3>
                            <p><i className="iconfont icon-minsu"></i><span>{item.name}</span></p>
                            <p><i className="iconfont icon-location"></i><span>{item.address}</span><span>{parseInt(item.distance)}m</span></p>

                        </dd>
                      </dl>


                    )
                })
            )
        }

       
        return(
            <div className="homesqcunxilu">
                <div className="homesqcunxilu-head">
                    <i className="iconfont icon-arrow-right" onClick={this.gobacks}></i>
                    {/* <p>{routes}</p> */}
                    <i className="iconfont icon-fenxiang"></i>
                </div>
                <div className="homesqcunxilu-content">

                <div className="swiper-container" id="nav-swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide active">全部</div>
                                    <div className="swiper-slide">甜品铺</div>
                                    <div className="swiper-slide">杂货铺</div>
                                    <div className="swiper-slide">餐吧</div>
                                    <div className="swiper-slide">小酒馆</div>
                                    <div className="swiper-slide">咖啡馆</div>
                                    <div className="swiper-slide">衣饰馆</div>
                                    <div className="swiper-slide">花房</div>
                                    <div className="swiper-slide">画室</div>
                                    <div className="swiper-slide">工作室</div>
                                    <div className="swiper-slide">博物馆</div>
                                    <div className="swiper-slide">茶空间</div>
                                    <div className="swiper-slide">家饰馆</div>
                                    <div className="swiper-slide">旅社</div>
                                    <div className="swiper-slide">面包房</div>
                                    <div className="swiper-slide">书屋</div>
                                </div>
                    </div>
                    <div className="swiper-container" id="content-swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide quanbu">
                                       <div>
                                           {html}
                                       </div>
                                    </div>
                                    <div className="swiper-slide"><p></p></div>
                                    <div className="swiper-slide"><p></p></div>
                                    <div className="swiper-slide"><p></p></div>
                                    <div className="swiper-slide"><p></p></div>
                                    <div className="swiper-slide"><p></p></div>
                                    <div className="swiper-slide"><p></p></div>
                                    <div className="swiper-slide"><p></p></div>
                                    <div className="swiper-slide"><p></p></div>
                                    <div className="swiper-slide"><p></p></div>
                                    <div className="swiper-slide"><p></p></div>
                                    <div className="swiper-slide"><p></p></div>
                                    <div className="swiper-slide"><p></p></div>
                                    <div className="swiper-slide"><p></p></div>
                                    <div className="swiper-slide"><p></p></div>
                                    <div className="swiper-slide"><p></p></div>
                                </div>
                            </div>





                    
                </div>


               
            </div>
        )
    }
}