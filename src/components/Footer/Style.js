import styled from "styled-components";

const FooterF = styled.footer`
  background-color: rgb(9, 35, 128);
  font-size: 23px;
  position: relative; /* Alterado para 'relative' */
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column; /* Alterado para coluna */
  align-items: center; /* Centralizado */
  
  img {
    width: 50%; /* Tamanho da imagem ajustado para 50% */
  }

  .navegar {
    display: flex;
    flex-direction: column; /* Mantenha como coluna para alinhar verticalmente */
    align-items: center; /* Centralizado */
    margin-bottom: 20px; /* Espaçamento inferior */
  }

  .links {
    margin-top: 10px; /* Espaçamento entre a imagem e os links */
    padding: 0; /* Remover padding para evitar área clicável extra */
    font-size: 30px;
    display: flex; /* Usar flex para alinhar os links horizontalmente */
    justify-content: center; /* Centralizar os links */
  }

  .links a {
    color: white;
    text-decoration: none;
    padding: 0.5em 1em; /* Espaço vertical e horizontal para os links */
    margin: 0 10px; /* Espaçamento horizontal entre os links */
    display: inline-block; /* Faz com que a área clicável seja apenas o texto */
  }

  .links a:hover {
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

  .social-links {
    display: flex;
    gap: 40px; /* Espaço horizontal entre colunas */
    justify-content: center;
  }

  .social-column {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centralizado */
    margin: 10px 0; /* Espaçamento vertical entre colunas */
  }

  .social-column a {
    color: white; /* Todas as redes sociais em branco */
    text-decoration: none;
    padding: 0.5em 0; /* Espaço vertical aumentado */
    transition: color 0.3s ease;
    display: inline-block; /* Faz com que a área clicável seja apenas o texto */
  }

  .social-column a:hover {
    color: var(--destaque);
    transition: color 0.5s ease;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 10px 0;

    .navegar, 
    .social-container {
      align-items: center;
    }
  }

  @media (max-width: 425px) {
    font-size: 18px;
    padding: 5px 0;

    .links a,
    .social-column a {
      width: 100%;
      text-align: center;
      margin: 2px 0;
    }
  }
`;

export { FooterF };