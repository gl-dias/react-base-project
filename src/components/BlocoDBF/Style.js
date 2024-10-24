import styled from "styled-components";

const Container = styled.div`
    width: full;
    padding: 50px;
    height: min-content;
    background-color: rgb(0, 37, 85);
    border: 1px solid var(--primaria);
    
`;

const Titulo = styled.h3`
    text-decoration: wavy;
`;

const Texto = styled.p`
    padding: 0 .5em
`;

export {Container, Titulo, Texto}