import React,{Component} from "react";
import {Link} from "react-router";
import layer from "../../../../assets/utils/layer/mobile/layer.js"

import {change_touxiang} from "../../actions"
import {connect} from "react-redux";

 @connect(
    (state)=>({...state})                                                                                                                         
 )


export default class My extends Component{
   
     goto=()=>{
         if(localStorage.username){
             this.props.router.push("/mycenter")
         }else{
            this.props.router.push("/login")
         }
     }
     clears=()=>{

        layer.open({
            content: '已清除缓存2MB'
            ,style: 'background-color:#09C1FF; color:#fff; border:none;' //自定风格
            ,time: 2
          });

     }

    
    render(){
       
        const {touxiang} =this.props;
       
        return(
            <div className="my">  
                   
                <div className="my-content">
                    <div className="top">
                        <div>
                          <a  ref="backg" className={touxiang} onClick={this.goto}></a>
                        </div>
                        <span ref="one">登录，开启美好生活</span>
                    </div>

                    <div className="bottom">
                        
                             <Link to="/fabu">
                                 <i className="iconfont icon-jia"></i>
                                 <span>发布小店</span>
                                 <i className="iconfont icon-arrow-right"></i>
                             </Link>
                             <Link to="/mymessage">
                                 <i className="iconfont icon-dingdan"></i>
                                 <span>我的消息</span>
                                 <i className="iconfont icon-arrow-right"></i>
                             </Link>
                             <Link to="/mydingdan">
                                 <i className="iconfont icon-dingdan"></i>
                                 <span>我的订单</span>
                                 <i className="iconfont icon-arrow-right"></i>
                             </Link>
                             <Link to="/myheart">
                                 <i className="iconfont icon-shoucang"></i>
                                 <span>收藏</span>
                                 <i className="iconfont icon-arrow-right"></i>
                             </Link>
                             <Link to="/xiangqu">
                                 <i className="iconfont icon-xiangqu-pressed"></i>
                                 <span>想去</span>
                                 <i className="iconfont icon-arrow-right"></i>
                             </Link>
                             <Link to="/yijian">
                                 <i className="iconfont icon-yijianfankui"></i>
                                 <span>意见反馈</span>
                                 <i className="iconfont icon-arrow-right"></i>
                             </Link>
                             <Link to="/aboutus">
                                 <i className="iconfont icon-guanyu"></i>
                                 <span>关于我们</span>
                                 <i className="iconfont icon-arrow-right"></i>
                             </Link>
                             <a>
                                 <i className="iconfont icon-star01"></i>
                                 <span>去评价</span>
                                 <i className="iconfont icon-arrow-right"></i>
                             </a>
                             <a onClick={this.clears}>
                                 <i className="iconfont icon-qingchuhuancun"></i>
                                 <span>清除缓存</span>
                                 <i className="iconfont icon-arrow-right"></i>
                             </a>
                            
                        

                    </div>



                
                </div>
                
            </div>
        )
    }


    componentDidMount(){
        const {dispatch,usernames} =this.props;
        var a="touxiang";
        if(localStorage.username){
            
            dispatch(change_touxiang(a))

            this.refs.one.innerHTML=localStorage.username;

           
        }
    }
}