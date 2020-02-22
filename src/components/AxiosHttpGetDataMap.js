import React from 'react'

// {} curly braces is compulsory here
function AxiosHttpGetDataMap({data}) {
        return (
            <option>Id: {data.id} userId: {data.userId}</option>
    )
}

export default AxiosHttpGetDataMap
