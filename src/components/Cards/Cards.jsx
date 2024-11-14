import React, { useState } from "react";
import Card from "../ProjectCard/ProjectCard";
import BarradeBusca from "../BarradeBusca/BarradeBusca";
import { Personalizacao } from "./Style";

// Importando a lista de projetos
const data = [
    {
        "id": 1,
        "title": "Biblioteca Digital",
        "description": "Plataforma centralizada para gerenciar livros digitais, permitindo aos usuários pegar emprestado, ler e devolver livros virtualmente.",
        "shortDescription": "Plataforma para gerenciar livros digitais, com[...]",
        "image": "",
        "members": "Sophia Mendes, João Silva",
        "date": "02/04/2023",
        "technologies": "React, Firebase"
    },
    {
        "id": 2,
        "title": "Rastreador Fitness Inteligente",
        "description": "Aplicativo de fitness que monitora a atividade física diária, calcula calorias queimadas e sugere treinos com base no progresso.",
        "shortDescription": "App que monitora atividade física e sugere[...]",
        "image": "",
        "members": "Lucas Almeida",
        "date": "15/06/2023",
        "technologies": "React Native, Node.js"
    },
    {
        "id": 3,
        "title": "Ferramenta Financeira Pessoal",
        "description": "Ferramenta para gerenciar finanças pessoais, permitindo aos usuários fazer orçamento, acompanhar despesas e analisar a saúde financeira.",
        "shortDescription": "Ferramenta para orçamento, acompanhamento de[...]",
        "image": "",
        "members": "Ana Nunes, Pedro Torres, Rita Souza",
        "date": "20/08/2023",
        "technologies": "Vue.js, PostgreSQL"
    },
    {
        "id": 4,
        "title": "Planejador de Eventos",
        "description": "App para organizar eventos com recursos para agendamento, gerenciamento de convidados e acompanhamento de atividades.",
        "shortDescription": "App para agendamento e gerenciamento de eventos[...]",
        "image": "",
        "members": "Beatriz Campos, Marcelo Gomes, Carla Oliveira",
        "date": "12/09/2023",
        "technologies": "Python, MongoDB, Angular"
    },
    {
        "id": 5,
        "title": "Rede de Receitas",
        "description": "Plataforma social onde os usuários podem compartilhar e descobrir receitas, com opções de avaliação e comentários.",
        "shortDescription": "Plataforma social para compartilhar e descobrir[...]",
        "image": "",
        "members": "Gabriela Costa",
        "date": "10/10/2023",
        "technologies": "Django, Bootstrap"
    },
    {
        "id": 6,
        "title": "Amigo de Aprendizado de Idiomas",
        "description": "Aplicativo interativo que auxilia os usuários na aprendizagem de idiomas com lições, quizzes e prática de conversação ao vivo.",
        "shortDescription": "App para aprendizado interativo de idiomas[...]",
        "image": "",
        "members": "Tiago Fernandes, Clara Martins",
        "date": "24/11/2023",
        "technologies": "Express, Vue.js"
    },
    {
        "id": 7,
        "title": "Compras Sustentáveis",
        "description": "App de e-commerce focado em produtos ecológicos, com um rastreador de pegada de carbono para cada item.",
        "shortDescription": "App de e-commerce para produtos ecológicos[...]",
        "image": "",
        "members": "André Ribeiro, Paula Santos",
        "date": "05/07/2023",
        "technologies": "PHP, MySQL"
    },
    {
        "id": 8,
        "title": "Grupo de Estudo Online",
        "description": "Plataforma onde os alunos podem entrar em grupos de estudo, agendar sessões em grupo e compartilhar recursos.",
        "shortDescription": "Plataforma para entrar e organizar grupos de[...]",
        "image": "",
        "members": "Renata Melo, Lucas Silva, Marina Costa",
        "date": "18/10/2023",
        "technologies": "Node.js, MongoDB"
    },
    {
        "id": 9,
        "title": "Buscador de Imóveis",
        "description": "Plataforma de imóveis para navegar e comparar propriedades, com opções de filtragem por localização e preço.",
        "shortDescription": "Plataforma para navegar e comparar imóveis[...]",
        "image": "",
        "members": "Bruno Oliveira",
        "date": "12/09/2023",
        "technologies": "Laravel, PostgreSQL, Vue.js"
    },
    {
        "id": 10,
        "title": "Rastreador de Saúde Mental",
        "description": "Aplicativo móvel que rastreia o humor e o bem-estar mental, oferecendo reflexões diárias e recursos de apoio.",
        "shortDescription": "App para rastrear humor e bem-estar mental[...]",
        "image": "",
        "members": "Fernanda Souza",
        "date": "30/10/2023",
        "technologies": "React Native, Firebase"
    },
    {
        "id": 11,
        "title": "Controle de Casa Inteligente",
        "description": "App de IoT para controlar dispositivos domésticos inteligentes, permitindo aos usuários gerenciar luzes, fechaduras e configurações de segurança remotamente.",
        "shortDescription": "App para controlar dispositivos domésticos[...]",
        "image": "",
        "members": "Ricardo Lopes, Amanda Silva",
        "date": "03/06/2022",
        "technologies": "MQTT, Python, JavaScript"
    },
    {
        "id": 12,
        "title": "Lousa Colaborativa",
        "description": "Lousa digital para colaboração remota, com suporte para desenhos, anotações e compartilhamento em tempo real.",
        "shortDescription": "Lousa digital para trabalho colaborativo[...]",
        "image": "",
        "members": "Mariana Lopes, Thiago Ferreira",
        "date": "25/11/2023",
        "technologies": "Node.js, Express, React"
    },
    {
        "id": 13,
        "title": "Rastreador de Cuidados com Pets",
        "description": "Aplicativo móvel que auxilia donos de pets com horários de alimentação, consultas veterinárias e acompanhamento da saúde.",
        "shortDescription": "App para cuidado e acompanhamento de saúde de[...]",
        "image": "",
        "members": "Gabriel Souza, Livia Mendes",
        "date": "16/11/2023",
        "technologies": "Flutter, Firebase"
    },
    {
        "id": 14,
        "title": "Definidor de Metas Diárias",
        "description": "Aplicativo de produtividade que permite aos usuários definir, acompanhar e alcançar metas pessoais e profissionais.",
        "shortDescription": "App de produtividade para definição de metas[...]",
        "image": "",
        "members": "Marcelo Tavares",
        "date": "23/04/2021",
        "technologies": "Python, Vue.js"
    },
    {
        "id": 15,
        "title": "Portfólio Digital",
        "description": "Plataforma onde os usuários podem criar portfólios pessoais exibindo projetos, habilidades e experiências.",
        "shortDescription": "Plataforma para criar portfólios pessoais[...]",
        "image": "",
        "members": "Eduarda Lima",
        "date": "04/01/2024",
        "technologies": "React, Node.js"
    },
    {
        "id": 16,
        "title": "Portal de Trabalho Remoto",
        "description": "Plataforma de empregos focada em trabalho remoto, com filtros para tipo de emprego, empresa e preferências de localização.",
        "shortDescription": "Plataforma para encontrar empregos remotos[...]",
        "image": "",
        "members": "Rafael Borges, Júlia Marques",
        "date": "15/03/2024",
        "technologies": "Ruby on Rails, PostgreSQL"
    },
    {
        "id": 17,
        "title": "Guia de Treino em Casa",
        "description": "App com treinos guiados para casa, tutoriais de exercícios e acompanhamento de progresso para entusiastas de fitness.",
        "shortDescription": "App com treinos guiados e acompanhamento[...]",
        "image": "",
        "members": "Carla Ribeiro",
        "date": "22/07/2023",
        "technologies": "Flutter"
    },
    {
        "id": 18,
        "title": "Conexão Freelancer",
        "description": "Plataforma que conecta freelancers com clientes, permitindo postagem de projetos, lances e acompanhamento de trabalho.",
        "shortDescription": "Plataforma que conecta freelancers com clientes[...]",
        "image": "",
        "members": "Vitor Amaral",
        "date": "08/12/2023",
        "technologies": "Stripe API, MongoDB"
    },
    {
        "id": 19,
        "title": "App de Meditação Diária",
        "description": "Aplicativo de meditação com sessões guiadas, desafios de mindfulness e acompanhamento de progresso.",
        "shortDescription": "App com meditação guiada e mindfulness[...]",
        "image": "",
        "members": "Teresa Rodrigues, Roberto Souza",
        "date": "19/01/2024",
        "technologies": "React Native, AWS"
    },
    {
        "id": 20,
        "title": "Rede de Fotografia",
        "description": "Plataforma social para fotógrafos compartilharem, discutirem e exibirem seu trabalho.",
        "shortDescription": "Plataforma para fotógrafos exibirem e discutirem[...]",
        "image": "",
        "members": "Eduardo Pereira",
        "date": "05/02/2024",
        "technologies": "JavaScript, Firebase"
    },
    {
        "id": 21,
        "title": "Planner de Tarefas",
        "description": "Aplicativo de produtividade para organizar tarefas diárias e listas de afazeres, com lembretes e acompanhamento de progresso.",
        "shortDescription": "App para organizar tarefas e listas de afazeres[...]",
        "image": "",
        "members": "Mariana Rocha, Felipe Santos",
        "date": "12/02/2024",
        "technologies": "React, MongoDB"
    },
    {
        "id": 22,
        "title": "Rede de Doações",
        "description": "Plataforma para conectar doadores e ONGs, permitindo cadastro e busca de campanhas de doação por região.",
        "shortDescription": "Conexão entre doadores e ONGs[...]",
        "image": "",
        "members": "Gabriel Lima, Carolina Oliveira",
        "date": "28/03/2023",
        "technologies": "Laravel, Vue.js"
    },
    {
        "id": 23,
        "title": "Companheiro de Estudo",
        "description": "Aplicativo que auxilia estudantes com um banco de questões, simulados e sugestões de estudo baseado no desempenho.",
        "shortDescription": "App com banco de questões e simulados[...]",
        "image": "",
        "members": "Lucas Martins",
        "date": "15/06/2023",
        "technologies": "Flutter, Firebase"
    },
    {
        "id": 24,
        "title": "Controle de Finanças Pessoais",
        "description": "Ferramenta que ajuda usuários a controlar receitas e despesas, com gráficos e relatórios para análise financeira.",
        "shortDescription": "Ferramenta para controle de receitas e despesas[...]",
        "image": "",
        "members": "Isabela Castro, Bruno Oliveira",
        "date": "05/08/2023",
        "technologies": "Node.js, PostgreSQL"
    },
    {
        "id": 25,
        "title": "Guia de Viagens",
        "description": "Aplicativo para planejar viagens, com sugestões de itinerários, reservas e recomendações de atividades locais.",
        "shortDescription": "Planejamento de viagens e sugestões de itinerários[...]",
        "image": "",
        "members": "Fernanda Duarte, Marcelo Cardoso",
        "date": "22/11/2023",
        "technologies": "Express, MongoDB"
    }    
]

function Projects() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const filteredProjects = data.filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        const membersMatch = item.members.toLowerCase().includes(searchTerm.toLowerCase());
        return titleMatch || membersMatch; // Filtra por título ou membros
    });

    return (
        <>
            <BarradeBusca onSearch={handleSearch} />  
            <Personalizacao> 
                {filteredProjects.map((item) => (
                    <Card key={item.id} 
                        title={item.title} 
                        text={item.technologies} 
                        img={item.image} 
                        button="Saiba mais"
                        id={item.id} />
                ))}
            </Personalizacao>
        </>
    );
}

export default Projects;
