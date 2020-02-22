import React, { Component } from 'react'
import ContextComponentB from './ContextComponentB'

class ContextComponentA extends Component {
    render() {
        return (
            <div>
                <ContextComponentB></ContextComponentB>
            </div>
        )
    }
}

export default ContextComponentA
