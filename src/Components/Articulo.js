import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'

import './styles/Articulo.css'

const fotosProducto = [
  {
    id:'0',
    title: 'Rosario Misionero',
    Precio: ' $ 79.98',
    Material: 'Madera e hilo tejido a mano',
    Descripcion: 'Rosario de nuestra precios sangre tejido a mano',
    fotos: [
      '.././assets/IMG_20200327_175050.jpg', 
      '.././assets/IMG-20200319-WA0019.jpg',
      '.././assets/IMG_20200327_175414.jpg'
    ]
  },
  {
    id:'1',
    title: 'Pulsera Cuarzo SB',
    Precio: '$ 149.87',
    Material: 'Cuarzo, piedra caliza',
    Descripcion: 'Pulsera de piedreria con medalla San Benito',
    fotos: [
      '.././assets/IMG-20200319-WA0006.jpg', 
      '.././assets/IMG_20200330_191335.jpg'
    ]
  },
  {
    id:'2',
    title: 'Rosario Virgen de Gpe. ',
    Precio: '$ 89.90',
    Material: 'Madera e hilo tejido a mano',
    Descripcion: 'Rosario misionero de madera con la Virgen de Guadalupe',
    fotos: [
      '.././assets/IMG_20200327_180332.jpg', 
      '.././assets/IMG_20200327_180454.jpg',
      '.././assets/IMG-20200319-WA0018.jpg'
    ]
  },
  {
    id:'3',
    title: 'Medalla Acero-San Benito',
    Precio: '$ 225.90',
    Material: 'Acero inoxidable',
    Descripcion: 'Medalla de San Benito con cadena, ambos de acero inoxidable',
    fotos: [
      '.././assets/IMG_20200330_204415.jpg', 
      '.././assets/IMG_20200330_204208.jpg',
      '.././assets/IMG-20200330-WA0051.jpg',
    ]
  },
  {
    id:'4',
    title:'Rosario pastilla blanco SB',
    Precio: '$ 285.90',
    Material: 'Acero inoxidable',
    Descripcion: 'Rosario tejido San Benito c/ pastilla de acero',
    fotos: [
      '.././assets/IMG_20200327_150403.jpg', 
      '.././assets/IMG_20200327_150128.jpg', 
      '.././assets/IMG_20200327_150033.jpg', 
    ]
  },
  {
    id:'5',
    title: 'Rosario (Hilo-Madera)',
    Precio: '$ 48.78',
    Material: 'Madera roble tallado',
    Descripcion: 'Rosario de madera tallada, tejido de hilo artesanal',
    fotos: [
      '.././assets/IMG_20200327_150033.jpg', 
      '.././assets/IMG_20200327_183922.jpg', 
      '.././assets/IMG_20200327_183956.jpg', 
    ]
  },
  {
    id:'6',
    title: 'Pulsera pastilla SB',
    Precio: '$ 103.50',
    Material: 'Pastilla acero, hilo',
    Descripcion: 'Pulsera misterio, tejido con pastilla de acero',
    fotos: [
      '.././assets/IMG_20200330_175257.jpg', 
      '.././assets/IMG_20200330_175124.jpg', 
      '.././assets/IMG_20200330_175444.jpg', 
    ]
  },
  {
    id:'7',
    title: 'Pulsera SB-Grande',
    Precio: '$ 115.00',
    Material: 'Chapa de oro',
    Descripcion: 'Pulsera de chapa de oro con medalla grande SB',
    fotos: [
      '.././assets/IMG_20200402_230315.jpg', 
      '.././assets/IMG_20200402_225801.jpg', 
      '.././assets/IMG_20200402_230508.jpg', 
    ]
  },
]

function Articulo (props) {

  const [items, setitems] = useState ([])
  
  useEffect ( () => {
  const newId =  props.match.params.id
  const articuloSeleccionado = fotosProducto.find ((producto) => {
    if (producto.id === newId) {
      return (true)
    } else {
      return (false)
    }
  })
  setitems(articuloSeleccionado.fotos)
  }, [ ] ) 



  

    return (
      <div className="articulo">

        <Carousel>
          {items.map ((foto) => {
            return (
              <Carousel.Item className="articulo_imagen container" >
                <img className="d-block w-100" src={foto} alt="foto1" />
              </Carousel.Item>
            )
          })
        } 
        </Carousel>

        <div className="card text-center">
          <div className="overflow">
            <div className="card-body text-dark">
            
          
          <h4 className="card-title"> Titulo </h4>


            <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugit modi quos in quae ducimus dolorem non consequuntur veritatis impedit.</p>
            <button className="btn btn-outline-success">Amazon</button>
            </div>
          </div>
        </div>


      </div>
    )
}

export default Articulo
