import React,{Component} from "react";
import Swiper from "../../../../assets/utils/swiper-3.3.1.min.js"
import {Link} from "react-router";



import {get_minsujingping,get_minsuxingqu,get_minsulinggan} from "../../actions"
import {connect} from "react-redux";
@connect(
     (state)=>({
        minsujingping:state.minsujingping,
        titleList:state.titleList,
        minsuxingqu:state.minsuxingqu,
        minsulinggan:state.minsulinggan


     })
)




export default class Minsu extends Component{

    constructor(props){
        super(props);
        this.state={
            swiperid:0,
            mySwiper:""

        }
    }

    componentWillMount(){
        const {dispatch} =this.props;
        dispatch(get_minsujingping("/getminsujingping",dispatch))
        dispatch(get_minsuxingqu("/getminsuxingqu",dispatch))
        dispatch(get_minsulinggan("/getminsulinggan",dispatch))

    }

    

    componentDidMount(){
        var that =this;
        this.state.mySwiper=new Swiper(".swiper-container",{
            effect:"slide",
            resistanceRatio:0,
            onSlideChangeStart(swiper){

                that.setState({
                    swiperid:swiper.activeIndex
                })
  
            }


          
        })

        
    }

    change=(i)=>{
        console.log(i)
        this.setState({
            swiperid:i
        })

        
        this.state.mySwiper.slideTo(i)

        
    }


    render(){

     
        const {swiperid}=this.state;
        const {minsujingping,titleList,minsuxingqu,minsulinggan} =this.props;
       
        

        var html=null;
        var html1=null;
        var html2=null;

        if(minsujingping.length>0){
            html=(

                minsujingping.map((item,idx)=>{
                    return(

                        <li key={idx}>
                        <Link to={"/minsujinpingdetail?id="+item.id+"&title="+item.title}>
                        <img src={item.img}/>
                        <span>{item.city}</span>
                        </Link>
        
                        <p>
                            <span>{item.title}</span>
                            <span>￥{item.minprice}/天</span>
                        </p>
        
                        <p>
                            {item.recommand.map((item,idx)=>{
                                return(
                                    <span key={idx}>{item}</span>

                                )
                            
                            })}
                            
                        </p>
                        </li>

                    )
                })
               

            )
        }

        if(minsuxingqu.length>0){
            html1=(
                minsuxingqu.map((item,idx)=>{
                   
                    return (
                        <li key={idx}>
                        
                    <Link to={"/minsuxinqudetail?id="+item.id} className="imgtitle">
                    <img src={item.img}/>
                   
                    </Link>

                    <p>{item.title}</p>

                    <p>{item.tag}</p>

                    <div className="bottoms">

                        <div className="left">
                            <div >￥{item.tickets[0].price}</div>
                            <div >
                                <a className="no">{item.tickets[0].origin_price}元/人</a>
                                <span>已有{item.has_gone}人实现</span>
                            </div>
                        </div>
                        <div className="right">
                            <span>{item.tickets[0].total_stock}人</span>
                            <span>去许愿</span>
                        </div>

                    </div>


                </li>

                    )
                })

            )
        }

        if(minsulinggan.length>0){
            html2=(
                minsulinggan.map((item,idx)=>{
                    return (

                          <li key={idx}>

                                <Link to="/">
                                    <img src={item.img}/>
                                    <span>{item.city_string}</span>
                                </Link>

                                <p>
                                    <span> {item.title}</span>
                                    <span> ￥{item.tickets[0].price}/小时</span>
                                   
                                </p>

                                <p>
                                    <i className="iconfont icon-linggan2"></i>
                                    <span>艺术空间 可容纳{item.admits}人</span>
                                </p>

                                </li>

                    )
                })

            )
        }




        return(
            <div className="minsu">
                <div className="minsu-head">体验不一样</div>
       
                <div className="minsu-content">
                    <div className="top">
                        
                        {
                            titleList.map((item,idx)=>{
                                return(
                                    <Link to="" key={idx} onClick={()=>this.change(idx)} className={idx==swiperid?"actives":""}>
                                    <i className={"iconfont "+item.icon}></i>
                                    <span>{item.txt}</span>
                                    </Link>
                                )
                            })
                        }
                    </div>

                    <div className="bottom">
                    <div className="swiper-container">
                    <div className="swiper-wrapper">
                  
                        <div className="swiper-slide jinping" >
                              
                              <ul>
                                  

                                  {html}

                                 
                              </ul>

                        </div>
                        <div className="swiper-slide xingqu">

                            <ul>

                                {html1}

                              
                            </ul>

                        </div>
                        <div className="swiper-slide linggan">
                            <ul>
                              
                                {html2}


                          
                            </ul>


                        </div>
                         
                    </div>

                    <div className="swiper-pagination"></div>
                        </div>
                        </div>

                </div>
               
            </div>
        )
    }
}