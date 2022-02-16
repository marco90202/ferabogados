import React from 'react'
import logo from '../../assets/images/logo_web.png'

const Footer = () => {


    return(
        <footer>
            <div className="pie">
                <nav className="menu_b">
                    <a href="/"><img className="logo" src={logo} alt='FERABOGADOS' height='70'></img> </a>
                    <p>Pie de página</p>
                    <p>Texto 1</p>
                    <p>Texto 2</p>
                    <p>Texto 3</p>
                    <p>Texto 4</p>
                    <p>Texto 5</p>

                </nav>
            </div>
        </footer>
    )
}
export default Footer