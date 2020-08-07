import React from 'react'
import { Grid } from 'semantic-ui-react'
import FrameBookmark from './FrameBookmark'
const ListframeBookmark=({list})=>(
    <Grid>
        {
            list.list.map((infor,index)=><FrameBookmark infor={infor} key={index}/>)
        }
    </Grid>
)
export default ListframeBookmark