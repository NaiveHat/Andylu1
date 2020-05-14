
import React, { Component } from 'react'

import './styles/Card.css'
import './styles/Hero.css'

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
        Nombre: 'Medalla Acero-San Benito',
        Imagen: './assets/IMG_20200330_204415.jpg',
        Precio: '$ 225.90',
        Material: 'Acero inoxidable',
        Descripcion: 'Medalla de San Benito con cadena, ambos de acero inoxidable',
        id: '4'
      },
      {
        Nombre: 'Medalla Acero-San Benito',
        Imagen: './assets/IMG_20200330_204415.jpg',
        Precio: '$ 225.90',
        Material: 'Acero inoxidable',
        Descripcion: 'Medalla de San Benito con cadena, ambos de acero inoxidable',
        id: '4'
      },
      {
        Nombre: 'Medalla Acero-San Benito',
        Imagen: './assets/IMG_20200330_204415.jpg',
        Precio: '$ 225.90',
        Material: 'Acero inoxidable',
        Descripcion: 'Medalla de San Benito con cadena, ambos de acero inoxidable',
        id: '4'
      },
      {
        Nombre: 'Medalla Acero-San Benito',
        Imagen: './assets/IMG_20200330_204415.jpg',
        Precio: '$ 225.90',
        Material: 'Acero inoxidable',
        Descripcion: 'Medalla de San Benito con cadena, ambos de acero inoxidable',
        id: '4'
      },

    ]
  }



  render() {
    return (
      <>
      <div className="container showcase">
        <h1 className="title"> Empresa artesanal 100% mexicana  </h1>
          <p className="subtitle"> Revisa nuestra gama de productos y servicios</p>
      </div>

    <section className="container">
      <div className="new-cards">
      
      {this.state.arreglo.map ((articulo) => {
        return (
        <div >
          <img  src={articulo.Imagen} alt="foto1" />
          <h5> {articulo.Nombre} </h5>
          <h4> {articulo.Precio} </h4>
          <h6> {articulo.Material} </h6>
          <p> {articulo.Descripcion} </p>
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



