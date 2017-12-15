import React,{Component} from "react";
import Foot from "../../components/foot";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class App extends Component{
    render(){
        return(
            <div>
                <ReactCSSTransitionGroup
                    component="app"
                    className="page"
                    transitionName="page"
                    transitionEnter={true}
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={800}>
                    {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })}
                </ReactCSSTransitionGroup>
                <Foot/>
            </div>

        )
    }
}