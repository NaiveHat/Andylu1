import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';


import Header from './Components/Header.js'

import Card from './Components/Card.js'
import Articulo from './Components/Articulo'



class App extends React.Component {
  render() {
    return (
    
      <BrowserRouter>
        
      <div className="App">

        <Header />

        <Switch>

        {/* <Route exact path="/" component={Hero} /> */}
        <Route exact path="/" component={Card} />
        <Route exact path="/Articulo/:id" component={Articulo} />

        </Switch>
      </div>
      
      </BrowserRouter>
    );
  }
}

export default App;
