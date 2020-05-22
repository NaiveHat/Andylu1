
import React, { Component } from 'react'

import './styles/Card.css'

export default class Card extends Component {

  state = {
    arreglo: [
      {
        Nombre: 'Rosario Misionero',
        Imagen: './assets/IMG_20200327_175050.jpg',
        Precio: ' $ 79.98',
        Material: 'Madera e hilo tejido a mano',
        Descripcion: 'Rosario de nuestra precios sangre tejido a mano',
        id: '0'
      },
      {
        Nombre: 'Pulsera Cuarzo SB',
        Imagen: './assets/IMG-20200319-WA0006.jpg',
        Precio: '$ 149.87',
        Material: 'Cuarzo, piedra caliza',
        Descripcion: 'Pulsera de piedreria con medalla San Benito',
        id: '1'
      },
      {
        Nombre: 'Rosario Virgen de Gpe. ',
        Imagen: './assets/IMG_20200327_180332.jpg',
        Precio: '$ 89.90',
        Material: 'Madera e hilo tejido a mano',
        Descripcion: 'Rosario misionero de madera con la Virgen de Guadalupe',
        id: '2'
      },
      {
        Nombre: 'Medalla Acero-San Benito',
        Imagen: './assets/IMG_20200330_204415.jpg',
        Precio: '$ 225.90',
        Material: 'Acero inoxidable',
        Descripcion: 'Medalla de San Benito con cadena, ambos de acero inoxidable',
        id: '3'
      },
      {
        Nombre: 'Rosario pastilla blanco SB',
        Imagen: './assets/images/IMG_20200327_150128.jpg',
        Precio: '$ 285.90',
        Material: 'Acero inoxidable',
        Descripcion: 'Rosario tejido San Benito c/ pastilla de acero',
        id: '4'
      },
      {
        Nombre: 'Rosario (Hilo-Madera)',
        Imagen: './assets/images/IMG_20200327_183848.jpg',
        Precio: '$ 48.78',
        Material: 'Madera roble tallado',
        Descripcion: 'Rosario de madera tallada, tejido de hilo artesanal',
        id: '5'
      },
      {
        Nombre: 'Pulsera pastilla SB',
        Imagen: './assets/images/IMG_20200330_175124.jpg',
        Precio: '$ 103.50',
        Material: 'Pastilla acero, hilo',
        Descripcion: 'Pulsera misterio, tejido con pastilla de acero',
        id: '6'
      },
      {
        Nombre: 'Pulsera SB-Grande',
        Imagen: './assets/IMG_20200402_230315.jpg',
        Precio: '$ 115.00',
        Material: 'Chapa de oro',
        Descripcion: 'Pulsera de chapa de oro con medalla grande SB',
        id: '7'
      },

    ]
  }

  handleClick = (articuloId) => {
    this.props.history.push (`/Articulo/${articuloId}`)
  }

  render() {
    return (
      <>
      <div className="container showcase">
        <h1 className="title"> Empresa artesanal 100% mexicana  </h1>
          <h4 className="subtitle"> Revisa nuestra gama de productos y servicios</h4>
      </div>

    <section className="container">
      <div className="new-cards">
      
      {this.state.arreglo.map ((producto) => {
        return (
        <div>
          <img onClick={()=>{this.handleClick(producto.id)}} 
          src={producto.Imagen} 
          alt="foto1" />
          <h5> {producto.Nombre} </h5>
          <h4> {producto.Precio} </h4>
          <h6> {producto.Material} </h6>
          <p> {producto.Descripcion} </p>
        </div>
          )
        })
      } 
      </div>  
      </section>
      </>
    )
  }
}







