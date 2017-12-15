import React,{Component} from "react";
import {render} from "react-dom";
import {hashHistory,Router,Route,IndexRedirect,Redirect} from "react-router";


import App from "./app";
import Home from "./home";
import Minsu from "./minsu";
import Bangdan from "./bangdan";
import My from "./my";
import Login from "./login";
import Register from "./register";
import Mycenter from "./mycenter";
import Cunxilu from "./homesqcunxilu";
import Minsujinpingdetail from "./minsujinpingdetail";
import Bangdancd from "./bangdancd";
import Bangdanqg from "./bangdanqg";
import Minsuxinqudetail from "./minsuxinqudetail";
import Myheart from "./myheart";
import Mymessage from "./mymessage";
import Mydingdan from "./mydingdan";
import Xiangqu from "./xiangqu";
import Yijian from "./yijian";
import Fabu from "./fabu";
import Aboutus from "./aboutus";
import Homejx from "./homejx";
import Homegp from "./homegoodperson";
import Homefj from "./homefj";

import Homejxdetail from "./homejxdetail";



export default class Layout extends Component{
    
    render(){
        return(
            <Router history={hashHistory}>
            <Redirect from="/react/dist" to="/" />
            <Route path="/" component={App}>
            <IndexRedirect to="/home" />
                <Route path="/home" component={Home}/>
                <Route path="/minsu" component={Minsu}/>
                <Route path="/bangdan" component={Bangdan}/>
                <Route path="/my" component={My}/>
            </Route>
    
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/mycenter" component={Mycenter}/>
            <Route path="/homesqcunxilu" component={Cunxilu}/>
            <Route path="/minsujinpingdetail" component={Minsujinpingdetail}/>
            <Route path="/bangdancd" component={Bangdancd}/>
            <Route path="/bangdanqg" component={Bangdanqg}/>
            <Route path="/minsuxinqudetail" component={Minsuxinqudetail}/>
            <Route path="/myheart" component={Myheart}/>
            <Route path="/mymessage" component={Mymessage}/>
            <Route path="/mydingdan" component={Mydingdan}/>
            <Route path="/xiangqu" component={Xiangqu}/>
            <Route path="/yijian" component={Yijian}/>
            <Route path="/fabu" component={Fabu}/>
            <Route path="/aboutus" component={Aboutus}/>
            <Route path="/homejx" component={Homejx}/>
            <Route path="/homefj" component={Homefj}/>
            <Route path="/homegp" component={Homegp}/>
            <Route path="/homejxdetail" component={Homejxdetail}/>
            
            


         </Router>

        )
    }
}
