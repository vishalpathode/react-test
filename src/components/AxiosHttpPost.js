import React, { Component } from 'react'
import axios from 'axios'


class AxiosHttpPost extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
             body:''
        }
    }

    handler = (event) =>{
        this.setState({ 
            [event.target.name]:event.target.value
        })
    }

    formSubmit = event =>{
        event.preventDefault();
        console.log('post data: '+this.state.userId)

        axios.post('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log("response ID: "+response.data.id) // got id in response
        })
        .catch(error =>{
            console.log(error)
        })
    }

    render() {
        const {body, userId, title} = this.state
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                <div>
                    <label>Body: </label>
                    <input type='text' name='body' value={body} onChange={this.handler}></input>
                    <label>UserID: </label>
                    <input type='text' name='userId' value={userId} onChange={this.handler}></input>
                    <label>Title: </label>
                    <input type='text' name='title' value={title} onChange={this.handler}></input>
                    <button type='submit'>Sunmit</button>
                </div>
            </form>
            </div>
        )
    }
}

export default AxiosHttpPost
