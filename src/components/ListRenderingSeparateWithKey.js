import React from 'react'

function ListRenderingSeparateWithKey({dataD}) {
    return (
            <option>Id={dataD.id}, name={dataD.name}</option>   
    )
}

export default ListRenderingSeparateWithKey
