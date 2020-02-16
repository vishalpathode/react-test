import React from 'react'

function FunctionClick() {

    // don't call function by using '()' parathesis in 'onClick'. 
    // If use () then function will get called automatically when component render
    function clickHandler(){
        console.log("..FunctionClick..")
    }

    return (
        <div>
            <button onClick={clickHandler}>FunctionClick</button>
        </div>
    )
}

export default FunctionClick
