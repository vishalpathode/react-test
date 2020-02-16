import React, { Component } from 'react'

class CounterStateMultipleCalls extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            count_1:0,
            count_2:0
        }
    }
    
    //even if we have multiple calls for single event setState() runs one time only.
    //if we want to change state multiple times in single event then use previous state
    incrementCount(){
        this.setState({
            count_1: this.state.count_1 + 1
        })
    }

    //if we want to change state multiple times in single event then use previous state in setState() 
    // OR if we want to change state based on previous state
    incrementPreviousCount(){
        this.setState(preState =>({
            count_2: preState.count_2 +1
        }))
    }

    //even if we have multiple calls for single event setState() runs one time only.
    //if we want to change state multiple times in single event then use previous state in setState() 
    callingMultiple(){
        this.incrementCount();
        this.incrementCount();
        this.incrementPreviousCount();
        this.incrementPreviousCount();
    }
    render() {
        return (
            <div>
                <p><button onClick={()=> this.callingMultiple()}>Multiple Increment count - </button> Count_1 : {this.state.count_1} .. Count_2 : {this.state.count_2}</p>
            </div>
        )
    }
}

export default CounterStateMultipleCalls
