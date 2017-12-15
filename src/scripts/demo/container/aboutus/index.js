import React,{Component} from "react";

export default class Aboutus extends Component{
    gobacks=()=>{
        this.props.router.go(-1)
    }
    render(){
        return(

            <div className="aboutus">
            
                            <div className="aboutus-head">
                                <i className="iconfont icon-arrow-right" onClick={this.gobacks}></i>
                                <p>关于我们</p>
                            </div>

                            <div className="aboutus-content">

                            <div className="video-box">
                    
                              <video src="http://47.94.208.182/mp/brkw.mp4" controls ref="video" id="video">浏览器不支持video标签</video>
                            </div>

                            <div className="jieshao">

                                <h1>关于小日子</h1>
                                <h2>网上生活服务平台</h2>
                                <p>
                                    小日子专注于推荐特色生活方式，逛有意思的小店，
                                    和有意思的人一起玩儿。包含：烘焙料理，书画乐器，
                                    茶道花艺，手作定制，私厨赏味，观演看剧等各种生活乐
                                     趣。邀你一起来感触美好生活的真谛，并探寻着融入方式。
                                     希望通过传递生活中那些美好，让每个人都能找到自己想要
                                     的生活姿态，过上自己想要的小日子。
                                </p>


                            </div>


                            </div>
            
                        </div>

        )
    }
}