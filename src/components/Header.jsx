import { RiShoppingCartFill } from 'react-icons/ri';
import { MdLocalDining } from 'react-icons/md';
import { useState } from 'react';


export const Header = () => {

  const [active, setActive] = useState(false)
  const [view, setView] = useState(false)

  return (
    <div >
    <article className='enlaces'>
      <section className="zonas">
        <ul>
          <li><a href="">Menú</a></li>
          <li><a href="">Beneficios</a></li>
          <li><a href="">Promociones</a></li>
          <li><a href="">Locales</a></li>
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
              <p>Selecciona un combo.</p>
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
