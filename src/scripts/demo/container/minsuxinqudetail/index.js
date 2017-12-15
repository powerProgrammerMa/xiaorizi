import React,{Component} from "react";

import {connect} from "react-redux";
import {get_minsuxinqudetail} from "../../actions";
import layer from "../../../../assets/utils/layer/mobile/layer.js"
@connect(
    (state)=>({
        minsuxinqudetail:state.minsuxinqudetail
    })
)

export default class Minsu extends Component{

    componentWillMount(){
        const {dispatch,location} =this.props;
        var routes=location.query.id;
        dispatch(get_minsuxinqudetail("/findminsuxqdetail?id="+routes,dispatch))
    }

    goBacks=()=>{
        this.props.router.go(-1)
        
    }

    buynow=()=>{
        
                layer.open({
                    content:"买单成功",
                    time:2
                })
        
    }
    render(){
        const {minsuxinqudetail} =this.props;
       
        var html=null;
        var html1=null;
        var html2=null;
        var html3=null;
        var html4=null;

        if(minsuxinqudetail){
            var tag=minsuxinqudetail.tag;
            var img=minsuxinqudetail.img;
            var title=minsuxinqudetail.title;
            var city=minsuxinqudetail.city_string;
            var has_gone=minsuxinqudetail.has_gone;
            var oriprice=minsuxinqudetail.tickets[0].origin_price;
            var price=minsuxinqudetail.tickets[0].price;
            var num=minsuxinqudetail.tickets[0].total_stock;
            var content=minsuxinqudetail.content;


            html=(
                <div className="banner">
                <img src={img}/>
                <span>举办地点：{city}</span>
            </div>

            )
            html1=(
                <div className="top">
                    <h2>{title}</h2>
                    <p>{tag}</p>
                    <div className="numbers">
                    <div>
                        ￥{price}
                    </div>
                    <div>
                        <a>{oriprice}元/人</a>
                        <span>已有{has_gone}人实现</span>
                    </div>

                </div>

                </div>

            )
            html2=(

                <div className="center">
                <span> ✔</span>
                <span>满足{num}人心愿实现，人数不足自动退款</span>
              
             </div>

            )

            html3=(
                <div>
                        <span>￥{price}</span>
                        <span>{num}人心愿价</span>
                </div>
            )

        }
        return(
            <div className="minsuxinqudetail">

                <div className="minsuxinqudetail-head">
                    <i className="iconfont icon-arrow-right" onClick={this.goBacks}></i>
                    <p>{title}</p>
                    <i className="iconfont icon-fenxiang"></i>

                </div>
                <div className="minsuxinqudetail-content">

                    {/* <div className="banner">
                        <img src={require("../../../../assets/images/4.png")}/>
                        <span>举办地点：成都</span>
                    </div> */}
                    {/* <div className="top">
                        <h2>用水彩画的纹理，找到真实中的梦幻浪漫</h2>
                        <p>水彩画的肌理之美</p>
                        <div className="numbers">
                            <div>
                                ￥92
                            </div>
                            <div>
                                <a>109元/人</a>
                                <span>已有71人实现</span>
                            </div>

                        </div>

                    </div> */}

                    {/* <div className="center">
                       <span> ✔</span>
                       <span>满足4人心愿实现，人数不足自动退款</span>
                     
                    </div> */}

                    {html}
                    {html1}
                    {html2}

                    <div className="bottom">
                        <p>以下城市小伙伴正在许愿中...</p>
                        <p>
                            <img src={require("../../../../assets/images/3.png")}/>
                            <span>成都</span>
                            <span>已经有9人实现了愿望</span>

                        </p>
                    </div> 

                    <div className="content1">
                        <h1>心愿详情</h1>
                        <div id="cont" className="detail" dangerouslySetInnerHTML={{__html:content}}>

                        </div>


                    </div>

                </div>

                <div className="minsuxinqudetail-foot">
                    {/* <div>
                        <span>￥92</span>
                        <span>4人心愿价</span>
                    </div> */}
                    {html3}
                    <div onClick={this.buynow}>
                        为心愿买单
                    </div>

                </div>
               


            </div>
        )
    }
}