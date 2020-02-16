import React from 'react'

function MethodAsPropsChild(props) {
    return (
        <div>
            <h4><button onClick={props.passingMethod}>Clickkk</button> {props.message} </h4>
            <h4><button onClick={() =>props.passingMethod2('vish')}>Clickkk 2 </button> {props.message2} </h4>

        </div>
    )
}

export default MethodAsPropsChild
