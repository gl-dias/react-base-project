import React from "react";
import Card from "../ProjectCard/ProjectCard";
import { Personalizacao } from "./Style";

function Projects() {
    const listc = [
        {title: "Projeto de ...", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain"},
        {title: "Projeto de ...", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain"},
        {title: "Projeto de ...", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain"},
        {title: "Projeto de ...", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain"},
        {title: "Projeto de ...", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain"},
        {title: "Projeto de ...", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain"},
        {title: "Projeto de ...", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain"},
        {title: "Projeto de ...", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain"},
        ]

    return (
        <Personalizacao> 
            {listc.map((item, index) => (
                <Card key={index} 
                title={item.title} 
                text={item.text} 
                img={item.img} 
                botom={item.botom} />
            ))}
        </Personalizacao>
    )
}

export default Projects;