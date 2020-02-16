import React, { Component } from 'react'

 class EventBindingClass extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        //binding is better to use in constructor bcz constructor calls once component load
        this.clickHandler = this.clickHandler.bind(this)
    }
    
    /* if state changing then must bind function 
    in constructor 'this.clickHandler = this.clickHandler.bind(this)' it is recomended 
    OR use 'onClick={() =>this.clickHandler()}' but it also not recomended in large scale project
    OR use 'onClick={()=>this.clickHandler.bind(this)}' but it will affect on child component bcz it will re render the component
    OR  'clickHandler = () => {
        this.setState({
            message:'Bye'
        })
    }' we can use it as well

    else we will get 'undefined'
    */
    clickHandler(){
        this.setState({
            message:'Bye'
        })
    }

    render() {
        return (
            <div>
                <h4>EventBindingClass- <button onClick={this.clickHandler}>Click Event Binding </button> {this.state.message}</h4>
            </div>
        )
    }
}

export default EventBindingClass
