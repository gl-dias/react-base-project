import styled from "styled-components";

const FooterF = styled.footer`
  background-color: rgb(9, 35, 128);
  font-size: 23px;
  position: static;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  #logo,
  #navegar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  #logo a img {
    width: 150px; 
    margin-bottom: 15px;
  }

  #navegar a {
    color: white;
    text-decoration: none;
    padding: 0.5em 0;
  }

  #navegar a:hover {
    color: var(--destaque);
    transition: color 0.5s ease;
  }

  .social-container {
    text-align: center;
  }

  .social-container h3 {
    color: white;
    margin-bottom: 10px;
  }

  #social {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  .social-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  #social a {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    padding: 0.3em 0;
    transition: color 0.3s ease;
  }

  #social a:hover {
    color: var(--destaque);
    transition: color 0.5s ease;
  }

  #social a svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 10px 0;
    flex-direction: column;
    align-items: center;

    #logo,
    #navegar,
    .social-container {
      align-items: center;
    }
  }

  @media (max-width: 425px) {
    font-size: 18px;
    padding: 5px 0;

    #navegar a,
    #social a {
      width: 100%;
      text-align: center;
      margin: 2px 0;
    }
  }
`;

export { FooterF };

