import React from 'react'

// {} curly braces is compulsory here
function ListRenderingSeparateWithKey({dataD}) {
    return (
            <option>Id={dataD.id}, name={dataD.name}</option>   
    )
}

export default ListRenderingSeparateWithKey
