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
      </section>
    </footer>
  )
}
