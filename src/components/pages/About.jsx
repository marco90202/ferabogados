import React from "react";
import Card from "../organisms/Card"
import Header from "../header/Header"

const About = () => {

return (
        <div>
        <Header></Header>
        <div className= "cardflip">
            <Card 
            texto_titulo={'CURSO TALLER'} 
            titulo_contenido={'RECURSOS HUMANOS'}
            palabras_español={"Curso taller de recursos humanos"}
            imagen={"https://www.udima.es/sites/udima.es/themes/udima/images/areas/derecho.jpg"}
            ></Card>
            <Card 
            texto_titulo={'CURSO TALLER'} 
            titulo_contenido={'MATEMATICAS'}
            palabras_español={"Curso taller de matematicas"}
            imagen={"https://polemos.pe/wp-content/uploads/2020/03/ausencia-derecho-civil-mallete-balanza-1024x530.jpg"}
            ></Card>
              <Card 
            texto_titulo={'CURSO TALLER'} 
            titulo_contenido={'AUDITORIA'}
            palabras_español={"Curso taller de auditoria"}
            imagen={"https://columnadigital.com/wp-content/uploads/2022/01/ciencia-derecho.jpg"}
            ></Card>
        </div>
         <div className= "cardflip">
            <Card 
            texto_titulo={'CURSO TALLER'} 
            titulo_contenido={'RECURSOS HUMANOS'}
            palabras_español={"Curso taller de recursos humanos"}
            imagen={"https://www.udima.es/sites/udima.es/themes/udima/images/areas/derecho.jpg"}
            ></Card>
            <Card 
            texto_titulo={'CURSO TALLER'} 
            titulo_contenido={'MATEMATICAS'}
            palabras_español={"Curso taller de matematicas"}
            imagen={"https://polemos.pe/wp-content/uploads/2020/03/ausencia-derecho-civil-mallete-balanza-1024x530.jpg"}
            ></Card>
              <Card 
            texto_titulo={'CURSO TALLER'} 
            titulo_contenido={'AUDITORIA'}
            palabras_español={"Curso taller de auditoria"}
            imagen={"https://columnadigital.com/wp-content/uploads/2022/01/ciencia-derecho.jpg"}
            ></Card>
        </div>                           
             
                
                    
                        
        </div>
        )
}
export default About
