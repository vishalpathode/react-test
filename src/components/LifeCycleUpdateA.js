import React, { Component } from 'react'
import LifeCycleUpdateB from './LifeCycleUpdateB'

class LifeCycleUpdateA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Vish'
        }
        console.log('LifeCycleUpdate A constructor...')
        this.changeState = this.changeState.bind(this)
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleUpdate A getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleUpdate A componentDidMount')
    }

    // PureComponent (eg. class LifeCycleUpdateA extends PureComponent ) doesn't implement this below method, 
    // so render() method doesn't get call after changes in state when we extends PureComponent
    shouldComponentUpdate(){
        console.log('LifeCycleUpdate A shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifeCycleUpdate A getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleUpdate A componentDidUpdate')
    }

    changeState(){
        this.setState({
            name: 'Vishal Pathode'
        })
    }

    render() {
        console.log('LifeCycleUpdate A render')
        return (
            <div>
                LifeCycleUpdate A <button onClick={this.changeState}>Change state</button>
                <LifeCycleUpdateB></LifeCycleUpdateB>
            </div>
        )
    }
}

export default LifeCycleUpdateA
