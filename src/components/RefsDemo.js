import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
    
        // use createRef 
        this.inputRef = React.createRef()
    }
    

    //after mount the focus will be on text box
    componentDidMount(){
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}></input>
            </div>
        )
    }
}

export default RefsDemo
