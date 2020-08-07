import React from 'react'
import { GridColumn } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
const FrameBookmark=({infor})=>(
    <GridColumn width={4}   className="frame" >
        <Link  to= {'/film/'+infor.imdbID} >
            <img src={infor.Poster} alt={infor.Title}></img>
            <div className="inforfilm">
                <p>{infor.Title}</p> 
            </div>
        </Link>
    </GridColumn>
)
export default FrameBookmark