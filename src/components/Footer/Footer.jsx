import { Link } from 'react-router-dom';
import { FooterF } from "./Style";

const Footer = () => (
  <FooterF>
    <div className="navegar">
      <a href="https://www.ibmec.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://intersectorparceiraibmec.com/wp-content/uploads/2023/03/IBMEC-BRAANCO-1024x455.png"
          alt="Logo IBMEC"
        />
      </a>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/sobrenos">Sobre Nós</Link>
        <Link to="/projetos">Projetos</Link>
      </div>
    </div>

    <div className="social-container">
      <h3>Redes Sociais</h3>
      <div className="social-links">
        <div className="social-column">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
        <div className="social-column">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i> TikTok
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i> YouTube
          </a>
        </div>
      </div>
    </div>
  </FooterF>
);

export default Footer;