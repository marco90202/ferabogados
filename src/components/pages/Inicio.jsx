import React from "react"
import Header from "../header/Header"

const Inicio = () => {


    return(
        <div className="inicio">
            <Header></Header>
            <div className='cuerpo-all'>
                <h1>Ferabogados Gestion Publica y Empresarial</h1>
                <img src= 'https://i.pinimg.com/474x/bd/b6/8f/bdb68fa3091500b3249bbb37a2faf56e.jpg' alt='derecho-logo'/>
                <div className='text'>
                <h2>QUIENES SOMOS</h2>
                <p>Somos una entidad educativa que desde el año 2020 asiste conﬁdencial y eﬁcientemente al público en general, estudiantes, empresas en su educación, capacitación, expansión y desarrollo a nivel local y regional, siendo nuestra visión ser líderes en servicios de capacitación empresarial y profesional.
Una de nuestras metas es la promoción de la excelencia e innovación de los procesos de gestión y programas de capacitación, para así lograr ser socios estratégicos.</p>
                    <h2>MISION</h2>
                        <p>Formar profesionales, a nivel de especialidad, líderes íntegros e innovadores con visión global y con sentido crítico basados en los principales valores que contribuyan al bienestar en las organizaciones y la sociedad.</p>
                            <br></br>
                    <h2>VISION</h2>
                        <p>Ser al 2025 la mejor institución educativas autorizado por el Ministerio de Educación en brindar las más altas competencias profesionales promoviendo el desarrollo integral en la transformación del Perú.</p>
                </div>
            </div>
        </div>
        
    )
}
export default Inicio