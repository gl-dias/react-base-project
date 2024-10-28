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
    color: rgb(18, 18, 18);
    font-family: Krub, sans-serif;
    font-size: 22px;   
  }
  
  button {
    padding: 10px 20px;
    background: #F5AC00;
    border: none;
    border-radius: 5px;
    margin-left: auto;
  }
   
 text {
    padding: 0 .5em;
    
    font-size: 14px;
  }
 
 img {
    height: 150px;
  }

`;

export {Container};