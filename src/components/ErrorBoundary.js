import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    

    // when error comes in component then this method will catch the error
    // then render the error ui page(error.html/js)or any text according to our code
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }

    // used to log the errors
    componentDidCatch(error,info){
        console.log(error);
        console.log(info);
    }

    render() {
        if(this.state.hasError){
            return <h4>Error: from ErrorBoundryComponent </h4>
        }
        return this.props.children // actually showing the component (means component which is under <ErrorBoundary>)
    }
}

export default ErrorBoundary
