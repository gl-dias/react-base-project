import { Container, Texto, Titulo } from "./Style";

const Bloco = (props) => (
    <Container>
        <Titulo>{props.titulo}</Titulo>
        <Texto>{props.texto}</Texto>
    </Container>
);

export default Bloco;