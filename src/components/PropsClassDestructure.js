import React, { Component } from 'react'

 class PropsClassDestructure extends Component {
    render() {
        const {name, age} = this.props
        return (
            <div>
                <h3>PropsClassDestructure- {name}, {age}</h3>
            </div>
        )
    }
}

export default PropsClassDestructure
