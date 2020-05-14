import React, { Component } from 'react'

import './styles/Header.css'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo ml-4">
          <a href="index.html">
          <img src="../assets/Logo1.GIF"  alt="Logo Andylu" className="logo-imagen" /> </a>
          <h3 className="marca">    ANDYLU </h3>
        </div>

        <nav >
          <ul>
            <li><a href="index.html"> Home </a></li>
            <li className="sub-menu"><a href="index.html"> Productos </a>
              <ul>
                <li><a href="/"> Acero </a></li>
                <li><a href="/"> Joyeria </a></li>
                <li><a href="/"> Pulseras </a></li>
                <li><a href="/"> Rosarios </a></li>
              </ul>
            </li> 
            <li className="sub-menu"><a href="index.html"> Servicios </a>
              <ul>
                <li><a href="/"> Envios </a></li>
                <li><a href="/"> Sugerencias </a></li>
                <li><a href="/"> Mayoreo </a></li>
                <li><a href="/"> Servicio al cliente </a></li>
                </ul>
            </li>
            <li><a href="index.html"> Portafolio </a></li>
            <li className="sub-menu"><a href="index.html"> Quienes somos? </a>
              <ul>
                <li><a href="/"> Historia </a></li>
                <li><a href="/"> Equipo </a></li>
                <li><a href="/"> Procesos </a></li>
              </ul>
            </li>
            <li><a href="index.html"> Contactanos </a></li>
          </ul>
        </nav>
        <div className="menu-toggle"><i className="fa fa-bars" aria-hidden="true"></i></div>
      </header>
    )
  }
}

