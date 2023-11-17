import { RiShoppingCartFill } from 'react-icons/ri';
import { MdLocalDining } from 'react-icons/md';
import { useContext, useState } from 'react';

import { BiPhone, BiUser } from "react-icons/bi";
import '../styles/Header.css';
import SVGComponent from "../assets/SVGComponent";
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

// import { userContext } from '../pages/HomeChildren';

export const Header = ({envioData}) => {

  const data = useContext(ProductContext);
  console.log(data)
  
  const [active, setActive] = useState(false)
  // const [view, setView] = useState(false)
  // const user = userContext(userContext);


  return (
    <header className="principal" >
      <div className='containerHeaderBack'>
        <div className='textOneHeaderBlack'>
          <p className='textHeaderBlack'>Atencion <span className='containerheaderBlackSpan'>en Lima*</span></p>
        </div>
        <hr className='lineaHeaderBlack' />
        <div>
          <p className='textHeaderBlack'>Delivery: Hasta las 11pm. <span>Recojo en tienda: Hasta las 10pm</span> <span>*Los horarios pueden variar por tienda.</span></p>
        </div>
      </div>
      <nav className='containerHead'>
        <Link to={"/"}>
          <SVGComponent />
        </Link>
        <article className="delivery">
          <section>
            <BiPhone size={"3rem"} />
          </section>
          <section className="info">
            <div className="actions">
              <h5>Delivery</h5>
              <select name="" id="">
                <option value="">Lima</option>
              </select>
            </div>
            <p>014191919</p>
          </section>
          <section className="person">
            <BiUser size={"1.5rem"} />
            <p>Ingresar o crear una cuenta</p>
          </section>
        </article>
      </nav>

     
     
      <article className='enlaces'>
        <section className="zonas">
          <ul>
            <li>
              <div className='containerLinea'>
                <Link to={"/menu"}>
                  <img src="https://www.bembos.com.pe/_nuxt/img/bmb_menu.1db9cff.svg" alt="" />
                  MENÚ
                </Link>
                <hr className='lineaHover' />
              </div>
            </li>
            <li>
              <Link className='promHover' to={"/promociones"}>
                <img src="https://www.bembos.com.pe/_nuxt/img/bmb_promociones.b14af19.svg" alt="" />
                PROMOCIONES
              </Link>
              <div className='containerHoverProm'>
                <p className='text'>Promociones personales</p><hr />
                <p className='text'>Promociones para 2</p><hr />
                <p className='text'>Promociones para compartir</p><hr />
                <p className='text'>Cupones</p>
              </div>
            </li>

            <li>
              <div className='containerLinea'>
                <Link to={"/hamburguesa"}>
                  <img src="https://www.bembos.com.pe/_nuxt/img/bmb_hamburguesa.3449e24.svg" alt="" />
                  HAMBURGUESAS
                </Link>
                <hr className='lineaHover' />
              </div>
            </li>
            <li>
              <div className='containerLinea'>
                <Link to={"/beneficios"}>
                  <img src="https://www.bembos.com.pe/_nuxt/img/bmb_beneficios.f8fa7ff.svg" alt="" />
                  BENEFICIOS
                </Link>
                <hr className='lineaHover' />
              </div>
            </li>
          </ul>
        </section>
        <section className='companium'>
          <button>
            <MdLocalDining size={"2rem"} /> <div><p>Pide en tiendas</p><span>SIN COLAS</span></div>
          </button>
        </section>
        <div className='containerPadre' >
          <section className='companium' onClick={() => setActive(!active)} >
            <button><RiShoppingCartFill size={"2rem"} /></button>
          </section>
          <div className={`container-cart-product ${active ? "" : `hiden-cart`}`}>
            {/* {cart.length ? (
            <> */}
            {
              data.productState.products.length > 0 ? <>
                <div className='cart-product'>
                  <div className='info-cart-product'>
                    {/* <p>#</p><p>Nombre</p><p>Producto</p><p>Precio</p> */}
                    {data.productState.products.map((x, i) => (
                      <div className='conteinerElementCart'>
                        <img className='imgCartHeader' src={x.data.img} alt="" />
                        <div key={i}>{x.data.nombre}</div>
                        <p>{x.cantidad}</p>
                        <p>S/{x.precioAcumulado}</p>

                      </div>

                    ))}

                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-close">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>    */}
                  </div>
                </div>
                <div className='cart-total'>
                  <h3>Total:</h3>
                  <span>S/0</span>
                </div>
              </> :
                <p >Selecciona un combo.</p>
            }
          </div>
          {/* </>
          ):( */}
          {/* <p>El carrito esta vacio</p> */}
          {/* )} */}
        </div>
      </article >
    </header>
  )
}
