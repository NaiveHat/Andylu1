import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';


import './App.css';


import Header from './Components/Header.js'

import Home from './Components/Home.js'
import Articulo from './Components/Articulo'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
    
      <BrowserRouter>
        
      <div className="App">

        <Header />

        <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/Articulo/:id" component={Articulo} />

        </Switch>
      </div>
      
      </BrowserRouter>
    );
  }
}

export default App;
