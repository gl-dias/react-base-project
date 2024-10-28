import React from "react";
import { Container } from "./Style";

    const Card = ( props ) => {
        return (
            
            <Container>
                <div id='cards'>
                    <h2 id='titulo'>{props.title}</h2>
                    <img src={props.img} id='img'></img>
                    <p id='text'>{props.text}</p>
                    <button> 
                        <a id='botom'>{props.botom}</a>
                    </button>
                </div>
            </Container>
        )
    }

export default Card