import React from 'react'

/*
function Greet(){
    return <h2>Hi, I'm from function Greet()....</h2>
}
*/

const Greet = (props)=>{
    console.log(props)

    //props are read only, we can't change its value.
    //props.name = 'vvv'


    return (
        // {} curly braces are feature of JSX
        <h3>Coming from props {props.name}. {props.last}...</h3>

    )
    
}

export default Greet;