import React, { useEffect, useState } from 'react'

import './styles/Articulo.css'

const fotosProducto = [
  {
    id:'0',
    fotos: [
      './assets/IMG_20200327_175050.jpg', 
      './assets/IMG-20200319-WA0019.jpg',
      './assets/IMG_20200327_175414.jpg'
    ]
  },
  {
    id:'1',
    fotos: [
      '/assets/IMG-20200319-WA0006.jpg', 
      '/assets/IMG_20200330_191335.jpg'
    ]
  },
  {
    id:'2',
    fotos: [
      './assets/IMG_20200327_180332.jpg', 
      './assets/IMG_20200327_180454.jpg',
      './assets/IMG-20200319-WA0018.jpg'
    ]
  },
  {
    id:'3',
    fotos: [
      './assets/IMG_20200330_204415.jpg', 
      './assets/IMG_20200330_204208.jpg',
      './assets/IMG-20200330-WA0051.jpg',
      './assets/IMG-20200330-WA0051.jpg',
      './assets/IMG-20200330-WA0052.jpg',
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
  }, []) 


    return (
      <div>
        {items.map ((foto) => {
        return (
        <div >
          <img className="articulo" src={foto} alt="foto1" />
        
        </div>
          )
        })
      } 
      </div>
    )
}


export default Articulo
