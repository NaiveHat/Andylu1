import React, { Component } from 'react'
import logo from '../Images/Logos/Logo1.GIF';

import './styles/Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex bd-highlight mb-3">
        <div>
          <a className="navbar-brand" href="index.html">
          <img src={logo} width="47" height="42" className="d-inline-block align-top" alt="Logo Andylu" /> Andylu </a>
        </div>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-0 mt-2 mt-lg-0">

            <div className="dropdown">
              <button><a classNam="btn btn-secondary dropdown-toggle" href="index.html" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Home </a> 
                <span className="caret"></span>
              </button>

              <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenuLink">
                <li> <a className="dropdown-item" href="/">Action</a> </li>
                <li> <a className="dropdown-item" href="/">Action 1</a> </li>
                <li> <a className="dropdown-item" href="/">Action 2</a> </li>
                <li> <a className="dropdown-item" href="/">Action 3</a> </li>
              </ul>
            </div>   




            <li className="nav-item"> <a className="nav-link" href="index.html">New & Now</a> </li>

            <li className="nav-item"> <a className="nav-link" href="index.html">Jewerly</a> </li>

          </ul>
        </div>
        <div>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}







