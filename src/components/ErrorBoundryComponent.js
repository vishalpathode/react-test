import React from 'react'

function ErrorBoundryComponent({name}) {

    if(name === 'vishpath'){
        throw new Error('Not name...');
    }
    return (
        <div>
            {name}
        </div>
    )
}

export default ErrorBoundryComponent
