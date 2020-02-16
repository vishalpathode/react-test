import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             age:0
        }
    }

    handler = (event) =>{
        let field = event.target.name 
        let fieldValue = event.target.value
        this.setState({
            [field]:fieldValue
        })
    }
    
    formSubmit = event =>{
        console.log(this.state.name + " : "+this.state.age)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <div>
                    <label>Name: </label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handler}></input>
                    <label>Age: </label>
                    <input type='number' name='age' value={this.state.age} onChange={this.handler}></input>
                    <button type='submit'>Sunmit</button>
                </div>
            </form>
        )
    }
}

export default Form
