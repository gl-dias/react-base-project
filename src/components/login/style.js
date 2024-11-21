import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;  /* Ajuste para não ocupar toda a altura da tela */
  padding-top: 20px; /* Deixe o espaço para o menu fixo */
  background-color: var(--background);  /* Cor de fundo da página */
  background-color: #021859;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Para distribuir o espaço entre os campos e o botão */
  padding: 4em;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 30%;  /* O formulário ocupa 80% da largura da tela */
  max-width: 100%;
  min-width: 30%;
  height: auto;  /* Ajuste a altura conforme o conteúdo */
  text-align: left; /* Alinha os textos à esquerda */

  input {
    padding: 0.8em;
    margin: 1em 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    width: 100%;
  }

  button {
    padding: 0.8em;
    background-color: var(--primaria);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    align-self: flex-end;  /* Alinha o botão à direita */

    &:hover {
      background-color: var(--secundaria);
    }
  }

  h2 {
    text-align: center;
    margin-bottom: 1em;
  }
`;

export { LoginContainer, LoginForm };
