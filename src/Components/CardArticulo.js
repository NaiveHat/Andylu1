
import React from 'react'

import './styles/CardArticulo.css'


export default function CardArticulo(props) {

  const amazon = "https://www.amazon.com.mx/dp/B088QNNSFV/ref=cm_sw_r_wa_api_i_Jr2XEbTFAWYQV"
  const instagram = "https://Instagram.com/andylujewelry"

  return (
    <div className="card text-left">
    <div className="overflow">
      <div className="card-body text-dark">
      <h2 className="titulo card-title text-center"> {props.titulo} </h2>
      <h3 className="card-price"> Precio:  {props.precio} </h3>
      <h4 className="card-material"> <strong> Material: </strong> {props.mater} </h4>
      <h4 className="card-desc"><strong> Detalles: </strong> {props.desc}</h4>
      <p className="card-text text-secondary"> Para realizar tu compra, por favor accede a cualquiera de nuestras plataformas de venta, dando CLICK en la opcion que mas te convenga </p>
        <div className="btn-container">
          <button 
          className="btn-ghost pink round"> <a href={amazon} target="_blank">Amazon  </a> </button> 
          <button className="btn-ghost pink round"> <a href={instagram} target="_blank"> Instagram   </a> </button>
        </div>
      </div>
    </div>
  </div>
    )
    }
