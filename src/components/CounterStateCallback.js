import React, { Component } from 'react'

class CounterStateCallback extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    incrementCount(){

        // don't change value without this.setState else render() won't be able to fetch changed value 
        //this.state.count= this.state.count +1

        // asynchronous call
        this.setState({
            count: this.state.count + 1
        }, // callback function
        ()=>{
            //works after changing value of setState()
            console.log('in CALLBACK:'+this.state.count)
        })
        //works before changing value of setState()
        console.log('NOT in CALLBACK:'+this.state.count) 
    }
    
    render() {
        return (
            <div>
                <p><button onClick={()=> this.incrementCount()}>Increment count - </button> Count : {this.state.count}</p>
            </div>
        )
    }
}

export default CounterStateCallback
