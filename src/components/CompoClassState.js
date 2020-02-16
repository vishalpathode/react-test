import React,{ Component } from "react";

class ComponClassState extends Component{

    constructor(){
        super()
        this.state ={
            message: 'Welcome Visitor'
        }
    }

    changeValue(){
        this.setState({
            message: 'Clicked on button'
        })
    }
    render(){
        return (
            <div>
                <h2>ComponClassState' <button onClick={()=> this.changeValue()}>Click here</button> {this.state.message}.....</h2>
            </div>
        ) 
    }
}

export default ComponClassState;