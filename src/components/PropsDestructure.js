import React from 'react'

const PropsDestructure = ({name, age}) => {
    return (
        <div>
            <h3>PropsDestructure - {name} , {age}</h3>
        </div>
    )
}

/*
//another way to destructure props
const PropsDestructure = props => {
    const {name , age} = props;
    return (
        <div>
            <h3>PropsDestructure - {name} , {age}</h3>
        </div>
    )
}
*/

export default PropsDestructure