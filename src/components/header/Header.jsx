import React from 'react' 
import logo from '../../assets/images/logo_web.png'

const Header = () => {


    return(
            <div >
            <nav className="menu">
                {/* <label className="logo">FERABOGADOS</label> */}
                <img className="logo" src={logo} alt='FERABOGADOS' height='70' ></img> 
                <ul className="menu_items">
                    <li className="active"><a href="#start">inicio</a></li>
                    <li><a href='#about'>acerca</a></li>
                    <li><a href='#services'>servicios</a></li>
                    <li><a href='#contact'>contactenos</a></li>
                </ul>
            </nav>
            </div>
            
    )
}
export default Header
