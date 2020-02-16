//React internally call React.createElement , bcz it uses JSX.
import React from 'react';


// this is JSX
const  HelloJSX =() => {

    return(
        <div>
            <h2>Hi, I'm from Hello JSX ....</h2>
        </div>
    )

/*
// without JSX
return React.createElement('div', null, React.createElement('h2',null, "Hi, I'm from Hello without JSX...."))
*/

}
export default HelloJSX;