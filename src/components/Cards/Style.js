import styled from "styled-components";

const Personalizacao = styled.div`
  margin-left: 85px;
  margin-right: 85px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 15px;
  gap: 5px 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }

  @media (max-width: 490px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }
`;

export { Personalizacao };