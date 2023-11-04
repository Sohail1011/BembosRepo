import { RiShoppingCartFill } from 'react-icons/ri';
import { MdLocalDining } from 'react-icons/md';

export const Header = () => {
  return (
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
      <section className='companium'>
        <button><RiShoppingCartFill size={"2rem"} /></button>
      </section>
    </article>
  )
}
