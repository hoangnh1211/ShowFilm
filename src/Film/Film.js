import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, GridRow, GridColumn } from 'semantic-ui-react'
import './Film.css'
function Film(props){
    const [infor,setinfor]=useState({})
    const [rate,setrate]=[0]
    console.log(props.match.params.name)
    useEffect(()=>{
        axios.get(`http://www.omdbapi.com/?i=${props.match.params.name}&apikey=6b52ef7b&key=6b52ef7b`)
        .then(res=>{
            setinfor(res.data)
        })
    },[])

    return(
        <div>
            <p>thông tin film </p>
            <Grid>
                <GridRow >
                    <GridColumn width={6}>
                        <img src={infor.Poster}></img>    
                    </GridColumn>
                    <GridColumn width={2}></GridColumn>
                    <GridColumn width={8}>
                        <h1><b>{infor.Title}</b></h1>
                        <p>{infor.Title} ({infor.Released})</p>
                        <div className="khung">
                            <p>Writer : {infor.Writer}</p>
                            <p>Actors : {infor.Actors}</p>
                            <p>Country : {infor.Country}</p>
                            <p>Year : {infor.Year}</p>
                            <p>Runtime : {infor.Runtime}</p>
                            <p>Type : {infor.Type}</p>
                            <p>Language : {infor.Language}</p>
                            <p>Genre : {infor.Genre}</p>
                            <p>Production : {infor.Production}</p>
                            <p>Plot : {infor.Plot}</p>
                        </div>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}
export default Film