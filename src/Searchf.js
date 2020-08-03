import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Showfilm from './Showfilm/Showfilm'
function Searchf(props){
    console.log(props.data)
    console.log(props.location.hash)
    const link='/search/'+props.data
    return(
        <Redirect to={link} />
        // <div>
            
        // </div>
        )
}
export default Searchf