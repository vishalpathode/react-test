import React, { Component } from 'react'

class LifeCycleUpdateB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Vishal'
        }
        console.log('LifeCycleUpdate B constructor...')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleUpdate B getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleUpdate B componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleUpdate B shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifeCycleUpdate B getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleUpdate B componentDidUpdate')
    }

    render() {
        console.log('LifeCycleUpdate B render')
        return (
            <div>
                LifeCycleUpdate B
            </div>
        )
    }
}

export default LifeCycleUpdateB
