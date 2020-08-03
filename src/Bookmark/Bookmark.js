import React, { useState } from 'react'
import { GridColumn, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
function Bookmark(){
    const [user,setuser]=useState([])
    function showBookmark(data){
        if (data!==null){
            let result=data.map((user1,index)=>{
                let link='/film/'+user1.imdbID
                return(
                    <GridColumn width={4} key={index}  className="frame" >
                        <Link to={link}>
                            <img src={user1.Poster}></img>
                            <div className="inforfilm">
                                <p>{user1.Title}</p> 
                            </div>
                        </Link>
                    </GridColumn>
                )
                    
                })
                return result
        }   
        
    }
    // useEffect(()=>{
    //     console.log('a')
    //     let arr=JSON.parse(localStorage.getItem('id'))
    //     console.log(arr)
    //     for (let i=0;i<arr.length;i++ ){
    //         axios.get(`http://www.omdbapi.com/?i=${arr[i]}&plot=full&apikey=6b52ef7b&key=6b52ef7b`)
    //         .then(res=>{
    //             let arr1=user
    //             arr1.push(res.data)
    //             setuser(arr1)
    //             // localStorage.setItem('data',JSON.stringify(arr1))
    //         })
    //     }
    // },[])
    return(
        <Grid>
            {showBookmark(JSON.parse(localStorage.getItem('id')))}
        </Grid>
    )
}
export default Bookmark