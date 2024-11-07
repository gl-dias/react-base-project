import React, { useState } from "react";
import Card from "../ProjectCard/ProjectCard";
import BarradeBusca from "../BarradeBusca/BarradeBusca";
import { Personalizacao } from "./Style";

function Projects() {
    const listc = [
       {id: 1, title: "projameman", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain", button: "Saiba mais"},
        {id: 2, title: "projan", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain", button: "Saiba mais"},
        {id: 3, title: "projen", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain", button: "Saiba mais"},
        {id: 4, title: "projeco", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain", button: "Saiba mais"},
        {id: 5, title: "projeção", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain", button: "Saiba mais"},
        {id: 6, title: "projétil", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain", button: "Saiba mais"},
        {id: 7, title: "projetão", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain", button: "Saiba mais"},
        {id: 8, title: "projetinho", text: "Tecnologias",img: "https://th.bing.com/th/id/OIP._3VD-QKKpNBXTTi6cSsAqQHaE8?rs=1&pid=ImgDetMain", button: "Saiba mais"},
        ];

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const filteredProjects = listc.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <BarradeBusca onSearch={handleSearch} />  {}
            <Personalizacao> 
                {filteredProjects.map((item) => (
                    <Card key={item.id} 
                        title={item.title} 
                        text={item.text} 
                        img={item.img} 
                        button={item.button}
                        id={item.id} />
                ))}
            </Personalizacao>
        </>
    );
}

export default Projects;
