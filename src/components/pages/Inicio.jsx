import React from "react"
import Header from "../header/Header"

const Inicio = () => {


    return(
       
        <div className="inicio">
                     <div className="slider">
         <ul>
             <li>
                 <img src="assets/images/img1.jpg" alt=''/>
             </li>
             <li>
                 <img src="assets/images/img2.jpg" alt=''/>
             </li>
             <li>
                 <img src="assets/images/img3.jpg" alt=''/>
             </li>
             <li>
                 <img src="assets/images/img4.jpg" alt=''/>
             </li>
         </ul>
     </div>
           <Header></Header>
           <div className='cuerpo-all'>
                <h1>Ferabogados Gestion Publica y Empresarial</h1>
                <p>El ICJ es un Instituto de Educación Superior Tecnológico “ICJ Gestión Pública y Empresarial”, autorizado mediante Resolución Ministerial 451 -2016 – MINEDU que brinda programas de estudios profesionales técnicas y programas de formación continua que la sociedad requiera en el ámbito jurídico y empresarial.</p>
                <div className="cartel">
                <img src= 'https://i.pinimg.com/474x/bd/b6/8f/bdb68fa3091500b3249bbb37a2faf56e.jpg' alt='derecho-logo'/>
                </div>
                <div className='text'>
                    <h2>MISION</h2>
                        <p>Formar profesionales, a nivel de especialidad, líderes íntegros e innovadores con visión global y con sentido crítico basados en los principales valores que contribuyan al bienestar en las organizaciones y la sociedad.</p>
                            <br></br>
                    <h2>VISION</h2>
                        <p>Ser al 2024 la mejor institución educativas autorizado por el Ministerio de Educación en brindar las más altas competencias profesionales promoviendo el desarrollo integral en la transformación del Perú.</p>
                </div>
            </div> 
        </div>

        
    )
}
export default Inicio