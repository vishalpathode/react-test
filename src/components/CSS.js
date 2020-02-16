import React from 'react'

/*
by default this .css will be available for all child component if we don't give its name
eg. import myStyleSheet from './CSSstyle.css' , now this will be component specific.
As suggested by React define its name and give the file name as <FILENAME>.module.css
*/
import './CSSstyle.css'
import myStyleSheetRecomended from './CSSstyleSheet.module.css'


const myStyle = {
    fontSize:'22px',
    color:'orange'
}

function CSS() {
    return (
        <div>
            <p className='myClass'>Hi, I got color.</p>
            <p className='myClass myclass2'>Hi, I got color and font text-decoration</p>
            <p style={myStyle}>Hi, I'm style from object..called as inline styling</p>
            <p className={myStyleSheetRecomended.myClassBlue}>Hi, I'm module stylesheet</p>
        </div>
    )
}

export default CSS
