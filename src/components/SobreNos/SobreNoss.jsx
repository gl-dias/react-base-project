import { Sobre, Card, Container, Bloco } from "./Style";

const SobreAGente = () => (
    <Sobre>
        <Bloco>
            <h1>Sobre Nós</h1>
        </Bloco>
        <Container>
            <Card className="Guilherme">
                <h3>Guilherme Dias Batista</h3>
                <img src="imagens/gui.jpeg" alt="Foto de Guilherme Dias"/>
                <p>Matrícula: 202402972091</p>
                <p>Idade: 19 anos</p>
                <p>Período: 2º</p>
                <p>Curso: Ciência de Dados</p>
            </Card>

            <Card className="Arthur">
                <h3>Arthur Azeredo</h3>
                <img src="imagens/art.jpeg" alt="Foto de Arthur Azeredo"/>
                <p>Matrícula: 202402969331</p>
                <p>Idade: 19 anos</p>
                <p>Período: 2º</p>
                <p>Curso: Ciência de Dados</p>
            </Card>

            <Card className="Gabriel">
                <h3>Gabriel Brião</h3>
                <img src="imagens/gab.jpeg" alt="Foto de Gabriel Brião"/>
                <p>Matrícula: 202401667171</p>
                <p>Idade: 19 anos</p>
                <p>Período: 2º</p>
                <p>Curso: Ciência de Dados</p>
            </Card>

            <Card className="Juliana">
                <h3>Juliana de Oliveira</h3>
                <img src="imagens/juli.jpeg" alt="Foto de Juliana"/>
                <p>Matrícula: 202203947729</p>
                <p>Idade: 22 anos</p>
                <p>Período: 4º</p>
                <p>Curso: Engenharia da computação</p>
            </Card>

            <Card className="Raphael">
                <h3>Raphael de Oliveira</h3>
                <img src="imagens/raphael.png" alt="Foto de Raphael"/>
                <p>Matrícula: 202307164135</p>
                <p>Idade: 20 anos</p>
                <p>Período: 1º</p>
                <p>Curso: ADS</p>
            </Card>

            <Card className="Pedro">
                <h3>Pedro Quadrat</h3>
                <img src="imagens/pedro.png" alt="Foto de Pedro"/>
                <p>Matrícula: 202202640522</p>
                <p>Idade: 20 anos</p>
                <p>Período: 3º</p>
                <p>Curso: Ciência de Dados</p>
            </Card>

        </Container>
    </Sobre>
);

export default SobreAGente;
