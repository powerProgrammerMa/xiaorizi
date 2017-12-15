import React,{Component} from "react";

import Swiper from "../../../../assets/utils/swiper-3.3.1.min.js"
import layer from "../../../../assets/utils/layer/mobile/layer.js"
import {connect} from "react-redux";
import {changeminsufuwu,changeminsufuwujt,get_minsujpdetail} from "../../actions";

@connect(

    (state)=>({
        minsufuwu:state.minsufuwu,
        minsufuwujt:state.minsufuwujt,
        minsujpdetail:state.minsujpdetail
    })
)

export default class Detail extends Component{

    changefuwu=()=>{
        const {minsufuwu,dispatch,minsufuwujt} =this.props;
        

        if(minsufuwu=="no"){
            dispatch(changeminsufuwu("yes"))
            dispatch(changeminsufuwujt("icon-icon1"))


        }else{
            dispatch(changeminsufuwu("no"))
            dispatch(changeminsufuwujt("icon-icon2"))
        }


    }

    componentWillMount(){
        const {dispatch,location} =this.props;
        var routes=location.query.id;
        console.log(routes,get_minsujpdetail)
        dispatch(get_minsujpdetail("/findminsujpdetail?id="+routes,dispatch))

    }

    gobacks=()=>{
        this.props.router.go(-1)
    }

    buynow=()=>{

        layer.open({
            content:"预定成功",
            time:2
        })

    }

    
    componentDidMount(){
        
                var navSwiper = new Swiper("#nav-swiper",{
                    slidesPerView:'auto',
                    watchSlidesProgress : true,
                     watchSlidesVisibility : true,    // 相当于给  添加  swiper-slide-visible  当前slide可见 
                    onTap(swiper){
                         var clickedIndex = swiper.clickedIndex;
                    }
                })
               
            }


    render(){
        const {minsufuwu,minsufuwujt,minsujpdetail,location} =this.props;

       

        var html,html1,html2,html3,html4= null;
        var titles=location.query.title;
       
       

      


        if(minsujpdetail){

            var title =minsujpdetail.title;
            var tag=minsujpdetail.tag;
            var img=minsujpdetail.img;
            var imgs=minsujpdetail.imgs;
            var recommand=minsujpdetail.recommand;
            var hotel_desc=minsujpdetail.hotel_desc;
            var minprice=minsujpdetail.minprice;
            var content=minsujpdetail.content;

            html=(

                
                <div className="pic">
                <img src={img}/>
                </div>



            )

            html1=(

                
                <div className="banner">
                        <div className="swiper-container" id="nav-swiper">
                                <div className="swiper-wrapper">

                                    {imgs.map((item,idx)=>{
                                        return(

                                    <div className="swiper-slide active" key={idx}>
                                            <img src={item.url}/>
                                            <p>
                                                <span>
                                                {item.name}
                                                </span>
                                          
                                            </p>
                                    </div>

                                        )
                                    })}
                             
                        </div>
                    </div>                             
                </div>

            )


            html2=(

                   <div className="top">
                                    <p>
                                        <span>{title}</span>
                                        <span>￥{minprice}/天</span>
                                    </p>
                                    <p>{tag}</p>
                                    <p>
                                        {recommand.map((item,idx)=>{
                                            return(
                                                <span key={idx}>{item}</span>

                                            )
                                        })}
                                        
                                    </p>
                  </div>

            )

            html3=(


                         <div className="bottom">
                                <ul>

                                    {hotel_desc.map((item,idx)=>{
                                        return(
                                            <li className={minsufuwu} key={idx}>
                                            <p>{item[0]}:</p>
                                            <p>
                                                {item.map((items,idx)=>{
                                                    if(idx>0){
                                                      return(

                                                          <span key={idx}>{items}</span>
                                                        )
  
                                                    }
                                                   
                                                })}
                                            </p>
                                          
                                           </li>

                                        )
                                          
                                         

                                    })}
                                    
                                </ul>

                                        <p className="spaaaa">
                                            <i className={"iconfont "+minsufuwujt} onClick={this.changefuwu}></i>
                                        </p>
                            </div>


            )





        }




        return(
            <div className="minsujinpingdetail">

                <div className="minsujinpingdetail-head">
                    <i className="iconfont icon-arrow-right" onClick={this.gobacks}></i>
                    <p>{titles}</p>
                </div>

                <div className="minsujinpingdetail-content">

                    <div className="content">
                      {html}
                      {html1}
                      {html2}
                      {html3}


                
                     </div>




                
                    <div id="cont" className="detail" dangerouslySetInnerHTML={{__html:content}}>

                    </div>

                </div>


                <div className="minsujinpingdetail-foot" onClick={this.buynow}>
                    <p>立即预定</p>
                </div>
            
            
            
             </div>
        )
    }
    
}