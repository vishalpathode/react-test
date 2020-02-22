import React, { Component } from 'react'
import ContextComponentC from './ContextComponentC'

class ContextComponentB extends Component {
    render() {
        return (
            <div>
                <ContextComponentC></ContextComponentC>
            </div>
        )
    }
}

export default ContextComponentB
