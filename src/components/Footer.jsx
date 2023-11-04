import BembosLogo from '../assets/BembosLogo'
import { RiFacebookCircleFill } from 'react-icons/ri';
import { TiSocialYoutubeCircular } from 'react-icons/ti';
import { SiTwitter } from 'react-icons/si';
import { TiSocialInstagramCircular } from 'react-icons/ti';
import '../styles/Footer.css'

export const Footer = () => {
  return (
    <footer className="ultimate">
      <div className='social-image'>
        <RiFacebookCircleFill size={"3rem"} />
        <TiSocialYoutubeCircular size={"3rem"} />
        <SiTwitter size={"3rem"} />
        <TiSocialInstagramCircular size={"3rem"} />
      </div>
      <BembosLogo />
    </footer>
  )
}
