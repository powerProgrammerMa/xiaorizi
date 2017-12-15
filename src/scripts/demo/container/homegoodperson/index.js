import React,{Component}  from "react";

import {connect} from "react-redux";
import {get_homegp} from "../../actions"
@connect(
    (state)=>({
        homegp:state.homegp
    })
)
export default class Yijian extends Component{


    gobacks=()=>{
        this.props.router.go(-1)
    }

    componentWillMount(){
        const {dispatch,location} =this.props;
        dispatch(get_homegp("/gethomegp",dispatch))
    }
    render(){

        const {homegp} =this.props;
        console.log(homegp)
        var html=null;
        if(homegp.length>0){
            html=(
                homegp.map((item,idx)=>{
                    return(
                        <dl key={idx}>
                        <dt>
                            <a href="##">
                            <img src={item.head_photo}/>
                            </a>
                        </dt>
                        <dd>
                            <h2>{item.title}</h2>
                            <p>
                                <span>{item.name}</span>
                                <span>{item.tag}</span>
                            </p>

                            <p>{item.detail}</p>
                        </dd>
                    </dl>
                    )
                })

            )
        }
        return(
            <div className="homegp">

                <div className="homegp-head">
                    <i className="iconfont icon-arrow-right" onClick={this.gobacks}></i>
                    <p>匠人匠心</p>
                </div>

                <div className="homegp-content">

                    {/* <dl>
                        <dt>
                            <img src={require("../../../../assets/images/3.png")}/>
                        </dt>
                        <dd>
                            <h2>传统刺绣与人体解剖学的结合</h2>
                            <p>
                                <span>无价刺绣与人体解剖学的</span>
                                <span>设计刺绣与人体解剖学的</span>
                            </p>

                            <p>传统刺绣与人体解剖学的结合传统刺绣与人体解剖学的结合</p>
                        </dd>
                    </dl> */}

                    {html}



                   
                </div>



            </div>
        )
    }
}