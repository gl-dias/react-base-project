import React from "react";
import { useParams } from "react-router-dom";
import Base from "./Base";
import Bloco from "../components/BlocoDBF/Bloco";

function Detalhamento() {
    const { id } = useParams();

  
    return (
    <Base>
        <Bloco />
        <div>
            <h1>Detalhes do Projeto</h1>
            <p>ID do Projeto: {id}</p>
            {}
        </div>
    </Base>
    );
  }
  
  export default Detalhamento;