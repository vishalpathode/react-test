import React, { Component } from 'react'

class IfElseRendering2 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {

        let message
        if(this.state.isLoggedIn){
            message =  <div><p>Hi, U r LoggedIn...</p></div>
        }else{
            message = <div><p>Hi, Anonymous...</p> </div>
        }
        
        return message
    }
}

export default IfElseRendering2
