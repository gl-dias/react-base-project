import React from "react";
import { Container } from "./Style";

    const Card = ( props ) => {
        return (
            
            <Container>
                <div id='cards'>
                    <h2 id='titulo'>{props.title}</h2>
                    <img id='img' src={props.img}></img>
                    <p id='text'>{props.text}</p>
                    <button> 
                        <a id='button'>{props.button}</a>
                    </button>
                </div>
            </Container>
        )
    }

export default Card