import { Link } from 'react-router-dom';
import { FooterF } from "./Style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faTiktok,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
   <FooterF>
      <div id="navegar">
         <a href="https://www.ibmec.com" target="_blank" rel="noopener noreferrer">
            <img src="https://intersectorparceiraibmec.com/wp-content/uploads/2023/03/IBMEC-BRAANCO-1024x455.png" alt="Imagem de Link Externo" />
         </a>
         <Link to="/">Home</Link>
         <Link to="/sobrenos">Sobre Nós</Link>
         <Link to="/projetos">Projetos</Link>
      </div>
      
      <div className="social-container">
         <h3>Redes Sociais</h3>
         <div id="social">
            <div className="social-column">
               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
               </a>
               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
               </a>
               <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
               </a>
            </div>
            <div className="social-column">
               <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
               </a>
               <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTiktok} /> TikTok
               </a>
               <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} /> YouTube
               </a>
            </div>
         </div>
      </div>
   </FooterF>
);

export default Footer;
