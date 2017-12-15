import React,{Component} from "react";
import axios from "axios";
axios.defaults.baseURL="http://60.205.215.60:7776"
import layer from "../../../../assets/utils/layer/mobile/layer.js"
import {browserHistory} from "react-router" 


export default class Login extends Component{

    goback=()=>{
        this.props.router.go(-1);
    }

    register=()=>{
        var username=this.refs.username.value;
        var password=this.refs.password.value;
        var phone=this.refs.phone.value;
        var that=this;

     

        if(!username||!password||!phone){
            layer.open({
                content:"用户名或手机号或密码不能为空",
                time:3
            })

        }
        else if(!/^[a-zA-Z]\w{5,17}$/.test(password)){
            layer.open({
                content:"密码格式错误，密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线",
                time:3
            })
        }else if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(phone)){
            layer.open({
                content:"手机号格式错误",
                time:3
            })
        }else{
            
           
            axios.get("/register",{params:{
                username,
                password,
                phone
            }})
              .then(res=>{
                  console.log(res.data)
    
                  if(res.data=="1"){
    
                      layer.open({
                          content:"注册成功，即将跳转到登录页面",
                          time:3
                      })
    
    
                      setTimeout(function(){
                        that.props.router.push("/login");
    
                      },2000)
                
                  }else{
                     
                      layer.open({
                        content:"注册失败，用户名已存在或密码错误",
                        time:3
                    })
                  }
              })
            

        }

       
    }

    getma=()=>{

        
        layer.open({
            content:"开发原因，手机验证码一律为1111",
            time:4
        })

    }


    
    render(){
        return(
            <div className="register">
                 <div className="register-head">
                    <span onClick={this.goback}>
                        <i className="iconfont icon-arrow-right"></i>
                    </span>
                    <p>注册</p>
                </div>

                <div className="register-content">
                    <div className="top">
                        <span>头像</span>
                    </div>
                    <div className="center">
                        <div>
                        <input type="text" placeholder="姓名" ref="username"/>

                        </div>
                        <div>
                        <input type="password" placeholder="密码" ref="password"/>

                        </div>
                        <div>
                        <input type="text" placeholder="电话" ref="phone"/>
                          <span onClick={this.getma}>获取验证码</span>
                        </div>
                        <div>
                        <input type="text" placeholder="验证码"/>

                        </div>
               
                        
                    </div>
                    <div className="bottom">

                        <input type="button" value="注册"  onClick={this.register}/>
                    </div>


                </div>




            </div>
        )
    }
}
