import React,{Component} from "react";
import {connect} from "react-redux";
import {change_touxiang} from "../../actions";

@connect(

)

export default class Mycenter extends Component{


    goback=()=>{                                   
        this.props.router.go(-1);

    }

    outlogin=()=>{
        const {dispatch} =this.props;
        var a="touxiangno"
        localStorage.clear();
        dispatch(change_touxiang(a))
        this.props.router.push("/my")

    }
    render(){
        return(
            <div className="mycenter">

                <div className="mycenter-head">
                    <i className="iconfont icon-arrow-right" onClick={this.goback}></i>
                    <p>个人中心</p>
               
                </div>
                <div className="mycenter-bottom">
                 <ul>
                     <li>
                        <div className="left">头像</div>
                        <div className="rigth">
                       
                        <i className="iconfont icon-arrow-right"></i>
                        <img src={require("../../../../assets/images/3.png")}/>
                        </div>

                     </li>

                     <li>
                     <div className="left">用户名</div>
                        <div className="rigth">
                        <span>勿忘</span>
                        <i className="iconfont icon-arrow-right"></i>
                        </div>

                     </li>

                     <li>
                     <div className="left">我的个性</div>
                        <div className="rigth">
                        <span>添加个性标签</span>
                        <i className="iconfont icon-arrow-right"></i>
                        </div>

                     </li>

                     
                     <li>
                     <div className="left">邮箱</div>
                        <div className="rigth">
                        <span>绑定邮箱</span>
                        <i className="iconfont icon-arrow-right"></i>
                        </div>

                     </li>

                     
                     <li>
                     <div className="left">手机号</div>
                        <div className="rigth">
                        <span>绑定手机号 </span>
                        <i className="iconfont icon-arrow-right"></i>
                        </div>

                     </li>
                 </ul>



                  
                
                

                
                </div>

                <div className="submit">
                   <button onClick={this.outlogin}>退出登录</button>

                </div>


                

            </div>
        )
    }
}