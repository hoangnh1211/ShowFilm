import React, { useState } from 'react';
import './App.css';
import { Grid, GridRow, GridColumn, Container, Input, Search } from 'semantic-ui-react';
import Showfilm from './Showfilm/Showfilm';
import {BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Film from './Film/Film';
import axios from 'axios';
import Searchf from './Searchf';
import Bookmark from './Bookmark/Bookmark';



function App() {
  const [name,setname]=useState('')
  const [data,setdata]=useState('abc')
  function changeName(e){
    setname(e.target.value)
  }
  function enter(){
    localStorage.setItem('search',name)
    setname('')
  }
    return (
      <Router>
        <Container className="app">
          <input className="input" value={name} onChange={changeName}   placeholder='Search...'/>
          <Link to='/search' onClick={enter}><button>tim kiem</button></Link>
          <Link to='/'><button>trang chu</button></Link>
          <Link to='/bookmark' onClick={enter}><button>bookmark</button></Link>
          <Switch>
          <Route
              path="/"
              exact
              render={props => 
                <Showfilm {...props}  data='star'   />
              }
            />
          <Route
              path="/film/:name"
              exact
              render={props => 
                <Film {...props}    Name="Áo Len" />
              }
            />
            <Route
              path="/bookmark"
              exact
              render={props => 
                <Bookmark/>
              }
            />
            <Route
                path="/search"
                exact
                render={props => 
                    <Showfilm {...props}   data={localStorage.getItem('search')} />
              }></Route>
          </Switch>    
        </Container>
        
      </Router>
    );
  
}

export default App;

