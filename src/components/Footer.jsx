import BembosLogo from '../assets/BembosLogo'
import { RiFacebookCircleFill } from 'react-icons/ri';
import { TiSocialYoutubeCircular } from 'react-icons/ti';
import { SiTwitter } from 'react-icons/si';
import { TiSocialInstagramCircular } from 'react-icons/ti';
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
            <a href="">Términos y condiciones de</a>
            <a href="">Promociones</a>
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
          <div className="mastercard"></div>
          <div className="safety"></div>
          <div className="document"></div>
        </article>
      </section>
    </footer>
  )
}
