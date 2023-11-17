import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../styles/HomeChildren.css"
import { Header } from '../components/Header';
import { DataChildren } from './DataChildren';
import { ProductContext } from '../context/ProductContext';

// import  Header  from '../components/Header'; 
// export const userContext = React.createContext();
// export {envioData} from "../components/Header"
export const HomeChildren = () => {

  const {productState, setState} = useContext(ProductContext);

  
  const {id} = useParams();

  const [data, setData] = useState([]);
  const [cantidad, setCantidad] = useState(1);
  const [precio, setPrecio] = useState();
  const [precioAcumulado, setPrecioAcumulado] = useState();

  const [envioData, setEnvioData] = useState([]);

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

  // console.log(data)
  const getPrecio = async () => {
    const res = await fetch(`http://localhost:3000/productos`);
    const prod = await res.json();
    // console.log(users)
    // setData(prod);
    // console.log(prod[4].promociones_online.find(x => String(x.id) === id));
    const productSelected = prod[4].promociones_online.find(x => String(x.id) === id)
    setPrecio(Math.round(productSelected.precio_actual))
    setPrecioAcumulado(Math.round(productSelected.precio_actual));
    // prod.promociones_online
}

  useEffect(() => {
      getData();
      getPrecio();
  }, []);
  
  const handelRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
    precioAcumulado > precio && setPrecioAcumulado(Math.round(precioAcumulado - precio))
    setPrecio(precio )
  }

  const handelSumar = () => {
    setCantidad(cantidad + 1)
     setPrecioAcumulado(precioAcumulado + precio)
  }

  // data.nuevo_precio = precioAcumulado
  // console.log(data)

  // const data2 = ([...data, precioAcumulado])

  // console.log(data2)

  const funsionEnviar = () => {
    setState({...productState, products: [...productState.products, {data: data, precioAcumulado: precioAcumulado, cantidad: cantidad}]});
    // setEnvioData(data.nuevo_precio = precioAcumulado)
    // setEnvioData(data)
  }
  // console.log(envioData)
  
  return (
    <div className='containerFatherChildren'>
      <DataChildren envioData={envioData}/>
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
          {/* <userContext.Provider value={envioData}> */}
            <button onClick={funsionEnviar} className='btnAgregarPrecio'>AGREGAR S/{precioAcumulado}</button>
          {/* </userContext.Provider> */}
        </div>
      </div>  
    </div>
  )
}


