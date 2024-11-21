import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <div className="logoIbmec">
      <a href="https://www.ibmec.br">
        <img
          src="https://blog.ibmec.br/wp-content/uploads/2021/04/Ibmec.png"
          width={96.14}
          height={30}
          alt="Logo da ibmec"
          id="logo"
        />
      </a>
    </div>
    <Link to="/">Projetos</Link>
    <Link to="/sobrenos">Sobre Nós</Link>
    <Link to="/faleconosco">Fale Conosco</Link>

    {/* Link de login ou logout no lado direito */}
    <Link to={window.sessionStorage.getItem('accessToken') ? "/logout" : "/login"} style={{ marginLeft: "auto" }}>
      {window.sessionStorage.getItem('accessToken') ? "Logout" : "Login"}
    </Link>
  </Top>
);

export default Header;
