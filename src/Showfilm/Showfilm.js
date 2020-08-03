import React, { useState } from 'react'
import { GridColumn, Grid } from 'semantic-ui-react'
import './showfilm.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ShowPage from '../Showpage/Showpage'
function Showfilm(props){
    const [list,setlist]=useState([])
    const [data,setdata]=useState([])
    const [ko,setko]=useState(1)
    const [currentPage,setcurrentPage]=useState(1)
    const [newsPerPage]=useState(4)
    const [pageNumbers,setpageNumbers]=useState(1)
    const []=useState([])
    let abc=props.location.hash;
    let abc1,length;
    var d=newsPerPage;
        if (list !== undefined) length=list.length;
        
        // console.log(length)
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
    function bookmark(id){
        
        axios.get(`http://www.omdbapi.com/?i=${id}&apikey=6b52ef7b&key=6b52ef7b`)
        .then(res=>{
            let a=JSON.parse(localStorage.getItem('id'))
            if (a===null) a=[];
            if  (a.findIndex(value=>value.imdbID===id)===-1){
                a.push(res.data)
            } else  {
                a.splice(a.findIndex(value=>value.imdbID===id),1)
            }
            a=JSON.stringify(a)
            localStorage.setItem('id',a)
        window.location.reload()
        })
        
        // settt(tt.concat([]))
        
    }
    function show(data,currentPage){
        let result=data.map((user,index)=>{
            var link='/film/'+user.imdbID
            let a= JSON.parse(localStorage.getItem('id'))
            console.log(a.length)
            let cl='far fa-bookmark'
            if (a!==null){
                if (a.findIndex(a1=>a1.imdbID===user.imdbID && a!==null) === -1 ){
                    cl='far fa-bookmark'
                } else {
                    cl='fas fa-bookmark'
                }
            }
            if (index>=(currentPage-1)*newsPerPage && index <= currentPage*newsPerPage-1)
            return(
                <GridColumn width={4} key={index} className="frame" >
                    <Link to={link}>
                        <img src={user.Poster}></img>
                        <div className="inforfilm">
                            <p>{user.Title}</p> 
                        </div>
                    </Link>
                    <i className={cl} onClick={()=>bookmark(user.imdbID)} ></i> 
                </GridColumn>
            )
        })
        return result
    }
    function scrollToTop(){
        // this.setState({
        //     true:1
        // })
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    function Showpage(length,abc1 ){
        // console.log(length)
        var result=null;
        var a=[];
        for (var i=1;i<=length;i++){
            a[i]=i;
        }
        if (a.length>0){
            result=a.map((menu,index)=>{
                var a="#"+index;
                abc1=parseInt(abc1)
                // console.log(abc1,index)
                if (index===abc1){
                    return(
                        <a href={a} key={a} ><li className="pagelink hvr-grow-shadow pagelink_click" onClick={scrollToTop}> {index}</li></a>
                        )
                } else 
                return(
                    <a href={a} key={a}><li className="pagelink hvr-grow-shadow" onClick={scrollToTop}> {index}</li></a>
                    )
            })   
        }
        return result;
    }
    
  
    if (data!==props.data){
        axios.get(`http://www.omdbapi.com/?s=${props.data}&plot=full&apikey=6b52ef7b&key=6b52ef7b`)
            .then(res=>{
                if (res.data.Search){
                    setko(1)
                    setlist(res.data.Search)
                } else {
                    axios.get(`http://www.omdbapi.com/?t=${props.data}&plot=full&apikey=6b52ef7b&key=6b52ef7b`)
                    .then(res=>{
                        if (res.data.Response==='False'){
                            setko(0)
                        } else {
                            setko(1)
                            let a=[]
                            a.push(res.data)
                            setlist(a)
                        }
                    })
                }
            })
        setdata(props.data)
    }
    if (ko===1){
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