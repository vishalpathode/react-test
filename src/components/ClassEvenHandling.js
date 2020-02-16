import React, { Component } from 'react'

export class ClassEvenHandling extends Component {

// onClick={this.eventHandling} ---> below method will gets call as expected 
// onClick={() =>this.eventHandling()} ---> below method will gets call as expected 
// onClick={this.eventHandling()} ---> below method will gets called automatically as soon as component render
    eventHandling(){
        console.log('..class function clicked..');
    }

    render() {
        return (
            <div>
                <h4>ClassEvenHandling .. <button onClick={this.eventHandling}>click here</button></h4>
            </div>
        )
    }
}

export default ClassEvenHandling
