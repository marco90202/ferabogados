import React from "react";
import Card from "../organisms/Card"
import Header from "../header/Header"

const About = () => {

return (
        <div>
        <Header></Header>
        <Card
            texto_titulo={"Titulo del card"}
            titulo_contenido={'Este es el subtitulo'}
            palabras_español={"este es contenido"}
            ></Card>
                
                    
                        
        </div>
        )
}
export default About
