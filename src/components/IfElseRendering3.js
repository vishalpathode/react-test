import React, { Component } from 'react'

class IfElseRendering3 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        return this.state.isLoggedIn ?
        (<div>You r LoggedIn...</div>)
        :
        (<div>You r Anonymous...</div>)
    }
}

export default IfElseRendering3
