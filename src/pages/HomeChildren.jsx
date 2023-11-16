import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BiChevronDown } from 'react-icons/bi';

export const HomeChildren = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

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
  });

  return (
    <>
      <div className='container'>
        <div className="panel">
          <article className="promo-informacion">
            <img src={data.img} alt={data.nombre} />
          </article>
          <article className="promo-opciones">
            <h2>{data.nombre}</h2>
            <div className='opciones-number'>
              <span>1</span><h3>Elige tu hamburguesa a la pobre</h3><button><BiChevronDown size={"2rem"} /></button>
              <hr />
            </div>
            <div className='opciones-number'>
              <span>2</span><h3>Elige tu incas kola</h3><button><BiChevronDown size={"2rem"} /></button>
              <hr />
            </div>
            <div className='opciones-number'>
              <span>3</span><h3>¿Desea algun extra?</h3><button><BiChevronDown size={"2rem"} /></button>
              <hr />
            </div>
            <div className='opciones-number'>
              <span>4</span><h3>Elige tus salsas</h3><button><BiChevronDown size={"2rem"} /></button>
              <hr />
            </div>
            <div className='opciones-number'>
              <span>5</span><h3>¿Deseas salsas extras?</h3><button><BiChevronDown size={"2rem"} /></button>
              <hr />
            </div>
          </article>
        </div>
      </div>
      <div className="comandos">
        <button>Agregar S/.{data.precio_actual}</button>
      </div>
    </>
  )
}
