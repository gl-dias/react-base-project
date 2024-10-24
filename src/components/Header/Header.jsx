import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <a href="https://www.ibmec.br" id="logo">
      <img src="https://blog.ibmec.br/wp-content/uploads/2021/04/Ibmec.png" width={96.14} height={30} alt="Logo da ibmec" class="logo" />
    </a>
    <Link to="/">Home</Link>
    <Link to="/projetos">Sobre nós</Link>
    
    { window.sessionStorage.getItem('accessToken')
    ? <Link to="/logout">Logout</Link>
    : <Link to="/login">Login</Link>
    }
    
  </Top>
)

export default Header;
