import React, { Component } from 'react'
import { PropsConsumer } from './ContextComponentCreate'

class ContextComponentC extends Component {
    render() {
        return (
            <PropsConsumer>
                {username => {
                    return <div>
                        Hi there, I'm from ContextComponentC- {username}
                    </div>
                }

                }

            </PropsConsumer>
            
        )
    }
}

export default ContextComponentC
