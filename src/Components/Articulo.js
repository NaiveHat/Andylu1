import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'

import CardArticulo from './CardArticulo'
import './styles/Header.css'
import './styles/Articulo.css'

const fotosProducto = [
  {
    id:'0',
    title: 'Rosario Misionero',
    price: '   $ 79.98',
    material: 'Madera e hilo tejido a mano',
    description: 'Rosario de nuestra preciosa sangre tejido a mano, ideal para misiones eucaristicas',
    fotos: [
      '.././assets/IMG_20200327_175050.jpg', 
      '.././assets/IMG-20200319-WA0019.jpg',
      '.././assets/IMG_20200327_175414.jpg'
    ]
  },
  {
    id:'1',
    title: 'Pulsera Cuarzo SB',
    price: '   $ 149.87',
    material: 'Cuarzo, piedra caliza',
    description: 'Pulsera de piedreria (Cuarzo) con medalla San Benito',
    fotos: [
      '.././assets/IMG-20200319-WA0006.jpg', 
      '.././assets/IMG_20200330_191335.jpg'
    ]
  },
  {
    id:'2',
    title: 'Rosario Virgen de Gpe. ',
    price: '   $ 89.90',
    material: 'Madera e hilo tejido a mano',
    description: 'Rosario misionero de madera, con la Virgen de Guadalupe',
    fotos: [
      '.././assets/IMG_20200327_180332.jpg', 
      '.././assets/IMG_20200327_180454.jpg',
      '.././assets/IMG-20200319-WA0018.jpg'
    ]
  },
  {
    id:'3',
    title: 'Medalla Acero-San Benito',
    price:   '   $ 225.90',
    material: 'Acero inoxidable',
    description: 'Medalla de San Benito con cadena, ambos elementos de acero inoxidable',
    fotos: [
      '.././assets/IMG_20200330_204415.jpg', 
      '.././assets/IMG_20200330_204208.jpg',
      '.././assets/IMG-20200330-WA0051.jpg',
    ]
  },
  {
    id:'4',
    title:'Rosario pastilla blanco SB',
    price: '   $ 285.90',
    material: 'Acero inoxidable',
    description: 'Rosario tejido San Benito con pastilla de acero inoxidable',
    fotos: [
      '.././assets/IMG_20200327_150403.jpg', 
      '.././assets/IMG_20200327_150128.jpg', 
      '.././assets/IMG_20200327_150033.jpg', 
    ]
  },
  {
    id:'5',
    title: 'Rosario (Hilo-Madera)',
    price: '   $ 48.78',
    material: 'Madera roble tallado',
    description: 'Rosario de madera tallada, tejido de hilo artesanal',
    fotos: [
      '.././assets/IMG_20200327_150033.jpg', 
      '.././assets/IMG_20200327_183922.jpg', 
      '.././assets/IMG_20200327_183956.jpg', 
    ]
  },
  {
    id:'6',
    title: 'Pulsera pastilla SB',
    price: '   $ 103.50',
    material: 'Pastilla acero, hilo',
    description: 'Pulsera misterio, tejido con pastilla de acero inoxidable',
    fotos: [
      '.././assets/IMG_20200330_175257.jpg', 
      '.././assets/IMG_20200330_175124.jpg', 
      '.././assets/IMG_20200330_175444.jpg', 
    ]
  },
  {
    id:'7',
    title: 'Pulsera SB-Grande',
    price: '   $ 115.00',
    material: 'Chapa de oro',
    description: 'Pulsera de chapa de oro con medalla grande (1.5 cm) de San Benito. Existencia en varios colores',
    fotos: [
      '.././assets/IMG_20200402_230315.jpg', 
      '.././assets/IMG_20200402_225801.jpg', 
      '.././assets/IMG_20200402_230508.jpg', 
    ]
  },
]

function Articulo (props) {

  const [items, setitems] = useState ([])
  const [articulo, setArticulo] = useState ({})

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
  setArticulo(articuloSeleccionado)
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

        <CardArticulo 
          titulo={articulo.title}
          precio={articulo.price}
          mater={articulo.material}
          desc={articulo.description}
        />
    
      </div>
    )
}

export default Articulo
