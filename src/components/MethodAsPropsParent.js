import React, { Component } from 'react'
import MethodAsPropsChild from './MethodAsPropsChild'

class MethodAsPropsParent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: 'hello',
            message2: 'hello'
        }
        this.passingMethod = this.passingMethod.bind(this)
        this.passingMethod2 = this.passingMethod2.bind(this)
    }
    
    passingMethod(){
        this.setState({
            message : 'Hiiii'
        })
    }

    // parameter coming from child component by calling arrow function with argument ''
    passingMethod2(parameterFromChild){
        this.setState({
            message2 : parameterFromChild
        })
    }

    render() {
        return (
            <div>
                <MethodAsPropsChild passingMethod={this.passingMethod} passingMethod2={this.passingMethod2} message={this.state.message} message2={this.state.message2} ></MethodAsPropsChild>
            </div>
        )
    }
}

export default MethodAsPropsParent
