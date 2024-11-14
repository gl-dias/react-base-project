import { Link } from 'react-router-dom';
import { FooterF } from "./Style";

const Footer = () => (
  <FooterF>
    <div className="navegar">
      <div className="links">
        <Link to="/sobrenos">Sobre Nós</Link>
        <Link to="/">Projetos</Link>
        <Link to="/faleconosco">Fale Conosco</Link>
      </div>
    </div>

    <div className="social-container">
      <h3>Redes Sociais</h3>
      <div className="social-links">
        <div className="social-column">
          <a href="https://https://www.facebook.com/Ibmec" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://www.instagram.com/ibmec/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://https://x.com/ibmec_oficial?lang=en" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
        <div className="social-column">
          <a href="https://https://www.linkedin.com/school/ibmec/?originalSubdomain=br" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://https://www.tiktok.com/@ibmec.oficial" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i> TikTok
          </a>
          <a href="https://https://www.youtube.com/Ibmec" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i> YouTube
          </a>
        </div>
      </div>
    </div>
  </FooterF>
);

export default Footer;