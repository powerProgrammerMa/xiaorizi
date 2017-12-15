import React,{Component}  from "react";

import {connect} from "react-redux";
import {get_homejxdetail} from "../../actions"
@connect(
    (state)=>({
        homejxdetail:state.homejxdetail
    })
)

export default class Yijian extends Component{


    gobacks=()=>{
        this.props.router.go(-1)
    }

    componentWillMount(){
        const {dispatch,location} =this.props;
        var id=location.query.id;
     
        dispatch(get_homejxdetail("/gethomejxdetail?id="+id,dispatch))
    }
    render(){

        const {homejxdetail} =this.props;
       

        var html,html1=null;

        if(homejxdetail){
            html=(

                <div className="banner">
                <img src={homejxdetail.img}/>
                <p>#{homejxdetail.tag}</p>

            </div>

            )

            html1=(
                homejxdetail.shopdata.map((items,i)=>{
                    return(

                        <li key={i}>
                        <h2> - {items.name} - </h2>
                        <a href={items.m_url}>
                        <img src={items.img}/>
                        </a>
                        <p>{items.recommend_reason}</p>
                        <p>
                          <i className="iconfont icon-location"></i>
                          <span>{items.address}</span>
                        </p>
                    </li>

                    )
                })

              


            )
        }


        return(
            <div className="homejxdetail">

                <div className="homejxdetail-head">
                    <i className="iconfont icon-arrow-right" onClick={this.gobacks}></i>
                    <i className="iconfont icon-fenxiang"></i>
                </div>

                <div className="homejxdetail-content">
                    {/* <div className="banner">
                        <img src={require("../../../../assets/images/4.png")}/>
                        <p>#拍照，甜品</p>

                    </div> */}
                    {html}

                    <div className="content">
                        <ul>
                            {/* <li>
                                <h2> - TRUNTION纯生 - </h2>
                                <a>
                                <img src={require("../../../../assets/images/4.png")}/>
                                </a>
                                <p>在骄傲的解决法律思考法律手段法律手段菲利克斯离开了阿萨德拉萨的拉链的拉上的拉动啦啦队拉克丝李达康失落大陆</p>
                                <p>
                                  <i className="iconfont icon-location"></i>
                                  <span>律手段法律手段菲利克斯离开了阿萨德拉萨的拉链的拉上的拉动啦啦队拉克丝李达康失落大</span>
                                </p>
                            </li> */}
                            {html1}


                            {/* <li>
                                <h2> - TRUNTION纯生 - </h2>
                                <a>
                                <img src={require("../../../../assets/images/4.png")}/>
                                </a>
                                <p>在骄傲的解决法律思考法律手段法律手段菲利克斯离开了阿萨德拉萨的拉链的拉上的拉动啦啦队拉克丝李达康失落大陆</p>
                                <p>
                                  <i className="iconfont icon-location"></i>
                                  <span>律手段法律手段菲利克斯离开了阿萨德拉萨的拉链的拉上的拉动啦啦队拉克丝李达康失落大</span>
                                </p>
                            </li> */}
                        </ul>
                    </div>

                </div>

            </div>
        )
    }
}