import styled from "styled-components";

const FooterF = styled.footer`
  background-color: rgb(0, 37, 85);
  height: 45px;
  font-size: 23px;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;

  #navegar {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  #navegar a {
    color: white;
    text-decoration: none;
    padding: 0.5em;
  }

  #navegar a:hover {
    color: var(--destaque);
  }

  @media (max-width: 768px) {
    font-size: 20px; 
    height: auto; 
    padding: 10px 0; 

    #navegar {
      justify-content: center; 
    }

    #navegar a {
      margin: 5px; 
    }
  }

  @media (max-width: 425px) {
    font-size: 18px; 
    padding: 5px 0; 

    #navegar {
      flex-direction: column; 
      align-items: center; 
    }

    #navegar a {
      width: 100%; 
      text-align: center; 
      margin: 2px 0; 
    }
  }
`;

export { FooterF };

