import { Link } from 'react-router-dom';
import { FooterF } from "./Style";

const Footer = () => (
   <FooterF>
    <div id="navegar">
    <Link to= "/">Home</Link>
    <Link to="/sobrenos">Sobre Nós</Link>
    <Link to="/projetos">Projetos</Link>
    <Link to="/sobreprojetos">Sobre o Projeto</Link>
    </div>
   </FooterF>

)

export default Footer;