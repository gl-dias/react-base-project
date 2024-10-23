import { Link } from 'react-router-dom';
import { FooterF } from "./Style";

const Footer = () => (
   <FooterF>
      <div id="navegar">
         <Link to= "/">Home</Link>
         <Link to="/sobrenos">Sobre Nós</Link>
         <Link to="/projetos">Projetos</Link>
      </div>
   </FooterF>
)

export default Footer;