import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import "../styles/HomeChildren.css"

export const HomeChildren = () => {
  const [data, setData] = useState([]);
  const [cantidad, setCantidad] = useState(1);
  const [precio, setPrecio] = useState();
  const [precioAcumulado, setPrecioAcumulado] = useState();

  const {id} = useParams();


  const getData = async () => {
      const res = await fetch(`http://localhost:3000/productos`);
      const prod = await res.json();
      // console.log(users)
      // setData(prod);
      // console.log(prod[4].promociones_online.find(x => String(x.id) === id));
      const productSelected = prod[4].promociones_online.find(x => String(x.id) === id)
      setData(productSelected)
      // prod.promociones_online
  }

  const getPrecio = async () => {
    const res = await fetch(`http://localhost:3000/productos`);
    const prod = await res.json();
    // console.log(users)
    // setData(prod);
    // console.log(prod[4].promociones_online.find(x => String(x.id) === id));
    const productSelected = prod[4].promociones_online.find(x => String(x.id) === id)
    setPrecio(productSelected.precio_actual)
    setPrecioAcumulado(productSelected.precio_actual);
    // prod.promociones_online
}

  useEffect(() => {
      getData();
      getPrecio();
  }, []);
  
  const handelRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
    precioAcumulado >= precio && setPrecioAcumulado(Math.round(precioAcumulado - precio))
    setPrecio(precio )
  }

  const handelSumar = () => {
    setCantidad(cantidad + 1)
     setPrecioAcumulado(Math.round(precioAcumulado + precio))
  }
  
  return (
    <div className='containerFatherChildren'>
      <div className='textHeaderChildren'>
        <p>Inicio / Promocion / Delivery Hmburguesas</p>
      </div>
      <div className='contentHomeChildren'>
        <div className='conteinerFlexChildren'>
          <div className='contenetImgChildren'>
            <img className='ImgChildren' src={data.img} alt="" />
          </div>
          <div>
            <h2 className='titleChildren'>{data.nombre}</h2>
            <p className='textDetailChildren'>{data.texto}</p>
          </div>
        </div>  
      </div>
      <div className='containerPrecioChildren'>
        <div className='containerIncrementoChindler'>
          <button className='btnCantidad' onClick={handelRestar}>-</button>
          <p className='namberChindler'>{cantidad}</p>
          <button className='btnCantidad' onClick={handelSumar}>+</button>
        </div>
        <div>
          <button className='btnAgregarPrecio'>AGREGAR S/{precioAcumulado}</button>
        </div>
      </div>  
    </div>
  )
}
