import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
      <div className="logoIbmec">
        <a href="https://www.ibmec.br">
          <img src="https://blog.ibmec.br/wp-content/uploads/2021/04/Ibmec.png" width={96.14} height={30} alt="Logo da ibmec" id="logo" />
        </a>
      </div>
    <Link to="/">Projetos</Link>
    <Link to="/projetos">Sobre nós</Link>
    
    { window.sessionStorage.getItem('accessToken')
    ? <Link to="/logout">Logout</Link>
    : <Link to="/login">Login</Link>
    }
    
  </Top>
)

export default Header;
