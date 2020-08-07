import React, { useState } from 'react'
import { GridColumn } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
function FrameFilm(props){
    function bookmark(id){
        let listBookmark1=JSON.parse(localStorage.getItem('value'))
            if (listBookmark1===null) listBookmark1=[];
            if  (listBookmark1.findIndex(value=>value===id)===-1){
                listBookmark1.push(id)
            } else  {
                listBookmark1.splice(listBookmark1.findIndex(value=>value===id),1)
            }
            listBookmark1=JSON.stringify(listBookmark1)
            localStorage.setItem('value',listBookmark1)
        
        setL(load+1)        
    }
    const [load,setL]=useState(0)
    let listBookmark= JSON.parse(localStorage.getItem('value'))
    let classBookmark='far fa-bookmark'
    if (listBookmark!==null){
        listBookmark.findIndex(value=>value===props.imdbID) === -1? classBookmark='far fa-bookmark':classBookmark='fas fa-bookmark'
    }
    return(
        <GridColumn width={4} key={props.key1} className="frame" >
            <Link to={props.to}>
                <img src={props.src} alt={props.Title}></img>
                <div className="inforfilm">
                    <p>{props.Title}</p> 
                </div>
            </Link>
            <i className={classBookmark} onClick={()=>bookmark(props.imdbID)} ></i> 
        </GridColumn>
    )
}
export default FrameFilm