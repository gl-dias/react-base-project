import React from "react";
import Card from "../ProjectCard/ProjectCard";
import { Personalizacao } from "./Style";

function Projects() {
    const listc = [
        {id: 1, title: "Projeto de ...", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain", button: "Saiba mais"},
        {id: 2, title: "Projeto de ...", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain", button: "Saiba mais"},
        {id: 3, title: "Projeto de ...", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain", button: "Saiba mais"},
        {id: 4, title: "Projeto de ...", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain", button: "Saiba mais"},
        {id: 5, title: "Projeto de ...", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain", button: "Saiba mais"},
        {id: 6, title: "Projeto de ...", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain", button: "Saiba mais"},
        {id: 7, title: "Projeto de ...", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain", button: "Saiba mais"},
        {id: 8, title: "Projeto de ...", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain", button: "Saiba mais"},
        ]

    return (
        <Personalizacao> 
            {listc.map((item, index) => (
                <Card key={index} 
                title={item.title} 
                text={item.text} 
                img={item.img} 
                button={item.button} />
            ))}
        </Personalizacao>
    )
}

export default Projects;