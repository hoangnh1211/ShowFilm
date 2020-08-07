import React, { useState } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import Showfilm from './Showfilm/Showfilm';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Film from './Film/Film';
import Bookmark from './Bookmark/Bookmark';
require('dotenv').config()

function App() {
  const [nameSearch,setnameSearch]=useState('')
  function changeName(e){
    setnameSearch(e.target.value)
  }
  function search(){
    localStorage.setItem('search',nameSearch)
    setnameSearch('')
  }
    return (
      <Router>
        <Container className="app">
          <input className="input" value={nameSearch} onChange={changeName}   placeholder='Search...'/>
          <Link to='/search' onClick={search}><button>tim kiem</button></Link>
          <Link to='/'><button>trang chu</button></Link>
          <Link to='/bookmark' ><button>bookmark</button></Link>
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


