import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Vish'
        }
        console.log('LifeCycle A constructor...')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle A getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycle A componentDidMount')
    }

    render() {
        console.log('LifeCycle A render')
        return (
            <div>
                LifeCycle A
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

export default LifeCycleA
