import React from 'react'


const GreetChildrenComponent = (props)=>{
    return (
    // we can return only one Html tag, that's why we need to have parent <div> tag while using children
       <div>
            <h3>GreetChildrenComponent {props.name}. {props.last}...</h3>
            {props.children}
        </div>
    )
    
}

export default GreetChildrenComponent;