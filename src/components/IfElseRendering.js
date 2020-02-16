import React, { Component } from 'react'

class IfElseRendering extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        if(this.state.isLoggedIn){
            return (<div><p>Hi, U r LoggedIn</p></div>)
        }else{
            return (<div><p>Hi, Anonymous</p> </div>)
        }
    }
}

export default IfElseRendering
