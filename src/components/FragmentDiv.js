import React from 'react'

function FragmentDiv() {

    // <div> tag takes extra node, so we can use <React.Fragment> to ignore <div> tag

    return (
        <React.Fragment>
            <span>Hi, I'm from Fragment</span>
            <p>
                Hi, I'm from Fragment P tag
            </p>
        </React.Fragment>
    )
}

export default FragmentDiv
