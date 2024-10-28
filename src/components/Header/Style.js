import styled from "styled-components"

const Top = styled.header`
  padding: .5em 2em;
  background-color: var(--background);
  display: flex;
  flex-direction: row;
  margin: 0;
  a {
    display: flex;
    vertical-align: baseline;
    text-align: center;
    padding: .3em;
    margin: 0 .7em;
    min-width: 5em;
    text-decoration: none;
    font-weight: bold;
    color: var(--primaria);
    text-transform: uppercase;
    &:hover{
      background-color: var(--destaque);
      color: var(--secundaria);
    }
  }
`

export {Top}
