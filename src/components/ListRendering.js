import React, { Component } from 'react'
import ListRenderingSeparate from './ListRenderingSeparate'
import ListRenderingSeparateWithKey from './ListRenderingSeparateWithKey'
import ListRenderingSeparateWithKeyIndex from './ListRenderingSeparateWithKeyIndex'

class ListRendering extends Component {


    render() {
        const data = ['a','b','c']
        const dataValues = data.map(d=> <option>{d}</option>)

        const arrayData =[
            {id:101,name:'vishal'},
            {id:102,name:'vishal 2'},
            {id:103,name:'vishal 3'}
        ]
    const arrayDataValues = arrayData.map(d => <option>{d.id} - {d.name}</option>)

    // best to use separate component for every data
    const arrayDataValuesFromOutside = arrayData.map(dt=> <ListRenderingSeparate dataD={dt}></ListRenderingSeparate>)
    
    // you should use key as instructed by React
    // we can't fetch key in child component
    // it is recomended 
    const arrayDataValuesFromOutsideWithKey = arrayData.map(dt=> <ListRenderingSeparateWithKey key={dt.id} dataD={dt}></ListRenderingSeparateWithKey>)
    
    //when list doesn't have uniqueId then use 'index', it is inbuild parameter
    const arrayDataValuesFromOutsideWithKeyIndex = arrayData.map((dt,index)=> <ListRenderingSeparateWithKeyIndex key={index} dataD={dt}></ListRenderingSeparateWithKeyIndex>)

        return (
            <div>
                <hr></hr>
                <p>
                    <select>{dataValues}</select> <br></br>
                    <select>{arrayDataValues}</select> <br></br>
                    <select>{arrayDataValuesFromOutside}</select> <br/>
                    <span>With Key: </span>     <select>{arrayDataValuesFromOutsideWithKey}</select> <br></br>
                    <span>With index as a Key: </span>     <select>{arrayDataValuesFromOutsideWithKeyIndex}</select> <br></br>
                    
                </p>
                <hr></hr>
            </div>
        )
    }
}

export default ListRendering
