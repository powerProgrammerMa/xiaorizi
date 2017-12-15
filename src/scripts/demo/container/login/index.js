import React,{Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import { Modal, Button,message } from 'antd';
import axios from "axios"
axios.defaults.baseURL="http://60.205.215.60:7776"
import layer from "../../../../assets/utils/layer/mobile/layer.js"
import {browserHistory} from "react-router"

@connect()

export default class Login extends Component{

    goback=()=>{
        this.props.router.push("/my");
    }

    login=()=>{

        var username=this.refs.username.value;
        var password=this.refs.password.value;
        var that=this;

     

        if(!username||!password){
            layer.open({
                content:"用户名或密码不能为空",
                time:3
            })

        }else if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(username)){
            layer.open({
                content:"手机号格式错误",
                time:3
            })
        }else if(!/^[a-zA-Z]\w{5,17}$/.test(password)){
            layer.open({
                content:"密码格式错误，密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线",
                time:3
            })
        }else{

            
        axios.get("/login",{
            params:{
                password:password,
                username:username
            }
        })
           .then(res=>{
             
               if(res.data=="1"){
                layer.open({
                    content:"登录成功",
                    time:3
                })

                setTimeout(function(){
                    that.props.router.push("/my");

                },2000)

                  localStorage.username=username;
               }else{
                layer.open({
                    content:"登录失败，用户名或密码错误",
                    time:3
                })
               }
           })


        }

   
    }

    render(){
        return(
            <div className="login">
                <div className="login-head">
                    <span onClick={this.goback}>
                        <i className="iconfont icon-arrow-right"></i>
                    </span>
                    <p>登录</p>
                </div>
                <div className="login-content">
                 <div className="top">
                     <div>
                         <Link to="/">
                             <i className="iconfont icon-weixin"></i>
                             <span>微信</span>
                         </Link>

                         <Link to="/">
                             <i className="iconfont icon-qq"></i>
                             <span>QQ</span>
                         </Link>

                         <Link to="/">
                             <i className="iconfont icon-weibo1"></i>
                             <span>微博</span>
                         </Link>
                         
                        </div>

                         <p>或手机登录</p>

                   

                 </div>
                 <div className="input">
                    <input type="text" placeholder="请输入手机号" ref="username"/>
                    <input type="password" placeholder="密码" ref="password"/>

                 </div>
                 <div className="bottom">
                     
                     <Link to="/register">注册</Link>
                     <Link to="/">找回密码</Link>

                 </div>

                 <div className="submit">

                     <button onClick={this.login}>登录</button>

                 </div>


                </div>

               
            </div>
        )
    }
}
