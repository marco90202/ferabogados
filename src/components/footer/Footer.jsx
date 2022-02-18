import React from 'react'
import logo from '../../assets/images/logo_web.png'

const Footer = () => {


    return(
        <footer>
            <div className="pie">
            <nav className="pie_item">
                    <aside><a href="/"><img className="logo" src={logo} alt='FERABOGADOS' height='70'></img></a><br /><hr />
                    <br />
                    <ul>
                        <li>Sector II Grupo I. Mz C Lt 19</li>
                        <br />
                        <a href='mailto:dialogolaboralperu@gmail.com'><li>dialogolaboralperu@gmail.com</li></a><br />
                        <a href='tel:015554444'><li>(01) 555-4444</li></a>
                    </ul>
                    </aside>
                </nav>
                <nav className='pie_item2'>
                    <h5>ENVÍE SUS CONSULTAS</h5>
                    <ul>
                    <p>En este espacio usted puede hacer una consulta administrativa, técnica o académica. Usted puede preguntar al tutor, docente , área de certificados, ventas e incluso al director del instituto.</p>
                    <button class="btn_footer">CONSULTE AQUI</button>
                    </ul>
                </nav>
                <nav className='pie_item3'>
                    <h5>ENLACES IMPORTANTES</h5>
                    <ul>
                    <a href="/inicio"><li>INICIO</li></a>
                    <a href='/nosotros'><li>NOSOTROS</li></a>
                    <a href='/servicios'><li>SERVICIOS</li></a>
                    <a href=" /eventos"><li>EVENTOS</li></a>
                    <a href='/contacto'><li>CONTÁCTENOS</li></a>
                    </ul>
                </nav>

            </div>
        </footer>
    )
}
export default Footer