import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const HomeChildren = () => {
  const [data, setData] = useState([]);

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

  useEffect(() => {
      getData();
  }, []);


  
  console.log(id)
  
  

  
  return (
    <div>
      plantilla - 
      {/* {params.id} */}
      <h3>{data.nombre}</h3>
    </div>
  )
}
