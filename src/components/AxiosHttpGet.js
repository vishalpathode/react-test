import React, { Component } from 'react'
import axios from 'axios'
import AxiosHttpGetDataMap from './AxiosHttpGetDataMap'

class AxiosHttpGet extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            postsData: []
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({postsData:response.data})
        })
        .catch(error =>{
            console.log(error)
        })
    }

    render() {

        const dataDs = this.state.postsData
        const dataOptionsTag = dataDs.map(dt=><AxiosHttpGetDataMap key={dt.id} data={dt}></AxiosHttpGetDataMap>)
        
        return (
            <div>
                Axios HTTP request <br></br>
                <select>
                    {dataOptionsTag}
                </select>
            </div>
        )
    }
}

export default AxiosHttpGet
