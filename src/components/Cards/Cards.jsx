import React, { useState } from "react";
import Card from "../ProjectCard/ProjectCard";
import BarradeBusca from "../BarradeBusca/BarradeBusca";
import { Personalizacao } from "./Style";

function Projects() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    
    const filteredProjects = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
