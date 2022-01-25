import React from 'react'
import logo from '../../assets/images/logo_web.png'

const Header = () => {


    return(
            <div className="padding">
            <nav className="menu">
                <a href="/"><img className="logo" src={logo} alt='FERABOGADOS' height='70' ></img> </a>
                <ul className="menu_items">
                    <li className="active"><a href="/inicio">inicio</a></li>
                    <li><a href='/acerca'>acerca</a></li>
                    <li><a href='/servicios'>servicios</a></li>
                    <li><a href='/contacto'>contactenos</a></li>
                    
                </ul>
            </nav>
            </div>
            
    )
}
export default Header
