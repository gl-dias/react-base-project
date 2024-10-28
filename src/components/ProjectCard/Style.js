import styled from "styled-components";

const Container = styled.div`
  width: 18em;
  height: 13em;
  border: 1px black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background);

  title {
    padding: 0.5em;    
  }
  
 botom {
    height: 20px;
    width: 80px;
    background: #F5AC00;
    border-radius: 5px;
    margin-left: auto;
  }
   
 text {
    padding: 0 .5em;
  }
 
 img {
    height: 125px;
  }

`;

export {Container};