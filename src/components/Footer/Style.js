import styled from "styled-components";

const FooterF = styled.footer`
background-color: rgb(0, 37, 85);
height: 45px;
font-size: 23px;
position: fixed;
bottom: 0;
width: 100%;

#navegar {
    display: flex;
    justify-content: space-around;

}

#navegar a {
  color: white;
  text-decoration: none;
}

#navegar a:hover {
  color: var(--destaque);
}



`

export {FooterF}
