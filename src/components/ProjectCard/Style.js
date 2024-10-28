import styled from "styled-components";

const Container = styled.div`
  width: 17.5em;
  height: 22.5em;
  border: 2px solid var(--detalhe);
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
  

  titulo {
    padding: 0.5em; 
  }
  
  button {
    padding: 16px 24px;
    background: #F5AC00;
    border: none;
    border-radius: 5px;
    margin-left: auto;
  }
   
 text {
    padding: 0 .5em;
  }
 
 img {
    height: 150px;
  }

`;

export {Container};