import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './styles/Header.css'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo ml-4">
          <Link to='/'>
          <img src="../assets/Logo1.GIF"  alt="Logo Andylu" className="logo-imagen" /> </Link>
          <h3 className="marca">    ANDYLU </h3>
          <Link/>
        </div> 

        <nav >
          <ul>
            <li><Link to='/'> Home </Link></li>
            <li className="sub-menu"><Link to="/"> Productos </Link>
              <ul>
                <li><Link to="/"> Acero </Link></li>
                <li><Link to="/"> Joyeria </Link></li>
                <li><Link to="/"> Pulseras </Link></li>
                <li><Link to="/"> Rosarios </Link></li>
              </ul>
            </li> 
            <li className="sub-menu"><Link to="/"> Servicios </Link>
              <ul>
                <li><Link to="/"> Envios </Link></li>
                <li><Link to="/"> Sugerencias </Link></li>
                <li><Link to="/"> Mayoreo </Link></li>
                <li><Link to="/"> Servicio al cliente </Link></li>
                </ul>
            </li>
            <li><Link to="/"> Portafolio </Link></li>
            <li className="sub-menu"><Link to="/"> Quienes somos? </Link>
              <ul>
                <li><Link to="/"> Historia </Link></li>
                <li><Link to="/"> Equipo </Link></li>
                <li><Link to="/"> Procesos </Link></li>
              </ul>
            </li>
            <li><Link to="/"> Contactanos </Link></li>
          </ul>
        </nav>
        <div className="menu-toggle"><i className="fa fa-bars" aria-hidden="true"></i></div>
      </header>
    )
  }
}

