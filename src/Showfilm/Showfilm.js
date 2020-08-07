import React, { useState, useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import './showfilm.css'
import ShowPage from '../Showpage/Showpage'
import FrameFilm from '../FrameFilm/FrameFilm'
import { callApidata } from '../Api/Api'
function Showfilm(props){
    const [list,setlist]=useState([])
    const [status,setstatus]=useState(1)
    const [currentPage,setcurrentPage]=useState(1)
    const [newsPerPage]=useState(4)
    const [pageNumbers,setpageNumbers]=useState(1)
    let abc=props.location.hash;
    let abc1,length;
    var d=newsPerPage;
        if (list !== undefined) length=list.length;
        if (length !== undefined){
            if (length%d===0) length=length/d; else length=parseInt(length/d)+1;
            if (pageNumbers!==length){
                setpageNumbers(length)
            }
        }
        if (abc === "") abc1=1; else  abc1=abc.slice(1)
        if (currentPage!==abc1){
            setpageNumbers(length)
            setcurrentPage(abc1)
        }
    function show(data,currentPage){
        let result=data.map((user,index)=>{
            var link='/film/'+user.imdbID
            
            if (index>=(currentPage-1)*newsPerPage && index <= currentPage*newsPerPage-1)
            return(
                <FrameFilm key1={index} key={index} to={link} src={user.Poster} Title={user.Title}  imdbID={user.imdbID}/>
            )
            return null
        }) 
        return result
    }
    useEffect(()=>{
        callApidata(props.data,'s')
        .then(res=>{
            if (res.data.Search){
                setstatus(1)
                setlist(res.data.Search)
            } else {
                callApidata(props.data,'t')
                .then(res=>{
                    if (res.data.Response==='False'){
                        setstatus(0)
                    } else {
                        setstatus(1)
                        let a=[]
                        a.push(res.data)
                        setlist(a)
                    }
                })
            }
        })
    },[props.data])
    if (status===1){
        return(
            <div>
            <ShowPage pageNumbers={pageNumbers} abc1={abc1}/>

                <Grid className="show">
                    {show(list,currentPage)}
                </Grid>
            </div>
            
        )
    } else {
        return(
            <div>
                không có phim : {localStorage.getItem('search')}
            </div>
        )
    }
    
}
export default Showfilm