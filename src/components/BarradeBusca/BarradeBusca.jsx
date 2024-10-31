import React from "react";
import { BBusca } from "./Style";

const Busca = () => {
    <BBusca>
        <div className="divContainer">
            <input className="search"
                type= "text" 
                placeholder= "Digite aqui para buscar os projetos"
                onChange={ (e) => filtra(e.target)} />
        </div>
    </BBusca>
}

export default Busca;