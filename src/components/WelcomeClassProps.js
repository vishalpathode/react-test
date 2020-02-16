import React,{ Component } from "react";

class WelcomeClassProps extends Component{

    render(){
        return (
            <div>
                <h2>Hi, I'm from Class Component 'WelcomeClassProps'... {this.props.name}.....</h2>

            </div>
        ) 
    }
}

export default WelcomeClassProps;