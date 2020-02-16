import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Vishal'
        }
        console.log('LifeCycle B constructor...')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle B getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycle B componentDidMount')
    }

    render() {
        console.log('LifeCycle B render')
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}

export default LifeCycleB
