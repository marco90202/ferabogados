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
            imagen={"https://www.culcobcs.com/wp-content/uploads/2019/04/derecho-justicia.jpg"}
            ></Card>
        </div>
         <div className= "cardflip">
            <Card 
            texto_titulo={'CURSO TALLER'} 
            titulo_contenido={'DERECHO LABORAL'}
            palabras_español={"Curso taller derecho laboral"}
            imagen={"https://image.freepik.com/vector-gratis/grafico-derecho-justicia-legal_24877-52556.jpg"}
            ></Card>
            <Card 
            texto_titulo={'CURSO TALLER'} 
            titulo_contenido={'REDACCION JURIDICA'}
            palabras_español={"Curso taller redaccion juridica"}
            imagen={"https://www.gustavomirabal.es/wp-content/uploads/2019/09/derechoyjusticia.jpg"}
            ></Card>
              <Card 
            texto_titulo={'CURSO TALLER'} 
            titulo_contenido={'DERECHO ADMINISTRATIVO'}
            palabras_español={"Curso taller derecho administrativo"}
            imagen={"https://thumbs.dreamstime.com/b/concepto-de-derecho-y-justicia-ley-con-%C3%ADconos-planos-escala-juez-gavel-lady-justice-libros-leyes-ilustraci%C3%B3n-vectorial-aislada-164217298.jpg"} 
            ></Card>
        </div>                           
             
                
                    
                        
        </div>
        )
}
export default About
