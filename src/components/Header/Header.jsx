import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Top } from "./Style";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState(""); //controle da mudança de estado na barra de pesquisa
  const navigate = useNavigate();

  const handleSearch = () => { /* Essa função remove os espaços em branco do inicio e fim da string e encaminha a pesquisa para uma rota*/
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`); /*rota de busca */
    }
  };

  const handleKeyPress = (event) => { /*define ENTER como acesso a função handleSearch() */
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
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
      <Link to="/">Home</Link>
      <Link to="/projetos">Sobre nós</Link>

      {window.sessionStorage.getItem("accessToken") ? (
        <Link to="/logout">Logout</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}

      <div className="search-container">
        <input className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <IoSearch className="search-icon" onClick={handleSearch}/> {/*onClik pra lupa dentro da caixa de pesquisa encaminha a pesquisa para a rota da função*/}
      </div>
    </Top>
  );
};

export default Header;
