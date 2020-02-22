import React from 'react'

// we can create new dom node and can put component inside it rather than putting inside 'root' div
// we need to add new div tag in 'index.html'
import ReactDOM from 'react-dom'

function PortalsDemo() {

    return ReactDOM.createPortal (
        <div>
            PortalsDemo ...
        </div>,

        document.getElementById('portal-root')
    )
}

export default PortalsDemo
