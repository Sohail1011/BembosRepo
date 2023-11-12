import { RiShoppingCartFill } from 'react-icons/ri';
import { MdLocalDining } from 'react-icons/md';
import { useState } from 'react';

import { BiPhone, BiUser } from "react-icons/bi";
import '../styles/Header.css';
import SVGComponent from "../assets/SVGComponent";

export const Header = () => {

  const [active, setActive] = useState(false)
  const [view, setView] = useState(false)

  return (
    <div className="principal" >
      <div className='containerHeaderBack'>
        <div className='textOneHeaderBlack'>
          <p className='textHeaderBlack'>Atencion <span className='containerheaderBlackSpan'>en Lima*</span></p>
        </div>
        <hr className='lineaHeaderBlack'/>
        <div>
          <p className='textHeaderBlack'>Delivery: Hasta las 11pm. <span>Recojo en tienda: Hasta las 10pm</span> <span>*Los horarios pueden variar por tienda.</span></p>
        </div>
      </div>
      <nav className='containerHead'>

          <a href=""><SVGComponent /></a>

      
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
          <button>Ingresar o crear una cuenta</button>
        </section>
      </article>
    </nav>
    <article className='enlaces'>
      <section className="zonas">
        <ul>
          <li>
            <div className='containerLinea'>
              <a href="">
                <img src="https://www.bembos.com.pe/_nuxt/img/bmb_menu.1db9cff.svg" alt="" /> 
                MENÚ
              </a>
              <hr className='lineaHover'/>
            </div>  
          </li>
          <li>
            <a className='promHover' href="">
              <img src="https://www.bembos.com.pe/_nuxt/img/bmb_promociones.b14af19.svg" alt="" /> 
              PROMOCIONES
            </a>
            <div className='containerHoverProm'>
              <p className='text'>Promociones personales</p><hr />
              <p className='text'>Promociones para 2</p><hr />
              <p className='text'>Promociones para compartir</p><hr />
              <p className='text'>Cupones</p>
            </div>
          </li>

          <li>
            <div className='containerLinea'>
              <a href="">
                <img src="https://www.bembos.com.pe/_nuxt/img/bmb_hamburguesa.3449e24.svg" alt="" />
                HAMBURGUESAS
              </a>
              <hr className='lineaHover'/>
            </div>
          </li>
          <li>
            <div className='containerLinea'>
              <a href="">
                <img src="https://www.bembos.com.pe/_nuxt/img/bmb_beneficios.f8fa7ff.svg"  alt="" /> 
                BENEFICIOS
              </a>
              <hr className='lineaHover'/>
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
            view ? <>
              <div className='cart-product'>
                <div className='info-cart-product'>
                  <p>#</p><p>Nombre</p><p>Producto</p><p>Precio</p>

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

    </div>
  )
}
