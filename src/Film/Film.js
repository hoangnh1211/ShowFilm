import React, { useEffect, useState } from 'react'
import { Grid, GridRow, GridColumn } from 'semantic-ui-react'
import './Film.css'
import { callApidata } from '../Api/Api'
function Film(props){
    const [infor,setinfor]=useState({})
    useEffect(()=>{
        let id=props.match.params.name
        callApidata(id,'i')
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
                        <img src={infor.Poster} alt={infor.Title}></img>    
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