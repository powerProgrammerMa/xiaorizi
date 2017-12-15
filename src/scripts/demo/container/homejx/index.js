import React,{Component}  from "react";
import {Link} from "react-router";

import {connect} from "react-redux";
import {get_homejx} from "../../actions"
@connect(
    (state)=>({
        homejx:state.homejx
    })
)

export default class Yijian extends Component{


    gobacks=()=>{
        this.props.router.go(-1)
    }

    componentWillMount(){
        const {dispatch} =this.props;
        dispatch(get_homejx("/gethomejx",dispatch))
    }
    render(){

        const {homejx} =this.props;
        

        var html=null;
       

        if(homejx.length>0){
            console.log(1111)
            html=(
                homejx.map((item,idx)=>{
                    return(

                        <Link key={idx} to={"/homejxdetail?id="+item.id}>
                        <img src={item.img}/>
                        {<p>{item.title}</p>}
                        
                        </Link>


                    )
                })
            )

           
        }

        

        return(
            <div className="homejx">

                <div className="homejx-head">
                    <i className="iconfont icon-arrow-right" onClick={this.gobacks}></i>
                    <p>精选专题</p>
                </div>

                <div className="homejx-content">
                    <ul>
                        {/* <Link>
                            <img src={require("../../../../assets/images/4.png")}/>
                            <p>成都网红甜品店指北</p>
                            
                        </Link> */}

                        {html}

                        
                    </ul>
                </div>

            </div>
        )
    }
}