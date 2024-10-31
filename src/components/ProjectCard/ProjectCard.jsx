import React from "react";
import { Container } from "./Style";

    const Card = ( props ) => {
        return (
            
            <Container>
                <div id='cards'>
                    <h2 id='titulo'>{props.title}</h2>
                    <img id='img' src={props.img}></img>
                    <p id='text'>{props.text}</p>
                    <a href={`./#/detalhamento/${props.id}`} id='button'>
                    <button> 
                        {props.button}
                    </button>
                    </a>
                </div>
            </Container>
        )
    }

export default Card