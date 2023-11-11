import { BembosLogo } from '../assets/BembosLogo'
import { RiFacebookCircleFill } from 'react-icons/ri';
import { TiSocialYoutubeCircular } from 'react-icons/ti';
import { SiTwitter } from 'react-icons/si';
import { TiSocialInstagramCircular } from 'react-icons/ti';
import { RiVisaLine } from 'react-icons/ri';
import { SiMastercard } from 'react-icons/si';
import { SiAmericanexpress } from 'react-icons/si';
import { SafetyLogo } from '../assets/SafetyLogo';
import { FcDocument } from 'react-icons/fc';
import { BiCopyright } from 'react-icons/bi';
import '../styles/Footer.css'

export const Footer = () => {
  return (
    <footer className="ultimate">
      <section className='social-image'>
        <RiFacebookCircleFill size={"3rem"} />
        <TiSocialYoutubeCircular size={"3rem"} />
        <SiTwitter size={"3rem"} />
        <TiSocialInstagramCircular size={"3rem"} />
      </section>
      <section className="metodos-pago">
        <article className="locales">
          <div className="part-1">
            <a href="">Locales</a>
            <a href="">Zonas de Reparto</a>
            <a href="">Nosotros</a>
            <a href="">Atención al Cliente</a>
            <a href="">Preguntas Frecuentes</a>
            <a href="">Mapa del sitio</a>
          </div>
          <div className="part-2">
            <a href="">Políticas de Datos Personales</a>
            <a href="">Términos y condiciones de <br />
              Promociones</a>
            <a href="">Derechos ARCO</a>
          </div>
          <div className="part-3">
            <BembosLogo />
          </div>
        </article>
        <article className="visa">
          <div className="modes">
            <p>FORMAS DE PAGO</p>
          </div>
          <div className="mastercard">
            <RiVisaLine size={"2.5rem"} />
            <SiMastercard size={"2.5rem"} />
            <SiAmericanexpress size={"2.5rem"} />
          </div>
          <div className="safety">
            <SafetyLogo />
          </div>
          <div className="document">
            <button><FcDocument size={'1.5rem'} />COMPROBANTES</button>
          </div>
        </article>
        <article className="registro">
          <form action="">
            <label htmlFor="">¿Quieres recibir promociones y noticias?</label>
            <div className="permiso">
              <input type="text" placeholder='Tu correo' />
              <button>Enviar</button>
            </div>
            <div className="condicionals">
              <input type="checkbox" />
              <label htmlFor="" className='lectura'>He leído y revisado <a href="">los términos y condiciones</a></label>
            </div>
            <div className="reclamaciones"></div>
          </form>
        </article>
      </section>
      <section className='disclaimer'>
        <hr />
        <div className="autorithy">
          <BiCopyright /> <p>Falso Ecommerce</p>
        </div>
      </section>
    </footer>
  )
}
